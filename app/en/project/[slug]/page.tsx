import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Calendar, Tag, Users, MapPin } from 'lucide-react'

interface ProjectPageProps {
  params: {
    slug: string
  }
}

const projects = {
  'lights-camera-action': {
    title: 'Lights, Camera, Action',
    year: '2022',
    category: 'Erasmus+',
    location: 'Ohrid, Macedonia',
    participants: '40 youth from 8 countries',
    description: `
      Lights, Camera, Action is an international youth exchange project funded by 
      the European Union's Erasmus+ program. The project brought together 40 young 
      people from 8 different countries in Ohrid, Macedonia, to explore topics related 
      to film art and media literacy.
    `,
    fullDescription: `
      During the ten-day exchange, participants had the opportunity to learn from 
      experienced filmmakers and media experts, create their own short films, and 
      develop critical thinking skills about media.
      
      The project included workshops on filming, editing, screenwriting, and directing, 
      as well as discussion sessions about the role of media in contemporary society.
      
      Participants worked in multinational teams, which allowed them not only to develop 
      their technical skills but also to build intercultural friendships and improve 
      their understanding of different cultures.
    `,
    objectives: [
      'To develop media skills among young people',
      'To promote critical thinking about media',
      'To facilitate intercultural dialogue',
      'To encourage creative expression through film',
      'To build lasting partnerships between organizations',
    ],
    results: [
      '8 short films created by participants',
      'Public screening organized in Ohrid',
      'Online platform created for sharing films',
      'Partnerships established with 8 organizations from Europe',
    ],
    images: [
      '/images/project-lights-camera-action-1.jpg',
      '/images/project-lights-camera-action-2.jpg',
      '/images/project-lights-camera-action-3.jpg',
    ],
    partners: ['Erasmus+', 'European Union', '8 partner organizations'],
  },
  'ohrid-youth-orchestra': {
    title: 'Ohrid Youth Orchestra',
    year: '2023',
    category: 'Music',
    location: 'Ohrid, Macedonia',
    participants: '60 young musicians',
    description: `
      The Ohrid Youth Orchestra is a program that brings together young musicians 
      from Ohrid and the region for joint concerts and high-level performances.
    `,
    fullDescription: `
      The Ohrid Youth Orchestra represents an ambitious project aimed at gathering 
      the most talented young musicians from the region and providing them with 
      professional orchestra experience.
      
      The orchestra works under the mentorship of experienced conductors and musicians, 
      with a focus on classical music, but also includes arrangements of popular and 
      traditional music.
      
      Throughout the year, the orchestra held several concerts in Ohrid and other 
      cities in Macedonia, including the traditional New Year's concert.
    `,
    objectives: [
      'To develop orchestra skills among young musicians',
      'To promote classical music among youth',
      'To create a platform for collaboration between musicians',
      'To enrich the cultural life of Ohrid',
    ],
    results: [
      '5 public concerts organized',
      'Participation of 60 young musicians',
      'Works by Bach, Mozart, Beethoven, and Macedonian composers performed',
      'Collaboration with guest musicians from abroad',
    ],
    images: [
      '/images/project-orchestra-1.jpg',
      '/images/project-orchestra-2.jpg',
      '/images/project-orchestra-3.jpg',
    ],
    partners: ['Municipality of Ohrid', 'Music School Ohrid'],
  },
  'theatrical-innovations': {
    title: 'Theatrical Innovations',
    year: '2023',
    category: 'Theater',
    location: 'Ohrid, Macedonia',
    participants: '25 young actors',
    description: `
      Theatrical Innovations is an intensive workshop on contemporary theatrical 
      techniques and experimental performance forms.
    `,
    fullDescription: `
      The Theatrical Innovations workshop was designed for young actors and theater 
      enthusiasts who want to expand their horizons and experiment with new forms 
      of theatrical expression.
      
      Over the course of a month, participants worked with experienced theater 
      practitioners who introduced them to techniques such as physical theater, 
      improvisation, forum theater, and choreography for actors.
      
      The workshop concluded with a public performance that combined all the learned 
      techniques into one innovative theatrical production.
    `,
    objectives: [
      'To introduce young people to contemporary theatrical techniques',
      'To encourage experimentation with form',
      'To develop stage skills',
      'To create a new theatrical production',
    ],
    results: [
      '25 young actors trained in contemporary techniques',
      'Original theater play created',
      '3 public performances in Ohrid',
      'Audience of over 300 viewers',
    ],
    images: [
      '/images/project-theater-1.jpg',
      '/images/project-theater-2.jpg',
      '/images/project-theater-3.jpg',
    ],
    partners: ['National Theater Ohrid'],
  },
  'cultural-horizons': {
    title: 'Cultural Horizons',
    year: '2024',
    category: 'Cultural Event',
    location: 'Ohrid, Macedonia',
    participants: '200+ visitors',
    description: `
      Cultural Horizons is a series of cultural events showcasing traditional and 
      contemporary art forms from the region.
    `,
    fullDescription: `
      Cultural Horizons is an ambitious project aimed at enriching the cultural 
      life of Ohrid and showcasing the various art forms present in the region.
      
      The series includes exhibitions of visual arts, concerts of traditional and 
      contemporary music, theater performances, and workshops for the public.
      
      The project connects artists from different generations and disciplines, 
      creating space for dialogue and collaboration.
    `,
    objectives: [
      'To promote the cultural heritage of the region',
      'To support local artists',
      'To enrich the cultural life of Ohrid',
      'To create dialogue between generations',
    ],
    results: [
      '10 cultural events organized',
      'Participation of 30+ artists',
      'Attendance of over 200 people',
      'Media coverage in local media',
    ],
    images: [
      '/images/project-cultural-horizons-1.jpg',
      '/images/project-cultural-horizons-2.jpg',
      '/images/project-cultural-horizons-3.jpg',
    ],
    partners: ['Municipality of Ohrid', 'Cultural Heritage Ohrid'],
  },
  'youth-voices': {
    title: 'Youth Voices',
    year: '2024',
    category: 'Theater Workshop',
    location: 'Ohrid, Macedonia',
    participants: '20 young actors',
    description: `
      Intensive theater workshop focused on developing voice techniques and 
      stage presence.
    `,
    fullDescription: `
      Youth Voices is a specialized workshop dedicated to developing voice skills 
      and stage presence in young actors.
      
      Under the mentorship of experienced actors and vocal coaches, participants 
      worked on techniques for diaphragmatic breathing, articulation, voice 
      projection, and emotional expression through voice.
      
      The workshop also included sessions for text analysis and interpretation, 
      with a focus on contemporary dramaturgy.
    `,
    objectives: [
      'To develop voice techniques',
      'To improve stage presence',
      'To build self-confidence in young actors',
      'To create a new theatrical production',
    ],
    results: [
      '20 young actors trained',
      'Voice technique skills developed',
      'Final public performance',
      'Video recordings of performances',
    ],
    images: [
      '/images/project-youth-voices-1.jpg',
      '/images/project-youth-voices-2.jpg',
      '/images/project-youth-voices-3.jpg',
    ],
    partners: ['National Theater Ohrid'],
  },
  'art-bridges': {
    title: 'Art Bridges',
    year: '2023',
    category: 'International Collaboration',
    location: 'Ohrid, Macedonia',
    participants: '30 young artists from 3 countries',
    description: `
      Project connecting young artists from Macedonia and neighboring countries 
      through joint creative activities.
    `,
    fullDescription: `
      Art Bridges is a project that connects young artists from Macedonia, Serbia, 
      and Albania for joint creative work and exchange of experiences.
      
      The project included a residency in Ohrid where artists worked together on 
      interdisciplinary projects that combined theater, music, and visual arts.
      
      The result was a series of performances and exhibitions that were shown in 
      all three participating countries.
    `,
    objectives: [
      'To promote regional collaboration',
      'To develop interdisciplinary projects',
      'To build lasting connections between artists',
      'To bridge cultural differences',
    ],
    results: [
      '30 young artists involved',
      '5 interdisciplinary projects created',
      'Tour in 3 countries',
      'Partnerships established with organizations from the region',
    ],
    images: [
      '/images/project-art-bridges-1.jpg',
      '/images/project-art-bridges-2.jpg',
      '/images/project-art-bridges-3.jpg',
    ],
    partners: ['Partner organizations from Serbia and Albania'],
  },
  'dance-fusion': {
    title: 'Dance Fusion',
    year: '2022',
    category: 'Dance',
    location: 'Ohrid, Macedonia',
    participants: '15 dancers',
    description: `
      Fusion of traditional Macedonian dances with contemporary dance forms.
    `,
    fullDescription: `
      Dance Fusion is a project that combines the rich traditional Macedonian 
      dances with contemporary dance forms to create something new and unique.
      
      The project brought together dancers with different backgrounds - from 
      traditional folklore dancers to contemporary dancers - who worked together 
      to create new choreography.
      
      The result was a performance that respects the roots of Macedonian tradition 
      while simultaneously pushing the art forward with contemporary dance techniques.
    `,
    objectives: [
      'To preserve traditional heritage',
      'To create a new dance form',
      'To connect traditional and contemporary dancers',
      'To promote Macedonian culture',
    ],
    results: [
      'New choreography created',
      '3 public performances',
      'Video documentation of the project',
      'Regional tour',
    ],
    images: [
      '/images/project-dance-fusion-1.jpg',
      '/images/project-dance-fusion-2.jpg',
      '/images/project-dance-fusion-3.jpg',
    ],
    partners: ['Folklore Ensemble Ohrid'],
  },
  'creative-labs': {
    title: 'Creative Labs',
    year: '2022',
    category: 'Education',
    location: 'Ohrid, Macedonia',
    participants: '50 youth',
    description: `
      Series of workshops for developing creative thinking and artistic skills.
    `,
    fullDescription: `
      Creative Labs is a series of workshops designed to help young people develop 
      their creative potential and artistic skills.
      
      The workshops covered various topics - from drawing and painting, through 
      creative writing, to basics of acting and dance. Each workshop was led by 
      an experienced artist or educator.
      
      The project aimed to make arts education accessible to all young people in 
      Ohrid, regardless of their previous experience.
    `,
    objectives: [
      'To develop creative thinking',
      'To learn basic artistic skills',
      'To make art accessible to all',
      'To discover new talents',
    ],
    results: [
      '10 workshops organized',
      '50 young participants',
      'Final exhibition of created works',
      'Activity booklet for teachers',
    ],
    images: [
      '/images/project-creative-labs-1.jpg',
      '/images/project-creative-labs-2.jpg',
      '/images/project-creative-labs-3.jpg',
    ],
    partners: ['Municipality of Ohrid', 'Educational institutions'],
  },
  'rising-stars': {
    title: 'Rising Stars',
    year: '2021',
    category: 'Youth Program',
    location: 'Ohrid, Macedonia',
    participants: '30 young talents',
    description: `
      Program for discovering and supporting young artistic talents from Ohrid and the region.
    `,
    fullDescription: `
      Rising Stars is a program designed to identify and support the most talented 
      young artists from Ohrid and the surrounding area.
      
      Through auditions and recommendations, we selected 30 young people with 
      expressed artistic potential who received mentorship, training, and the 
      opportunity to perform at public events.
      
      The program included workshops, individual lessons with mentors, and a final 
      concert/exhibition where participants showcased their achievements.
    `,
    objectives: [
      'To discover young talents',
      'To provide mentorship',
      'To create performance opportunities',
      'To build self-confidence',
    ],
    results: [
      '30 young talents identified',
      '100+ hours of mentorship',
      'Final concert with 200+ viewers',
      'Several participants continued with artistic careers',
    ],
    images: [
      '/images/project-rising-stars-1.jpg',
      '/images/project-rising-stars-2.jpg',
      '/images/project-rising-stars-3.jpg',
    ],
    partners: ['Music School Ohrid', 'Art School'],
  },
  'ohrid-summer-arts': {
    title: 'Ohrid Summer of Arts',
    year: '2021',
    category: 'Festival',
    location: 'Ohrid, Macedonia',
    participants: '500+ visitors',
    description: `
      Summer arts festival with exhibitions, performances, and workshops.
    `,
    fullDescription: `
      Ohrid Summer of Arts is a festival that marked the end of summer with a 
      series of artistic events throughout the city.
      
      The festival included exhibitions of visual arts in public spaces, street 
      performances, open-air concerts, and workshops for the public.
      
      The goal was to make art accessible to all residents and visitors of Ohrid 
      and to enrich the cultural life of the city.
    `,
    objectives: [
      'To enrich the cultural life of Ohrid',
      'To make art accessible to all',
      'To promote local artists',
      'To attract tourists',
    ],
    results: [
      '15 events organized',
      'Attendance of 500+ people',
      'Participation of 40+ artists',
      'Media coverage',
    ],
    images: [
      '/images/project-summer-arts-1.jpg',
      '/images/project-summer-arts-2.jpg',
      '/images/project-summer-arts-3.jpg',
    ],
    partners: ['Municipality of Ohrid', 'Tourist Organization'],
  },
  'foundation': {
    title: 'Foundation of Xanadu Art',
    year: '2020',
    category: 'Organization',
    location: 'Ohrid, Macedonia',
    participants: '5 founders',
    description: `
      Establishment of the organization and first steps in building an artistic community.
    `,
    fullDescription: `
      Xanadu Art was founded in 2020 by a group of five enthusiasts who shared 
      a common vision of creating a space for young people to express themselves 
      through art.
      
      Although the beginning was challenging due to the pandemic, we managed to 
      establish the foundations of the organization and start the first activities 
      online and with small groups.
      
      This period allowed us to define our mission and vision and establish contacts 
      with future partners.
    `,
    objectives: [
      'To establish the organization',
      'To define mission and vision',
      'To build partnerships',
      'To start first activities',
    ],
    results: [
      'Registered organization',
      'Built basic structure',
      'Established first partnerships',
      'Organized online activities',
    ],
    images: [
      '/images/project-foundation-1.jpg',
      '/images/project-foundation-2.jpg',
      '/images/project-foundation-3.jpg',
    ],
    partners: ['Local artists', 'Volunteers'],
  },
}

