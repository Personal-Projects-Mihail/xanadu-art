import { MetadataRoute } from 'next'

const baseUrl = 'https://xanaduart.mk'

const projects = [
  'lights-camera-action',
  'ohrid-youth-orchestra',
  'theatrical-innovations',
  'cultural-horizons',
  'youth-voices',
  'art-bridges',
  'dance-fusion',
  'creative-labs',
  'rising-stars',
  'ohrid-summer-arts',
  'foundation',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    // Macedonian pages
    { url: `${baseUrl}/`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 1 },
    { url: `${baseUrl}/about/`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/projects/`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${baseUrl}/contact/`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
    
    // English pages
    { url: `${baseUrl}/en/`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 1 },
    { url: `${baseUrl}/en/about/`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/en/projects/`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${baseUrl}/en/contact/`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
  ]

  // Add project pages for both languages
  const projectPages = projects.flatMap((slug) => [
    {
      url: `${baseUrl}/project/${slug}/`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/en/project/${slug}/`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
  ])

  return [...routes, ...projectPages]
}
