/**
 * Central business information for Family Tours and Travel.
 * Update values here and every CTA, footer, meta tag and structured-data block follows.
 */
export const BUSINESS = {
  name: "Family Tours and Travel",
  shortName: "Family Tours",
  tagline: "New Places • Stronger Bonds • Lasting Memories",
  description:
    "Family Tours and Travel plans premium, hassle-free holidays across India — hill stations, beaches, pilgrimages and heritage tours with handpicked stays and trusted drivers.",
  founder: "Rahul Pathania",
  phone: "8091706880",
  phoneDisplay: "+91 80917 06880",
  phoneIntl: "+918091706880",
  altPhone: "8219311694",
  altPhoneDisplay: "+91 82193 11694",
  whatsapp: "918091706880",
  email: "abshthakur@gmail.com",
  /** No office address provided yet — leave null to hide address blocks. */
  address: null as string | null,
  hours: "Mon – Sun, 8:00 AM – 10:00 PM",
  serviceArea: "All India",
  foundedYear: 2012,
  msmeNumber: "UDYAM-HP-04-0041260",
  social: {
    instagram: "family_toursandtravel",
    facebook: "Family tours and Travel",
  },
} as const;

export const telHref = `tel:${BUSINESS.phoneIntl}`;
export const altTelHref = `tel:+91${BUSINESS.altPhone}`;
export const mailHref = `mailto:${BUSINESS.email}`;
export const instagramHref = `https://instagram.com/${BUSINESS.social.instagram}`;
// Best-effort slug from the Facebook page name — replace with the exact page URL if this doesn't match.
export const facebookHref = `https://facebook.com/${BUSINESS.social.facebook.replace(/\s+/g, "")}`;

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
