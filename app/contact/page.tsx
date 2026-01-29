import type { Metadata } from 'next'
import { Mail, MapPin, Phone, Facebook, Send } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Контакт | Ксанаду Арт - Охрид, Македонија',
  description: 'Контактирајте ја Ксанаду Арт. Отворени сме за соработка, партнерства и нови проекти. Достапни сме на email, телефон или директно во Охрид.',
  alternates: {
    canonical: 'https://xanaduart.mk/contact/',
  },
  openGraph: {
    title: 'Контакт | Ксанаду Арт - Охрид, Македонија',
    description: 'Контактирајте ја Ксанаду Арт. Отворени сме за соработка и нови проекти.',
    url: 'https://xanaduart.mk/contact/',
  },
}

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'xanadu_ohrid@yahoo.com',
    href: 'mailto:xanadu_ohrid@yahoo.com',
  },
  {
    icon: Phone,
    label: 'Телефон',
    value: '+389 75 308 447',
    href: 'tel:+38975308447',
  },
  {
    icon: MapPin,
    label: 'Адреса',
    value: 'ул. „Петар Чаулев" 52, 6000 Охрид, Македонија',
    href: 'https://maps.app.goo.gl/YLPtZ9A3Rt7uvv5A9',
  },
]

const socialLinks = [
  { icon: Facebook, label: 'Facebook', href: 'https://www.facebook.com/xanaduartngo' },
]

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 hero-gradient">
        <div className="absolute inset-0 bg-[url('/images/hero-pattern.svg')] opacity-10" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-accent font-medium mb-4">Контакт</span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Контактирајте нè
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Отворени сме за соработка, партнерства и нови проекти. 
              Испратете ни порака и ќе ви одговориме најбрзо што можеме.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="font-display text-2xl lg:text-3xl font-bold text-primary-dark mb-6">
                Испратете ни порака
              </h2>
              <form className="space-y-6" action="mailto:xanadu_ohrid@yahoo.com" method="post" encType="text/plain">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
                      Име и презиме <span className="text-accent">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-highlight/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors outline-none"
                      placeholder="Вашето име"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                      Email <span className="text-accent">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-highlight/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors outline-none"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-text-primary mb-2">
                    Наслов <span className="text-accent">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-highlight/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors outline-none"
                    placeholder="Зошто нè контактирате?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
                    Порака <span className="text-accent">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-highlight/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors outline-none resize-none"
                    placeholder="Вашата порака..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="btn-primary w-full sm:w-auto justify-center"
                >
                  Испрати порака
                  <Send className="w-5 h-5" aria-hidden="true" />
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="font-display text-2xl lg:text-3xl font-bold text-primary-dark mb-6">
                Информации за контакт
              </h2>
              
              <div className="space-y-6 mb-10">
                {contactInfo.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.icon === MapPin ? '_blank' : undefined}
                    rel={item.icon === MapPin ? 'noopener noreferrer' : undefined}
                    className="flex items-start gap-4 p-4 rounded-xl bg-highlight/30 hover:bg-highlight/50 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-xl hero-gradient flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-white" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-sm text-text-muted mb-1">{item.label}</p>
                      <p className="text-text-primary font-medium">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h3 className="font-display font-semibold text-lg text-primary-dark mb-4">
                  Следете нè
                </h3>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-highlight/50 flex items-center justify-center hover:bg-primary hover:text-white text-primary transition-colors"
                      aria-label={social.label}
                    >
                      <social.icon className="w-6 h-6" aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Working Hours */}
              <div className="mt-10 p-6 rounded-2xl bg-white border border-highlight/50">
                <h3 className="font-display font-semibold text-lg text-primary-dark mb-4">
                  Работно време
                </h3>
                <ul className="space-y-2 text-text-secondary">
                  <li className="flex justify-between">
                    <span>Понеделник - Петок</span>
                    <span className="font-medium text-text-primary">09:00 - 17:00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Сабота</span>
                    <span className="font-medium text-text-primary">10:00 - 14:00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Недела</span>
                    <span className="font-medium text-text-muted">Затворено</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 lg:py-24 soft-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="font-display text-2xl lg:text-3xl font-bold text-primary-dark mb-4">
              Каде може да нè најдете
            </h2>
            <p className="text-text-secondary">
              Нашата канцеларија се наоѓа во срцето на Охрид, лесно достапна од сите делови на градот.
            </p>
          </div>
          
          <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[16/9] lg:aspect-[21/9]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d150.11!2d20.801!3d41.117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s%D0%9F%D0%B5%D1%82%D0%B0%D1%80%20%D0%A7%D0%B0%D1%83%D0%BB%D0%B5%D0%B2%2052%2C%20%D0%9E%D1%85%D1%80%D0%B8%D0%B4!5e0!3m2!1sen!2s!4v1706544000000!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Локација на Ксанаду Арт во Охрид"
              className="absolute inset-0"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 hero-gradient" />
            <div className="absolute inset-0 bg-[url('/images/cta-pattern.svg')] opacity-10" />
            
            <div className="relative z-10 px-6 py-12 lg:px-16 lg:py-20 text-center">
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                Дојдете на настан
              </h2>
              <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
                Следете нè на социјалните мрежи за да дознаете за нашите следни 
                проекти, работилници и културни настани.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-medium hover:bg-white/20 transition-colors inline-flex items-center gap-2"
                  >
                    <social.icon className="w-5 h-5" aria-hidden="true" />
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
