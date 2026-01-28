import 'server-only'

import { promises as fs } from 'fs'
import type { Dirent } from 'fs'
import path from 'path'

export type Project = {
  slug?: string
  title: string
  year: string
  category: string
  location: string
  participants: string
  description: string
  fullDescription: string
  objectives: string[]
  results: string[]
  images: string[]
  partners: string[]
}

type Locale = 'mk' | 'en'

const CONTENT_PROJECTS_DIR = path.join(process.cwd(), 'content', 'projects')
const PUBLIC_DIR = path.join(process.cwd(), 'public')

function projectJsonPath(slug: string, locale: Locale) {
  return path.join(CONTENT_PROJECTS_DIR, slug, `project.${locale}.json`)
}

async function fileExists(filePath: string) {
  try {
    await fs.access(filePath)
    return true
  } catch {
    return false
  }
}

function publicProjectMediaDirs(slug: string) {
  // Support both:
  // - public/projects/<slug>/...
  // - public/<slug>/... (current convention used in repo)
  //
  // Important: return the URL that matches the folder we found files in.
  return [
    { fsDir: path.join(PUBLIC_DIR, slug), urlBase: `/${slug}` },
    { fsDir: path.join(PUBLIC_DIR, 'projects', slug), urlBase: `/projects/${slug}` },
  ]
}

async function discoverProjectImages(slug: string): Promise<string[]> {
  // Convention-based discovery for common filenames.
  const numbered = Array.from({ length: 6 }, (_, i) => String(i + 1).padStart(2, '0'))
  const baseNames = ['cover', ...numbered]
  const exts = ['.jpg', '.jpeg', '.png', '.webp']

  const dirs = publicProjectMediaDirs(slug)
  const results: string[] = []

  for (const base of baseNames) {
    let found: string | null = null
    let foundUrlBase: string | null = null
    for (const ext of exts) {
      const filename = `${base}${ext}`
      for (const dir of dirs) {
        if (await fileExists(path.join(dir.fsDir, filename))) {
          found = filename
          foundUrlBase = dir.urlBase
          break
        }
      }
      if (found) break
    }
    if (found && foundUrlBase) results.push(`${foundUrlBase}/${found}`)
  }

  return results
}

function imageKey(url: string) {
  const parts = url.split('?')[0]?.split('#')[0]?.split('/') ?? []
  return parts[parts.length - 1] ?? url
}

function mergeImagesPreferJson(jsonImages: unknown, discovered: string[]): string[] {
  const fromJson = Array.isArray(jsonImages) ? (jsonImages.filter((x) => typeof x === 'string') as string[]) : []
  if (fromJson.length === 0) return discovered

  const discoveredByKey = new Map<string, string>()
  for (const img of discovered) {
    const key = imageKey(img)
    if (!discoveredByKey.has(key)) discoveredByKey.set(key, img)
  }

  const merged = fromJson.map((img) => {
    const key = imageKey(img)
    const discoveredUrl = discoveredByKey.get(key)
    const jsonIsProjects = img.startsWith('/projects/')
    const discoveredIsProjects = discoveredUrl?.startsWith('/projects/')

    // If JSON points to `/projects/...` but the file actually exists at `/<slug>/...`
    // (or vice-versa), replace the JSON URL with the discovered one while keeping
    // JSON ordering.
    if (discoveredUrl && jsonIsProjects !== discoveredIsProjects) return discoveredUrl

    return img
  })

  const keys = new Set(merged.map(imageKey))

  for (const img of discovered) {
    const key = imageKey(img)
    if (!keys.has(key)) {
      keys.add(key)
      merged.push(img)
    }
  }

  return merged
}

export async function getProjectSlugs(locale: Locale): Promise<string[]> {
  let entries: Dirent[]
  try {
    // Force string dirent names (avoid Node's buffer overload leaking into types).
    entries = await fs.readdir(CONTENT_PROJECTS_DIR, { withFileTypes: true, encoding: 'utf8' })
  } catch {
    return []
  }

  const dirs = entries.filter((e) => e.isDirectory()).map((e) => e.name)

  const checks = await Promise.all(
    dirs.map(async (slug) => {
      const exists = await fileExists(projectJsonPath(slug, locale))
      return exists ? slug : null
    }),
  )

  return checks.filter((x): x is string => x !== null).sort()
}

export async function getProjectBySlug(slug: string, locale: Locale): Promise<Project | null> {
  const filePath = projectJsonPath(slug, locale)
  if (!(await fileExists(filePath))) return null

  const raw = await fs.readFile(filePath, 'utf8')
  const parsed = JSON.parse(raw) as Project

  const discoveredImages = await discoverProjectImages(slug)
  const images = mergeImagesPreferJson((parsed as Project).images, discoveredImages)

  // Ensure slug always exists for consumers (even if omitted in JSON)
  return { slug, ...parsed, images }
}

export async function getAllProjects(locale: Locale): Promise<Project[]> {
  const slugs = await getProjectSlugs(locale)
  const projects = await Promise.all(slugs.map((slug) => getProjectBySlug(slug, locale)))
  return projects.filter((p): p is Project => Boolean(p))
}

