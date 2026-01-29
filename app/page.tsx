import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Users, Music, Theater, Globe, Sparkles, Heart, Lightbulb } from 'lucide-react'
import { getProjectBySlug } from '@/app/_content/projects'

export const metadata: Metadata = {
  title: 'Ксанаду Арт | Уметничка НВО - Охрид, Македонија',
  description: 'Ксанаду Арт е непрофитна организација посветена на зајакнување на младите преку уметност, култура и образование. Откријте ги нашите проекти и активности.',
  alternates: {
    canonical: 'https://xanaduart.mk/',
  },
  openGraph: {
    title: 'Ксанаду Арт | Уметничка НВО - Охрид, Македонија',
    description: 'Непрофитна организација посветена на зајакнување на младите преку уметност, култура и образование.',
    url: 'https://xanaduart.mk/',
  },
}

const focusAreas = [
  {
    icon: Theater,
    title: 'Театар и изведбени уметности',
    description: 'Организираме театарски претстави, танцови перформанси и работилници за развивање на уметнички вештини.',
  },
  {
    icon: Music,
    title: 'Музика и оркестарски програми',
    description: 'Оркестарски програми кои негуваат соработка и високи перформанси меѓу младите музичари.',
  },
  {
    icon: Users,
    title: 'Образовни работилници',
    description: 'Истражуваме нови театарски техники и ги туркаме границите на традиционалните уметности.',
  },
  {
    icon: Globe,
    title: 'Меѓународна соработка',
    description: 'Еразмус+ проекти и размени на млади кои поврзуваат култури преку уметноста.',
  },
]

const featuredProjectSlugs = [
  'tackling-self-stigma-together-ohrid',
  'tackling-self-stigma-together-seville',
  'tackling-self-stigma-together-curacao',
] as const

const values = [
  {
    icon: Sparkles,
    title: 'Трансформативна моќ на уметноста',
    description: 'Уметноста ги негува талентите и социјалните вештини на младите.',
  },
  {
    icon: Heart,
    title: 'Меѓукултурна поврзаност',
    description: 'Уметноста како универзален јазик кој ги помостува културите.',
  },
  {
    icon: Lightbulb,
    title: 'Иновација и експеримент',
    description: 'Поддршка за уметнички експерименти и нови програми.',
  },
]

