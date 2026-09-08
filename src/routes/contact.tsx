import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, Phone } from "lucide-react";
import { BUSINESS, altTelHref, mailHref, telHref, whatsappHref } from "@/lib/business";
import { jsonLd, pageMeta } from "@/lib/seo";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { FAQ, SectionHeading } from "@/components/site/Sections";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";

export const Route = createFileRoute("/contact")({
  head: () => ({
    ...pageMeta({
      title: "Contact & Enquiry",
      description: `Call or WhatsApp ${BUSINESS.phoneDisplay} or send an enquiry form. We reply within a few hours with a tailored plan.`,
      path: "/contact",
    }),
    scripts: [jsonLd({ "@context": "https://schema.org", "@type": "ContactPage", name: `Contact ${BUSINESS.name}` })],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <section className="container-x grid gap-12 py-16 lg:grid-cols-[1fr_1.2fr] lg:py-24">
        <div>
          <SectionHeading eyebrow="Contact" title="Let's plan your next trip" sub="Fastest on WhatsApp. Share your dates, group and budget — we'll come back with options the same day." />
          <ul className="mt-8 space-y-4">
            <li>
              <a href={whatsappHref()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition hover:border-whatsapp">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-whatsapp text-whatsapp-foreground"><WhatsAppIcon className="h-6 w-6" /></span>
                <span><span className="block text-xs font-semibold uppercase tracking-widest text-muted-foreground">WhatsApp</span><span className="font-semibold">{BUSINESS.phoneDisplay}</span></span>
              </a>
            </li>
            <li>
              <a href={telHref} className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition hover:border-primary">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground"><Phone className="h-5 w-5" /></span>
                <span><span className="block text-xs font-semibold uppercase tracking-widest text-muted-foreground">Call</span><span className="font-semibold">{BUSINESS.phoneDisplay}</span></span>
              </a>
            </li>
            <li>
              <a href={altTelHref} className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition hover:border-primary">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground"><Phone className="h-5 w-5" /></span>
                <span><span className="block text-xs font-semibold uppercase tracking-widest text-muted-foreground">Alternate number</span><span className="font-semibold">{BUSINESS.altPhoneDisplay}</span></span>
              </a>
            </li>
            <li>
              <a href={mailHref} className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition hover:border-secondary">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-secondary text-secondary-foreground"><Mail className="h-5 w-5" /></span>
                <span className="min-w-0"><span className="block text-xs font-semibold uppercase tracking-widest text-muted-foreground">Email</span><span className="block truncate font-semibold">{BUSINESS.email}</span></span>
              </a>
            </li>
            <li className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-accent text-accent-foreground"><Clock className="h-5 w-5" /></span>
              <span><span className="block text-xs font-semibold uppercase tracking-widest text-muted-foreground">Hours</span><span className="font-semibold">{BUSINESS.hours}</span></span>
            </li>
          </ul>
        </div>
        <EnquiryForm />
      </section>
      <section className="container-x pb-8">
        <SectionHeading eyebrow="FAQ" title="Before you write to us" />
        <div className="mt-8"><FAQ limit={4} /></div>
      </section>
    </>
  );
}
