import Image from "next/image"

export default function MissionSection() {
  return (
    <section className="px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-24">
      {/* Top Section */}
      <div className="mx-auto max-w-7xl space-y-12 rounded-xl bg-muted p-6 sm:p-8 md:p-12 lg:p-16 md:space-y-16">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="relative h-[240px] w-full overflow-hidden rounded-xl sm:h-[280px] md:h-[400px] lg:h-[450px]">
            <Image
              src="https://images.unsplash.com/photo-1641538225752-2d996ea204d4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0"
              alt="People joining hands in trust"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="flex flex-col justify-center space-y-4 sm:space-y-6">
            <h2 className="text-2xl font-bold leading-tight tracking-tight text-primary sm:text-3xl md:text-4xl lg:text-5xl">
              Empowering Communities Through Education & Healthcare
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed sm:text-lg">
              ThayTrust is dedicated to transforming lives through quality education, accessible healthcare, and
              sustainable development programs. We believe in creating opportunities that foster growth, dignity, and
              self-reliance in underserved communities.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="space-y-8 md:grid md:grid-cols-2 md:gap-8 md:space-y-0 lg:gap-12">
          {/* Our Service Section */}
          <div className="space-y-4">
            {/* Image Section */}
            <div className="relative h-48 w-full overflow-hidden rounded-xl sm:h-56 md:h-64">
              <Image
                src="https://images.unsplash.com/photo-1735759588961-0436494399b2?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0"
                alt="Volunteer offering help"
                fill
                className="object-cover"
              />
            </div>

            {/* Text Section */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-primary leading-tight sm:text-2xl">Our Service</h3>
              <p className="text-sm text-muted-foreground leading-relaxed sm:text-base">
                ThayTrust operates comprehensive programs focused on education, healthcare, and community development.
                Our initiatives are designed to address the root causes of poverty and create lasting positive change in
                rural and urban communities.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground sm:text-base">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></span>
                  Mobile health clinics and medical camps
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></span>
                  Educational scholarships and school infrastructure
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></span>
                  Vocational training and women empowerment
                </li>
              </ul>
            </div>
          </div>

          {/* Our Journey Section */}
          <div className="space-y-4">
            {/* Image Section */}
            <div className="relative h-48 w-full overflow-hidden rounded-xl sm:h-56 md:h-64">
              <Image
                src="https://images.unsplash.com/photo-1646579886135-068c73800308?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0"
                alt="Community working together"
                fill
                className="object-cover"
              />
            </div>

            {/* Text Section */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-primary leading-tight sm:text-2xl">Our Journey</h3>
              <p className="text-sm text-muted-foreground leading-relaxed sm:text-base">
                Founded with a vision to bridge the gap between privilege and need, ThayTrust has grown from a small
                community initiative to a recognized organization serving multiple states. Our journey is marked by
                countless stories of transformation and hope.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground sm:text-base">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></span>
                  15+ years of dedicated community service
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></span>
                  50,000+ lives directly impacted
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></span>
                  200+ villages and communities reached
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
