/**
 * Central business information for Family Tour & Travels.
 * Update values here and every CTA, footer, meta tag and structured-data block follows.
 */
export const BUSINESS = {
  name: "Family Tour & Travels",
  shortName: "Family Tours",
  tagline: "Journeys across India, planned like family",
  description:
    "Family Tour & Travels plans premium, hassle-free holidays across India — hill stations, beaches, pilgrimages and heritage tours with handpicked stays and trusted drivers.",
  phone: "9736604880",
  phoneDisplay: "+91 97366 04880",
  phoneIntl: "+919736604880",
  whatsapp: "919736604880",
  email: "abshthakur@gmail.com",
  /** No office address provided yet — leave null to hide address blocks. */
  address: null as string | null,
  hours: "Mon – Sun, 8:00 AM – 10:00 PM",
  serviceArea: "All India",
  foundedYear: 2012,
  social: {
    instagram: "",
    facebook: "",
  },
} as const;

export const telHref = `tel:${BUSINESS.phoneIntl}`;
export const mailHref = `mailto:${BUSINESS.email}`;

export function whatsappHref(message?: string) {
  const text = message ?? `Hi ${BUSINESS.name}, I'd like to plan a trip. Please share details.`;
  return `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(text)}`;
}

export function packageEnquiryMessage(title: string) {
  return `Hi ${BUSINESS.name}, I'm interested in the "${title}" package. Please share availability and best price.`;
}

export function destinationEnquiryMessage(name: string) {
  return `Hi ${BUSINESS.name}, I'd like to plan a trip to ${name}. Please help me with options.`;
}
