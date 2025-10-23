import { ShieldCheck, Sparkles, Package } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const values = [
  {
    icon: ShieldCheck,
    title: "100% Halal",
    description: "All our snacks are certified halal, so you can enjoy them with peace of mind.",
  },
  {
    icon: Sparkles,
    title: "Hygienic Production",
    description: "We maintain the highest standards of cleanliness to ensure every bite is safe and delicious.",
  },
  {
    icon: Package,
    title: "Modern Packaging",
    description: "Our trendy and secure packaging keeps your snacks fresh and makes them perfect for on-the-go.",
  },
];

export default function ValuesPage() {
  return (
    <main>
      <section id="values" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-medium">Why Choose Us?</div>
              <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl text-primary">Snack with Confidence</h2>
              <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We're committed to quality you can trust. Here's what makes SOSNACK special.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12">
            {values.map((value) => (
              <Card key={value.title} className="text-center p-6 flex flex-col items-center shadow-sm hover:shadow-lg transition-shadow">
                <div className="mb-4 rounded-full bg-accent p-4">
                  <value.icon className="h-10 w-10 text-accent-foreground" />
                </div>
                <CardHeader className="p-0 mb-2">
                  <CardTitle className="font-headline text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardDescription>{value.description}</CardDescription>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
