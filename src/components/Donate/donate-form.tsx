"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { WandSparkles } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { HeartHandshake, Users, Landmark, ShieldCheck } from "lucide-react" // Added ShieldCheck
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"

interface FormData {
  donorName: HTMLInputElement
  address: HTMLInputElement
  email: HTMLInputElement
  mobile: HTMLInputElement
  pan: HTMLInputElement
  amount: HTMLInputElement
  remarks: HTMLTextAreaElement
}

const DonateForm = () => {
  const [activeTab, setActiveTab] = useState("form")
  const [formValid, setFormValid] = useState(false)
  const [termsAccepted, setTermsAccepted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (termsAccepted) {
      // In a real application, you would send this data to your backend
      const target = e.target as HTMLFormElement & FormData
      console.log("Form submitted with data:", {
        donorName: target.donorName.value,
        address: target.address.value,
        email: target.email.value,
        mobile: target.mobile.value,
        pan: target.pan.value,
        amount: target.amount.value,
        remarks: target.remarks.value,
      })
      setFormValid(true)
      setActiveTab("bank")
    } else {
      alert("Please accept the Terms & Conditions to proceed.")
    }
  }

  return (
    <section className="px-5 sm:px-10 md:px-16 lg:px-20 py-20 lg:py-32 bg-background">
      {" "}
      {/* Removed gradient */}
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row bg-card border border-border shadow-xl rounded-xl overflow-hidden">
          {/* Left Section: Info + Branding - Enhanced Content */}
          <div className="flex flex-col justify-between bg-muted px-10 py-12 lg:w-1/2 w-full text-center lg:text-left">
            <div className="flex flex-col items-center lg:items-start">
              <Image src="/Thay-Trust.png" alt="Thay Trust Logo" width={100} height={100} className="mb-4" />
              <h2 className="text-4xl font-bold text-primary mb-2">Make a Difference Today</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Your contribution empowers us to continue our vital work, transforming lives and building stronger
                communities.
              </p>
            </div>

            <div className="mt-8 space-y-6 text-sm text-muted-foreground">
              <div className="flex items-start gap-3">
                <Landmark className="text-primary mt-1 flex-shrink-0" size={20} />
                <div>
                  <h3 className="font-semibold text-foreground">Registered & Trusted</h3>
                  <p>As a registered charitable trust, we operate with integrity and accountability.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <HeartHandshake className="text-primary mt-1 flex-shrink-0" size={20} />
                <div>
                  <h3 className="font-semibold text-foreground">Direct Impact</h3>
                  <p>Every rupee you donate directly supports our programs, with minimal administrative overhead.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="text-primary mt-1 flex-shrink-0" size={20} />
                <div>
                  <h3 className="font-semibold text-foreground">Community Empowerment</h3>
                  <p>We work hand-in-hand with communities to create sustainable and lasting change.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <ShieldCheck className="text-primary mt-1 flex-shrink-0" size={20} />
                <div>
                  <h3 className="font-semibold text-foreground">Transparent Operations</h3>
                  <p>We believe in full transparency. Learn more about our financial reports and impact stories.</p>
                </div>
              </div>
            </div>

            <div className="mt-10 text-sm text-center text-muted-foreground px-2">
              <p>
                <span className="font-medium text-foreground">Note:</span> We are not accepting online donations. Kindly
                fill in your details to receive our bank information.
              </p>
            </div>

            <div className="mt-6 flex justify-center lg:justify-start">
              <Button variant="secondary" className="text-sm">
                View Our Annual Report
              </Button>
            </div>
          </div>

          {/* Right Section: Form + Tabs */}
          <div className="lg:w-1/2 w-full px-6 sm:px-10 py-12">
            <Badge
              variant="outline"
              className="group mb-6 flex w-fit items-center gap-2 border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary hover:bg-primary/20"
            >
              <WandSparkles className="size-4" />
              Let’s connect with us
            </Badge>

            <Tabs defaultValue="form" value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="mb-6 grid w-full grid-cols-2">
                <TabsTrigger value="form">Donation Form</TabsTrigger>
                <TabsTrigger value="bank" disabled={!formValid}>
                  Bank Details
                </TabsTrigger>
              </TabsList>

              {/* Donation Form Tab */}
              <TabsContent value="form">
                <h1 className="text-2xl font-bold mb-6 text-foreground">Provide Your Details</h1>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {[
                    { label: "Name of the Donor", name: "donorName", type: "text", placeholder: "Name of the Donor" },
                    {
                      label: "Address with PIN Code",
                      name: "address",
                      type: "text",
                      placeholder: "Address with PIN Code",
                    },
                    { label: "Email", name: "email", type: "email", placeholder: "Please enter email" },
                    { label: "Mobile Number", name: "mobile", type: "tel", placeholder: "Please enter mobile number" },
                    { label: "PAN No.", name: "pan", type: "text", placeholder: "PAN No." },
                    { label: "Amount", name: "amount", type: "number", placeholder: "Amount" },
                  ].map(({ label, name, type, placeholder }) => (
                    <div key={name}>
                      <Label htmlFor={name} className="block text-sm font-medium text-foreground mb-1">
                        {label} <span className="text-destructive">*</span>
                      </Label>
                      <Input id={name} name={name} type={type} required placeholder={placeholder} />
                    </div>
                  ))}

                  {/* Remarks */}
                  <div>
                    <Label htmlFor="remarks" className="block text-sm font-medium text-foreground mb-1">
                      Remarks
                    </Label>
                    <Textarea id="remarks" name="remarks" rows={3} placeholder="Remarks" />
                  </div>

                  {/* Terms & Submit */}
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="terms"
                      checked={termsAccepted}
                      onCheckedChange={(checked) => setTermsAccepted(!!checked)}
                    />
                    <Label htmlFor="terms" className="text-sm text-muted-foreground cursor-pointer">
                      I accept the{" "}
                      <a href="#" className="text-primary underline">
                        Terms & Conditions
                      </a>
                    </Label>
                  </div>

                  <div className="mt-4">
                    <Button type="submit" className="w-full" disabled={!termsAccepted}>
                      Show Bank Details
                    </Button>
                  </div>

                  <p className="text-xs text-muted-foreground text-center mt-2">
                    After submitting this form, our team will contact you shortly.
                  </p>
                </form>
              </TabsContent>

              {/* Bank Details Tab */}
              <TabsContent value="bank">
                <h2 className="text-2xl font-bold text-foreground mb-6">Bank Details for Your Donation</h2>
                <div className="space-y-4 text-sm text-muted-foreground">
                  <div className="grid grid-cols-2 gap-y-2">
                    <p className="font-medium text-foreground">Name:</p>
                    <p>THAY TRUST</p>
                    <p className="font-medium text-foreground">Bank:</p>
                    <p>Indian Bank</p>
                    <p>Branch:</p>
                    <p>Kodambakkam, Chennai</p>
                    <p className="font-medium text-foreground">A/C No:</p>
                    <p className="font-bold text-primary">6716895123</p>
                    <p className="font-medium text-foreground">IFSC:</p>
                    <p className="font-bold text-primary">IDIB000K170</p>
                    <p className="font-medium text-foreground">Account Type:</p>
                    <p>Savings</p>
                  </div>
                  <p className="mt-6 text-center text-base text-foreground font-semibold">
                    Thank you for your generous contribution!
                  </p>
                  <p className="text-xs text-muted-foreground text-center">
                    Please use the above details for your bank transfer. Our team will reach out to you upon successful
                    submission of the form.
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DonateForm
