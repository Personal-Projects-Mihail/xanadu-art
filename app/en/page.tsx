import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Users, Music, Theater, Globe, Sparkles, Heart, Lightbulb } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Xanadu Art | Art NGO - Ohrid, Macedonia',
  description: 'Xanadu Art is a non-profit organization dedicated to empowering youth through art, culture, and education. Discover our projects and activities.',
  alternates: {
    canonical: 'https://xanaduart.mk/en/',
  },
  openGraph: {
    title: 'Xanadu Art | Art NGO - Ohrid, Macedonia',
    description: 'Non-profit organization dedicated to empowering youth through art, culture, and education.',
    url: 'https://xanaduart.mk/en/',
  },
}

const focusAreas = [
  {
    icon: Theater,
    title: 'Theater and Performing Arts',
    description: 'We organize theatrical productions, dance performances, and workshops for developing artistic skills.',
  },
  {
    icon: Music,
    title: 'Music and Orchestra Programs',
    description: 'Orchestra programs that nurture collaboration and high-level performance among young musicians.',
  },
  {
    icon: Users,
    title: 'Educational Workshops',
    description: 'We explore new theatrical techniques and push the boundaries of traditional arts.',
  },
  {
    icon: Globe,
    title: 'International Collaboration',
    description: 'Erasmus+ projects and youth exchanges that connect cultures through art.',
  },
]

const featuredProjects = [
  {
    slug: 'lights-camera-action',
    title: 'Lights, Camera, Action',
    year: '2022',
    category: 'Erasmus+',
    description: 'International youth exchange project focused on film art and media literacy.',
    image: '/images/project-lights-camera-action.jpg',
  },
  {
    slug: 'ohrid-youth-orchestra',
    title: 'Ohrid Youth Orchestra',
    year: '2023',
    category: 'Music',
    description: 'Orchestra program bringing together young musicians from the region for joint concerts.',
    image: '/images/project-orchestra.jpg',
  },
  {
    slug: 'theatrical-innovations',
    title: 'Theatrical Innovations',
    year: '2023',
    category: 'Theater',
    description: 'Workshop on contemporary theatrical techniques and experimental performance forms.',
    image: '/images/project-theater.jpg',
  },
]

const values = [
  {
    icon: Sparkles,
    title: 'Transformative Power of Art',
    description: 'Art nurtures talents and social skills in young people.',
  },
  {
    icon: Heart,
    title: 'Intercultural Connection',
    description: 'Art as a universal language that bridges cultures.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation and Experiment',
    description: 'Supporting artistic experiments and new programs.',
  },
]

export default function HomePageEn() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] lg:min-h-[90vh] flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 bg-[url('/images/hero-pattern.svg')] opacity-10" />
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-6 animate-fade-in">
              <Sparkles className="w-4 h-4 text-accent" aria-hidden="true" />
              <span className="text-sm text-white/90">Non-profit art organization</span>
            </div>
            
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6 animate-slide-up">
              Empowering youth through{' '}
              <span className="text-highlight">art</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-white/80 max-w-2xl mb-8 leading-relaxed animate-slide-up" style={{ animationDelay: '0.1s' }}>
              Xanadu Art is a platform where young people develop their talents, 
              connect with peers, and contribute to an inclusive cultural landscape.
            </p>
            
            <div className="flex flex-wrap gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <Link href="/en/projects/" className="btn-primary">
                Explore our projects
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </Link>
              <Link href="/en/about/" className="bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-medium hover:bg-white/20 transition-colors inline-flex items-center gap-2">
                Learn more
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
              <span className="text-primary font-medium mb-2 block">Our Mission</span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-dark mb-6">
                Creating space for youth to grow through art
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed mb-6">
                Founded in 2020 in Ohrid, Macedonia, Xanadu Art works locally, nationally, 
                and internationally to enable young people to develop their artistic talents 
                and connect with peers from around the world.
              </p>
              <p className="text-text-secondary leading-relaxed mb-8">
                Our organization is non-profit, non-political, and non-denominational, 
                dedicated exclusively to the cultural and artistic development of youth.
              </p>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-highlight flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-2xl text-primary-dark">500+</p>
                    <p className="text-sm text-text-muted">Young participants</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-highlight flex items-center justify-center">
                    <Globe className="w-6 h-6 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-2xl text-primary-dark">15+</p>
                    <p className="text-sm text-text-muted">International projects</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/mission-image.jpg"
                  alt="Young artists at a workshop"
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
            <span className="text-primary font-medium mb-2 block">Our Activities</span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-dark mb-4">
              Areas of Work
            </h2>
            <p className="text-text-secondary text-lg">
              Our work covers various artistic disciplines and educational programs 
              designed to enhance the creative potential of young people.
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
            <span className="text-primary font-medium mb-2 block">Our Values</span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-dark mb-4">
              What Guides Us
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
              <span className="text-primary font-medium mb-2 block">Featured Projects</span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-dark">
                Our Work
              </h2>
            </div>
            <Link 
              href="/en/projects/" 
              className="btn-secondary self-start sm:self-auto"
            >
              View all projects
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
                Want to collaborate?
              </h2>
              <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
                We are open to partnerships, international projects, and collaboration 
                with organizations that share our vision for art and youth.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/en/contact/" className="bg-white text-primary-dark px-8 py-3 rounded-lg font-medium hover:bg-highlight transition-colors inline-flex items-center gap-2">
                  Contact us
                  <ArrowRight className="w-5 h-5" aria-hidden="true" />
                </Link>
                <a 
                  href="mailto:info@xanaduart.mk" 
                  className="bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-lg font-medium hover:bg-white/20 transition-colors"
                >
                  info@xanaduart.mk
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
