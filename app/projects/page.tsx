import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Calendar } from 'lucide-react'

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

type ProjectCard = {
  slug: string
  title: string
  category: string
  description: string
  image: string
}

const projectsByYear: Record<number, ProjectCard[]> = {
  2024: [
    {
      slug: 'cultural-horizons',
      title: 'Културни хоризонти',
      category: 'Културен настан',
      description: 'Серија на културни настани кои ги прикажуваат традиционалните и современите уметнички форми од регионот.',
      image: '/images/project-cultural-horizons.jpg',
    },
    {
      slug: 'youth-voices',
      title: 'Гласови на младите',
      category: 'Театарска работилница',
      description: 'Интензивна театарска работилница фокусирана на развивање на гласовни техники и сценско присуство.',
      image: '/images/project-youth-voices.jpg',
    },
  ],
  2023: [
    {
      slug: 'ohrid-youth-orchestra',
      title: 'Охридски младински оркестар',
      category: 'Музика',
      description: 'Оркестарска програма која обединува млади музичари од регионот за заеднички концерти и перформанси.',
      image: '/images/project-orchestra.jpg',
    },
    {
      slug: 'theatrical-innovations',
      title: 'Театарски иновации',
      category: 'Театар',
      description: 'Работилница за современи театарски техники и експериментални форми на изведба.',
      image: '/images/project-theater.jpg',
    },
    {
      slug: 'art-bridges',
      title: 'Уметнички мостови',
      category: 'Меѓународна соработка',
      description: 'Проект за поврзување на млади уметници од Македонија и соседните земји.',
      image: '/images/project-art-bridges.jpg',
    },
  ],
  2022: [
    {
      slug: 'lights-camera-action',
      title: 'Lights, Camera, Action',
      category: 'Еразмус+',
      description: 'Меѓународен проект за размена на млади фокусиран на филмска уметност и медиумска писменост.',
      image: '/images/project-lights-camera-action.jpg',
    },
    {
      slug: 'dance-fusion',
      title: 'Танц фузија',
      category: 'Танц',
      description: 'Фузија на традиционални македонски танци со современи танцови форми.',
      image: '/images/project-dance-fusion.jpg',
    },
    {
      slug: 'creative-labs',
      title: 'Креативни лаборатории',
      category: 'Образование',
      description: 'Серија работилници за развивање на креативно размислување и уметнички вештини.',
      image: '/images/project-creative-labs.jpg',
    },
  ],
  2021: [
    {
      slug: 'rising-stars',
      title: 'Иѕвијувајќи ѕвезди',
      category: 'Младинска програма',
      description: 'Програма за откривање и поддршка на млади уметнички таленти од Охрид и регионот.',
      image: '/images/project-rising-stars.jpg',
    },
    {
      slug: 'ohrid-summer-arts',
      title: 'Охридско лето на уметноста',
      category: 'Фестивал',
      description: 'Летен фестивал на уметноста со изложби, перформанси и работилници.',
      image: '/images/project-summer-arts.jpg',
    },
  ],
  2020: [
    {
      slug: 'foundation',
      title: 'Основање на Ксанаду Арт',
      category: 'Организација',
      description: 'Основање на организацијата и првите чекори во градење на уметничка заедница.',
      image: '/images/project-foundation.jpg',
    },
  ],
}

export default function ProjectsPage() {
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
                {projectsByYear[Number(year)].map((project, index) => (
                  <article
                    key={project.slug}
                    className="group rounded-2xl overflow-hidden bg-white border border-highlight/50 card-hover"
                  >
                    <Link href={`/project/${project.slug}/`} className="block">
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
