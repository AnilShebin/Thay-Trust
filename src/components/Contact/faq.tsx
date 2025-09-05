import { PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const FAQ = () => (
  <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24 py-12 lg:py-20">
    <div className="mx-auto max-w-7xl">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <div>
              <Badge variant="outline">FAQ</Badge>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="font-regular max-w-xl text-left text-3xl tracking-tighter md:text-5xl">
                Thay Trust – Empowering Youth & Supporting Communities
              </h4>
              <p className="max-w-xl text-left text-lg leading-relaxed tracking-tight text-muted-foreground lg:max-w-lg">
                Thay Trust is dedicated to uplifting youngsters by providing
                training, career guidance, and helping them secure placements in
                top MNCs. Alongside this, we extend support for women’s
                empowerment, educational needs, medical care, and marriage
                assistance for those from underprivileged backgrounds.
              </p>
            </div>
            <div className="">
              <Button className="gap-4" variant="outline">
                Any questions? Reach out <PhoneCall className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="q1">
            <AccordionTrigger>
              What is Thay Trust?
            </AccordionTrigger>
            <AccordionContent>
              Thay Trust is a non-profit organization dedicated to empowering
              youth and women. The trust provides career-focused training
              programs, helps youngsters get placed in top MNCs, and supports
              underprivileged women through education, healthcare, and marriage
              assistance.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="q2">
            <AccordionTrigger>
              Is Thay Trust a registered organisation?
            </AccordionTrigger>
            <AccordionContent>
              Yes. Thay Trust is a registered non-profit organization operating
              transparently under proper legal and social service guidelines.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="q3">
            <AccordionTrigger>
              What does Thay Trust do?
            </AccordionTrigger>
            <AccordionContent>
              Thay Trust mainly focuses on:
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Providing training and placement support for youngsters.</li>
                <li>Educational assistance for deserving students.</li>
                <li>Medical support for families in poverty.</li>
                <li>Marriage support for underprivileged women.</li>
                <li>Women empowerment programs for self-sustainability.</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="q4">
            <AccordionTrigger>
              How does Thay Trust raise funds?
            </AccordionTrigger>
            <AccordionContent>
              Thay Trust depends mainly on donations from individuals and
              contributions from well-wishers. Public support in cash or kind
              helps in carrying out daily activities, while corporate CSR
              support enables training and empowerment programs.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="q5">
            <AccordionTrigger>
              Does Thay Trust receive government funding?
            </AccordionTrigger>
            <AccordionContent>
              No. Thay Trust does not rely on government or foreign funding.
              This independence allows us to plan and execute projects quickly
              and efficiently.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="q6">
            <AccordionTrigger>
              Can a small contribution make a difference?
            </AccordionTrigger>
            <AccordionContent>
              Absolutely! Every small contribution adds up and helps transform
              lives. Whether it’s sponsoring a student, supporting medical care,
              or contributing to women’s empowerment, your help makes a real
              difference.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="q7">
            <AccordionTrigger>
              How are the funds used?
            </AccordionTrigger>
            <AccordionContent>
              Funds are used directly for training programs, student education,
              healthcare, and women empowerment initiatives. Thay Trust
              maintains transparency by focusing on beneficiaries rather than
              administrative expenses.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="q8">
            <AccordionTrigger>
              How can I be sure my donation is managed correctly?
            </AccordionTrigger>
            <AccordionContent>
              Thay Trust follows strict financial accountability with regular
              audits and transparent reporting. Donors are also welcome to visit
              and witness how their contributions are being utilized.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  </div>
);

export default FAQ;
