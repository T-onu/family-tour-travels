import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { CalendarDays, Check, MapPin, Phone, X } from "lucide-react";
import { BUSINESS, packageEnquiryMessage, telHref, whatsappHref } from "@/lib/business";
import { formatINR, getDestination, getPackage, packages } from "@/lib/data";
import { jsonLd, pageMeta } from "@/lib/seo";
import { PackageCard } from "@/components/site/Cards";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { SectionHeading } from "@/components/site/Sections";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";

export const Route = createFileRoute("/packages/$slug")({
  loader: ({ params }) => {
    const p = getPackage(params.slug);
    if (!p) throw notFound();
    const dest = getDestination(p.destinationSlug);
    const more = packages.filter((x) => x.slug !== p.slug).slice(0, 3);
    return { p, dest, more };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [{ title: "Package not found" }, { name: "robots", content: "noindex" }] };
    const { p, dest } = loaderData;
    const base = pageMeta({
      title: `${p.title} — ${p.duration}`,
      description: `${p.summary} From ${formatINR(p.price)} ${p.priceNote}.`,
      path: `/packages/${params.slug}`,
      type: "product",
    });
    return {
      ...base,
      scripts: [
        jsonLd({
          "@context": "https://schema.org",
          "@type": "TouristTrip",
          name: p.title,
          description: p.summary,
          touristType: p.category,
          itinerary: {
            "@type": "ItemList",
            itemListElement: p.itinerary.map((d) => ({ "@type": "ListItem", position: d.day, name: d.title, description: d.detail })),
          },
          offers: { "@type": "Offer", price: p.price, priceCurrency: "INR", availability: "https://schema.org/InStock" },
          provider: { "@type": "TravelAgency", name: BUSINESS.name, telephone: BUSINESS.phoneIntl },
          ...(dest && { touristDestination: dest.name }),
        }),
        jsonLd({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "/" },
            { "@type": "ListItem", position: 2, name: "Packages", item: "/packages" },
            { "@type": "ListItem", position: 3, name: p.title, item: `/packages/${p.slug}` },
          ],
        }),
      ],
    };
  },
  notFoundComponent: () => (
    <div className="container-x py-32 text-center">
      <h1 className="text-3xl font-semibold">Package not found</h1>
      <Link to="/packages" className="mt-6 inline-block rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground">Browse packages</Link>
    </div>
  ),
  component: Page,
});

function Page() {
  const { p, dest, more } = Route.useLoaderData();
  const message = packageEnquiryMessage(p.title);

  return (
    <>
      <section className="relative min-h-[60svh] overflow-hidden bg-ink text-ink-foreground">
        <img src={p.image} alt={p.title} width={1280} height={960} fetchPriority="high" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
        <div className="container-x relative flex min-h-[60svh] flex-col justify-end pb-12 pt-24">
          <nav aria-label="Breadcrumb" className="text-sm text-ink-foreground/70">
            <Link to="/">Home</Link> / <Link to="/packages">Packages</Link> / <span className="text-ink-foreground">{p.title}</span>
          </nav>
          <span className="mt-4 w-fit rounded-full bg-gold px-3 py-1 text-xs font-bold text-ink">{p.category}</span>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold md:text-6xl">{p.title}</h1>
          <div className="mt-4 flex flex-wrap gap-5 text-sm text-ink-foreground/85">
            <span className="inline-flex items-center gap-2"><CalendarDays className="h-4 w-4" /> {p.duration}</span>
            {dest && (
              <Link to="/destinations/$slug" params={{ slug: dest.slug }} className="inline-flex items-center gap-2 hover:text-gold">
                <MapPin className="h-4 w-4" /> {dest.name}, {dest.state}
              </Link>
            )}
          </div>
        </div>
      </section>

      <section className="container-x grid gap-12 py-16 lg:grid-cols-[1.4fr_1fr] lg:py-24">
        <div className="min-w-0">
          <p className="text-lg leading-relaxed text-foreground/85">{p.summary}</p>

          <h2 className="mt-12 text-2xl font-semibold">Day-by-day itinerary</h2>
          <ol className="mt-6 space-y-0 border-l-2 border-border">
            {p.itinerary.map((d) => (
              <li key={d.day} className="relative pb-8 pl-8 last:pb-0">
                <span className="absolute -left-[13px] top-0 grid h-6 w-6 place-items-center rounded-full bg-primary text-[11px] font-bold text-primary-foreground">{d.day}</span>
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Day {d.day}</p>
                <h3 className="mt-1 text-lg font-semibold">{d.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{d.detail}</p>
              </li>
            ))}
          </ol>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-6">
              <h2 className="text-lg font-semibold">Inclusions</h2>
              <ul className="mt-4 space-y-2 text-sm">
                {p.inclusions.map((i) => <li key={i} className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-whatsapp" /> {i}</li>)}
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6">
              <h2 className="text-lg font-semibold">Exclusions</h2>
              <ul className="mt-4 space-y-2 text-sm">
                {p.exclusions.map((i) => <li key={i} className="flex gap-2"><X className="mt-0.5 h-4 w-4 shrink-0 text-destructive" /> {i}</li>)}
              </ul>
            </div>
          </div>
        </div>

        <aside className="lg:sticky lg:top-28 lg:self-start">
          <div className="mb-4 rounded-2xl bg-secondary p-6 text-secondary-foreground">
            <p className="text-xs uppercase tracking-widest text-secondary-foreground/70">Starting from</p>
            <p className="font-display text-4xl font-semibold text-gold">{formatINR(p.price)}</p>
            <p className="text-sm text-secondary-foreground/80">{p.priceNote}</p>
            <div className="mt-5 grid gap-2">
              <a href={whatsappHref(message)} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 rounded-full bg-whatsapp py-3 font-semibold text-whatsapp-foreground">
                <WhatsAppIcon className="h-5 w-5" /> Book on WhatsApp
              </a>
              <a href={telHref} className="flex items-center justify-center gap-2 rounded-full border border-secondary-foreground/30 py-3 font-semibold">
                <Phone className="h-5 w-5" /> {BUSINESS.phoneDisplay}
              </a>
            </div>
          </div>
          <EnquiryForm defaultPackage={p.title} />
        </aside>
      </section>

      <section className="bg-muted/60 py-16 md:py-24">
        <div className="container-x">
          <SectionHeading eyebrow="More trips" title="You may also like" />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {more.map((x) => <PackageCard key={x.slug} p={x} />)}
          </div>
        </div>
      </section>
    </>
  );
}
