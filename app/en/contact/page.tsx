import type { Metadata } from 'next'
import { Mail, MapPin, Phone, Facebook, Instagram, Youtube, Send } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact | Xanadu Art - Ohrid, Macedonia',
  description: 'Contact Xanadu Art. We are open to collaboration, partnerships, and new projects. Reach us via email, phone, or visit us in Ohrid.',
  alternates: {
    canonical: 'https://xanaduart.mk/en/contact/',
  },
  openGraph: {
    title: 'Contact | Xanadu Art - Ohrid, Macedonia',
    description: 'Contact Xanadu Art. We are open to collaboration and new projects.',
    url: 'https://xanaduart.mk/en/contact/',
  },
}

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'info@xanaduart.mk',
    href: 'mailto:info@xanaduart.mk',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+389 70 123 456',
    href: 'tel:+38970123456',
  },
  {
    icon: MapPin,
    label: 'Address',
    value: 'Kiril i Metodij str. 1, 6000 Ohrid, Macedonia',
    href: 'https://maps.google.com/?q=Ohrid,Macedonia',
  },
]

const socialLinks = [
  { icon: Facebook, label: 'Facebook', href: 'https://facebook.com/xanaduart' },
  { icon: Instagram, label: 'Instagram', href: 'https://instagram.com/xanaduart' },
  { icon: Youtube, label: 'YouTube', href: 'https://youtube.com/xanaduart' },
]

export default function ContactPageEn() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 hero-gradient">
        <div className="absolute inset-0 bg-[url('/images/hero-pattern.svg')] opacity-10" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-accent font-medium mb-4">Contact</span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              We are open to collaboration, partnerships, and new projects. 
              Send us a message and we will respond as soon as possible.
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
                Send us a message
              </h2>
              <form className="space-y-6" action="mailto:info@xanaduart.mk" method="post" encType="text/plain">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
                      Full Name <span className="text-accent">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-highlight/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors outline-none"
                      placeholder="Your name"
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
                    Subject <span className="text-accent">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-highlight/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors outline-none"
                    placeholder="Why are you contacting us?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
                    Message <span className="text-accent">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-highlight/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors outline-none resize-none"
                    placeholder="Your message..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="btn-primary w-full sm:w-auto justify-center"
                >
                  Send message
                  <Send className="w-5 h-5" aria-hidden="true" />
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="font-display text-2xl lg:text-3xl font-bold text-primary-dark mb-6">
                Contact Information
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
                  Follow Us
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
                  Working Hours
                </h3>
                <ul className="space-y-2 text-text-secondary">
                  <li className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-medium text-text-primary">09:00 - 17:00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-medium text-text-primary">10:00 - 14:00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-medium text-text-muted">Closed</span>
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
              Where to Find Us
            </h2>
            <p className="text-text-secondary">
              Our office is located in the heart of Ohrid, easily accessible from all parts of the city.
            </p>
          </div>
          
          <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[16/9] lg:aspect-[21/9]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24023.2860423427!2d20.7947!3d41.1171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1350db0f9e1f8c6f%3A0x5d5d5d5d5d5d5d5d!2sOhrid%2C%20North%20Macedonia!5e0!3m2!1sen!2s!4v1609459200000!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Xanadu Art location in Ohrid"
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
                Attend an Event
              </h2>
              <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
                Follow us on social media to learn about our upcoming projects, 
                workshops, and cultural events.
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
