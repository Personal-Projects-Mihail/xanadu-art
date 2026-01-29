import type { Metadata } from 'next'
import Image from 'next/image'
import { Sparkles, Heart, Lightbulb, Users, Target, Globe, Award, BookOpen, Theater, Music } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us | Xanadu Art - Ohrid, Macedonia',
  description: 'Meet Xanadu Art - a non-profit art organization founded in 2020 in Ohrid, Macedonia. Learn about our mission, vision, and values.',
  alternates: {
    canonical: 'https://xanaduart.mk/en/about/',
  },
  openGraph: {
    title: 'About Us | Xanadu Art - Ohrid, Macedonia',
    description: 'Meet Xanadu Art - a non-profit art organization founded in 2020 in Ohrid, Macedonia.',
    url: 'https://xanaduart.mk/en/about/',
  },
}

const values = [
  {
    icon: Sparkles,
    title: 'Transformative Power of Art',
    description: 'We believe that art has the power to transform young lives, nurturing their talents and social skills.',
  },
  {
    icon: Globe,
    title: 'Intercultural Connection',
    description: 'We see art as a universal language that bridges cultures and creates understanding among people.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation and Experiment',
    description: 'We support artistic experiments and new programs that push the boundaries of traditional forms.',
  },
  {
    icon: Heart,
    title: 'Inclusivity',
    description: 'We create a diverse environment where youth from all backgrounds are welcome to participate and express themselves.',
  },
]

const activities = [
  {
    icon: Theater,
    title: 'Artistic Production',
    description: 'Theatrical, dance, and music productions with young artists participation.',
  },
  {
    icon: BookOpen,
    title: 'Educational Workshops',
    description: 'Exploring new theatrical techniques and pushing the boundaries of traditional arts.',
  },
  {
    icon: Users,
    title: 'Cultural Events',
    description: 'Exhibitions and performances to professionally showcase youth talents.',
  },
  {
    icon: Globe,
    title: 'International Collaborations',
    description: 'Erasmus+ projects and youth exchanges to connect with peers worldwide.',
  },
  {
    icon: Target,
    title: 'Research',
    description: 'Regional studies to identify artistic needs and opportunities.',
  },
]

const expertise = [
  {
    icon: Music,
    title: 'Youth Empowerment through Music',
    description: 'Orchestra programs, collaboration, and high-level performance.',
  },
  {
    icon: Theater,
    title: 'Theater and Performing Arts',
    description: 'Managing productions, teaching dance and acting techniques.',
  },
  {
    icon: Target,
    title: 'Project Management',
    description: 'Coordinating international artistic exchanges and cultural programs.',
  },
  {
    icon: Sparkles,
    title: 'Classical and Traditional Arrangements',
    description: 'Blending classical, popular, and traditional music for modern audiences.',
  },
]

