"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import Image from "next/image";
import { useLocale } from "@/contexts/LocaleContext"

export default function TestimonialShowcase() {
  const { locale } = useLocale();

  const content = {
    en: {
      heading: "Stories of Change",
      description:
        "Every life we touch is a story of hope and transformation. Hear from the communities and individuals who have found strength, dignity, and opportunity through Thay Trust's initiatives.",
      button: "Read More Stories",
      ratings: [
        { name: "Community Impact", rating: 4.9 },
        { name: "Beneficiary Trust", rating: 4.8 },
      ],
      testimonials: [
        {
          text: "I never thought I could return to school after losing my parents, but Thay Trust gave me that chance. Today, I am pursuing my dream of becoming a teacher.",
          name: "Priya Sharma",
          company: "Student Beneficiary",
          image: "https://placehold.co/100x100/EBEDED/C3C9C9?text=P",
        },
        {
          text: "Through the health camps, my family received free medical checkups and medicines. This support came when we needed it the most.",
          name: "Ramesh Kumar",
          company: "Community Member",
          image: "https://placehold.co/100x100/EBEDED/C3C9C9?text=R",
        },
        {
          text: "The vocational training I received has helped me earn an income and support my family with dignity.",
          name: "Meena Devi",
          company: "Women Empowerment Program",
          image: "https://placehold.co/100x100/EBEDED/C3C9C9?text=M",
        },
      ],
    },
    ta: {
      heading: "மாற்றத்தின் கதைகள்",
      description:
        "நாங்கள் தொடும் ஒவ்வொரு வாழ்க்கையும் நம்பிக்கை மற்றும் மாற்றத்தின் கதை. தாய் டிரஸ்டின் முயற்சிகள் மூலம் வலிமை, கண்ணியம் மற்றும் வாய்ப்பு பெற்ற சமூகங்களின் மற்றும் தனிநபர்களின் குரலைக் கேளுங்கள்.",
      button: "மேலும் கதைகளைப் படிக்க",
      ratings: [
        { name: "சமூக தாக்கம்", rating: 4.9 },
        { name: "பயனாளி நம்பிக்கை", rating: 4.8 },
      ],
      testimonials: [
        {
          text: "என் பெற்றோரை இழந்த பிறகு நான் மீண்டும் பள்ளிக்குச் செல்வேன் என்று நான் நினைக்கவில்லை, ஆனால் தாய் டிரஸ்ட் அந்த வாய்ப்பை அளித்தது. இன்று, நான் ஆசிரியராகும் கனவை அடைந்து வருகிறேன்.",
          name: "ப்ரியா சர்மா",
          company: "மாணவர் பயனாளி",
          image: "https://placehold.co/100x100/EBEDED/C3C9C9?text=P",
        },
        {
          text: "சுகாதார முகாம்களின் மூலம், எங்கள் குடும்பம் இலவச மருத்துவ பரிசோதனைகள் மற்றும் மருந்துகளைப் பெற்றது. இந்த உதவி எங்களுக்கு மிகவும் தேவைப்பட்ட நேரத்தில் கிடைத்தது.",
          name: "ரமேஷ் குமார்",
          company: "சமூக உறுப்பினர்",
          image: "https://placehold.co/100x100/EBEDED/C3C9C9?text=R",
        },
        {
          text: "நான் பெற்ற தொழில் பயிற்சி என் குடும்பத்தை கண்ணியமாக நடத்த வருமானம் சம்பாதிக்க உதவியது.",
          name: "மீனா தேவி",
          company: "பெண்கள் வலுப்படுத்தும் திட்டம்",
          image: "https://placehold.co/100x100/EBEDED/C3C9C9?text=M",
        },
      ],
    },
  };

  const t = content[locale as "en" | "ta"];

  return (
    <section className="bg-background px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-24 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start gap-12 sm:flex-row sm:items-center sm:justify-between sm:gap-16">
          {/* Left Content */}
          <div className="flex flex-1 flex-col items-start text-left">
            <h2 className="mb-6 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              {t.heading}
            </h2>
            <p className="mb-8 max-w-2xl text-muted-foreground sm:text-lg">
              {t.description}
            </p>
            <Button variant="default">{t.button}</Button>
          </div>

          {/* Ratings */}
          <div className="flex flex-col gap-8 sm:flex-row lg:gap-12">
            {t.ratings.map((rating, i) => (
              <CompanyRating key={i} name={rating.name} rating={rating.rating} />
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Grid */}
      <div className="mx-auto max-w-7xl mt-16 sm:mt-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="pointer-events-none absolute bottom-0 left-0 hidden w-full from-background to-transparent sm:block sm:h-48 sm:bg-gradient-to-t"></div>
    </section>
  );
}

function CompanyRating({ name, rating }: { name: string; rating: number }) {
  return (
    <div className="flex flex-col items-center">
      <Image
        src={`https://placehold.co/120x40/EBEDED/C3C9C9?text=${encodeURIComponent(
          name
        )}`}
        alt={`${name} logo`}
        width={120}
        height={24}
        className="mb-4 dark:invert"
      />
      <div className="flex items-center gap-2">
        <div className="text-sm font-semibold text-foreground">
          {rating.toFixed(1)}
        </div>
        <div className="flex items-center">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="size-4 fill-primary text-primary" />
          ))}
        </div>
      </div>
    </div>
  );
}

function TestimonialCard({
  text,
  name,
  company,
  image,
}: {
  text: string;
  name: string;
  company: string;
  image: string;
}) {
  return (
    <div className="flex flex-col rounded-lg border bg-card p-6 shadow-sm transition-all hover:shadow-md">
      <p className="mb-4 flex-grow text-sm text-card-foreground">
        &quot;{text}&quot;
      </p>
      <div className="flex items-center gap-3">
        <Image
          src={image}
          alt={name}
          width={40}
          height={40}
          className="rounded-full border-2 border-primary"
        />
        <div>
          <p className="text-sm font-medium text-foreground">{name}</p>
          <p className="text-xs text-muted-foreground">{company}</p>
        </div>
      </div>
    </div>
  );
}
