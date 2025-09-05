import { MoveRight, PhoneCall, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const CTA = () => (
  <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24 py-12 lg:py-20">
    <div className="mx-auto max-w-7xl">
      <div className="flex flex-col items-center gap-10 rounded-lg bg-card p-8 text-center shadow-sm border border-border">
        {/* Badge */}
        <div>
          <Badge className="bg-secondary text-secondary-foreground">
            Get involved
          </Badge>
        </div>

        {/* Title + Description */}
        <div className="flex flex-col gap-4 items-center text-center">
          <h4 className="font-regular max-w-2xl text-3xl tracking-tighter md:text-5xl text-foreground">
            Together, we can empower youth and uplift communities
          </h4>
          <p className="max-w-2xl text-lg leading-relaxed tracking-tight text-muted-foreground">
            Thay Trust is dedicated to transforming lives. From guiding
            youngsters into top MNCs through skill training, to empowering
            women and supporting families in need - your involvement makes
            all the difference.
          </p>
        </div>

        {/* Highlights List */}
        <div className="w-full flex justify-center">
          <ul className="max-w-2xl grid gap-2 sm:grid-cols-2 text-left text-base text-muted-foreground">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary mt-1 shrink-0" />
              <span>Career training & placement support for youngsters</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary mt-1 shrink-0" />
              <span>Educational assistance for underprivileged students</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary mt-1 shrink-0" />
              <span>Medical care & health support for families in poverty</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary mt-1 shrink-0" />
              <span>Marriage assistance for women from poor backgrounds</span>
            </li>
            <li className="flex items-start gap-2 sm:col-span-2">
              <CheckCircle2 className="h-5 w-5 text-primary mt-1 shrink-0" />
              <span>Women empowerment & self-sustainability programs</span>
            </li>
          </ul>
        </div>

        {/* Buttons */}
        <div className="flex flex-row gap-4">
          <Button
            className="gap-3 border-border text-foreground"
            variant="outline"
          >
            Talk to us <PhoneCall className="h-4 w-4" />
          </Button>
          <Button className="gap-3 bg-primary text-primary-foreground hover:bg-primary/90">
            Support now <MoveRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  </div>
);

export default CTA;
