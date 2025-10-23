import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section id="hero" className="relative w-full h-[80dvh] min-h-[500px] flex items-center justify-center text-center bg-background overflow-hidden">
        <div className="absolute inset-0 bg-primary/5"></div>
        <div className="relative z-10 container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-6">
                <div className="space-y-4">
                    <h1 className="text-4xl font-headline font-bold tracking-tighter text-primary sm:text-6xl md:text-7xl lg:text-8xl">
                        SOSNACK
                    </h1>
                    <p className="max-w-[700px] mx-auto text-foreground/80 md:text-xl font-headline tracking-wider">
                        #CemilanKalcer #AnytimeAnywhere
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-4">
                    <Button
                        size="lg"
                        className="font-bold text-accent-foreground bg-accent hover:bg-accent/90 transition-transform duration-300 hover:scale-105"
                        aria-label="Order Now"
                    >
                        Order Now
                    </Button>
                    <Button size="lg" variant="outline" className="font-bold border-2 border-primary" aria-label="Join Reseller">
                        Join Reseller
                    </Button>
                </div>
            </div>
        </div>
    </section>
  );
}
