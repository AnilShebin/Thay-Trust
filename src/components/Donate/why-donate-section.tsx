'use client'
import { CheckCircle, Handshake, Lightbulb, ShieldCheck } from 'lucide-react'
import { useLocale } from '@/contexts/LocaleContext'

export default function WhyDonateSection() {
  const { locale } = useLocale()

  const content = {
    en: {
      heading: (
        <>
          Why <span className="text-primary">Donate</span> to Thay Trust?
        </>
      ),
      description:
        'Your trust is our greatest asset. We are committed to making every contribution count towards a brighter future.',
      reasons: [
        {
          icon: <CheckCircle className="size-6 text-primary" />,
          title: 'Direct Impact',
          description:
            '100% of your donation directly funds our programs, ensuring maximum impact on the ground.',
        },
        {
          icon: <ShieldCheck className="size-6 text-primary" />,
          title: 'Transparency',
          description:
            'We maintain full transparency in our operations, providing regular updates on how funds are utilized.',
        },
        {
          icon: <Handshake className="size-6 text-primary" />,
          title: 'Community-Led',
          description:
            'Our initiatives are designed and implemented in close collaboration with local communities.',
        },
        {
          icon: <Lightbulb className="size-6 text-primary" />,
          title: 'Sustainable Change',
          description:
            'We focus on long-term solutions that empower individuals and communities for lasting change.',
        },
      ],
    },
    ta: {
      heading: (
        <>
          ஏன் <span className="text-primary">நன்கொடை</span> செய்ய வேண்டும்?
        </>
      ),
      description:
        'உங்கள் நம்பிக்கையே எங்கள் மிகப் பெரிய சொத்து. ஒவ்வொரு பங்களிப்பும் उज்ஜ்வலமான எதிர்காலத்திற்காக பயனுள்ளதாக இருக்கும் என நாங்கள் உறுதியாக இருக்கிறோம்.',
      reasons: [
        {
          icon: <CheckCircle className="size-6 text-primary" />,
          title: 'நேரடி தாக்கம்',
          description:
            'உங்கள் 100% நன்கொடையும் எங்கள் திட்டங்களுக்கு நேரடியாக செல்கிறது, தரையில் அதிகபட்ச தாக்கத்தை உறுதிசெய்கிறது.',
        },
        {
          icon: <ShieldCheck className="size-6 text-primary" />,
          title: 'வெளிப்படைத்தன்மை',
          description:
            'நாங்கள் முழுமையான வெளிப்படைத்தன்மையை பராமரிக்கிறோம் மற்றும் நிதிகள் எவ்வாறு பயன்படுத்தப்படுகின்றன என்பதை வழக்கமான புதுப்பிப்புகளுடன் வழங்குகிறோம்.',
        },
        {
          icon: <Handshake className="size-6 text-primary" />,
          title: 'சமூக முன்னிலை',
          description:
            'எங்கள் முயற்சிகள் உள்ளூர் சமூகங்களுடன் நெருங்கிய ஒத்துழைப்பில் வடிவமைக்கப்பட்டு செயல்படுத்தப்படுகின்றன.',
        },
        {
          icon: <Lightbulb className="size-6 text-primary" />,
          title: 'நிலையான மாற்றம்',
          description:
            'நாங்கள் நீண்டகால தீர்வுகளில் கவனம் செலுத்துகிறோம், இது தனிநபர்கள் மற்றும் சமூகங்களை நீடித்த மாற்றத்திற்காக அதிகாரமளிக்கிறது.',
        },
      ],
    },
  }

  const t = content[locale as 'en' | 'ta']

  return (
    <section className="px-5 sm:px-10 md:px-16 lg:px-20 py-16 lg:py-24 bg-muted">
      <div className="mx-auto max-w-7xl text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
          {t.heading}
        </h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          {t.description}
        </p>

        {/* Reasons */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.reasons.map((reason, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4">{reason.icon}</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {reason.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
