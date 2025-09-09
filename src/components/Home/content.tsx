import Link from "next/link";

export default function Content() {
  return (
    <section className="px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-7xl grid items-center gap-12 lg:grid-cols-2">
        {/* Testimonial Card */}
        <div className="relative h-full overflow-hidden">
          <div className="absolute inset-0 rounded-xl bg-accent" />
          <div className="relative p-8 md:p-12">
            <div className="mb-8 flex items-center gap-3 text-primary">
              <svg className="size-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              <span className="text-xl font-semibold">ThayTrust</span>
            </div>
            <blockquote className="mb-6 text-xl font-medium leading-relaxed md:text-2xl">
              ThayTrust has been a beacon of hope for our community. Their educational programs
              helped my children access quality learning, and their healthcare initiatives ensured
              our family stayed healthy during difficult times.
            </blockquote>
            <footer>
              <cite className="not-italic">
                <span className="font-semibold">Priya Sharma</span>
                <span className="ml-2 text-muted-foreground">Community Member & Beneficiary</span>
              </cite>
            </footer>
          </div>
        </div>

        {/* Company Info */}
        <div className="space-y-8">
          <div>
            <div className="mb-3 text-sm font-medium text-primary uppercase tracking-wide">
              Our Mission
            </div>
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-balance md:text-4xl lg:text-5xl">
              Empowering communities through education, healthcare & sustainable development
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              ThayTrust is dedicated to creating lasting positive change in underserved communities
              across India. We believe that every individual deserves access to quality education,
              healthcare, and opportunities for growth.
            </p>
          </div>

          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              Our comprehensive approach addresses the root causes of inequality through targeted
              interventions. From mobile health clinics reaching remote villages to scholarship
              programs supporting bright minds, we work tirelessly to break the cycle of poverty and
              create pathways to prosperity.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We partner with local communities, government agencies, and like-minded organizations
              to maximize our impact. Every program is designed with sustainability in mind,
              ensuring that the communities we serve can continue to thrive long after our direct
              involvement.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6 border-t border-border pt-8 md:grid-cols-4">
            <div className="text-center md:text-left">
              <div className="text-3xl font-bold text-primary">15+</div>
              <div className="text-sm text-muted-foreground font-medium">Years of Service</div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-3xl font-bold text-primary">25K+</div>
              <div className="text-sm text-muted-foreground font-medium">Families Supported</div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-3xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground font-medium">Active Programs</div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-3xl font-bold text-primary">200+</div>
              <div className="text-sm text-muted-foreground font-medium">Villages Reached</div>
            </div>
          </div>

          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
          >
            Learn more about our impact
            <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
