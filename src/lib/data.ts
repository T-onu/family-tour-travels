import heroKerala from "@/assets/hero-kerala.jpg";
import destManali from "@/assets/dest-manali.jpg";
import destLadakh from "@/assets/dest-ladakh.jpg";
import destGoa from "@/assets/dest-goa.jpg";
import destRajasthan from "@/assets/dest-rajasthan.jpg";
import destKashmir from "@/assets/dest-kashmir.jpg";
import destChardham from "@/assets/dest-chardham.jpg";
import destKerala from "@/assets/dest-kerala.jpg";
import destShimla from "@/assets/dest-shimla.jpg";
import familyTravel from "@/assets/family-travel.jpg";

export { heroKerala, familyTravel };

export type Destination = {
  slug: string;
  name: string;
  state: string;
  tagline: string;
  description: string;
  image: string;
  bestTime: string;
  idealFor: string[];
  highlights: string[];
  startingPrice: number;
};

export type Package = {
  slug: string;
  title: string;
  destinationSlug: string;
  image: string;
  duration: string;
  nights: number;
  price: number;
  priceNote: string;
  category: "Honeymoon" | "Family" | "Adventure" | "Pilgrimage" | "Heritage" | "Group Tour";
  summary: string;
  inclusions: string[];
  exclusions: string[];
  itinerary: { day: number; title: string; detail: string }[];
  featured?: boolean;
};

export const destinations: Destination[] = [
  {
    slug: "manali",
    name: "Manali",
    state: "Himachal Pradesh",
    tagline: "Snow peaks, apple orchards and the road to Rohtang",
    description:
      "Manali is the Himalayan classic — pine forests along the Beas, Solang's adventure meadows and the high passes of Atal Tunnel and Rohtang. Perfect for first-time mountain trips with children or a slow honeymoon.",
    image: destManali,
    bestTime: "March – June, October – February",
    idealFor: ["Families", "Honeymooners", "Snow lovers"],
    highlights: ["Solang Valley", "Atal Tunnel & Sissu", "Hadimba Temple", "Old Manali cafés", "Jogini Falls"],
    startingPrice: 12999,
  },
  {
    slug: "shimla",
    name: "Shimla",
    state: "Himachal Pradesh",
    tagline: "Colonial charm on the Ridge with cedar-scented air",
    description:
      "The Queen of Hills pairs heritage walks along Mall Road with the toy train, Kufri's snow slopes and quiet detours to Naldehra and Chail. Easy to reach, easy to love.",
    image: destShimla,
    bestTime: "April – June, December – February",
    idealFor: ["Weekend getaways", "Senior citizens", "Couples"],
    highlights: ["The Ridge & Mall Road", "Kufri", "Jakhoo Temple", "Kalka–Shimla Toy Train", "Chail Palace"],
    startingPrice: 9999,
  },
  {
    slug: "kashmir",
    name: "Kashmir",
    state: "Jammu & Kashmir",
    tagline: "Shikaras on Dal Lake and meadows of Gulmarg",
    description:
      "Srinagar's houseboats, Gulmarg's gondola, the pony trails of Pahalgam and Sonamarg's glaciers — Kashmir is India's most cinematic escape, and our guides make it feel effortless.",
    image: destKashmir,
    bestTime: "March – October, December for snow",
    idealFor: ["Honeymooners", "Families", "Photographers"],
    highlights: ["Dal Lake houseboat stay", "Gulmarg Gondola", "Pahalgam Betaab Valley", "Mughal Gardens", "Tulip Garden (April)"],
    startingPrice: 18999,
  },
  {
    slug: "ladakh",
    name: "Leh Ladakh",
    state: "Ladakh",
    tagline: "Turquoise lakes, moon landscapes and monasteries",
    description:
      "Pangong's changing blues, Nubra's sand dunes and the world's highest motorable roads. We plan acclimatisation-first itineraries with oxygen support so the whole family enjoys the altitude.",
    image: destLadakh,
    bestTime: "May – September",
    idealFor: ["Adventure seekers", "Road-trippers", "Couples"],
    highlights: ["Pangong Tso", "Nubra Valley & Hunder", "Khardung La", "Thiksey & Hemis monasteries", "Magnetic Hill"],
    startingPrice: 24999,
  },
  {
    slug: "goa",
    name: "Goa",
    state: "Goa",
    tagline: "Sunset beaches, Portuguese lanes and seafood shacks",
    description:
      "From quiet South Goa sands to North Goa's buzz, we match you with the right beach, the right stay and a private cab so you never wait for a ride.",
    image: destGoa,
    bestTime: "November – February",
    idealFor: ["Friends", "Families", "Honeymooners"],
    highlights: ["Palolem & Agonda", "Old Goa churches", "Dudhsagar Falls", "Sunset cruise", "Fontainhas walk"],
    startingPrice: 11999,
  },
  {
    slug: "kerala",
    name: "Kerala",
    state: "Kerala",
    tagline: "Backwaters, tea hills and Ayurvedic calm",
    description:
      "Munnar's tea estates, a private houseboat in Alleppey, Thekkady's spice trails and Kovalam's shore — God's Own Country moves at the pace a family holiday should.",
    image: destKerala,
    bestTime: "September – March",
    idealFor: ["Families", "Honeymooners", "Wellness travellers"],
    highlights: ["Alleppey houseboat", "Munnar tea gardens", "Periyar Wildlife Sanctuary", "Kathakali evening", "Fort Kochi"],
    startingPrice: 15999,
  },
  {
    slug: "rajasthan",
    name: "Rajasthan",
    state: "Rajasthan",
    tagline: "Forts, palaces and desert nights under the stars",
    description:
      "Jaipur's pink city, Udaipur's lakes, Jodhpur's blue lanes and a camel safari in Jaisalmer — heritage stays and expert local guides bring royal India to life.",
    image: destRajasthan,
    bestTime: "October – March",
    idealFor: ["Heritage lovers", "Families", "International guests"],
    highlights: ["Amber Fort", "City Palace Udaipur", "Mehrangarh Fort", "Sam Sand Dunes", "Pushkar"],
    startingPrice: 16999,
  },
  {
    slug: "char-dham",
    name: "Char Dham",
    state: "Uttarakhand",
    tagline: "Yamunotri, Gangotri, Kedarnath and Badrinath",
    description:
      "A sacred Himalayan circuit planned with care — comfortable stays, medical kits, helicopter options for Kedarnath and experienced drivers who know every bend.",
    image: destChardham,
    bestTime: "May – June, September – October",
    idealFor: ["Pilgrims", "Senior citizens", "Family groups"],
    highlights: ["Kedarnath Temple", "Badrinath Dham", "Gangotri", "Yamunotri", "Haridwar Ganga Aarti"],
    startingPrice: 21999,
  },
];

