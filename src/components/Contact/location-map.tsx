'use client'
import { useLocale } from '@/contexts/LocaleContext'

export default function LocationMap() {
  const { locale } = useLocale()

  const content = {
    en: {
      badge: 'Our Location',
      heading: 'Our Location',
      subtitle:
        "Visit our office in Bella Vista, NSW. We're conveniently located and easily accessible.",
    },
    ta: {
      badge: 'எங்கள் இடம்',
      heading: 'எங்கள் இடம்',
      subtitle:
        'எங்கள் அலுவலகத்தை பெல்லா விஸ்டா, நியூ சவுத் வேல்ஸில் பாருங்கள். எங்களை எளிதாக கண்டுபிடிக்கவும் அணுகவும் முடியும்.',
    },
  }

  const t = content[locale as 'en' | 'ta']

  return (
    <section className="py-16 px-4 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <div className="mb-2 flex items-center justify-center">
            <div className="h-1 w-12 bg-primary mr-4"></div>
            <p className="text-primary font-medium uppercase tracking-wider text-sm">
              {t.badge}
            </p>
            <div className="h-1 w-12 bg-primary ml-4"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium mb-4">
            {t.heading.split(' ')[0]}{' '}
            <span className="text-primary">{t.heading.split(' ')[1]}</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{t.subtitle}</p>
        </div>
        <div className="relative overflow-hidden rounded-xl shadow-md h-[500px] border border-gray-100">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.0456510077587!2d150.9456!3d-33.7356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12a10366d5f58f%3A0x5017d681632b0b0!2s217%2F14%20Lexington%20Dr%2C%20Bella%20Vista%20NSW%202153%2C%20Australia!5e0!3m2!1sen!2sus!4v1647072643673!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="JRTELCO DESIGN Location"
          ></iframe>
        </div>
      </div>
    </section>
  )
}
