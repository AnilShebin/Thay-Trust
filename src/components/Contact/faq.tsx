'use client'
import { PhoneCall } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { useLocale } from '@/contexts/LocaleContext'

const FAQ = () => {
  const { locale } = useLocale()

  const content = {
    en: {
      badge: 'FAQ',
      heading: 'Thay Trust – Empowering Youth & Supporting Communities',
      subtitle:
        "Thay Trust is dedicated to uplifting youngsters by providing training, career guidance, and helping them secure placements in top MNCs. Alongside this, we extend support for women’s empowerment, educational needs, medical care, and marriage assistance for those from underprivileged backgrounds.",
      button: 'Any questions? Reach out',
      faqs: [
        {
          q: 'What is Thay Trust?',
          a: 'Thay Trust is a non-profit organization dedicated to empowering youth and women. The trust provides career-focused training programs, helps youngsters get placed in top MNCs, and supports underprivileged women through education, healthcare, and marriage assistance.',
        },
        {
          q: 'Is Thay Trust a registered organisation?',
          a: 'Yes. Thay Trust is a registered non-profit organization operating transparently under proper legal and social service guidelines.',
        },
        {
          q: 'What does Thay Trust do?',
          a: (
            <>
              Thay Trust mainly focuses on:
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Providing training and placement support for youngsters.</li>
                <li>Educational assistance for deserving students.</li>
                <li>Medical support for families in poverty.</li>
                <li>Marriage support for underprivileged women.</li>
                <li>Women empowerment programs for self-sustainability.</li>
              </ul>
            </>
          ),
        },
        {
          q: 'How does Thay Trust raise funds?',
          a: 'Thay Trust depends mainly on donations from individuals and contributions from well-wishers. Public support in cash or kind helps in carrying out daily activities, while corporate CSR support enables training and empowerment programs.',
        },
        {
          q: 'Does Thay Trust receive government funding?',
          a: 'No. Thay Trust does not rely on government or foreign funding. This independence allows us to plan and execute projects quickly and efficiently.',
        },
        {
          q: 'Can a small contribution make a difference?',
          a: 'Absolutely! Every small contribution adds up and helps transform lives. Whether it’s sponsoring a student, supporting medical care, or contributing to women’s empowerment, your help makes a real difference.',
        },
        {
          q: 'How are the funds used?',
          a: 'Funds are used directly for training programs, student education, healthcare, and women empowerment initiatives. Thay Trust maintains transparency by focusing on beneficiaries rather than administrative expenses.',
        },
        {
          q: 'How can I be sure my donation is managed correctly?',
          a: 'Thay Trust follows strict financial accountability with regular audits and transparent reporting. Donors are also welcome to visit and witness how their contributions are being utilized.',
        },
      ],
    },
    ta: {
      badge: 'அடிக்கடி கேட்கப்படும் கேள்விகள்',
      heading: 'தாய் டிரஸ்ட் – இளைஞர்களை வலுப்படுத்தி சமூகங்களை ஆதரித்தல்',
      subtitle:
        'தாய் டிரஸ்ட் இளைஞர்களை முன்னேற்றம் செய்ய பயிற்சி, தொழில் வழிகாட்டுதல் வழங்கி, சிறந்த பன்னாட்டு நிறுவனங்களில் வேலை பெற உதவுகிறது. இதோடு, பெண்கள் முன்னேற்றம், கல்வி, மருத்துவ உதவி மற்றும் ஏழை குடும்பங்களுக்கான திருமண உதவி வழங்குகிறது.',
      button: 'ஏதேனும் கேள்விகளா? எங்களை தொடர்பு கொள்ளுங்கள்',
      faqs: [
        {
          q: 'தாய் டிரஸ்ட் என்றால் என்ன?',
          a: 'தாய் டிரஸ்ட் என்பது இளைஞர்கள் மற்றும் பெண்களை வலுப்படுத்த அர்ப்பணிக்கப்பட்ட ஒரு லாபநோக்கற்ற அமைப்பு. தொழில் சார்ந்த பயிற்சிகள், பன்னாட்டு நிறுவனங்களில் வேலை வாய்ப்பு மற்றும் பெண்களுக்கு கல்வி, மருத்துவம், திருமண உதவி வழங்குகிறது.',
        },
        {
          q: 'தாய் டிரஸ்ட் பதிவு செய்யப்பட்ட அமைப்பா?',
          a: 'ஆம். தாய் டிரஸ்ட் ஒரு பதிவு செய்யப்பட்ட லாபநோக்கற்ற அமைப்பு, சட்டபூர்வமான மற்றும் சமூக சேவை வழிகாட்டுதலின் கீழ் வெளிப்படையாக செயல்படுகிறது.',
        },
        {
          q: 'தாய் டிரஸ்ட் என்ன செய்கிறது?',
          a: (
            <>
              தாய் டிரஸ்ட் முக்கியமாக பின்வருவனவற்றில் கவனம் செலுத்துகிறது:
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>இளைஞர்களுக்கு பயிற்சி மற்றும் வேலை வாய்ப்பு உதவி.</li>
                <li>தகுதியான மாணவர்களுக்கு கல்வி உதவி.</li>
                <li>வறுமையில் இருக்கும் குடும்பங்களுக்கு மருத்துவ உதவி.</li>
                <li>பாதிக்கப்பட்ட பெண்களுக்கு திருமண உதவி.</li>
                <li>பெண்கள் சுயதொழில் மேற்கொள்ளும் வகையில் முன்னேற்ற திட்டங்கள்.</li>
              </ul>
            </>
          ),
        },
        {
          q: 'தாய் டிரஸ்ட் நிதியை எவ்வாறு திரட்டுகிறது?',
          a: 'தாய் டிரஸ்ட் பெரும்பாலும் நன்கொடையாளர்கள் மற்றும் நலன்விரும்பிகளிடமிருந்து பெறப்படும் நன்கொடைகளில் சார்ந்துள்ளது. பொதுமக்களின் நிதி/வஸ்து உதவி தினசரி செயல்பாடுகளை நடத்த உதவுகிறது, நிறுவன CSR ஆதரவு பயிற்சி மற்றும் முன்னேற்ற திட்டங்களை செயல்படுத்த உதவுகிறது.',
        },
        {
          q: 'அரசு நிதி கிடைக்கிறதா?',
          a: 'இல்லை. தாய் டிரஸ்ட் அரசு அல்லது வெளிநாட்டு நிதியில் சார்ந்திருக்கவில்லை. இந்த சுயாதீனம் எங்களுக்கு திட்டங்களை விரைவாக செயல்படுத்த அனுமதிக்கிறது.',
        },
        {
          q: 'சிறிய பங்களிப்பு மாற்றத்தை ஏற்படுத்துமா?',
          a: 'மிகவும் சரி! ஒவ்வொரு சிறிய பங்களிப்பும் சேர்ந்து வாழ்க்கைகளை மாற்றுகிறது. மாணவர்களுக்கு உதவி, மருத்துவ சேவை அல்லது பெண்கள் முன்னேற்றத்திற்கு ஆதரவு — உங்கள் உதவி உண்மையான மாற்றத்தை ஏற்படுத்துகிறது.',
        },
        {
          q: 'நிதி எவ்வாறு பயன்படுத்தப்படுகிறது?',
          a: 'நிதி நேரடியாக பயிற்சி திட்டங்கள், மாணவர் கல்வி, மருத்துவ சேவை மற்றும் பெண்கள் முன்னேற்றத்திற்குப் பயன்படுத்தப்படுகிறது. நிர்வாகச் செலவுகளை விட பயனாளர்களில் கவனம் செலுத்துவதன் மூலம் தாய் டிரஸ்ட் வெளிப்படைத்தன்மையை பராமரிக்கிறது.',
        },
        {
          q: 'என் நன்கொடை சரியாக பயன்படுத்தப்படுகிறதா என்பதை எப்படி உறுதிப்படுத்தலாம்?',
          a: 'தாய் டிரஸ்ட் கடுமையான நிதி கணக்குகளைப் பின்பற்றி, ஒழுங்கான ஆடிட் மற்றும் வெளிப்படையான அறிக்கைகள் வழங்குகிறது. நன்கொடையாளர்கள் தங்கள் பங்களிப்பு எவ்வாறு பயன்படுத்தப்படுகிறதென்று நேரில் வந்து பார்க்கவும் வரவேற்கப்படுகிறார்கள்.',
        },
      ],
    },
  }

  const t = content[locale as 'en' | 'ta']

  return (
    <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24 py-12 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <div>
                <Badge variant="outline">{t.badge}</Badge>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="font-bold max-w-xl text-left text-3xl tracking-tighter md:text-5xl">
                  {t.heading}
                </h4>
                <p className="max-w-xl text-left text-lg leading-relaxed tracking-tight text-muted-foreground lg:max-w-lg">
                  {t.subtitle}
                </p>
              </div>
              <div>
                <Button className="gap-4" variant="outline">
                  {t.button} <PhoneCall className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <Accordion type="single" collapsible className="w-full">
            {t.faqs.map((item, idx) => (
              <AccordionItem key={idx} value={`q${idx + 1}`}>
                <AccordionTrigger>{item.q}</AccordionTrigger>
                <AccordionContent>{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  )
}

export default FAQ
