// Central source of truth for Madeez Carz World Ltd business details.
// Update values here and they propagate across the entire site
// (header, footer, contact page, structured data, tel/WhatsApp links).

export const business = {
  legalName: "Madeez Carz World Ltd",
  shortName: "Madeez Carz World",
  director: "Nabeel Amjad",

  address: {
    line1: "34 Nightingale Shott",
    town: "Egham",
    county: "Surrey",
    postcode: "TW20 9SX",
    country: "United Kingdom",
  },

  contact: {
    phoneDisplay: "07497 711029",
    phoneTel: "+447497711029", // used for tel: links
    whatsappNumber: "447497711029", // used for wa.me links (no + or spaces)
    email: "Madeezcarzworld.ltd@gmail.com",
  },

  social: {
    // Intentionally empty — do not add placeholder social links.
    // Populate only when the client provides real, active profiles.
  },

  site: {
    // Update once a production domain is assigned.
    url: "https://www.madeezcarzworld.co.uk",
  },
} as const;

export const fullAddress = `${business.address.line1}, ${business.address.town}, ${business.address.county} ${business.address.postcode}, ${business.address.country}`;

export const telHref = `tel:${business.contact.phoneTel}`;
export const whatsappHref = `https://wa.me/${business.contact.whatsappNumber}`;
export const mailHref = `mailto:${business.contact.email}`;
export const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  fullAddress
)}`;
