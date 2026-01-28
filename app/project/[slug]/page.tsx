import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Calendar, Tag, Users, MapPin } from 'lucide-react'
import { getProjectBySlug, getProjectSlugs } from '@/app/_content/projects'
import path from 'node:path'
import { access } from 'node:fs/promises'

interface ProjectPageProps {
  params: Promise<{
    slug: string
  }>
}

async function fileExists(absPath: string): Promise<boolean> {
  try {
    await access(absPath)
    return true
  } catch {
    return false
  }
}

async function getProjectImagesFromPublic(slug: string): Promise<{ cover?: string; gallery: string[] }> {
  // Support both:
  // - public/<slug>/cover.jpg, 01.jpg..06.jpg (current convention used in repo)
  // - public/projects/<slug>/... (older convention)
  const candidateDirs = [slug, path.posix.join('projects', slug)]

  for (const relDir of candidateDirs) {
    const fsDir = path.join(process.cwd(), 'public', relDir)

    const coverFsPath = path.join(fsDir, 'cover.jpg')
    const coverExists = await fileExists(coverFsPath)

    const galleryChecks = await Promise.all(
      Array.from({ length: 6 }, (_, i) => {
        const fileName = `${String(i + 1).padStart(2, '0')}.jpg`
        const fsPath = path.join(fsDir, fileName)
        return fileExists(fsPath).then((exists) => (exists ? `/${relDir}/${fileName}` : null))
      }),
    )

    const gallery = galleryChecks.filter(Boolean) as string[]

    if (coverExists || gallery.length > 0) {
      return {
        cover: coverExists ? `/${relDir}/cover.jpg` : undefined,
        gallery,
      }
    }
  }

  return { cover: undefined, gallery: [] }
}

