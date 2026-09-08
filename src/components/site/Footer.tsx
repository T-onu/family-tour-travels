import { Link } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import logoIcon from "@/assets/logo-icon.png";
import { BUSINESS, facebookHref, instagramHref, mailHref, altTelHref, telHref, whatsappHref } from "@/lib/business";
import { destinations } from "@/lib/data";
import { InstagramIcon } from "./InstagramIcon";
import { FacebookIcon } from "./FacebookIcon";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function Footer() {
  return (
    <footer className="mt-24 bg-ink text-ink-foreground">
      <div className="container-x grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <img src={logoIcon} alt="" className="h-14 w-auto" />
          <p className="mt-3 font-display text-2xl font-semibold">{BUSINESS.name}</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-foreground/70">{BUSINESS.description}</p>
          <a
            href={whatsappHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-whatsapp px-4 py-2 text-sm font-semibold text-whatsapp-foreground"
          >
            <WhatsAppIcon className="h-4 w-4" /> Chat on WhatsApp
          </a>
          <div className="mt-5 flex items-center gap-3">
            <a
              href={instagramHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="grid h-9 w-9 place-items-center rounded-full border border-ink-foreground/20 text-ink-foreground/80 transition-colors hover:border-gold hover:text-gold"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
            <a
              href={facebookHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="grid h-9 w-9 place-items-center rounded-full border border-ink-foreground/20 text-ink-foreground/80 transition-colors hover:border-gold hover:text-gold"
            >
              <FacebookIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <p className="eyebrow text-gold">Destinations</p>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
            {destinations.map((d) => (
              <li key={d.slug}>
                <Link to="/destinations/$slug" params={{ slug: d.slug }} className="text-ink-foreground/80 hover:text-gold">
                  {d.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow text-gold">Explore</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/packages" className="text-ink-foreground/80 hover:text-gold">Tour packages</Link></li>
            <li><Link to="/gallery" className="text-ink-foreground/80 hover:text-gold">Gallery</Link></li>
            <li><Link to="/about" className="text-ink-foreground/80 hover:text-gold">About us</Link></li>
            <li><Link to="/faq" className="text-ink-foreground/80 hover:text-gold">FAQs</Link></li>
            <li><Link to="/contact" className="text-ink-foreground/80 hover:text-gold">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="eyebrow text-gold">Get in touch</p>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a href={telHref} className="flex items-center gap-3 text-ink-foreground/80 hover:text-gold">
                <Phone className="h-4 w-4 shrink-0" /> {BUSINESS.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={altTelHref} className="flex items-center gap-3 text-ink-foreground/80 hover:text-gold">
                <Phone className="h-4 w-4 shrink-0" /> {BUSINESS.altPhoneDisplay}
              </a>
            </li>
            <li>
              <a href={mailHref} className="flex items-center gap-3 text-ink-foreground/80 hover:text-gold">
                <Mail className="h-4 w-4 shrink-0" /> {BUSINESS.email}
              </a>
            </li>
            <li className="flex items-center gap-3 text-ink-foreground/80">
              <Clock className="h-4 w-4 shrink-0" /> {BUSINESS.hours}
            </li>
            {BUSINESS.address && (
              <li className="flex items-start gap-3 text-ink-foreground/80">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" /> {BUSINESS.address}
              </li>
            )}
            <li className="pt-1 text-xs text-ink-foreground/50">MSME {BUSINESS.msmeNumber}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-ink-foreground/10">
        <div className="container-x flex flex-col gap-2 py-5 text-xs text-ink-foreground/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.</p>
          <p>Serving travellers across {BUSINESS.serviceArea}.</p>
        </div>
      </div>
    </footer>
  );
}
