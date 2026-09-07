import { createFileRoute } from "@tanstack/react-router";
import { BUSINESS } from "@/lib/business";
import { familyTravel, stats } from "@/lib/data";
import { pageMeta } from "@/lib/seo";
import { EnquiryBanner, SectionHeading, Testimonials } from "@/components/site/Sections";

export const Route = createFileRoute("/about")({
  head: () =>
    pageMeta({
      title: "About Us",
      description: `${BUSINESS.name} has planned family holidays across India since ${BUSINESS.foundedYear} — personal planners, trusted drivers and handpicked stays.`,
      path: "/about",
    }),
  component: Page,
});

const values = [
  ["Honesty first", "Every quote lists what's in and what's out. If a hotel isn't good enough for our own family, it's not in your plan."],
  ["One planner, start to finish", "You talk to the same person from first enquiry to the drive home."],
  ["Built for real families", "Slower mornings, kid-friendly stops, senior-safe hotels — we design for how you actually travel."],
];

function Page() {
  return (
    <>
      <section className="container-x grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
        <div>
          <SectionHeading eyebrow="About us" title="A small team that treats your holiday like our own" />
          <p className="mt-6 leading-relaxed text-foreground/85">
            {BUSINESS.name} began in {BUSINESS.foundedYear} with a single Innova and a promise: plan every trip the way we'd plan one for our parents. Today we take thousands of travellers a year across the Himalayas, the coasts and the heritage heartland of India — still with the same personal planner on the other end of WhatsApp.
          </p>
          <dl className="mt-8 grid grid-cols-2 gap-6">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="font-display text-3xl font-semibold text-primary">{s.value}</dt>
                <dd className="text-sm text-muted-foreground">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
        <img src={familyTravel} alt="Family on a mountain viewpoint with luggage" width={1280} height={1280} loading="lazy" className="aspect-square w-full rounded-3xl object-cover shadow-lift" />
      </section>

      <section className="bg-muted/60 py-16 md:py-24">
        <div className="container-x">
          <SectionHeading eyebrow="What we stand for" title="Three promises on every trip" align="center" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map(([t, d]) => (
              <div key={t} className="rounded-2xl border border-border bg-card p-6">
                <h3 className="text-xl font-semibold">{t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-16 md:py-24">
        <SectionHeading eyebrow="Traveller stories" title="In their words" align="center" />
        <div className="mt-12"><Testimonials /></div>
      </section>
      <EnquiryBanner />
    </>
  );
}