export async function generateStaticParams() {
  const slugs = await getProjectSlugs('mk')
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = await getProjectBySlug(slug, 'mk')
  
  if (!project) {
    return {
      title: 'Проект не е пронајден | Ксанаду Арт',
    }
  }
  
  const publicImages = await getProjectImagesFromPublic(slug)
  const contentImages = project.images ?? []
  const ogImage = publicImages.cover ?? contentImages[0] ?? publicImages.gallery[0]

  return {
    title: `${project.title} | Ксанаду Арт - Охрид, Македонија`,
    description: project.description,
    alternates: {
      canonical: `https://xanaduart.mk/project/${slug}/`,
    },
    openGraph: {
      title: `${project.title} | Ксанаду Арт`,
      description: project.description,
      url: `https://xanaduart.mk/project/${slug}/`,
      images: ogImage
        ? [
            {
              url: `https://xanaduart.mk${ogImage}`,
              alt: project.title,
            },
          ]
        : undefined,
    },
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = await getProjectBySlug(slug, 'mk')
  
  if (!project) {
    notFound()
  }

  const publicImages = await getProjectImagesFromPublic(slug)
  const contentImages = project.images ?? []

  const [contentCover, c01, c02, c03, c04, c05, c06] = contentImages
  const [p01, p02, p03, p04, p05, p06] = publicImages.gallery

  const coverImage = publicImages.cover ?? contentCover
  const img01 = p01 ?? c01
  const img02 = p02 ?? c02
  const img03 = p03 ?? c03
  const img04 = p04 ?? c04
  const img05 = p05 ?? c05
  const img06 = p06 ?? c06

  const images12 = [img01, img02].filter(Boolean) as string[]
  const images34 = [img03, img04].filter(Boolean) as string[]
  const images56 = [img05, img06].filter(Boolean) as string[]

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        {/* Cover image background */}
        {coverImage ? (
          <Image
            src={coverImage}
            alt={`${project.title} - cover`}
            fill
            priority
            className="object-cover"
          />
        ) : null}
        {/* Overlays for readability */}
        <div className="absolute inset-0 hero-gradient opacity-90" />
        <div className="absolute inset-0 bg-[url('/images/hero-pattern.svg')] opacity-10" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/projects/" 
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" aria-hidden="true" />
            Назад кон проекти
          </Link>
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-white/20 text-sm text-white">
                {project.category}
              </span>
              <span className="flex items-center gap-1 text-white/80 text-sm">
                <Calendar className="w-4 h-4" aria-hidden="true" />
                {project.year}
              </span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              {project.description}
            </p>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Description */}
              <div className="prose prose-lg max-w-none">
                <h2 className="font-display text-2xl lg:text-3xl font-bold text-primary-dark mb-4">
                  За проектот
                </h2>
                {project.fullDescription.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-text-secondary leading-relaxed mb-4">
                    {paragraph.trim()}
                  </p>
                ))}
              </div>

              {/* Images 01 & 02 */}
              {images12.length > 0 ? (
                <div className={`mt-10 grid gap-4 ${images12.length > 1 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'}`}>
                  {images12.map((src, idx) => (
                    <div
                      key={src}
                      className={`relative rounded-2xl overflow-hidden ${images12.length > 1 ? 'aspect-video sm:aspect-square' : 'aspect-video'}`}
                    >
                      <Image src={src} alt={`${project.title} - слика ${idx + 1}`} fill className="object-cover" />
                    </div>
                  ))}
                </div>
              ) : null}

              {/* Objectives */}
              <div className="mt-10">
                <h2 className="font-display text-2xl lg:text-3xl font-bold text-primary-dark mb-4">
                  Цели
                </h2>
                <ul className="space-y-3">
                  {project.objectives.map((objective, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span className="text-text-secondary">{objective}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Images 03 & 04 */}
              {images34.length > 0 ? (
                <div className={`mt-10 grid gap-4 ${images34.length > 1 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'}`}>
                  {images34.map((src, idx) => (
                    <div
                      key={src}
                      className={`relative rounded-2xl overflow-hidden ${images34.length > 1 ? 'aspect-video sm:aspect-square' : 'aspect-video'}`}
                    >
                      <Image src={src} alt={`${project.title} - слика ${idx + 3}`} fill className="object-cover" />
                    </div>
                  ))}
                </div>
              ) : null}

              {/* Results */}
              <div className="mt-10">
                <h2 className="font-display text-2xl lg:text-3xl font-bold text-primary-dark mb-4">
                  Резултати
                </h2>
                <ul className="space-y-3">
                  {project.results.map((result, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-text-secondary">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Images 05 & 06 (if present) */}
              {images56.length > 0 ? (
                <div className={`mt-10 grid gap-4 ${images56.length > 1 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'}`}>
                  {images56.map((src, idx) => (
                    <div
                      key={src}
                      className={`relative rounded-2xl overflow-hidden ${images56.length > 1 ? 'aspect-video sm:aspect-square' : 'aspect-video'}`}
                    >
                      <Image src={src} alt={`${project.title} - слика ${idx + 5}`} fill className="object-cover" />
                    </div>
                  ))}
                </div>
              ) : null}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Project Info */}
                <div className="p-6 rounded-2xl bg-highlight/30">
                  <h3 className="font-display font-semibold text-lg text-primary-dark mb-4">
                    Информации за проектот
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-primary" aria-hidden="true" />
                      <div>
                        <p className="text-sm text-text-muted">Година</p>
                        <p className="text-text-primary font-medium">{project.year}</p>
                      </div>
                    </li>
                    <li className="flex items-center gap-3">
                      <Tag className="w-5 h-5 text-primary" aria-hidden="true" />
                      <div>
                        <p className="text-sm text-text-muted">Категорија</p>
                        <p className="text-text-primary font-medium">{project.category}</p>
                      </div>
                    </li>
                    <li className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-primary" aria-hidden="true" />
                      <div>
                        <p className="text-sm text-text-muted">Локација</p>
                        <p className="text-text-primary font-medium">{project.location}</p>
                      </div>
                    </li>
                    <li className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-primary" aria-hidden="true" />
                      <div>
                        <p className="text-sm text-text-muted">Учесници</p>
                        <p className="text-text-primary font-medium">{project.participants}</p>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Partners */}
                <div className="p-6 rounded-2xl bg-white border border-highlight/50">
                  <h3 className="font-display font-semibold text-lg text-primary-dark mb-4">
                    Партнери
                  </h3>
                  <ul className="space-y-2">
                    {project.partners.map((partner, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                        <span className="text-text-secondary">{partner}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="p-6 rounded-2xl hero-gradient text-white">
                  <h3 className="font-display font-semibold text-lg mb-2">
    Сакате сличен проект?
                  </h3>
                  <p className="text-white/80 text-sm mb-4">
    Контактирајте не за да дискутираме за вашите идеи.
                  </p>
                  <Link 
                    href="/contact/" 
                    className="inline-flex items-center gap-2 bg-white text-primary-dark px-4 py-2 rounded-lg font-medium hover:bg-highlight transition-colors text-sm"
                  >
                    Контактирајте не
                    <ArrowLeft className="w-4 h-4 rotate-180" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
