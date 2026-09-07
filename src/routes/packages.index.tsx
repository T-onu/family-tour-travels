import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { packages, type Package } from "@/lib/data";
import destRajasthan from "@/assets/dest-rajasthan.jpg";
import { pageMeta } from "@/lib/seo";
import { PackageCard } from "@/components/site/Cards";
import { EnquiryBanner, PageHero } from "@/components/site/Sections";

export const Route = createFileRoute("/packages/")({
  head: () =>
    pageMeta({
      title: "Tour Packages",
      description: "Family, honeymoon, adventure, pilgrimage and heritage tour packages across India with transparent pricing and private transport.",
      path: "/packages",
    }),
  component: Page,
});

const cats: Array<"All" | Package["category"]> = ["All", "Family", "Honeymoon", "Adventure", "Pilgrimage", "Heritage", "Group Tour"];

function Page() {
  const [cat, setCat] = useState<(typeof cats)[number]>("All");
  const list = cat === "All" ? packages : packages.filter((p) => p.category === cat);
  return (
    <>
      <PageHero eyebrow="Tour packages" title="Ready-made trips, easily customised" sub="Every package is a starting point — change hotels, dates or pace and we'll re-quote on WhatsApp." image={destRajasthan} />
      <section className="container-x py-12 md:py-20">
        <div className="flex gap-2 overflow-x-auto pb-2" role="tablist" aria-label="Filter packages">
          {cats.map((c) => (
            <button
              key={c}
              role="tab"
              aria-selected={cat === c}
              onClick={() => setCat(c)}
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${cat === c ? "bg-primary text-primary-foreground" : "border border-border bg-card hover:border-primary"}`}
            >
              {c}
            </button>
          ))}
        </div>
        {list.length === 0 ? (
          <p className="mt-16 text-center text-muted-foreground">No packages in this category yet — ask us and we'll build one.</p>
        ) : (
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((p) => <PackageCard key={p.slug} p={p} />)}
          </div>
        )}
      </section>
      <EnquiryBanner title="Want a custom itinerary?" />
    </>
  );
}
