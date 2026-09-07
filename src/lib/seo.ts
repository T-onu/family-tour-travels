import { BUSINESS } from "./business";

export function pageMeta(opts: { title: string; description: string; path: string; type?: string }) {
  const title = `${opts.title} | ${BUSINESS.name}`;
  return {
    meta: [
      { title },
      { name: "description", content: opts.description },
      { property: "og:title", content: title },
      { property: "og:description", content: opts.description },
      { property: "og:type", content: opts.type ?? "website" },
      { property: "og:url", content: opts.path },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: opts.description },
    ],
    links: [{ rel: "canonical", href: opts.path }],
  };
}

export function jsonLd(data: Record<string, unknown>) {
  return { type: "application/ld+json", children: JSON.stringify(data) };
}

export const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: BUSINESS.name,
  description: BUSINESS.description,
  telephone: BUSINESS.phoneIntl,
  email: BUSINESS.email,
  areaServed: "IN",
  foundingDate: String(BUSINESS.foundedYear),
  openingHours: "Mo-Su 08:00-22:00",
};
