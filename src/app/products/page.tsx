import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";

const products = [
  { id: 'basreng', name: 'Basreng', flavor: 'Spicy & Savory' },
  { id: 'mie-gulung', name: 'Mie Gulung', flavor: 'Crunchy & Classic' },
  { id: 'keripik-kaca', name: 'Keripik Kaca', flavor: 'Thin & Crispy' },
  { id: 'seblak-kering', name: 'Seblak Kering', flavor: 'Hot & Zesty' },
  { id: 'makaroni-pedas', name: 'Makaroni Pedas', flavor: 'Fiery & Addictive' }
];

export default function ProductsPage() {
  return (
    <main>
      <section id="products" className="w-full py-12 md:py-24 lg:py-32 bg-primary/5">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-medium">Our Snacks</div>
              <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl text-primary">Taste the Hype</h2>
              <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                From fiery Basreng to crispy Keripik Kaca, explore our range of kalcer snacks that are perfect for any time, anywhere.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8 mt-12">
            {products.map((product) => {
              const productImage = PlaceHolderImages.find(img => img.id === product.id);
              return (
                <Card key={product.id} className="overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <CardContent className="p-0">
                    {productImage && (
                      <Image
                        src={productImage.imageUrl}
                        alt={productImage.description}
                        width={400}
                        height={400}
                        className="w-full h-auto aspect-square object-cover"
                        data-ai-hint={productImage.imageHint}
                      />
                    )}
                  </CardContent>
                  <CardHeader>
                    <CardTitle className="font-headline text-xl">{product.name}</CardTitle>
                    <Badge variant="secondary" className="w-fit">{product.flavor}</Badge>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
