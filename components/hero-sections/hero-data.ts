export type Industry = { name: string; image: string };
export type AboutHighlight = { label: string; detail: string };
export type ProductRangeItem = { name: string; summary: string; image: string };
export type BroadSpec = { label: string; value: string };

export const industries: Industry[] = [
  { name: "Water Treatment", image: "/images/WATER_4_1.png" },
  { name: "Gold Recovery", image: "/images/WATER_4_2.png" },
  { name: "Air & Gas Treatment", image: "/images/WATER_4_3.png" },
  { name: "Food & Beverage", image: "/images/WATER_4_4.png" },
  { name: "Pharmaceutical / Medical", image: "/images/WATER_4_5.png" },
  { name: "Automotive", image: "/images/WATER_4_6.png" },
  { name: "Tobacco", image: "/images/WATER_4_7.png" },
];

export const aboutHighlights: AboutHighlight[] = [
  {
    label: "Sustainability-driven",
    detail: `We use locally sourced raw materials to support
communities & regional economy. Our energy-efficient manufacturing
process ensures eco-friendly practices with net zero wastage`,
  },
  {
    label: "Wide product range",
    detail:
      "Coconut Shell Steam Activated Carbon for purification, refinery, and metal extraction.",
  },
  {
    label: "Customizations available",
    detail: " pH-matching options for specific application requirements.",
  },
  {
    label: "Collaborative approach",
    detail: "Tailoring effective solutions for diverse customer needs.",
  },
  {
    label: "High-capacity factory",
    detail: "Reliable monthly supply of over 200 MT of activated carbon",
  },
];

export const plantGallery = [
  "/images/CARBON_2_1.png",
  "/images/CARBON_5_4.png",
  "/images/hero-carbon.jpg",
];

export const productRange: ProductRangeItem[] = [
  {
    name: "Granular Activated Carbon",
    summary: "Superior filtration and efficient precious metal recovery.",
    image: "/images/CTC_Adsorption_3_2.png",
  },
  {
    name: "Powdered Activated Carbon",
    summary: "Versatile carbon for unlocking the potential of liquid applications.",
    image: "/images/CTC_Adsorption_3_4.png",
  },
  {
    name: "Pelletized Activated Carbon",
    summary: "Premium carbon used for air and water purification.",
    image: "/images/CTC_Adsorption_3_6.png",
  },
];

export const broadSpecs: BroadSpec[] = [
  { label: "CTC Adsorption", value: "40 to 65" },
  { label: "Iodine Adsorption", value: "800 to 1250 mg/g" },
  { label: "Surface Area", value: "850 to 1300 m²/g" },
  { label: "Hardness", value: "97 to 99.8" },
  { label: "Apparent Density", value: "350 to 550 gms/ltr" },
  { label: "Moisture", value: "Less than 5%" },
  { label: "Ash Content", value: "Less than 5%" },
  { label: "pH", value: "6 to 8.8 to 11" },
];

