"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { WandSparkles, HeartHandshake, Users, Landmark, ShieldCheck } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { useLocale } from "@/contexts/LocaleContext"

const DonateForm = () => {
  const [activeTab, setActiveTab] = useState("bank") // show bank details by default
  const [termsAccepted, setTermsAccepted] = useState(false)

  const { locale } = useLocale()

  const content = {
    en: {
      leftTitle: "Make a Difference Today",
      leftDesc:
        "Your contribution empowers us to continue our vital work, transforming lives and building stronger communities.",
      notes: "Note: We are not accepting online donations. Kindly use the bank information below or request a receipt.",

      trust: { title: "Registered & Trusted", desc: "As a registered charitable trust, we operate with integrity and accountability." },
      impact: { title: "Direct Impact", desc: "Every rupee you donate directly supports our programs, with minimal administrative overhead." },
      community: { title: "Community Empowerment", desc: "We work hand-in-hand with communities to create sustainable and lasting change." },
      transparent: { title: "Transparent Operations", desc: "We believe in full transparency. Learn more about our financial reports and impact stories." },

      badge: "Let’s connect with us",
      bankTitle: "Bank Details for Your Donation",
      bank: {
        name: "Name", bank: "Bank", branch: "Branch", ac: "A/C No", ifsc: "IFSC", type: "Account Type", upi: "UPI ID",
        qr: "Scan QR to Pay", thanks: "Thank you for your generous contribution!", note: "Please use the above details for your bank transfer."
      },
      requestReceipt: "Request Receipt",
    },
    ta: {
      leftTitle: "இன்று ஒரு மாற்றத்தை உருவாக்குங்கள்",
      leftDesc: "உங்கள் பங்களிப்பு எங்களை எங்கள் முக்கிய பணியைத் தொடர்ந்து, வாழ்க்கைகளை மாற்றவும் வலுவான சமூகங்களை உருவாக்கவும் வலுவூட்டுகிறது.",
      notes: "குறிப்பு: நாங்கள் ஆன்லைன் நன்கொடைகளை ஏற்கவில்லை. கீழுள்ள வங்கி விவரங்களைப் பயன்படுத்தவும் அல்லது ரசீதை கோரவும்.",

      trust: { title: "பதிவு செய்யப்பட்ட & நம்பகமானது", desc: "பதிவு செய்யப்பட்ட அறக்கட்டளையாக, நாங்கள் நேர்மை மற்றும் பொறுப்புடன் செயல்படுகிறோம்." },
      impact: { title: "நேரடி தாக்கம்", desc: "நீங்கள் வழங்கும் ஒவ்வொரு ரூபாயும் எங்கள் திட்டங்களுக்கு நேரடியாக ஆதரவு அளிக்கிறது, குறைந்த நிர்வாகச் செலவுகளுடன்." },
      community: { title: "சமூக வலுவூட்டல்", desc: "நாங்கள் சமூகங்களுடன் கை கோர்த்து நிலையான மற்றும் நீண்டநாள் மாற்றத்தை உருவாக்குகிறோம்." },
      transparent: { title: "வெளிப்படையான செயல்பாடுகள்", desc: "நாங்கள் முழு வெளிப்படைத்தன்மையில் நம்புகிறோம். எங்கள் நிதி அறிக்கைகள் மற்றும் தாக்கக் கதைகள் பற்றி மேலும் அறியவும்." },

      badge: "எங்களுடன் தொடர்பு கொள்ளுங்கள்",
      bankTitle: "உங்கள் நன்கொடைக்கான வங்கி விவரங்கள்",
      bank: {
        name: "பெயர்", bank: "வங்கி", branch: "கிளை", ac: "கணக்கு எண்", ifsc: "IFSC", type: "கணக்கு வகை", upi: "யூபிஐ ஐடி",
        qr: "QR கோடு ஸ்கேன் செய்து செலுத்தவும்", thanks: "உங்கள் தாராள பங்களிப்புக்கு நன்றி!", note: "மேலே உள்ள விவரங்களைப் பயன்படுத்தி வங்கி பரிமாற்றம் செய்யவும்."
      },
      requestReceipt: "ரசீதை கோரவும்",
    },
  }

  const t = content[locale as "en" | "ta"]

  const handleReceiptSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!termsAccepted) {
      alert("Please accept the Terms & Conditions to proceed.")
      return
    }
    const target = e.target as HTMLFormElement
    const data = new FormData(target)
    console.log("Receipt request submitted:", Object.fromEntries(data.entries()))
    alert("Receipt request submitted successfully!")
    target.reset()
    setTermsAccepted(false)
  }

  return (
    <section className="px-5 sm:px-10 md:px-16 lg:px-20 py-20 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row bg-card border border-border shadow-xl rounded-xl overflow-hidden">
          {/* Left Section */}
          <div className="flex flex-col justify-between bg-muted px-10 py-12 lg:w-1/2 w-full text-center lg:text-left">
            <div className="flex flex-col items-center lg:items-start">
              <Image src="/Thay-Trust.png" alt="Thay Trust Logo" width={100} height={100} className="mb-4" />
              <h2 className="text-4xl font-bold text-primary mb-2">{t.leftTitle}</h2>
              <p className="text-lg text-muted-foreground mb-6">{t.leftDesc}</p>
            </div>

            <div className="mt-8 space-y-6 text-sm text-muted-foreground">
              <div className="flex items-start gap-3">
                <Landmark className="text-primary mt-1 flex-shrink-0" size={20} />
                <div><h3 className="font-semibold text-foreground">{t.trust.title}</h3><p>{t.trust.desc}</p></div>
              </div>
              <div className="flex items-start gap-3">
                <HeartHandshake className="text-primary mt-1 flex-shrink-0" size={20} />
                <div><h3 className="font-semibold text-foreground">{t.impact.title}</h3><p>{t.impact.desc}</p></div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="text-primary mt-1 flex-shrink-0" size={20} />
                <div><h3 className="font-semibold text-foreground">{t.community.title}</h3><p>{t.community.desc}</p></div>
              </div>
              <div className="flex items-start gap-3">
                <ShieldCheck className="text-primary mt-1 flex-shrink-0" size={20} />
                <div><h3 className="font-semibold text-foreground">{t.transparent.title}</h3><p>{t.transparent.desc}</p></div>
              </div>
            </div>

            <div className="mt-10 text-sm text-center text-muted-foreground px-2">
              <p>{t.notes}</p>
            </div>
          </div>

          {/* Right Section */}
          <div className="lg:w-1/2 w-full px-6 sm:px-10 py-12">
            <Badge
              variant="outline"
              className="group mb-6 flex w-fit items-center gap-2 border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary hover:bg-primary/20"
            >
              <WandSparkles className="size-4" />
              {t.badge}
            </Badge>

            <Tabs defaultValue="bank" value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="mb-6 grid w-full grid-cols-2">
                <TabsTrigger value="bank">Bank Details</TabsTrigger>
                <TabsTrigger value="request">{t.requestReceipt}</TabsTrigger>
              </TabsList>

              {/* Bank Details */}
              <TabsContent value="bank">
                <h2 className="text-2xl font-bold text-foreground mb-6">{t.bankTitle}</h2>
                <div className="space-y-4 text-sm text-muted-foreground">
                  <div className="grid grid-cols-2 gap-y-2">
                    <p className="font-medium text-foreground">{t.bank.name}:</p><p>THAY TRUST</p>
                    <p className="font-medium text-foreground">{t.bank.bank}:</p><p>Indian Bank</p>
                    <p>{t.bank.branch}:</p><p>Kodambakkam, Chennai</p>
                    <p className="font-medium text-foreground">{t.bank.ac}:</p><p className="font-bold text-primary">6716895123</p>
                    <p className="font-medium text-foreground">{t.bank.ifsc}:</p><p className="font-bold text-primary">IDIB000K170</p>
                    <p className="font-medium text-foreground">{t.bank.type}:</p><p>Savings</p>
                    <p className="font-medium text-foreground">{t.bank.upi}:</p><p className="font-bold text-primary">thaytrust@upi</p>
                  </div>
                  <div className="flex flex-col items-center mt-6">
                    <p className="font-medium text-foreground mb-2">{t.bank.qr}</p>
                    <Image src="/upi-qr.png" alt="UPI QR Code" width={160} height={160} className="rounded-lg shadow-md" />
                  </div>
                  <p className="mt-6 text-center text-base text-foreground font-semibold">{t.bank.thanks}</p>
                  <p className="text-xs text-muted-foreground text-center">{t.bank.note}</p>
                </div>
              </TabsContent>

              {/* Request Receipt Form */}
              <TabsContent value="request">
                <h1 className="text-2xl font-bold mb-6 text-foreground">{t.requestReceipt}</h1>
                <form onSubmit={handleReceiptSubmit} className="space-y-5">
                  {[
                    { id: "donorName", label: "Name of the Donor", type: "text" },
                    { id: "address", label: "Address with PIN Code", type: "text" },
                    { id: "email", label: "Email", type: "email" },
                    { id: "mobile", label: "Mobile Number", type: "tel" },
                    { id: "amount", label: "Amount", type: "number" },
                  ].map((field) => (
                    <div key={field.id}>
                      <Label htmlFor={field.id} className="block text-sm font-medium text-foreground mb-1">{field.label}</Label>
                      <Input id={field.id} name={field.id} type={field.type} required placeholder={field.label} />
                    </div>
                  ))}

                  <div>
                    <Label htmlFor="remarks" className="block text-sm font-medium text-foreground mb-1">Remarks</Label>
                    <Textarea id="remarks" name="remarks" rows={3} placeholder="Remarks" />
                  </div>

                  <div>
                    <Label htmlFor="paymentProof" className="block text-sm font-medium text-foreground mb-1">Upload Payment Proof</Label>
                    <Input id="paymentProof" name="paymentProof" type="file" accept="image/*,application/pdf" />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" checked={termsAccepted} onCheckedChange={(checked) => setTermsAccepted(!!checked)} />
                    <Label htmlFor="terms" className="text-sm text-muted-foreground cursor-pointer">I accept the Terms & Conditions</Label>
                  </div>

                  <div className="mt-4">
                    <Button type="submit" className="w-full" disabled={!termsAccepted}>Submit Request</Button>
                  </div>
                </form>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DonateForm
