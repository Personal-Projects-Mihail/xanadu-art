import type { Metadata } from 'next'
import Image from 'next/image'
import { Sparkles, Heart, Lightbulb, Users, Target, Globe, Award, BookOpen } from 'lucide-react'

export const metadata: Metadata = {
  title: 'За нас | Ксанаду Арт - Охрид, Македонија',
  description: 'Запознајте ја Ксанаду Арт - непрофитна уметничка организација основана во 2020 година во Охрид, Македонија. Дознајте ја нашата мисија, визија и вредности.',
  alternates: {
    canonical: 'https://xanaduart.mk/about/',
  },
  openGraph: {
    title: 'За нас | Ксанаду Арт - Охрид, Македонија',
    description: 'Запознајте ја Ксанаду Арт - непрофитна уметничка организација основана во 2020 година.',
    url: 'https://xanaduart.mk/about/',
  },
}

const values = [
  {
    icon: Sparkles,
    title: 'Трансформативна моќ на уметноста',
    description: 'Веруваме дека уметноста има моќ да ги трансформира животите на младите, негувајќи ги нивните таленти и социјални вештини.',
  },
  {
    icon: Globe,
    title: 'Меѓукултурна поврзаност',
    description: 'Уметноста ја гледаме како универзален јазик кој ги помостува културите и создава разбирање меѓу луѓето.',
  },
  {
    icon: Lightbulb,
    title: 'Иновација и експеримент',
    description: 'Ги поддржуваме уметничките експерименти и новите програми кои ги туркаат границите на традиционалните форми.',
  },
  {
    icon: Heart,
    title: 'Инклузивност',
    description: 'Создаваме разновидна средина каде младите од сите позадини се добредојдени да учествуваат и да се изразуваат.',
  },
]

const activities = [
  {
    icon: Theater,
    title: 'Уметничка продукција',
    description: 'Театарски, танцови и музички продукции со учество на млади уметници.',
  },
  {
    icon: BookOpen,
    title: 'Едукативни работилници',
    description: 'Истражување на нови театарски техники и туркање на границите на традиционалните уметности.',
  },
  {
    icon: Users,
    title: 'Културни настани',
    description: 'Изложби и перформанси за професионално прикажување на младинските таленти.',
  },
  {
    icon: Globe,
    title: 'Меѓународни соработки',
    description: 'Еразмус+ проекти и размени на млади за поврзување со врсници ширум светот.',
  },
  {
    icon: Target,
    title: 'Истражување',
    description: 'Регионални студии за идентификување на уметничките потреби и можности.',
  },
]

const expertise = [
  {
    icon: Music,
    title: 'Зајакнување на млади преку музика',
    description: 'Оркестарски програми, соработка и перформанси на високо ниво.',
  },
  {
    icon: Theater,
    title: 'Театар и изведбени уметности',
    description: 'Менаџирање продукции, предавање танц и глумечки техники.',
  },
  {
    icon: Target,
    title: 'Менаџмент на проекти',
    description: 'Координирање меѓународни уметнички размени и културни програми.',
  },
  {
    icon: Sparkles,
    title: 'Класични и традиционални аранжмани',
    description: 'Мешање на класична, популарна и традиционална музика за современи публики.',
  },
]

// Import missing icons
import { Theater, Music } from 'lucide-react'

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 hero-gradient">
        <div className="absolute inset-0 bg-[url('/images/hero-pattern.svg')] opacity-10" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-accent font-medium mb-4">За нас</span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Ксанаду Арт
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Непрофитна, неполитичка и неденоминациска организација посветена на 
              зајакнување на младите преку уметност, култура и образование.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 lg:py-24 soft-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <span className="text-primary font-medium mb-2 block">Нашата приказна</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary-dark mb-6">
                Основани со визија за промена
              </h2>
              <div className="space-y-4 text-text-secondary leading-relaxed">
                <p>
                  Ксанаду Арт е основана во 2020 година во Охрид, Македонија, од група 
                  ентузијасти кои веруваа во трансформативната моќ на уметноста. Нашето 
                  име е инспирирано од легендарниот град Ксанаду - место на убавина, 
                  креативност и културен процвет.
                </p>
                <p>
                  Од нашиот почеток, работиме на создавање простор каде младите луѓе 
                  можат слободно да ги истражуваат своите креативни потенцијали, да 
                  стекнуваат нови вештини и да градат трајни пријателства преку 
                  уметничкиот израз.
                </p>
                <p>
                  Денес, Ксанаду Арт функционира локално, национално и интернационално, 
                  соработувајќи со организации од цела Европа преку програми како Еразмус+.
                </p>
              </div>
              
              <div className="mt-8 p-6 bg-white rounded-2xl border border-highlight/50">
                <h3 className="font-display font-semibold text-lg text-primary-dark mb-3">
                  Правен статус
                </h3>
                <ul className="space-y-2 text-text-secondary">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    Непрофитна организација
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    Неполитичка и неденоминациска
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    Регистрирана во Република Македонија
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    Седиште: Охрид, Македонија
                  </li>
                </ul>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/about-story.jpg"
                  alt="Ксанаду Арт тим на работа"
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
              <h2 className="font-display text-2xl lg:text-3xl font-bold mb-4">Наша мисија</h2>
              <p className="text-white/90 leading-relaxed text-lg">
                Да ги зајакнеме и поврземе младите луѓе преку уметнички медиуми, 
                обезбедувајќи платформа каде можат да ги развијат своите таленти, 
                да се поврзат со врсници и да придонесат кон инклузивен културен пејзаж.
              </p>
            </div>
            
            {/* Vision */}
            <div className="p-8 lg:p-10 rounded-3xl bg-gradient-to-br from-accent to-highlight">
              <div className="w-14 h-14 rounded-xl bg-white/50 flex items-center justify-center mb-6">
                <Sparkles className="w-7 h-7 text-primary-dark" aria-hidden="true" />
              </div>
              <h2 className="font-display text-2xl lg:text-3xl font-bold text-primary-dark mb-4">Наша визија</h2>
              <p className="text-primary-dark/80 leading-relaxed text-lg">
                Свет каде секое младо лице има пристап до уметничко образование и 
                можност да го изрази својот креативен потенцијал, без разлика на 
                нивната позадина или околности.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-24 gallery-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
            <span className="text-primary font-medium mb-2 block">Нашите вредности</span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-dark mb-4">
              Принципи кои не водат
            </h2>
            <p className="text-text-secondary text-lg">
              Овие вредности се темелот на се што правиме и го дефинираат нашиот пристап кон работата со младите.
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
            <span className="text-primary font-medium mb-2 block">Нашите активности</span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-dark mb-4">
              Што правиме
            </h2>
            <p className="text-text-secondary text-lg">
              Нашата работа опфаќа широк спектар на уметнички и културни активности 
              дизајнирани да ги ангажираат и инспирираат младите.
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
              <span className="text-primary font-medium mb-2 block">Нашето знаење</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary-dark mb-6">
                Области на експертиза
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed mb-8">
                Нашиот тим поседува експертиза во различни уметнички дисциплини и 
                организациски вештини, што ни овозможува да спроведуваме комплексни 
                проекти на највисоко ниво.
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
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/expertise-image.jpg"
                  alt="Млади уметници во акција"
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-2xl bg-accent/20 -z-10" />
              <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-highlight -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 lg:py-24 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {[
              { number: '500+', label: 'Млади учесници' },
              { number: '15+', label: 'Меѓународни проекти' },
              { number: '4', label: 'Години постоење' },
              { number: '20+', label: 'Партнерски организации' },
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