export const packages: Package[] = [
  {
    slug: "manali-family-escape",
    title: "Manali Family Escape",
    destinationSlug: "manali",
    image: destManali,
    duration: "5 Days / 4 Nights",
    nights: 4,
    price: 14999,
    priceNote: "per person on twin sharing",
    category: "Family",
    featured: true,
    summary:
      "Volvo from Delhi, a cosy riverside resort, Solang Valley adventure and a day trip through the Atal Tunnel to Sissu.",
    inclusions: ["4 nights in 3★ resort with breakfast & dinner", "Delhi–Manali–Delhi AC Volvo", "Private cab for all sightseeing", "Atal Tunnel & Sissu excursion", "All tolls, parking and driver allowance"],
    exclusions: ["Lunch and personal expenses", "Adventure activity tickets", "Rohtang Pass permit (seasonal)", "GST 5%"],
    itinerary: [
      { day: 1, title: "Delhi to Manali", detail: "Board the overnight AC Volvo from Delhi. Sleep through the plains and wake up to the Kullu valley." },
      { day: 2, title: "Arrive & local Manali", detail: "Check in, rest, then visit Hadimba Temple, Vashisht hot springs, Club House and Mall Road." },
      { day: 3, title: "Solang Valley & Atal Tunnel", detail: "Paragliding and zorbing at Solang, then drive through the Atal Tunnel to Sissu waterfall in Lahaul." },
      { day: 4, title: "Naggar & Kullu", detail: "Naggar Castle, Roerich Art Gallery, river rafting on the Beas and shawl shopping in Kullu." },
      { day: 5, title: "Depart", detail: "Leisurely breakfast, checkout and evening Volvo back to Delhi." },
    ],
  },
  {
    slug: "kashmir-paradise-honeymoon",
    title: "Kashmir Paradise Honeymoon",
    destinationSlug: "kashmir",
    image: destKashmir,
    duration: "6 Days / 5 Nights",
    nights: 5,
    price: 26999,
    priceNote: "per person on twin sharing",
    category: "Honeymoon",
    featured: true,
    summary:
      "Deluxe houseboat on Dal Lake, candlelight dinner, Gulmarg gondola and a private shikara ride at golden hour.",
    inclusions: ["2 nights deluxe houseboat + 3 nights hotel", "Daily breakfast & dinner", "Private Innova for all transfers", "Shikara ride & candlelight dinner", "Gulmarg Gondola Phase 1 tickets"],
    exclusions: ["Airfare", "Pony rides and sledging", "Lunches", "GST 5%"],
    itinerary: [
      { day: 1, title: "Arrive Srinagar", detail: "Airport pickup, houseboat check-in and evening shikara ride across Dal Lake." },
      { day: 2, title: "Mughal Gardens", detail: "Shalimar, Nishat, Chashme Shahi and Shankaracharya Temple, then local markets." },
      { day: 3, title: "Gulmarg", detail: "Drive to Gulmarg for the gondola ride and meadows. Overnight in Gulmarg." },
      { day: 4, title: "Pahalgam", detail: "Via saffron fields and Avantipora ruins to Pahalgam. Betaab and Aru valleys." },
      { day: 5, title: "Sonamarg day trip", detail: "Thajiwas Glacier and river-side lunch, back to Srinagar for candlelight dinner." },
      { day: 6, title: "Departure", detail: "Breakfast and transfer to Srinagar airport." },
    ],
  },
  {
    slug: "leh-ladakh-road-trip",
    title: "Leh Ladakh Road Trip",
    destinationSlug: "ladakh",
    image: destLadakh,
    duration: "7 Days / 6 Nights",
    nights: 6,
    price: 32999,
    priceNote: "per person on twin sharing",
    category: "Adventure",
    featured: true,
    summary:
      "Acclimatise in Leh, cross Khardung La to Nubra, camp beside Pangong and return via Chang La — with oxygen on board.",
    inclusions: ["6 nights hotels & camps with breakfast & dinner", "Innova Crysta / Xylo for the circuit", "Inner-line permits & environment fee", "Oxygen cylinder in vehicle", "Airport transfers"],
    exclusions: ["Airfare", "Camel safari and rafting", "Lunches", "GST 5%"],
    itinerary: [
      { day: 1, title: "Arrive Leh", detail: "Full rest day for acclimatisation. Evening walk to Shanti Stupa." },
      { day: 2, title: "Sham Valley", detail: "Magnetic Hill, Gurudwara Pathar Sahib, Sangam and Hall of Fame." },
      { day: 3, title: "Leh to Nubra", detail: "Cross Khardung La to Hunder sand dunes and the double-humped camels." },
      { day: 4, title: "Nubra to Pangong", detail: "Via Shyok river route to Pangong Tso. Overnight lakeside camp." },
      { day: 5, title: "Pangong to Leh", detail: "Sunrise at the lake, return via Chang La and Thiksey Monastery." },
      { day: 6, title: "Leh leisure", detail: "Leh Palace, market and café day." },
      { day: 7, title: "Departure", detail: "Transfer to airport." },
    ],
  },
  {
    slug: "kerala-backwaters-hills",
    title: "Kerala Backwaters & Hills",
    destinationSlug: "kerala",
    image: destKerala,
    duration: "6 Days / 5 Nights",
    nights: 5,
    price: 21999,
    priceNote: "per person on twin sharing",
    category: "Family",
    featured: true,
    summary: "Munnar tea estates, Thekkady spice plantations, a private houseboat in Alleppey and a Kochi heritage walk.",
    inclusions: ["4 nights hotels + 1 night private houseboat", "All meals on houseboat, breakfast elsewhere", "Private AC sedan / Innova", "Kathakali show tickets", "Spice plantation tour"],
    exclusions: ["Airfare / train", "Periyar boat ride", "Lunches & dinners at hotels", "GST 5%"],
    itinerary: [
      { day: 1, title: "Kochi to Munnar", detail: "Pickup and drive via Cheeyappara waterfalls to Munnar." },
      { day: 2, title: "Munnar", detail: "Eravikulam National Park, Tea Museum, Mattupetty Dam and Echo Point." },
      { day: 3, title: "Munnar to Thekkady", detail: "Spice plantation walk and evening Kathakali performance." },
      { day: 4, title: "Thekkady to Alleppey", detail: "Board your private houseboat and cruise the backwaters. Fresh Kerala lunch and dinner on board." },
      { day: 5, title: "Alleppey to Kochi", detail: "Fort Kochi, Chinese fishing nets, Mattancherry Palace and Jew Town." },
      { day: 6, title: "Departure", detail: "Transfer to Kochi airport." },
    ],
  },
  {
    slug: "royal-rajasthan-heritage",
    title: "Royal Rajasthan Heritage Trail",
    destinationSlug: "rajasthan",
    image: destRajasthan,
    duration: "7 Days / 6 Nights",
    nights: 6,
    price: 24999,
    priceNote: "per person on twin sharing",
    category: "Heritage",
    summary: "Jaipur, Jodhpur, Jaisalmer and Udaipur with heritage haveli stays, local guides and a desert camp night.",
    inclusions: ["6 nights heritage hotels & desert camp", "Breakfast daily, dinner at camp", "Private AC vehicle throughout", "Camel safari with folk evening", "Government-approved guides"],
    exclusions: ["Monument entry fees", "Lunches", "Airfare", "GST 5%"],
    itinerary: [
      { day: 1, title: "Arrive Jaipur", detail: "City Palace, Jantar Mantar and Hawa Mahal." },
      { day: 2, title: "Jaipur", detail: "Amber Fort, Jal Mahal and Chokhi Dhani evening." },
      { day: 3, title: "Jaipur to Jodhpur", detail: "Drive via Pushkar. Evening at Jodhpur clock tower market." },
      { day: 4, title: "Jodhpur to Jaisalmer", detail: "Mehrangarh Fort, then onward to the golden city." },
      { day: 5, title: "Jaisalmer", detail: "Fort, havelis and desert camp at Sam with folk dance and dinner." },
      { day: 6, title: "Jaisalmer to Udaipur", detail: "Long scenic drive via Ranakpur Jain temples." },
      { day: 7, title: "Udaipur & depart", detail: "City Palace, Lake Pichola boat ride and departure." },
    ],
  },
  {
    slug: "char-dham-yatra",
    title: "Char Dham Yatra by Road",
    destinationSlug: "char-dham",
    image: destChardham,
    duration: "10 Days / 9 Nights",
    nights: 9,
    price: 29999,
    priceNote: "per person on twin sharing, ex-Haridwar",
    category: "Pilgrimage",
    summary: "Complete Char Dham circuit from Haridwar with comfortable stays, experienced hill drivers and helicopter upgrade options.",
    inclusions: ["9 nights hotels / guesthouses", "Breakfast & dinner daily", "Tempo Traveller / Innova with hill driver", "Yatra registration assistance", "Oxygen & first-aid kit"],
    exclusions: ["Pony / palki / helicopter charges", "Lunches", "Personal expenses", "GST 5%"],
    itinerary: [
      { day: 1, title: "Haridwar to Barkot", detail: "Drive via Mussoorie and Kempty Falls." },
      { day: 2, title: "Yamunotri", detail: "Trek from Janki Chatti to Yamunotri and back." },
      { day: 3, title: "Barkot to Uttarkashi", detail: "Vishwanath Temple visit." },
      { day: 4, title: "Gangotri", detail: "Darshan at Gangotri and return to Uttarkashi." },
      { day: 5, title: "Uttarkashi to Guptkashi", detail: "Scenic drive along the Bhagirathi and Mandakini." },
      { day: 6, title: "Kedarnath", detail: "Trek or helicopter to Kedarnath. Overnight near temple." },
      { day: 7, title: "Kedarnath to Guptkashi", detail: "Morning darshan and descent." },
      { day: 8, title: "Guptkashi to Badrinath", detail: "Via Joshimath. Evening aarti at Badrinath." },
      { day: 9, title: "Badrinath to Rudraprayag", detail: "Mana village, then descend." },
      { day: 10, title: "Return to Haridwar", detail: "Drive to Haridwar via Devprayag. Trip ends." },
    ],
  },
  {
    slug: "goa-beach-holiday",
    title: "Goa Beach Holiday",
    destinationSlug: "goa",
    image: destGoa,
    duration: "4 Days / 3 Nights",
    nights: 3,
    price: 12999,
    priceNote: "per person on twin sharing",
    category: "Family",
    summary: "Beach-facing resort, North and South Goa sightseeing by private cab and a sunset cruise on the Mandovi.",
    inclusions: ["3 nights beach resort with breakfast", "Airport transfers", "North & South Goa sightseeing", "Sunset cruise tickets"],
    exclusions: ["Airfare", "Water sports", "Meals other than breakfast", "GST 5%"],
    itinerary: [
      { day: 1, title: "Arrive Goa", detail: "Transfer to resort, evening at Calangute or Baga beach." },
      { day: 2, title: "North Goa", detail: "Fort Aguada, Anjuna, Vagator and Chapora fort." },
      { day: 3, title: "South Goa", detail: "Old Goa churches, Miramar, Dona Paula and sunset cruise." },
      { day: 4, title: "Departure", detail: "Breakfast and airport transfer." },
    ],
  },
  {
    slug: "shimla-manali-combo",
    title: "Shimla Manali Combo",
    destinationSlug: "shimla",
    image: destShimla,
    duration: "6 Days / 5 Nights",
    nights: 5,
    price: 17999,
    priceNote: "per person on twin sharing",
    category: "Family",
    summary: "The classic Himachal circuit: Shimla's Ridge, Kufri, Kullu rafting and Manali's Solang Valley in one private cab.",
    inclusions: ["2 nights Shimla + 3 nights Manali", "Breakfast & dinner", "Private cab from Chandigarh", "Kufri and Solang excursions"],
    exclusions: ["Train / flight to Chandigarh", "Adventure activities", "Lunches", "GST 5%"],
    itinerary: [
      { day: 1, title: "Chandigarh to Shimla", detail: "Evening walk on Mall Road and the Ridge." },
      { day: 2, title: "Kufri & Shimla", detail: "Kufri, Jakhoo Temple and Christ Church." },
      { day: 3, title: "Shimla to Manali", detail: "Via Kullu with river rafting stop." },
      { day: 4, title: "Solang & Atal Tunnel", detail: "Adventure at Solang, Sissu waterfall." },
      { day: 5, title: "Manali local", detail: "Hadimba, Vashisht, Old Manali." },
      { day: 6, title: "Return", detail: "Drive back to Chandigarh." },
    ],
  },
  {
    slug: "himachal-group-tour",
    title: "Himachal Group Departure",
    destinationSlug: "manali",
    image: destManali,
    duration: "6 Days / 5 Nights",
    nights: 5,
    price: 10999,
    priceNote: "per person, fixed group departure",
    category: "Group Tour",
    summary:
      "Join a fixed-date group of fellow travellers for Shimla and Manali — shared coach, shared costs, same handpicked stays and sightseeing as our private trips.",
    inclusions: ["5 nights in 3★ hotels with breakfast & dinner", "AC coach travel with the group throughout", "Shared sightseeing with a tour escort", "Kufri and Solang Valley excursions", "All tolls, parking and driver allowance"],
    exclusions: ["Lunch and personal expenses", "Adventure activity tickets", "Single-room supplement", "GST 5%"],
    itinerary: [
      { day: 1, title: "Delhi to Shimla", detail: "Group departs by AC coach from Delhi. Overnight drive to Shimla." },
      { day: 2, title: "Shimla sightseeing", detail: "The Ridge, Mall Road, Jakhoo Temple and Christ Church with the group." },
      { day: 3, title: "Shimla to Manali", detail: "Via Kufri, arrive Manali by evening and check in." },
      { day: 4, title: "Manali sightseeing", detail: "Hadimba Temple, Solang Valley and Vashisht hot springs." },
      { day: 5, title: "Atal Tunnel & Sissu", detail: "Full-day excursion through the Atal Tunnel to Sissu." },
      { day: 6, title: "Return to Delhi", detail: "Morning checkout, drive back and drop in Delhi by night." },
    ],
  },
  {
    slug: "rajasthan-group-tour",
    title: "Rajasthan Group Departure",
    destinationSlug: "rajasthan",
    image: destRajasthan,
    duration: "7 Days / 6 Nights",
    nights: 6,
    price: 15999,
    priceNote: "per person, fixed group departure",
    category: "Group Tour",
    summary:
      "A scheduled group circuit of Jaipur, Jodhpur, Jaisalmer and Udaipur with a tour escort — the same heritage stays and guides, at group pricing.",
    inclusions: ["6 nights hotels & desert camp, sharing basis", "Breakfast daily, dinner at camp", "AC coach with the group throughout", "Camel safari with folk evening", "Tour escort for the full circuit"],
    exclusions: ["Monument entry fees", "Lunches", "Single-room supplement", "GST 5%"],
    itinerary: [
      { day: 1, title: "Arrive Jaipur", detail: "Group check-in, evening welcome and Chokhi Dhani." },
      { day: 2, title: "Jaipur", detail: "Amber Fort, City Palace and Hawa Mahal with the group." },
      { day: 3, title: "Jaipur to Jodhpur", detail: "Drive via Pushkar, evening at the clock tower market." },
      { day: 4, title: "Jodhpur to Jaisalmer", detail: "Mehrangarh Fort, then onward to the golden city." },
      { day: 5, title: "Jaisalmer", detail: "Fort and havelis by day, desert camp with folk dance at night." },
      { day: 6, title: "Jaisalmer to Udaipur", detail: "Scenic drive via Ranakpur Jain temples." },
      { day: 7, title: "Udaipur & depart", detail: "City Palace, Lake Pichola boat ride and group departure." },
    ],
  },
];

