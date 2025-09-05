"use client";

import Image from "next/image";
import { Play, X, Calendar, Users, Eye, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Card } from "@/components/ui/card";

function VideoModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-full max-w-3xl">
        <Button
          variant="ghost"
          size="icon"
          className="absolute -top-10 right-0 text-white"
          onClick={onClose}
        >
          <X className="size-6" />
          <span className="sr-only">Close video</span>
        </Button>
        <div className="aspect-video rounded-lg">
          <iframe
            width="100%"
            className="rounded-lg"
            height="100%"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Company Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default function About22() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const milestones = [
    {
      icon: Building,
      title: "Our Foundation",
      description:
        "Established in '88, fueled by a passion for innovation and a vision to transform our industry.",
      value: "1988",
    },
    {
      icon: Eye,
      title: "Global Reach",
      description:
        "Connecting with hundreds of thousands of people monthly, sharing our story and our solutions.",
      value: "500k",
    },
    {
      icon: Users,
      title: "Community of Users",
      description:
        "A vibrant community of hundreds of thousands of active users enjoying the benefits of our platform",
      value: "200k",
    },
    {
      icon: Calendar,
      title: "Team of Experts",
      description:
        "A dedicated team of over 200 professionals driven to push boundaries and achieve exceptional results.",
      value: "200+",
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-primary/10 to-background px-4 sm:px-8 md:px-16 lg:px-24 py-24 sm:py-32">
      <div className="relative h-[500px] w-full">
        <Image
          src="/programs-hero.jpg"
          alt="Team collaboration"
          fill
          className="rounded-lg object-cover brightness-[0.7]"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="mb-8 text-4xl font-bold md:text-5xl lg:text-6xl">
            Uncover Our Journey
          </h1>
          <Button
            size="lg"
            variant="outline"
            className="size-16 rounded-full border-2 border-white bg-white/10 p-0 hover:bg-white/20"
            onClick={() => setIsVideoOpen(true)}
          >
            <Play className="size-8" />
            <span className="sr-only">Play video</span>
          </Button>
        </div>
      </div>

      <div className="mt-16">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Our Passion, <br />
              <span className="text-primary">Our Purpose</span>
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                We&apos;re not just a company; we&apos;re a collective of
                passionate individuals driven by the desire to challenge the
                status quo and create a lasting impact. Our journey began with a
                simple idea - to solve complex problems with elegant solutions.
                We believe in the power of collaboration, the strength of
                innovation, and the importance of community.
              </p>
              <p>
                We are more than the tools we build, we are the people behind
                them. Our team is our heartbeat, and we infuse our values of
                creativity, integrity, and customer focus in everything we do.
                We invite you to join us on our journey, where we always strive
                for better, and where every step we take is a step forward for
                our users.
              </p>
              <p>
                We&apos;re not just a company; we&apos;re a collective of
                passionate individuals driven by the desire to challenge the
                status quo and create a lasting impact. Our journey began with a
                simple idea - to solve complex problems with elegant solutions.
                We believe in the power of collaboration, the strength of
                innovation, and the importance of community.
              </p>
              <p>
                We are more than the tools we build, we are the people behind
                them. Our team is our heartbeat, and we infuse our values of
                creativity, integrity, and customer focus in everything we do.
                We invite you to join us on our journey, where we always strive
                for better, and where every step we take is a step forward for
                our users.
              </p>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {milestones.map((milestone, index) => (
              <Card
                key={index}
                className="relative flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm"
              >
                <div className="absolute -top-3 left-6 rounded-full bg-primary px-2 py-1 text-xs font-semibold text-primary-foreground">
                  {milestone.value}
                </div>
                <div className="mb-6 flex size-12 flex-shrink-0 items-center justify-center rounded-full border-2 border-primary/30 bg-primary/10">
                  {" "}
                  <milestone.icon className="size-6 text-primary" />
                </div>

                <h3 className="text-xl font-semibold">{milestone.title}</h3>
                <p className="text-center text-sm text-muted-foreground">
                  {milestone.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <VideoModal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} />
    </section>
  );
}
