import { Link } from "@tanstack/react-router";
import { ChevronDown, Phone, Quote, Star } from "lucide-react";
import { useState } from "react";
import { BUSINESS, telHref, whatsappHref } from "@/lib/business";
import { faqs, testimonials } from "@/lib/data";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function SectionHeading({ eyebrow, title, sub, align = "left" }: { eyebrow: string; title: string; sub?: string; align?: "left" | "center" }) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-semibold leading-tight md:text-4xl">{title}</h2>
      {sub && <p className="mt-3 text-muted-foreground">{sub}</p>}
    </div>
  );
}

export function FAQ({ items = faqs, limit }: { items?: typeof faqs; limit?: number }) {
  const [open, setOpen] = useState<number | null>(0);
  const list = limit ? items.slice(0, limit) : items;
  return (
    <div className="divide-y divide-border rounded-2xl border border-border bg-card">
      {list.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              aria-controls={`faq-${i}`}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold"
            >
              {f.q}
              <ChevronDown className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform ${isOpen ? "rotate-180" : ""}`} />
            </button>
            {isOpen && (
              <p id={`faq-${i}`} className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">
                {f.a}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}

export function Testimonials() {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {testimonials.map((t) => (
        <figure key={t.name} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
          <Quote className="h-6 w-6 text-primary" />
          <blockquote className="mt-3 text-[15px] leading-relaxed">{t.quote}</blockquote>
          <div className="mt-4 flex gap-0.5 text-gold" aria-label="5 star rating">
            {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
          </div>
          <figcaption className="mt-3 text-sm">
            <span className="font-semibold">{t.name}</span>
            <span className="text-muted-foreground"> · {t.trip}</span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

export function EnquiryBanner({ message, title = "Ready to plan your trip?" }: { message?: string; title?: string }) {
  return (
    <section className="container-x">
      <div className="relative overflow-hidden rounded-3xl bg-secondary px-6 py-12 text-secondary-foreground md:px-12 md:py-16">
        <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-gold/20 blur-3xl" />
        <div className="relative grid items-center gap-8 md:grid-cols-[1fr_auto]">
          <div>
            <p className="eyebrow text-gold">Enquire now</p>
            <h2 className="mt-2 text-3xl font-semibold md:text-4xl">{title}</h2>
            <p className="mt-3 max-w-lg text-secondary-foreground/80">
              Tell us your dates and group size — we reply on WhatsApp within a few hours with a tailored plan and honest pricing.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
            <a
              href={whatsappHref(message)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-3.5 font-semibold text-whatsapp-foreground shadow-soft"
            >
              <WhatsAppIcon className="h-5 w-5" /> WhatsApp us
            </a>
            <a
              href={telHref}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-secondary-foreground/30 px-6 py-3.5 font-semibold"
            >
              <Phone className="h-5 w-5" /> {BUSINESS.phoneDisplay}
            </a>
            <Link to="/contact" className="text-center text-sm font-medium underline-offset-4 hover:underline">
              or send an enquiry form
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PageHero({ eyebrow, title, sub, image }: { eyebrow: string; title: string; sub?: string; image?: string }) {
  return (
    <section className="relative overflow-hidden bg-ink text-ink-foreground">
      {image && (
        <img src={image} alt="" width={1920} height={1080} className="absolute inset-0 h-full w-full object-cover opacity-50" />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/30" />
      <div className="container-x relative py-20 md:py-28">
        <p className="eyebrow text-gold">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">{title}</h1>
        {sub && <p className="mt-4 max-w-xl text-ink-foreground/80 md:text-lg">{sub}</p>}
      </div>
    </section>
  );
}