export default async function HomePage() {
  const featuredProjects = (
    await Promise.all(featuredProjectSlugs.map((slug) => getProjectBySlug(slug, 'mk')))
  ).filter((p): p is NonNullable<typeof p> => Boolean(p))

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] lg:min-h-[90vh] flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero.jpg"
            alt=""
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 hero-gradient opacity-75" aria-hidden="true" />
        <div className="absolute inset-0 bg-[url('/images/hero-pattern.svg')] opacity-10" aria-hidden="true" />
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-6 animate-fade-in">
              <Sparkles className="w-4 h-4 text-accent" aria-hidden="true" />
              <span className="text-sm text-white/90">Непрофитна уметничка организација</span>
            </div>
            
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6 animate-slide-up">
              Зајакнување на младите преку{' '}
              <span className="text-highlight">уметноста</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-white/80 max-w-2xl mb-8 leading-relaxed animate-slide-up" style={{ animationDelay: '0.1s' }}>
              Ксанаду Арт е платформа каде младите луѓе ги развиваат своите таленти, 
              се поврзуваат и придонесуваат кон инклузивен културен пејзаж.
            </p>
            
            <div className="flex flex-wrap gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <Link href="/projects/" className="btn-primary">
                Истражете ги проектите
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </Link>
              <Link href="/about/" className="bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-medium hover:bg-white/20 transition-colors inline-flex items-center gap-2">
                Дознајте повеќе
              </Link>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block">
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-white/50 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 lg:py-24 soft-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="text-primary font-medium mb-2 block">Нашата мисија</span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-dark mb-6">
                Создаваме простор за младите да растат преку уметноста
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed mb-6">
                Основани во 2020 година во Охрид, Македонија, Ксанаду Арт работи локално, 
                национално и интернационално за да им овозможи на младите луѓе да ги 
                развијат своите уметнички таленти и да се поврзат со врсници од целиот свет.
              </p>
              <p className="text-text-secondary leading-relaxed mb-8">
                Нашата организација е непрофитна, неполитичка и неденоминациска, 
                посветена исклучиво на културниот и уметничкиот развој на младите.
              </p>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-highlight flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-2xl text-primary-dark">500+</p>
                    <p className="text-sm text-text-muted">Млади учесници</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-highlight flex items-center justify-center">
                    <Globe className="w-6 h-6 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-2xl text-primary-dark">15+</p>
                    <p className="text-sm text-text-muted">Меѓународни проекти</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/mission-image.jpg"
                  alt="Млади уметници на работилница"
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-2xl bg-accent/20 -z-10" />
              <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-highlight -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
            <span className="text-primary font-medium mb-2 block">Нашите активности</span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-dark mb-4">
              Области на дејност
            </h2>
            <p className="text-text-secondary text-lg">
              Нашата работа опфаќа различни уметнички дисциплини и образовни програми 
              дизајнирани да ги зајакнат креативните потенцијали на младите.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {focusAreas.map((area, index) => (
              <div
                key={area.title}
                className="group p-6 lg:p-8 rounded-2xl bg-white border border-highlight/50 card-hover"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-xl hero-gradient flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <area.icon className="w-7 h-7 text-white" aria-hidden="true" />
                </div>
                <h3 className="font-display font-semibold text-xl text-primary-dark mb-3">
                  {area.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-24 gallery-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
            <span className="text-primary font-medium mb-2 block">Нашите вредности</span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-dark mb-4">
            Што нè води
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-full bg-highlight flex items-center justify-center mx-auto mb-5">
                  <value.icon className="w-8 h-8 text-primary" aria-hidden="true" />
                </div>
                <h3 className="font-display font-semibold text-xl text-primary-dark mb-3">
                  {value.title}
                </h3>
                <p className="text-text-secondary leading-relaxed max-w-sm mx-auto">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12 lg:mb-16">
            <div>
              <span className="text-primary font-medium mb-2 block">Избрани проекти</span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-dark">
                Нашата работа
              </h2>
            </div>
            <Link 
              href="/projects/" 
              className="btn-secondary self-start sm:self-auto"
            >
              Видете ги сите проекти
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {featuredProjects.map((project, index) => (
              <article
                key={project.slug}
                className="group rounded-2xl overflow-hidden bg-white border border-highlight/50 card-hover"
                style={{ animationDelay: `${index * 0.1}s` }}
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
                    <div className="flex items-center gap-2 text-sm text-text-muted mb-2">
                      <span>{project.year}</span>
                    </div>
                    <h3 className="font-display font-semibold text-xl text-primary-dark mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-text-secondary line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 hero-gradient" />
            <div className="absolute inset-0 bg-[url('/images/cta-pattern.svg')] opacity-10" />
            
            <div className="relative z-10 px-6 py-12 lg:px-16 lg:py-20 text-center">
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                Сакате да соработуваме?
              </h2>
              <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
                Отворени сме за партнерства, меѓународни проекти и соработка со 
                организации кои ја делат нашата визија за уметноста и младите.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact/" className="bg-white text-primary-dark px-8 py-3 rounded-lg font-medium hover:bg-highlight transition-colors inline-flex items-center gap-2">
                  Контактирајте нè
                  <ArrowRight className="w-5 h-5" aria-hidden="true" />
                </Link>
                <a 
                  href="mailto:xanadu_ohrid@yahoo.com" 
                  className="bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-lg font-medium hover:bg-white/20 transition-colors"
                >
                  xanadu_ohrid@yahoo.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
