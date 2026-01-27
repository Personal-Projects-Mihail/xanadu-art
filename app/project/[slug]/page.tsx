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
    category: 'Еразмус+',
    location: 'Охрид, Македонија',
    participants: '40 млади од 8 земји',
    description: `
      Lights, Camera, Action е меѓународен проект за размена на млади финансиран од 
      програмата Еразмус+ на Европската Унија. Проектот собра 40 млади луѓе од 8 
      различни земји заедно во Охрид, Македонија, за да истражуваат теми поврзани со 
      филмската уметност и медиумската писменост.
    `,
    fullDescription: `
      Во текот на десетдневната размена, учесниците имаа можност да учат од искусни 
      филмски работници и медиумски експерти, да создаваат свои кратки филмови и 
      да развијат вештини за критичко размислување за медиумите.
      
      Проектот вклучуваше работилници за снимање, монтажа, сценарио и режија, како 
      и сесии за дискусија за улогата на медиумите во современото општество.
      
      Учесниците работеа во мултинационални тимови, што им овозможи не само да ги 
      развијат своите технички вештини, туку и да градат меѓукултурни пријателства 
      и да го подобрат своето разбирање за различните култури.
    `,
    objectives: [
      'Да се развијат медиумски вештини кај младите',
      'Да се промовира критичкото размислување за медиумите',
      'Да се фасилитира меѓукултурен дијалог',
      'Да се поттикне креативното изразување преку филм',
      'Да се изградат трајни партнерства меѓу организациите',
    ],
    results: [
      'Снимени 8 кратки филмови од учесниците',
      'Организирана јавна проекција во Охрид',
      'Создадена онлајн платформа за споделување на филмовите',
      'Установени партнерства со 8 организации од Европа',
    ],
    images: [
      '/images/project-lights-camera-action-1.jpg',
      '/images/project-lights-camera-action-2.jpg',
      '/images/project-lights-camera-action-3.jpg',
    ],
    partners: ['Erasmus+', 'European Union', '8 partner organizations'],
  },
  'ohrid-youth-orchestra': {
    title: 'Охридски младински оркестар',
    year: '2023',
    category: 'Музика',
    location: 'Охрид, Македонија',
    participants: '60 млади музичари',
    description: `
      Охридскиот младински оркестар е програма која обединува млади музичари од 
      Охрид и регионот за заеднички концерти и перформанси на високо ниво.
    `,
    fullDescription: `
      Охридскиот младински оркестар претставува амбициозен проект кој има за цел 
      да ги собере најталентираните млади музичари од регионот и да им овозможи 
      професионално оркестарско искуство.
      
      Оркестарот работи под менторство на искусни диригенти и музичари, со фокус 
      на класична музика, но исто така вклучува и аранжмани на популарна и 
      традиционална музика.
      
      Во текот на годината, оркестарот одржа повеќе концерти во Охрид и други 
      градови во Македонија, вклучувајќи го и традиционалниот новогодишен концерт.
    `,
    objectives: [
      'Да се развијат оркестарски вештини кај младите музичари',
      'Да се промовира класичната музика меѓу младите',
      'Да се создаде платформа за соработка меѓу музичарите',
      'Да се збогати културниот живот во Охрид',
    ],
    results: [
      'Организирани 5 јавни концерти',
      'Учество на 60 млади музичари',
      'Изведени дела од Бах, Моцарт, Бетовен и македонски композитори',
      'Соработка со гости-музичари од странство',
    ],
    images: [
      '/images/project-orchestra-1.jpg',
      '/images/project-orchestra-2.jpg',
      '/images/project-orchestra-3.jpg',
    ],
    partners: ['Општина Охрид', 'Музичко училиште Охрид'],
  },
  'theatrical-innovations': {
    title: 'Театарски иновации',
    year: '2023',
    category: 'Театар',
    location: 'Охрид, Македонија',
    participants: '25 млади глумци',
    description: `
      Театарски иновации е интензивна работилница за современи театарски техники 
      и експериментални форми на изведба.
    `,
    fullDescription: `
      Работилницата Театарски иновации беше дизајнирана за млади глумци и 
      театарски ентузијасти кои сакаат да ги прошират своите хоризонти и да 
      експериментираат со нови форми на театарски израз.
      
      Во текот на месец дена, учесниците работеа со искусни театарски работници 
      кои ги запознаа со техники како физички театар, импровизација, форум театар 
      и кореографија за глумци.
      
      Работилницата заврши со јавна изведба која ги комбинираше сите научени 
      техники во една иновативна театарска продукција.
    `,
    objectives: [
      'Да се запознаат младите со современи театарски техники',
      'Да се поттикне експериментирање со формата',
      'Да се развијат сценски вештини',
      'Да се создаде нова театарска продукција',
    ],
    results: [
      '25 млади глумци обучени во современи техники',
      'Создадена оригинална театарска претстава',
      '3 јавни изведби во Охрид',
      'Публика од над 300 гледачи',
    ],
    images: [
      '/images/project-theater-1.jpg',
      '/images/project-theater-2.jpg',
      '/images/project-theater-3.jpg',
    ],
    partners: ['Народен театар Охрид'],
  },
  'cultural-horizons': {
    title: 'Културни хоризонти',
    year: '2024',
    category: 'Културен настан',
    location: 'Охрид, Македонија',
    participants: '200+ посетители',
    description: `
      Културни хоризонти е серија на културни настани кои ги прикажуваат 
      традиционалните и современите уметнички форми од регионот.
    `,
    fullDescription: `
      Културни хоризонти претставува амбициозен проект кој има за цел да го 
      збогати културниот живот во Охрид и да ги прикаже различните уметнички 
      форми кои се присутни во регионот.
      
      Серијата вклучува изложби на ликовна уметност, концерти на традиционална 
      и современа музика, театарски перформанси и работилници за јавноста.
      
      Проектот ги поврзува уметниците од различни генерации и дисциплини, 
      создавајќи простор за дијалог и соработка.
    `,
    objectives: [
      'Да се промовира културното наследство на регионот',
      'Да се поддржат локалните уметници',
      'Да се збогати културниот живот во Охрид',
      'Да се создаде дијалог меѓу генерациите',
    ],
    results: [
      'Организирани 10 културни настани',
      'Учество на 30+ уметници',
      'Посетеност од над 200 луѓе',
      'Медиумска покриеност во локалните медиуми',
    ],
    images: [
      '/images/project-cultural-horizons-1.jpg',
      '/images/project-cultural-horizons-2.jpg',
      '/images/project-cultural-horizons-3.jpg',
    ],
    partners: ['Општина Охрид', 'Културно наследство Охрид'],
  },
  'youth-voices': {
    title: 'Гласови на младите',
    year: '2024',
    category: 'Театарска работилница',
    location: 'Охрид, Македонија',
    participants: '20 млади глумци',
    description: `
      Интензивна театарска работилница фокусирана на развивање на гласовни 
      техники и сценско присуство.
    `,
    fullDescription: `
      Гласови на младите е специјализирана работилница посветена на развивање 
      на гласовните вештини и сценското присуство кај младите глумци.
      
      Под менторство на искусни глумци и вокални coaches, учесниците работеа 
      на техники за дијафрагмално дишење, артикулација, проекција на гласот и 
      емоционална експресија преку гласот.
      
      Работилницата вклучуваше и сесии за текстуална анализа и интерпретација, 
      со фокус на современа драматургија.
    `,
    objectives: [
      'Да се развијат гласовни техники',
      'Да се подобри сценското присуство',
      'Да се изгради самодоверба кај младите глумци',
      'Да се создаде нова театарска продукција',
    ],
    results: [
      '20 млади глумци обучени',
      'Развиени вештини за гласовна техника',
      'Завршна јавна изведба',
      'Видео записи на перформансите',
    ],
    images: [
      '/images/project-youth-voices-1.jpg',
      '/images/project-youth-voices-2.jpg',
      '/images/project-youth-voices-3.jpg',
    ],
    partners: ['Народен театар Охрид'],
  },
  'art-bridges': {
    title: 'Уметнички мостови',
    year: '2023',
    category: 'Меѓународна соработка',
    location: 'Охрид, Македонија',
    participants: '30 млади уметници од 3 земји',
    description: `
      Проект за поврзување на млади уметници од Македонија и соседните земји 
      преку заеднички креативни активности.
    `,
    fullDescription: `
      Уметнички мостови е проект кој ги поврзува младите уметници од Македонија, 
      Србија и Албанија за заедничка креативна работа и размена на искуства.
      
      Проектот вклучуваше резиденција во Охрид каде уметниците работеа заедно 
      на интердисциплинарни проекти кои ги комбинираа театарот, музиката и 
      ликовната уметност.
      
      Резултатот беше серија на перформанси и изложби кои беа прикажани во 
      сите три земји-учеснички.
    `,
    objectives: [
      'Да се промовира регионална соработка',
      'Да се развијат интердисциплинарни проекти',
      'Да се изградат трајни врски меѓу уметниците',
      'Да се премостат културните разлики',
    ],
    results: [
      '30 млади уметници вклучени',
      'Создадени 5 интердисциплинарни проекти',
      'Турнеја во 3 земји',
      'Установени партнерства со организации од регионот',
    ],
    images: [
      '/images/project-art-bridges-1.jpg',
      '/images/project-art-bridges-2.jpg',
      '/images/project-art-bridges-3.jpg',
    ],
    partners: ['Partner organizations from Serbia and Albania'],
  },
  'dance-fusion': {
    title: 'Танц фузија',
    year: '2022',
    category: 'Танц',
    location: 'Охрид, Македонија',
    participants: '15 танчери',
    description: `
      Фузија на традиционални македонски танци со современи танцови форми.
    `,
    fullDescription: `
      Танц фузија е проект кој ги комбинира богатите традиционални македонски 
      танци со современите танцови форми за создавање на нешто ново и уникатно.
      
      Проектот собра танчери со различни позадини - од традиционални фолклорни 
      танчери до современи танчари - кои заедно работеа на создавање на нова 
      кореографија.
      
      Резултатот беше перформанс кој ги почитува корените на македонската 
      традиција додека истовремено ја турка уметноста напред со современи 
      танцови техники.
    `,
    objectives: [
      'Да се зачува традиционалното наследство',
      'Да се создаде нова танцова форма',
      'Да се поврзат традиционалните и современите танчери',
      'Да се промовира македонската култура',
    ],
    results: [
      'Создадена нова кореографија',
      '3 јавни перформанси',
      'Видео документација на проектот',
      'Регионална турнеја',
    ],
    images: [
      '/images/project-dance-fusion-1.jpg',
      '/images/project-dance-fusion-2.jpg',
      '/images/project-dance-fusion-3.jpg',
    ],
    partners: ['Фолклорен ансамбл Охрид'],
  },
  'creative-labs': {
    title: 'Креативни лаборатории',
    year: '2022',
    category: 'Образование',
    location: 'Охрид, Македонија',
    participants: '50 млади',
    description: `
      Серија работилници за развивање на креативно размислување и уметнички вештини.
    `,
    fullDescription: `
      Креативни лаборатории е серија од работилници дизајнирани да им помогнат 
      на младите да ги развијат своите креативни потенцијали и уметнички вештини.
      
      Работилниците опфатија различни теми - од цртање и сликање, преку креативно 
      пишување, до основи на глумата и танцот. Секоја работилница беше водена од 
      искусен уметник или едукатор.
      
      Проектот имаше за цел да го направи уметничкото образование достапно за 
      сите млади во Охрид, без разлика на нивната претходна искуство.
    `,
    objectives: [
      'Да се развие креативното размислување',
      'Да се научат основни уметнички вештини',
      'Да се направи уметноста достапна за сите',
      'Да се откријат нови таленти',
    ],
    results: [
      'Организирани 10 работилници',
      '50 млади учесници',
      'Завршна изложба на создадените дела',
      'Брошура со активности за наставници',
    ],
    images: [
      '/images/project-creative-labs-1.jpg',
      '/images/project-creative-labs-2.jpg',
      '/images/project-creative-labs-3.jpg',
    ],
    partners: ['Општина Охрид', 'Образовни институции'],
  },
  'rising-stars': {
    title: 'Иѕвијувајќи ѕвезди',
    year: '2021',
    category: 'Младинска програма',
    location: 'Охрид, Македонија',
    participants: '30 млади таленти',
    description: `
      Програма за откривање и поддршка на млади уметнички таленти од Охрид и регионот.
    `,
    fullDescription: `
      Иѕвијувајќи ѕвезди е програма дизајнирана да ги идентификува и поддржи 
      најталентираните млади уметници од Охрид и околината.
      
      Преку аудиции и препораки, избравме 30 млади луѓе со изразен уметнички 
      потенцијал кои добија менторство, обука и можност да се прикажат на 
      јавни настани.
      
      Програмата вклучуваше работилници, индивидуални часови со ментори и 
      финален концерт/изложба каде учесниците ги прикажаа своите постигнувања.
    `,
    objectives: [
      'Да се откријат млади таленти',
      'Да се обезбеди менторство',
      'Да се создадат можности за прикажување',
      'Да се изгради самодоверба',
    ],
    results: [
      '30 млади таленти идентификувани',
      '100+ часови менторство',
      'Финален концерт со 200+ гледачи',
      'Неколку учесници продолжија со уметничка кариера',
    ],
    images: [
      '/images/project-rising-stars-1.jpg',
      '/images/project-rising-stars-2.jpg',
      '/images/project-rising-stars-3.jpg',
    ],
    partners: ['Музичко училиште Охрид', 'Уметничко училиште'],
  },
  'ohrid-summer-arts': {
    title: 'Охридско лето на уметноста',
    year: '2021',
    category: 'Фестивал',
    location: 'Охрид, Македонија',
    participants: '500+ посетители',
    description: `
      Летен фестивал на уметноста со изложби, перформанси и работилници.
    `,
    fullDescription: `
      Охридско лето на уметноста е фестивал кој го одбележа крајот на летото со 
      серија на уметнички настани низ градот.
      
      Фестивалот вклучуваше изложби на ликовна уметност во јавни простори, 
      улични перформанси, концерти на отворено и работилници за јавноста.
      
      Целта беше да се направи уметноста достапна за сите жители и посетители 
      на Охрид и да се збогати културниот живот во градот.
    `,
    objectives: [
      'Да се збогати културниот живот во Охрид',
      'Да се направи уметноста достапна за сите',
      'Да се промовираат локалните уметници',
      'Да се привлечат туристи',
    ],
    results: [
      'Организирани 15 настани',
      'Посетеност од 500+ луѓе',
      'Учество на 40+ уметници',
      'Медиумска покриеност',
    ],
    images: [
      '/images/project-summer-arts-1.jpg',
      '/images/project-summer-arts-2.jpg',
      '/images/project-summer-arts-3.jpg',
    ],
    partners: ['Општина Охрид', 'Туристичка организација'],
  },
  'foundation': {
    title: 'Основање на Ксанаду Арт',
    year: '2020',
    category: 'Организација',
    location: 'Охрид, Македонија',
    participants: '5 основачи',
    description: `
      Основање на организацијата и првите чекори во градење на уметничка заедница.
    `,
    fullDescription: `
      Ксанаду Арт беше основана во 2020 година од група од пет ентузијасти кои 
      споделуваа заедничка визија за создавање простор за младите да се изразуваат 
      преку уметноста.
      
      Иако почетокот беше предизвикувачки поради пандемијата, успеавме да 
      воспоставиме основите на организацијата и да ги започнеме првите активности 
      онлајн и со мали групи.
      
      Овој период ни овозможи да ја дефинираме нашата мисија и визија и да 
      воспоставиме контакти со идните партнери.
    `,
    objectives: [
      'Да се воспостави организацијата',
      'Да се дефинира мисијата и визијата',
      'Да се изградат партнерства',
      'Да се започнат првите активности',
    ],
    results: [
      'Регистрирана организација',
      'Изградена основна структура',
      'Установени први партнерства',
      'Организирани онлајн активности',
    ],
    images: [
      '/images/project-foundation-1.jpg',
      '/images/project-foundation-2.jpg',
      '/images/project-foundation-3.jpg',
    ],
    partners: ['Локални уметници', 'Волонтери'],
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
      title: 'Проект не е пронајден | Ксанаду Арт',
    }
  }
  
  return {
    title: `${project.title} | Ксанаду Арт - Охрид, Македонија`,
    description: project.description,
    alternates: {
      canonical: `https://xanaduart.mk/project/${params.slug}/`,
    },
    openGraph: {
      title: `${project.title} | Ксанаду Арт`,
      description: project.description,
      url: `https://xanaduart.mk/project/${params.slug}/`,
      images: [
        {
          url: `https://xanaduart.mk${project.images[0]}`,
          alt: project.title,
        },
      ],
    },
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
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
              {/* Gallery */}
              <div className="grid grid-cols-2 gap-4 mb-10">
                <div className="col-span-2 relative aspect-video rounded-2xl overflow-hidden">
                  <Image
                    src={project.images[0]}
                    alt={`${project.title} - главна слика`}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                {project.images.slice(1).map((image, index) => (
                  <div key={index} className="relative aspect-square rounded-2xl overflow-hidden">
                    <Image
                      src={image}
                      alt={`${project.title} - слика ${index + 2}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>

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
