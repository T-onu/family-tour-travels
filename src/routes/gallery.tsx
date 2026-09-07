import { createFileRoute } from "@tanstack/react-router";
import { gallery } from "@/lib/data";
import { pageMeta } from "@/lib/seo";
import { Gallery } from "@/components/site/Lightbox";
import { EnquiryBanner, SectionHeading } from "@/components/site/Sections";

export const Route = createFileRoute("/gallery")({
  head: () =>
    pageMeta({
      title: "Travel Gallery",
      description: "Moments from our trips — Kerala backwaters, Ladakh lakes, Rajasthan forts, Kashmir shikaras and more.",
      path: "/gallery",
    }),
  component: Page,
});

function Page() {
  return (
    <>
      <section className="container-x py-16 md:py-24">
        <SectionHeading eyebrow="Gallery" title="Postcards from the road" sub="Tap any photo to view it full-screen." align="center" />
        <div className="mt-12"><Gallery items={gallery} /></div>
      </section>
      <EnquiryBanner title="Want to be in the next photo?" />
    </>
  );
}
