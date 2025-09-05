import { CheckCircle, Handshake, Lightbulb, ShieldCheck } from 'lucide-react';

export default function WhyDonateSection() {
  const reasons = [
    {
      icon: <CheckCircle className="size-6 text-primary" />,
      title: "Direct Impact",
      description: "100% of your donation directly funds our programs, ensuring maximum impact on the ground.",
    },
    {
      icon: <ShieldCheck className="size-6 text-primary" />,
      title: "Transparency",
      description: "We maintain full transparency in our operations, providing regular updates on how funds are utilized.",
    },
    {
      icon: <Handshake className="size-6 text-primary" />,
      title: "Community-Led",
      description: "Our initiatives are designed and implemented in close collaboration with local communities.",
    },
    {
      icon: <Lightbulb className="size-6 text-primary" />,
      title: "Sustainable Change",
      description: "We focus on long-term solutions that empower individuals and communities for lasting change.",
    },
  ];

  return (
    <section className="px-5 sm:px-10 md:px-16 lg:px-20 py-16 lg:py-24 bg-muted">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
          Why <span className="text-primary">Donate</span> to Thay Trust?
        </h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          Your trust is our greatest asset. We are committed to making every contribution count towards a brighter future.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-md">
              <div className="mb-4">{reason.icon}</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{reason.title}</h3>
              <p className="text-sm text-muted-foreground">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
