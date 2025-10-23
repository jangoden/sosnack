import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card } from "../ui/card";

export function AboutSection() {
  const aboutImage = PlaceHolderImages.find(img => img.id === 'sosnack-about');

  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-medium">
              Our Story
            </div>
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl text-primary">
              Youthful Spirit, Authentic Taste
            </h2>
            <p className="max-w-[600px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              SOSNACK was born from a passion for authentic Indonesian snacks, reimagined for the modern generation. We believe in creating moments of joy and connection through our delicious, high-quality cemilan. Our mission is to bring the vibrant flavors of Indonesia to snack lovers everywhere, anytime.
            </p>
          </div>
          <div className="flex items-center justify-center">
            {aboutImage && (
              <Card className="overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <Image
                  src={aboutImage.imageUrl}
                  alt={aboutImage.description}
                  width={600}
                  height={400}
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  data-ai-hint={aboutImage.imageHint}
                />
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
