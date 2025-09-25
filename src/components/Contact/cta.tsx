'use client'
import { MoveRight, PhoneCall, CheckCircle2 } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { useLocale } from '@/contexts/LocaleContext'

const CTA = () => {
  const { locale } = useLocale()

  const content = {
    en: {
      badge: 'Get involved',
      title: 'Together, we can empower youth and uplift communities',
      description:
        'Thay Trust is dedicated to transforming lives. From guiding youngsters into top MNCs through skill training, to empowering women and supporting families in need - your involvement makes all the difference.',
      highlights: [
        'Career training & placement support for youngsters',
        'Educational assistance for underprivileged students',
        'Medical care & health support for families in poverty',
        'Marriage assistance for women from poor backgrounds',
        'Women empowerment & self-sustainability programs',
      ],
      buttons: {
        talk: 'Talk to us',
        support: 'Support now',
      },
    },
    ta: {
      badge: 'சேர்ந்து கொள்ளுங்கள்',
      title: 'இளைஞர்களை வலுப்படுத்தி, சமூகங்களை உயர்த்தலாம்',
      description:
        'தாய் டிரஸ்ட் வாழ்க்கைகளை மாற்றுவதில் அர்ப்பணிப்பு. திறன் பயிற்சி மூலம் இளைஞர்களை முன்னணி நிறுவனங்களில் வழிநடத்துதல், பெண்களை வலுப்படுத்துதல், தேவையுள்ள குடும்பங்களுக்கு ஆதரவு வழங்குதல் - உங்கள் பங்களிப்பு மாற்றத்தை ஏற்படுத்துகிறது.',
      highlights: [
        'இளைஞர்களுக்கு தொழில் பயிற்சி மற்றும் வேலைவாய்ப்பு ஆதரவு',
        'பாதிக்கப்பட்ட மாணவர்களுக்கு கல்வி உதவி',
        'வறுமையில் உள்ள குடும்பங்களுக்கு மருத்துவ உதவி & சுகாதார ஆதரவு',
        'வறுமையில் உள்ள பெண்களுக்கு திருமண உதவி',
        'பெண்கள் வலுப்படுத்தல் & சுயநிறைவு திட்டங்கள்',
      ],
      buttons: {
        talk: 'எங்களை தொடர்பு கொள்ளுங்கள்',
        support: 'இப்போது ஆதரிக்கவும்',
      },
    },
  }

  const t = content[locale as 'en' | 'ta']

  return (
    <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24 py-12 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-10 rounded-lg bg-card p-8 text-center shadow-sm border border-border">
          {/* Badge */}
          <div>
            <Badge className="bg-secondary text-secondary-foreground">
              {t.badge}
            </Badge>
          </div>

          {/* Title + Description */}
          <div className="flex flex-col gap-4 items-center text-center">
            <h4 className="font-regular max-w-2xl text-3xl tracking-tighter md:text-5xl text-foreground">
              {t.title}
            </h4>
            <p className="max-w-2xl text-lg leading-relaxed tracking-tight text-muted-foreground">
              {t.description}
            </p>
          </div>

          {/* Highlights List */}
          <div className="w-full flex justify-center">
            <ul className="max-w-2xl grid gap-2 sm:grid-cols-2 text-left text-base text-muted-foreground">
              {t.highlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-1 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Buttons */}
          <div className="flex flex-row gap-4">
            <Button
              className="gap-3 border-border text-foreground"
              variant="outline"
            >
              {t.buttons.talk} <PhoneCall className="h-4 w-4" />
            </Button>
            <Button className="gap-3 bg-primary text-primary-foreground hover:bg-primary/90">
              {t.buttons.support} <MoveRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CTA
