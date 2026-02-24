import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Clock } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Business Info */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">S S ENTERPRISES</h3>
            <p className="text-sm text-muted-foreground">
              आपले सरकार सेवा केंद्र वाशी - विश्वसनीय सरकारी दस्तऐवज आणि सेवा प्रदाता
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">द्रुत दुवे</h3>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-muted-foreground hover:text-primary">
                होम
              </Link>
              <Link to="/about" className="text-sm text-muted-foreground hover:text-primary">
                आमच्याबद्दल
              </Link>
              <Link to="/services" className="text-sm text-muted-foreground hover:text-primary">
                सेवा
              </Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary">
                संपर्क
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">संपर्क माहिती</h3>
            <div className="flex flex-col gap-3">
              <a href="tel:8070404099" className="flex items-start gap-2 text-sm text-muted-foreground hover:text-primary">
                <Phone className="h-4 w-4 mt-0.5 shrink-0" />
                <span>8070404099</span>
              </a>
              <a href="mailto:ssvashi02@gmail.com" className="flex items-start gap-2 text-sm text-muted-foreground hover:text-primary">
                <Mail className="h-4 w-4 mt-0.5 shrink-0" />
                <span>ssvashi02@gmail.com</span>
              </a>
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>Shop No 238, SS4, Sector-2, Xerox Line, Vashi, Navi Mumbai - 400703</span>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">कार्य वेळ</h3>
            <div className="flex items-start gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4 mt-0.5 shrink-0" />
              <div>
                <p>सोमवार - शनिवार</p>
                <p className="font-medium">९:०० सकाळी - ७:०० संध्याकाळी</p>
                <p className="mt-2">रविवार: बंद</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} S S ENTERPRISES. सर्व हक्क राखीव आहेत. Built with love using{" "}
            <a
              href="https://caffeine.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
