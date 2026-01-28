import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Calendar } from 'lucide-react'
import { getAllProjects } from '@/app/_content/projects'

export const metadata: Metadata = {
  title: 'Проекти | Ксанаду Арт - Охрид, Македонија',
  description: 'Истражете ги проектите на Ксанаду Арт - театарски претстави, музички програми, Еразмус+ размени и културни настани.',
  alternates: {
    canonical: 'https://xanaduart.mk/projects/',
  },
  openGraph: {
    title: 'Проекти | Ксанаду Арт - Охрид, Македонија',
    description: 'Истражете ги проектите на Ксанаду Арт - театар, музика, Еразмус+ размени и културни настани.',
    url: 'https://xanaduart.mk/projects/',
  },
}

export default async function ProjectsPage() {
  const projects = await getAllProjects('mk')

  const projectsByYear = projects.reduce(
    (acc, project) => {
      const yearNum = Number(project.year)
      if (!Number.isFinite(yearNum)) return acc
      acc[yearNum] ||= []
      acc[yearNum].push(project)
      return acc
    },
    {} as Record<number, typeof projects>,
  )

  const years = Object.keys(projectsByYear).sort((a, b) => Number(b) - Number(a))

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 hero-gradient">
        <div className="absolute inset-0 bg-[url('/images/hero-pattern.svg')] opacity-10" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-accent font-medium mb-4">Проекти</span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Нашата работа
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Истражете ги проектите кои ги реализиравме низ годините - од театарски 
              претстави и музички програми до меѓународни Еразмус+ размени.
            </p>
          </div>
        </div>
      </section>

      {/* Projects by Year */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {years.map((year, yearIndex) => (
            <div key={year} className={yearIndex > 0 ? 'mt-16 lg:mt-20' : ''}>
              {/* Year Header */}
              <div className="flex items-center gap-4 mb-8 lg:mb-10">
                <div className="w-12 h-12 rounded-xl hero-gradient flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-white" aria-hidden="true" />
                </div>
                <h2 className="font-display text-3xl lg:text-4xl font-bold text-primary-dark">
                  {year}
                </h2>
                <div className="flex-1 h-px bg-highlight" />
              </div>
              
              {/* Projects Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {projectsByYear[Number(year)].map((project) => (
                  <article
                    key={project.slug}
                    className="group rounded-2xl overflow-hidden bg-white border border-highlight/50 card-hover"
                  >
                    <Link href={`/project/${project.slug}/`} className="block">
                      <div className="relative aspect-[4/3] overflow-hidden">
                        {project.images?.[0] ? (
                          <Image
                            src={project.images[0]}
                            alt={project.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        ) : (
                          <div className="absolute inset-0 hero-gradient" />
                        )}
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-sm font-medium text-primary-dark">
                            {project.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="font-display font-semibold text-xl text-primary-dark mb-2 group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-text-secondary line-clamp-2 mb-4">
                          {project.description}
                        </p>
                        <span className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                          Дознајте повеќе
                          <ArrowRight className="w-4 h-4" aria-hidden="true" />
                        </span>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 soft-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 hero-gradient" />
            <div className="absolute inset-0 bg-[url('/images/cta-pattern.svg')] opacity-10" />
            
            <div className="relative z-10 px-6 py-12 lg:px-16 lg:py-20 text-center">
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                Сакате да соработуваме?
              </h2>
              <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
                Отворени сме за нови проекти и партнерства. Контактирајте не за да 
                дискутираме како можеме заедно да создадеме нешто прекрасно.
              </p>
              <Link 
                href="/contact/" 
                className="bg-white text-primary-dark px-8 py-3 rounded-lg font-medium hover:bg-highlight transition-colors inline-flex items-center gap-2"
              >
                Контактирајте не
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
