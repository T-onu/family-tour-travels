import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { CalendarDays, Check, Users } from "lucide-react";
import { destinationEnquiryMessage, whatsappHref } from "@/lib/business";
import { formatINR, getDestination, packagesForDestination } from "@/lib/data";
import { jsonLd, pageMeta } from "@/lib/seo";
import { PackageCard } from "@/components/site/Cards";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { SectionHeading } from "@/components/site/Sections";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";

export const Route = createFileRoute("/destinations/$slug")({
  loader: ({ params }) => {
    const d = getDestination(params.slug);
    if (!d) throw notFound();
    return { d, related: packagesForDestination(d.slug) };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [{ title: "Destination not found" }, { name: "robots", content: "noindex" }] };
    const { d } = loaderData;
    const base = pageMeta({
      title: `${d.name} Tour Packages`,
      description: `${d.tagline}. ${d.name} holidays from ${formatINR(d.startingPrice)} — best time ${d.bestTime}.`,
      path: `/destinations/${params.slug}`,
    });
    return {
      ...base,
      scripts: [
        jsonLd({
          "@context": "https://schema.org",
          "@type": "TouristDestination",
          name: d.name,
          description: d.description,
          touristType: d.idealFor,
          containedInPlace: { "@type": "AdministrativeArea", name: d.state },
        }),
        jsonLd({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "/" },
            { "@type": "ListItem", position: 2, name: "Destinations", item: "/destinations" },
            { "@type": "ListItem", position: 3, name: d.name, item: `/destinations/${d.slug}` },
          ],
        }),
      ],
    };
  },
  notFoundComponent: () => (
    <div className="container-x py-32 text-center">
      <h1 className="text-3xl font-semibold">Destination not found</h1>
      <Link to="/destinations" className="mt-6 inline-block rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground">Browse destinations</Link>
    </div>
  ),
  component: Page,
});

function Page() {
  const { d, related } = Route.useLoaderData();
  const message = destinationEnquiryMessage(d.name);

  return (
    <>
      <section className="relative min-h-[60svh] overflow-hidden bg-ink text-ink-foreground">
        <img src={d.image} alt={`${d.name}, ${d.state}`} width={1280} height={960} fetchPriority="high" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
        <div className="container-x relative flex min-h-[60svh] flex-col justify-end pb-12 pt-24">
          <nav aria-label="Breadcrumb" className="text-sm text-ink-foreground/70">
            <Link to="/">Home</Link> / <Link to="/destinations">Destinations</Link> / <span className="text-ink-foreground">{d.name}</span>
          </nav>
          <p className="eyebrow mt-4 text-gold">{d.state}</p>
          <h1 className="mt-2 text-5xl font-semibold md:text-7xl">{d.name}</h1>
          <p className="mt-3 max-w-xl text-lg text-ink-foreground/85">{d.tagline}</p>
        </div>
      </section>

      <section className="container-x grid gap-12 py-16 lg:grid-cols-[1.4fr_1fr] lg:py-24">
        <div>
          <p className="text-lg leading-relaxed text-foreground/85">{d.description}</p>
          <dl className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-5">
              <dt className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground"><CalendarDays className="h-4 w-4" /> Best time</dt>
              <dd className="mt-2 font-semibold">{d.bestTime}</dd>
            </div>
            <div className="rounded-2xl border border-border bg-card p-5">
              <dt className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground"><Users className="h-4 w-4" /> Ideal for</dt>
              <dd className="mt-2 font-semibold">{d.idealFor.join(" · ")}</dd>
            </div>
          </dl>
          <h2 className="mt-12 text-2xl font-semibold">Highlights</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {d.highlights.map((h) => (
              <li key={h} className="flex items-center gap-3 rounded-xl bg-accent/60 px-4 py-3 text-sm font-medium">
                <Check className="h-4 w-4 shrink-0 text-primary" /> {h}
              </li>
            ))}
          </ul>
          <a href={whatsappHref(message)} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full bg-whatsapp px-6 py-3.5 font-semibold text-whatsapp-foreground shadow-soft">
            <WhatsAppIcon className="h-5 w-5" /> Plan a {d.name} trip
          </a>
        </div>
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <p className="mb-3 text-sm text-muted-foreground">Packages from <span className="font-display text-2xl font-semibold text-primary">{formatINR(d.startingPrice)}</span></p>
          <EnquiryForm defaultDestination={d.name} />
        </aside>
      </section>

      {related.length > 0 && (
        <section className="bg-muted/60 py-16 md:py-24">
          <div className="container-x">
            <SectionHeading eyebrow="Packages" title={`${d.name} itineraries`} />
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => <PackageCard key={p.slug} p={p} />)}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