export default function AboutPageEn() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 hero-gradient">
        <div className="absolute inset-0 bg-[url('/images/hero-pattern.svg')] opacity-10" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-accent font-medium mb-4">About Us</span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Xanadu Art
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              A non-profit, non-political, non-denominational organization dedicated to 
              empowering youth through art, culture, and education.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 lg:py-24 soft-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <span className="text-primary font-medium mb-2 block">Our Story</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary-dark mb-6">
                Founded with a vision for change
              </h2>
              <div className="space-y-4 text-text-secondary leading-relaxed">
                <p>
                  Xanadu Art was founded in 2020 in Ohrid, Macedonia, by a group of 
                  enthusiasts who believed in the transformative power of art. Our name 
                  is inspired by the legendary city of Xanadu - a place of beauty, 
                  creativity, and cultural flourishing.
                </p>
                <p>
                  From our beginning, we have been working to create a space where young 
                  people can freely explore their creative potential, acquire new skills, 
                  and build lasting friendships through artistic expression.
                </p>
                <p>
                  Today, Xanadu Art operates locally, nationally, and internationally, 
                  collaborating with organizations across Europe through programs like Erasmus+.
                </p>
              </div>
              
              <div className="mt-8 p-6 bg-white rounded-2xl border border-highlight/50">
                <h3 className="font-display font-semibold text-lg text-primary-dark mb-3">
                  Legal Status
                </h3>
                <ul className="space-y-2 text-text-secondary">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    Non-profit organization
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    Non-political and non-denominational
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    Registered in Republic of Macedonia
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    Headquarters: Ohrid, Macedonia
                  </li>
                </ul>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/about1.jpg"
                  alt="Xanadu Art team at work"
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl bg-accent/20 -z-10" />
              <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-highlight -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Mission */}
            <div className="p-8 lg:p-10 rounded-3xl bg-gradient-to-br from-primary-dark to-primary text-white">
              <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-white" aria-hidden="true" />
              </div>
              <h2 className="font-display text-2xl lg:text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-white/90 leading-relaxed text-lg">
                To empower and connect young people through artistic mediums, providing 
                a platform where they can develop their talents, connect with peers, 
                and contribute to an inclusive cultural landscape.
              </p>
            </div>
            
            {/* Vision */}
            <div className="p-8 lg:p-10 rounded-3xl bg-gradient-to-br from-accent to-highlight">
              <div className="w-14 h-14 rounded-xl bg-white/50 flex items-center justify-center mb-6">
                <Sparkles className="w-7 h-7 text-primary-dark" aria-hidden="true" />
              </div>
              <h2 className="font-display text-2xl lg:text-3xl font-bold text-primary-dark mb-4">Our Vision</h2>
              <p className="text-primary-dark/80 leading-relaxed text-lg">
                A world where every young person has access to arts education and 
                the opportunity to express their creative potential, regardless of 
                their background or circumstances.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-24 gallery-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
            <span className="text-primary font-medium mb-2 block">Our Values</span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-dark mb-4">
              Principles That Guide Us
            </h2>
            <p className="text-text-secondary text-lg">
              These values are the foundation of everything we do and define our approach to working with youth.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="p-6 lg:p-8 rounded-2xl bg-white border border-highlight/50 card-hover"
              >
                <div className="w-14 h-14 rounded-xl hero-gradient flex items-center justify-center mb-5">
                  <value.icon className="w-7 h-7 text-white" aria-hidden="true" />
                </div>
                <h3 className="font-display font-semibold text-xl text-primary-dark mb-3">
                  {value.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
            <span className="text-primary font-medium mb-2 block">Our Activities</span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-dark mb-4">
              What We Do
            </h2>
            <p className="text-text-secondary text-lg">
              Our work covers a wide range of artistic and cultural activities 
              designed to engage and inspire young people.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {activities.map((activity, index) => (
              <div
                key={activity.title}
                className="p-6 lg:p-8 rounded-2xl bg-highlight/30 card-hover"
              >
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-5 shadow-sm">
                  <activity.icon className="w-6 h-6 text-primary" aria-hidden="true" />
                </div>
                <h3 className="font-display font-semibold text-xl text-primary-dark mb-3">
                  {activity.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {activity.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16 lg:py-24 soft-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="text-primary font-medium mb-2 block">Our Expertise</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary-dark mb-6">
                Areas of Expertise
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed mb-8">
                Our team possesses expertise in various artistic disciplines and 
                organizational skills, enabling us to implement complex projects at 
                the highest level.
              </p>
              
              <div className="space-y-6">
                {expertise.map((item, index) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl hero-gradient flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-white" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-lg text-primary-dark mb-1">
                        {item.title}
                      </h3>
                      <p className="text-text-secondary">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <Image
                src="/images/about2.jpg"
                alt="Young artists in action"
                width={600}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 lg:py-24 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {[
              { number: '500+', label: 'Young Participants' },
              { number: '15+', label: 'International Projects' },
              { number: '4', label: 'Years of Existence' },
              { number: '20+', label: 'Partner Organizations' },
            ].map((stat, index) => (
              <div key={stat.label} className="text-center">
                <p className="font-display text-4xl lg:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </p>
                <p className="text-white/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