export const faqs = [
  {
    q: "How do I book a package?",
    a: "Send us an enquiry on WhatsApp, call, or fill the contact form. We confirm availability within a few hours, share a detailed itinerary and lock your dates with a small advance.",
  },
  {
    q: "Can you customise an itinerary for my family?",
    a: "Yes — every package is a starting point. Tell us your dates, group size, budget and pace, and we'll tailor stays, sightseeing and transport to suit children, elders or a honeymoon.",
  },
  {
    q: "What is included in the price?",
    a: "Each package lists inclusions and exclusions clearly. Typically hotels, breakfast, private transfers and sightseeing are included; flights, lunches and activity tickets are not unless stated.",
  },
  {
    q: "Is the advance refundable?",
    a: "Advances are refundable as per the hotel and transport cancellation terms shared at booking. We always explain the policy before you pay.",
  },
  {
    q: "Do you arrange flights and trains?",
    a: "Yes, we can add flights or train tickets to any package at actual cost so your entire trip is on one plan.",
  },
  {
    q: "Are your drivers experienced for hill routes?",
    a: "All our Himalayan trips use experienced local hill drivers with well-maintained vehicles, and we carry first-aid and oxygen support on high-altitude routes.",
  },
];

export const testimonials = [
  {
    name: "Priya & Rohan Mehta",
    trip: "Kashmir Honeymoon",
    quote: "Every detail was handled — the houseboat, the candlelight dinner, even a surprise cake. We didn't touch our phones for a week.",
  },
  {
    name: "The Sharma Family",
    trip: "Manali with kids & grandparents",
    quote: "Travelling with a 4-year-old and my 70-year-old parents felt easy. The pace was relaxed and the driver was so patient.",
  },
  {
    name: "Anand Krishnan",
    trip: "Char Dham Yatra",
    quote: "Safe, well-organised and spiritually fulfilling. Hotels were clean and close to the temples. Highly recommended for elders.",
  },
];