export async function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = projects[params.slug]
  
  if (!project) {
    return {
      title: 'Project Not Found | Xanadu Art',
    }
  }
  
  return {
    title: `${project.title} | Xanadu Art - Ohrid, Macedonia`,
    description: project.description,
    alternates: {
      canonical: `https://xanaduart.mk/en/project/${params.slug}/`,
    },
    openGraph: {
      title: `${project.title} | Xanadu Art`,
      description: project.description,
      url: `https://xanaduart.mk/en/project/${params.slug}/`,
      images: [
        {
          url: `https://xanaduart.mk${project.images[0]}`,
          alt: project.title,
        },
      ],
    },
  }
}

export default function ProjectPageEn({ params }: ProjectPageProps) {
  const project = projects[params.slug]
  
  if (!project) {
    notFound()
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 hero-gradient">
        <div className="absolute inset-0 bg-[url('/images/hero-pattern.svg')] opacity-10" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/en/projects/" 
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" aria-hidden="true" />
            Back to projects
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
              {/* Gallery */}
              <div className="grid grid-cols-2 gap-4 mb-10">
                <div className="col-span-2 relative aspect-video rounded-2xl overflow-hidden">
                  <Image
                    src={project.images[0]}
                    alt={`${project.title} - main image`}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                {project.images.slice(1).map((image, index) => (
                  <div key={index} className="relative aspect-square rounded-2xl overflow-hidden">
                    <Image
                      src={image}
                      alt={`${project.title} - image ${index + 2}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Description */}
              <div className="prose prose-lg max-w-none">
                <h2 className="font-display text-2xl lg:text-3xl font-bold text-primary-dark mb-4">
                  About the Project
                </h2>
                {project.fullDescription.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-text-secondary leading-relaxed mb-4">
                    {paragraph.trim()}
                  </p>
                ))}
              </div>

              {/* Objectives */}
              <div className="mt-10">
                <h2 className="font-display text-2xl lg:text-3xl font-bold text-primary-dark mb-4">
                  Objectives
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

              {/* Results */}
              <div className="mt-10">
                <h2 className="font-display text-2xl lg:text-3xl font-bold text-primary-dark mb-4">
                  Results
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
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Project Info */}
                <div className="p-6 rounded-2xl bg-highlight/30">
                  <h3 className="font-display font-semibold text-lg text-primary-dark mb-4">
                    Project Information
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-primary" aria-hidden="true" />
                      <div>
                        <p className="text-sm text-text-muted">Year</p>
                        <p className="text-text-primary font-medium">{project.year}</p>
                      </div>
                    </li>
                    <li className="flex items-center gap-3">
                      <Tag className="w-5 h-5 text-primary" aria-hidden="true" />
                      <div>
                        <p className="text-sm text-text-muted">Category</p>
                        <p className="text-text-primary font-medium">{project.category}</p>
                      </div>
                    </li>
                    <li className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-primary" aria-hidden="true" />
                      <div>
                        <p className="text-sm text-text-muted">Location</p>
                        <p className="text-text-primary font-medium">{project.location}</p>
                      </div>
                    </li>
                    <li className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-primary" aria-hidden="true" />
                      <div>
                        <p className="text-sm text-text-muted">Participants</p>
                        <p className="text-text-primary font-medium">{project.participants}</p>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Partners */}
                <div className="p-6 rounded-2xl bg-white border border-highlight/50">
                  <h3 className="font-display font-semibold text-lg text-primary-dark mb-4">
                    Partners
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
                    Want a similar project?
                  </h3>
                  <p className="text-white/80 text-sm mb-4">
                    Contact us to discuss your ideas.
                  </p>
                  <Link 
                    href="/en/contact/" 
                    className="inline-flex items-center gap-2 bg-white text-primary-dark px-4 py-2 rounded-lg font-medium hover:bg-highlight transition-colors text-sm"
                  >
                    Contact us
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
