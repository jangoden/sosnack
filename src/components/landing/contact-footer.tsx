import { Instagram, Smartphone } from "lucide-react";
import Link from "next/link";
import { TiktokIcon } from "../icons/tiktok-icon";
import { WhatsappIcon } from "../icons/whatsapp-icon";

export function ContactFooter() {
  return (
    <footer id="contact" className="bg-card border-t py-12">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold font-headline text-primary">SOSNACK</h3>
            <p className="text-muted-foreground">#CemilanKalcer #AnytimeAnywhere</p>
          </div>
          <div className="space-y-2">
            <h4 className="text-lg font-semibold font-headline">Get in Touch</h4>
            <div className="flex items-center gap-2">
                <Smartphone className="h-4 w-4 text-primary" />
                <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    WhatsApp
                </a>
            </div>
          </div>
          <div className="space-y-2">
            <h4 className="text-lg font-semibold font-headline">Follow Us</h4>
            <div className="flex items-center gap-4">
              <Link href="#" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="#" aria-label="TikTok" className="text-muted-foreground hover:text-primary transition-colors">
                <TiktokIcon className="h-6 w-6" />
              </Link>
              <Link href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-muted-foreground hover:text-primary transition-colors">
                <WhatsappIcon className="h-6 w-6" />
              </Link>
            </div>
          </div>
           <div className="space-y-2">
            <h4 className="text-lg font-semibold font-headline">Quick Links</h4>
            <ul className="space-y-1">
                <li><Link href="#hero" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
                <li><Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</Link></li>
                <li><Link href="#products" className="text-muted-foreground hover:text-primary transition-colors">Products</Link></li>
                <li><Link href="#values" className="text-muted-foreground hover:text-primary transition-colors">Our Values</Link></li>
            </ul>
           </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} SOSNACK. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