export const stats = [
  { value: "12+", label: "Years planning trips" },
  { value: "8,000+", label: "Happy travellers" },
  { value: "40+", label: "Destinations across India" },
  { value: "4.9★", label: "Average rating" },
];

export const gallery = [
  { src: heroKerala, alt: "Houseboat on Kerala backwaters at sunrise", w: 1920, h: 1080 },
  { src: destLadakh, alt: "Pangong Lake with prayer flags in Ladakh", w: 1280, h: 960 },
  { src: destRajasthan, alt: "Amber Fort at golden hour, Jaipur", w: 1280, h: 960 },
  { src: destKashmir, alt: "Shikara on Dal Lake, Srinagar", w: 1280, h: 960 },
  { src: destManali, alt: "Snow peaks above the Manali valley road", w: 1280, h: 960 },
  { src: destGoa, alt: "Golden beach at sunset in Goa", w: 1280, h: 960 },
  { src: destChardham, alt: "Kedarnath temple below Himalayan peaks", w: 1280, h: 960 },
  { src: destKerala, alt: "Munnar tea gardens in the mist", w: 1280, h: 960 },
  { src: destShimla, alt: "Shimla ridge under fresh snow", w: 1280, h: 960 },
  { src: familyTravel, alt: "Family enjoying a mountain viewpoint", w: 1280, h: 1280 },
];

export const getDestination = (slug: string) => destinations.find((d) => d.slug === slug);
export const getPackage = (slug: string) => packages.find((p) => p.slug === slug);
export const packagesForDestination = (slug: string) => packages.filter((p) => p.destinationSlug === slug);
export const formatINR = (n: number) => `₹${n.toLocaleString("en-IN")}`;
