import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Calendar } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Projects | Xanadu Art - Ohrid, Macedonia',
  description: 'Explore Xanadu Art projects - theatrical productions, music programs, Erasmus+ exchanges, and cultural events.',
  alternates: {
    canonical: 'https://xanaduart.mk/en/projects/',
  },
  openGraph: {
    title: 'Projects | Xanadu Art - Ohrid, Macedonia',
    description: 'Explore Xanadu Art projects - theater, music, Erasmus+ exchanges, and cultural events.',
    url: 'https://xanaduart.mk/en/projects/',
  },
}

const projectsByYear = {
  2024: [
    {
      slug: 'cultural-horizons',
      title: 'Cultural Horizons',
      category: 'Cultural Event',
      description: 'A series of cultural events showcasing traditional and contemporary art forms from the region.',
      image: '/images/project-cultural-horizons.jpg',
    },
    {
      slug: 'youth-voices',
      title: 'Youth Voices',
      category: 'Theater Workshop',
      description: 'Intensive theater workshop focused on developing voice techniques and stage presence.',
      image: '/images/project-youth-voices.jpg',
    },
  ],
  2023: [
    {
      slug: 'ohrid-youth-orchestra',
      title: 'Ohrid Youth Orchestra',
      category: 'Music',
      description: 'Orchestra program bringing together young musicians from the region for joint concerts and performances.',
      image: '/images/project-orchestra.jpg',
    },
    {
      slug: 'theatrical-innovations',
      title: 'Theatrical Innovations',
      category: 'Theater',
      description: 'Workshop on contemporary theatrical techniques and experimental performance forms.',
      image: '/images/project-theater.jpg',
    },
    {
      slug: 'art-bridges',
      title: 'Art Bridges',
      category: 'International Collaboration',
      description: 'Project connecting young artists from Macedonia and neighboring countries.',
      image: '/images/project-art-bridges.jpg',
    },
  ],
  2022: [
    {
      slug: 'lights-camera-action',
      title: 'Lights, Camera, Action',
      category: 'Erasmus+',
      description: 'International youth exchange project focused on film art and media literacy.',
      image: '/images/project-lights-camera-action.jpg',
    },
    {
      slug: 'dance-fusion',
      title: 'Dance Fusion',
      category: 'Dance',
      description: 'Fusion of traditional Macedonian dances with contemporary dance forms.',
      image: '/images/project-dance-fusion.jpg',
    },
    {
      slug: 'creative-labs',
      title: 'Creative Labs',
      category: 'Education',
      description: 'Series of workshops for developing creative thinking and artistic skills.',
      image: '/images/project-creative-labs.jpg',
    },
  ],
  2021: [
    {
      slug: 'rising-stars',
      title: 'Rising Stars',
      category: 'Youth Program',
      description: 'Program for discovering and supporting young artistic talents from Ohrid and the region.',
      image: '/images/project-rising-stars.jpg',
    },
    {
      slug: 'ohrid-summer-arts',
      title: 'Ohrid Summer of Arts',
      category: 'Festival',
      description: 'Summer arts festival with exhibitions, performances, and workshops.',
      image: '/images/project-summer-arts.jpg',
    },
  ],
  2020: [
    {
      slug: 'foundation',
      title: 'Foundation of Xanadu Art',
      category: 'Organization',
      description: 'Establishment of the organization and first steps in building an artistic community.',
      image: '/images/project-foundation.jpg',
    },
  ],
}

export default function ProjectsPageEn() {
  const years = Object.keys(projectsByYear).sort((a, b) => Number(b) - Number(a))

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 hero-gradient">
        <div className="absolute inset-0 bg-[url('/images/hero-pattern.svg')] opacity-10" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-accent font-medium mb-4">Projects</span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Our Work
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Explore the projects we have implemented over the years - from theatrical 
              productions and music programs to international Erasmus+ exchanges.
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
                {projectsByYear[Number(year)].map((project, index) => (
                  <article
                    key={project.slug}
                    className="group rounded-2xl overflow-hidden bg-white border border-highlight/50 card-hover"
                  >
                    <Link href={`/en/project/${project.slug}/`} className="block">
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
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
                          Learn more
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
                Want to collaborate?
              </h2>
              <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
                We are open to new projects and partnerships. Contact us to 
                discuss how we can create something beautiful together.
              </p>
              <Link 
                href="/en/contact/" 
                className="bg-white text-primary-dark px-8 py-3 rounded-lg font-medium hover:bg-highlight transition-colors inline-flex items-center gap-2"
              >
                Contact us
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
