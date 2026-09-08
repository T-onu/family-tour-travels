import { createFileRoute } from "@tanstack/react-router";
import { BUSINESS } from "@/lib/business";
import { destinations, heroKerala } from "@/lib/data";
import { pageMeta } from "@/lib/seo";
import { DestinationCard } from "@/components/site/Cards";
import { EnquiryBanner, PageHero } from "@/components/site/Sections";

export const Route = createFileRoute("/destinations/")({
  head: () =>
    pageMeta({
      title: "Destinations",
      description: `Explore Manali, Shimla, Kashmir, Ladakh, Goa, Kerala, Rajasthan and Char Dham holidays with ${BUSINESS.name}.`,
      path: "/destinations",
    }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero eyebrow="Destinations" title="Pick a place. We'll plan the rest." sub="From Himalayan passes to palm-lined coasts — every destination comes with itineraries built for families." image={heroKerala} />
      <section className="container-x py-16 md:py-24">
        <div className="grid grid-cols-2 gap-3 md:gap-5 lg:grid-cols-4">
          {destinations.map((d) => <DestinationCard key={d.slug} d={d} />)}
        </div>
      </section>
      <EnquiryBanner title="Don't see your destination?" />
    </>
  );
}
