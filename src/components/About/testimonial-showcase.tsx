"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import Image from "next/image";

export default function TestimonialShowcase() {
  return (
    <section className="bg-background px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-24 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start gap-12 sm:flex-row sm:items-center sm:justify-between sm:gap-16">
          {/* Left Content */}
          <div className="flex flex-1 flex-col items-start text-left">
            <h2 className="mb-6 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Stories of Change
            </h2>
            <p className="mb-8 max-w-2xl text-muted-foreground sm:text-lg">
              Every life we touch is a story of hope and transformation.  
              Hear from the communities and individuals who have found strength, 
              dignity, and opportunity through Thay Trust&apos;s initiatives.
            </p>
            <Button variant="default">Read More Stories</Button>
          </div>

          {/* Ratings */}
          <div className="flex flex-col gap-8 sm:flex-row lg:gap-12">
            <CompanyRating name="Community Impact" rating={4.9} />
            <CompanyRating name="Beneficiary Trust" rating={4.8} />
          </div>
        </div>
      </div>

      {/* Testimonials Grid */}
      <TestimonialGrid />

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

function TestimonialGrid() {
  const testimonials = [
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
    {
      text: "Thanks to Thay Trust, we now have clean drinking water in our village. It has changed our lives completely.",
      name: "Anil Patel",
      company: "Village Resident",
      image: "https://placehold.co/100x100/EBEDED/C3C9C9?text=A",
    },
    {
      text: "The shelter provided us a safe place to stay after the floods. We are deeply grateful for the timely help.",
      name: "Lakshmi & Family",
      company: "Rehabilitation Program",
      image: "https://placehold.co/100x100/EBEDED/C3C9C9?text=L",
    },
    {
      text: "Through skill development workshops, I was able to start my tailoring business and achieve financial independence.",
      name: "Saira Begum",
      company: "Livelihood Program",
      image: "https://placehold.co/100x100/EBEDED/C3C9C9?text=S",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl mt-16 sm:mt-24">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
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
