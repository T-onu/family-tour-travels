import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, BadgeCheck, Car, HeartHandshake, Phone, ShieldCheck } from "lucide-react";
import { BUSINESS, telHref, whatsappHref } from "@/lib/business";
import { destinations, familyTravel, heroKerala, packages, stats } from "@/lib/data";
import { pageMeta } from "@/lib/seo";
import { DestinationCard, PackageCard } from "@/components/site/Cards";
import { EnquiryBanner, FAQ, SectionHeading, Testimonials } from "@/components/site/Sections";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";

export const Route = createFileRoute("/")({
  head: () =>
    pageMeta({
      title: "Premium Family Holidays Across India",
      description:
        `Plan hill station, beach, pilgrimage and heritage holidays with ${BUSINESS.name}. Handpicked stays, private cabs and WhatsApp-first planning.`,
      path: "/",
    }),
  component: Index,
});

const why = [
  { icon: HeartHandshake, title: "Planned like family", text: "One planner from enquiry to return — no call centres, no scripts." },
  { icon: Car, title: "Private, trusted transport", text: "Verified hill drivers and well-kept cabs on every route." },
  { icon: BadgeCheck, title: "Handpicked stays", text: "Hotels and homestays we've personally checked for families." },
  { icon: ShieldCheck, title: "Transparent pricing", text: "Clear inclusions, no hidden charges, refunds explained upfront." },
];

function Index() {
  const featured = packages.filter((p) => p.featured);
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[88svh] overflow-hidden bg-ink text-ink-foreground">
        <img
          src={heroKerala}
          alt="Houseboat drifting through Kerala backwaters at sunrise"
          width={1920}
          height={1080}
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/20" />
        <div className="container-x relative flex min-h-[88svh] flex-col justify-end pb-16 pt-24 md:pb-24">
          <p className="eyebrow text-gold">{BUSINESS.name} · {BUSINESS.serviceArea}</p>
          <h1 className="mt-4 max-w-3xl text-5xl font-semibold leading-[1.02] md:text-7xl">
            Journeys across India, <em className="font-light italic text-gold">planned like family.</em>
          </h1>
          <p className="mt-5 max-w-xl text-base text-ink-foreground/85 md:text-lg">
            Hill stations, beaches, pilgrimages and palaces — tailored itineraries, private cabs and one WhatsApp thread for everything.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-7 py-4 font-semibold text-whatsapp-foreground shadow-lift transition-transform hover:-translate-y-0.5"
            >
              <WhatsAppIcon className="h-5 w-5" /> Plan my trip on WhatsApp
            </a>
            <Link
              to="/packages"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-ink-foreground/40 bg-ink-foreground/10 px-7 py-4 font-semibold backdrop-blur-sm transition-colors hover:bg-ink-foreground/20"
            >
              Explore packages <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <dl className="mt-12 grid grid-cols-2 gap-6 border-t border-ink-foreground/20 pt-8 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="font-display text-3xl font-semibold text-gold md:text-4xl">{s.value}</dt>
                <dd className="mt-1 text-sm text-ink-foreground/75">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Destinations */}
      <section className="container-x py-20 md:py-28">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading eyebrow="Destinations" title="Where would you like to wake up?" sub="Eight of India's most loved escapes, each with itineraries built for families, couples and pilgrims." />
          <Link to="/destinations" className="inline-flex items-center gap-2 font-semibold text-primary">
            All destinations <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 md:gap-5 lg:grid-cols-4">
          {destinations.map((d) => <DestinationCard key={d.slug} d={d} />)}
        </div>
      </section>

      {/* Featured packages */}
      <section className="bg-muted/60 py-20 md:py-28">
        <div className="container-x">
          <SectionHeading eyebrow="Popular packages" title="Trips our travellers book again and again" align="center" />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {featured.map((p) => <PackageCard key={p.slug} p={p} />)}
          </div>
          <div className="mt-10 text-center">
            <Link to="/packages" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 font-semibold">
              View all packages <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="container-x grid items-center gap-12 py-20 md:py-28 lg:grid-cols-2">
        <div className="relative">
          <img
            src={familyTravel}
            alt="A family laughing at a Himalayan viewpoint"
            width={1280}
            height={1280}
            loading="lazy"
            className="aspect-square w-full rounded-3xl object-cover shadow-lift"
          />
          <div className="absolute -bottom-6 left-6 rounded-2xl bg-card p-5 shadow-lift md:-left-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Since {BUSINESS.foundedYear}</p>
            <p className="font-display text-2xl font-semibold">8,000+ smiles home</p>
          </div>
        </div>
        <div>
          <SectionHeading eyebrow="Why families choose us" title="Big-agency polish, small-team care" />
          <ul className="mt-8 grid gap-6 sm:grid-cols-2">
            {why.map((w) => (
              <li key={w.title} className="flex gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent text-accent-foreground">
                  <w.icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-semibold">{w.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{w.text}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/about" className="rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground">Our story</Link>
            <a href={telHref} className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-semibold">
              <Phone className="h-4 w-4" /> {BUSINESS.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container-x py-12 md:py-20">
        <SectionHeading eyebrow="Traveller stories" title="What families say after the trip" align="center" />
        <div className="mt-12"><Testimonials /></div>
      </section>

      {/* FAQ */}
      <section className="container-x grid gap-10 py-20 md:py-28 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <SectionHeading eyebrow="Good to know" title="Questions before you book" />
          <Link to="/faq" className="mt-6 inline-flex items-center gap-2 font-semibold text-primary">
            All FAQs <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <FAQ limit={4} />
      </section>

      <EnquiryBanner />
    </>
  );
}
