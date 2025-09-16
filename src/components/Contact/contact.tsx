'use client'
import type React from 'react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Mail, Phone, Send, Clock, MapPin } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { useLocale } from '@/contexts/LocaleContext'

export default function Contact() {
  const { locale } = useLocale()

  const content = {
    en: {
      badge: 'Contact Us',
      heading: "Let’s start a conversation",
      subtitle:
        "Whether you have a question, a project idea, or simply want to say hello, we'd love to hear from you. Reach out anytime - our team usually replies within 24 - 48 business hours.",
      phone: '(123) 456-7890',
      email: 'contact@example.com',
      officeHeading: 'Our Office',
      officeAddress: '123 Business Ave, Suite 100, City, State 12345',
      officeHours: 'Monday - Friday: 9:00 AM - 5:00 PM',
      formHeading: 'Send Us a Message',
      firstName: 'First name',
      lastName: 'Last name',
      emailLabel: 'Email',
      subject: 'Subject',
      message: 'Message',
      sendButton: 'Send Message',
      sending: 'Sending...',
      success: '✅ Message sent successfully!',
      error: '❌ An error occurred. Please try again later.',
      faq: [
        {
          question: 'What services do you offer?',
          answer: 'We provide web development, mobile apps, UI/UX design, and digital marketing solutions.',
        },
        {
          question: 'How quickly can I expect a response?',
          answer: 'Typically, we reply within 24 - 48 business hours.',
        },
        {
          question: 'Do you offer free consultations?',
          answer: 'Yes! We provide a free initial consultation to understand your goals and suggest the best approach.',
        },
        {
          question: 'Can I visit your office in person?',
          answer: "Absolutely - we'd be happy to host you. Just let us know in advance so we can schedule your visit.",
        },
      ],
    },
    ta: {
      badge: 'தொடர்பில் இருங்கள்',
      heading: 'ஒரு உரையாடலை தொடங்கலாம்',
      subtitle:
        'உங்களுக்கு கேள்வி, திட்ட யோசனை அல்லது வணக்கம் சொல்ல விருப்பமுள்ளதா? எங்களிடம் தொடர்பு கொள்ளுங்கள். எங்கள் குழு பெரும்பாலும் 24 - 48 வேலை நேரத்திற்குள் பதில் அளிக்கிறது.',
      phone: '(123) 456-7890',
      email: 'contact@example.com',
      officeHeading: 'எங்கள் அலுவலகம்',
      officeAddress: '123 வணிக அவென்யூ, சுயிட் 100, நகரம், மாநிலம் 12345',
      officeHours: 'திங்கள் - வெள்ளி: 9:00 AM - 5:00 PM',
      formHeading: 'எங்களுக்கு ஒரு செய்தி அனுப்பவும்',
      firstName: 'முதல் பெயர்',
      lastName: 'கடைசி பெயர்',
      emailLabel: 'மின்னஞ்சல்',
      subject: 'பொருள்',
      message: 'செய்தி',
      sendButton: 'செய்தி அனுப்பு',
      sending: 'அனுப்புகிறது...',
      success: '✅ செய்தி வெற்றிகரமாக அனுப்பப்பட்டது!',
      error: '❌ ஒரு பிழை ஏற்பட்டது. பின்னர் மீண்டும் முயற்சிக்கவும்.',
      faq: [
        {
          question: 'நீங்கள் என்ன சேவைகளை வழங்குகிறீர்கள்?',
          answer: 'நாங்கள் வலை அபிவிருத்தி, மொபைல் செயலிகள், UI/UX வடிவமைப்பு மற்றும் டிஜிட்டல் மார்க்கெட்டிங் தீர்வுகளை வழங்குகிறோம்.',
        },
        {
          question: 'எவ்வாறு விரைவில் பதில் எதிர்பார்க்கலாம்?',
          answer: 'பொதுவாக, நாங்கள் 24 - 48 வேலை நேரத்திற்குள் பதில் அளிக்கிறோம்.',
        },
        {
          question: 'நீங்கள் இலவச ஆலோசனைகள் வழங்குகிறீர்களா?',
          answer: 'ஆம்! உங்கள் இலக்குகளை புரிந்து கொள்ள மற்றும் சிறந்த அணுகுமுறையை பரிந்துரைக்க ஒரு இலவச தொடக்க ஆலோசனையை வழங்குகிறோம்.',
        },
        {
          question: 'நான் உங்கள் அலுவலகத்தை நேரில் பார்க்கலாமா?',
          answer: 'கண்டிப்பாக - உங்களை வரவேற்க மகிழ்ச்சி. முன்கூட்டியே தெரியப்படுத்துங்கள், இதனால் உங்கள் வரவை திட்டமிடலாம்.',
        },
      ],
    },
  }

  const t = content[locale as 'en' | 'ta']

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      if (Math.random() > 0.7) throw new Error('Random error')
      setSubmitStatus('success')
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="w-full px-4 sm:px-8 md:px-16 lg:px-24 py-12 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left Side Info */}
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <Badge variant="outline">{t.badge}</Badge>
              <div className="flex flex-col gap-3">
                <h4 className="font-regular max-w-xl text-left text-3xl tracking-tight md:text-5xl">{t.heading}</h4>
                <p className="max-w-xl text-left text-lg leading-relaxed tracking-tight text-muted-foreground lg:max-w-lg">
                  {t.subtitle}
                </p>
              </div>

              {/* Quick Contact */}
              <div className="flex flex-col gap-4 min-[400px]:flex-row">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <span className="text-sm text-muted-foreground">{t.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-primary" />
                  <a href={`mailto:${t.email}`} className="text-sm text-primary hover:underline">
                    {t.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Office Info */}
            <div className="space-y-3">
              <h2 className="text-2xl font-semibold tracking-tight">{t.officeHeading}</h2>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-sm text-muted-foreground">{t.officeAddress}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                <span className="text-sm text-muted-foreground">{t.officeHours}</span>
              </div>
            </div>

            {/* FAQ */}
            <Accordion type="single" collapsible className="w-full">
              {t.faq.map((item, idx) => (
                <AccordionItem key={idx} value={`faq-${idx + 1}`}>
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Right Side Contact Form */}
          <div className="flex flex-col gap-4 rounded-lg border bg-card p-6 shadow-md md:p-8">
            <h2 className="mb-4 text-2xl font-semibold tracking-tight">{t.formHeading}</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="grid gap-2">
                  <Label htmlFor="firstName">{t.firstName}</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    placeholder={t.firstName}
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="lastName">{t.lastName}</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    placeholder={t.lastName}
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">{t.emailLabel}</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder={t.emailLabel}
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="subject">{t.subject}</Label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder={t.subject}
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="message">{t.message}</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder={t.message}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <Button className="w-full" type="submit" disabled={isSubmitting}>
                {isSubmitting ? t.sending : <>{t.sendButton} <Send className="ml-2 h-4 w-4" /></>}
              </Button>
            </form>
            {submitStatus === 'success' && <p className="text-center text-green-600 dark:text-green-400">{t.success}</p>}
            {submitStatus === 'error' && <p className="text-center text-red-600 dark:text-red-400">{t.error}</p>}
          </div>
        </div>
      </div>
    </section>
  )
}
