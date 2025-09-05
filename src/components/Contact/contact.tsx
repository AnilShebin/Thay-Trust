"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Mail, Phone, Send, Clock, MapPin } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      if (Math.random() > 0.7) throw new Error("Random error")
      setSubmitStatus("success")
    } catch {
      setSubmitStatus("error")
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
              <div>
                <Badge variant="outline">Contact Us</Badge>
              </div>
              <div className="flex flex-col gap-3">
                <h4 className="font-regular max-w-xl text-left text-3xl tracking-tight md:text-5xl">
                  Let’s start a conversation
                </h4>
                <p className="max-w-xl text-left text-lg leading-relaxed tracking-tight text-muted-foreground lg:max-w-lg">
                  Whether you have a question, a project idea, or simply want to say hello, we&apos;d love to hear from
                  you. Reach out anytime - our team usually replies within <strong>24 - 48 business hours</strong>.
                </p>
              </div>

              {/* Quick Contact */}
              <div className="flex flex-col gap-4 min-[400px]:flex-row">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <span className="text-sm text-muted-foreground">(123) 456-7890</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-primary" />
                  <a href="mailto:contact@example.com" className="text-sm text-primary hover:underline">
                    contact@example.com
                  </a>
                </div>
              </div>
            </div>

            {/* Office Info */}
            <div className="space-y-3">
              <h2 className="text-2xl font-semibold tracking-tight">Our Office</h2>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-sm text-muted-foreground">123 Business Ave, Suite 100, City, State 12345</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                <span className="text-sm text-muted-foreground">Monday - Friday: 9:00 AM - 5:00 PM</span>
              </div>
            </div>

            {/* FAQ Inside Contact */}
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="faq-1">
                <AccordionTrigger>What services do you offer?</AccordionTrigger>
                <AccordionContent>
                  We provide <strong>web development</strong>, <strong>mobile apps</strong>,
                  <strong> UI/UX design</strong>, and <strong>digital marketing solutions</strong>.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-2">
                <AccordionTrigger>How quickly can I expect a response?</AccordionTrigger>
                <AccordionContent>
                  Typically, we reply within <strong>24 - 48 business hours</strong>.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-3">
                <AccordionTrigger>Do you offer free consultations?</AccordionTrigger>
                <AccordionContent>
                  Yes! We provide a <strong>free initial consultation</strong>
                  to understand your goals and suggest the best approach.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-4">
                <AccordionTrigger>Can I visit your office in person?</AccordionTrigger>
                <AccordionContent>
                  Absolutely - we&apos;d be happy to host you. Just let us know in advance so we can schedule your
                  visit.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Right Side Contact Form */}
          <div className="flex flex-col gap-4 rounded-lg border bg-card p-6 shadow-md md:p-8">
            <h2 className="mb-4 text-2xl font-semibold tracking-tight">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="grid gap-2">
                  <Label htmlFor="firstName">First name</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    placeholder="Enter your first name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="lastName">Last name</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    placeholder="Enter your last name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Enter the subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Enter your message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <Button className="w-full" type="submit" disabled={isSubmitting}>
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
            {submitStatus === "success" && (
              <p className="text-center text-green-600 dark:text-green-400">✅ Message sent successfully!</p>
            )}
            {submitStatus === "error" && (
              <p className="text-center text-red-600 dark:text-red-400">
                ❌ An error occurred. Please try again later.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
