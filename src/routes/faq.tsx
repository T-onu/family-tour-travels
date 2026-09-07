import { createFileRoute } from "@tanstack/react-router";
import { faqs } from "@/lib/data";
import { jsonLd, pageMeta } from "@/lib/seo";
import { EnquiryBanner, FAQ, SectionHeading } from "@/components/site/Sections";

export const Route = createFileRoute("/faq")({
  head: () => ({
    ...pageMeta({
      title: "Frequently Asked Questions",
      description: "Booking, customisation, pricing, refunds and safety — answers to the questions families ask before travelling with us.",
      path: "/faq",
    }),
    scripts: [
      jsonLd({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      }),
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <section className="container-x max-w-3xl py-16 md:py-24">
        <SectionHeading eyebrow="FAQ" title="Everything you'd ask before booking" align="center" />
        <div className="mt-10"><FAQ /></div>
      </section>
      <EnquiryBanner title="Still have a question?" />
    </>
  );
}
