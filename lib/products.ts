export type ProductSize = {
  label: string;
  detail: string;
};

export type CatalogProduct = {
  slug: string;
  /** Optional extra URL segments that resolve to this product (lowercase). */
  alternateParams?: string[];
  categoryLabel: string;
  title: string;
  excerpt: string;
  summary: string;
  image: string;
  sizes?: ProductSize[];
  sizesSectionTitle?: string;
  features?: string[];
  featuresSectionTitle?: string;
};

export const PRODUCTS: CatalogProduct[] = [
  {
    slug: "gac",
    categoryLabel: "Granular Activated Carbon",
    title: "Granular Activated Carbon (GAC)",
    excerpt:
      "Coconut shell GAC with high adsorptive capacity for water, air, and industrial purification—micro-pore rich for organics, metals, and DBP reduction.",
    summary:
      "Magico Carbons' Granular Coconut Shell Activated Carbon offers versatile applications. With high adsorptive capacity, it effectively removes contaminants from water, air, liquids, and gases, enhancing taste, odor, and color. It finds use in municipal and environmental water treatment, waste gas treatment, mercury removal, food and beverage, metal recovery, and medicinal applications. Different particle sizes cater to vapor and liquid adsorption needs. Our coconut shell-based carbon, rich in micro-pores, excels in filtering small organic structures, recovering precious metals, and reducing disinfection byproducts (DBPs) in potable water.",
    image: "/images/CARBON_2_4.png",
    sizesSectionTitle: "GAC Product Sizes",
    sizes: [
      { label: "4 x 8 Size", detail: "USS Mesh (Non Washed)" },
      { label: "6 x 12 Size", detail: "USS Mesh (Acid Washed)" },
      { label: "8 x 30 Size", detail: "USS Mesh (Non Washed)" },
      { label: "12 x 30 Size", detail: "USS Mesh (Non Washed)" },
      { label: "14 x 35 Size", detail: "USS Mesh (Acid Washed)" },
      { label: "20 x 40 Size", detail: "USS Mesh (Acid Washed)" },
      { label: "30 x 60 Size", detail: "USS Mesh (Non Washed)" },
      { label: "50 x 100 Size", detail: "USS Mesh (Non Washed)" },
    ],
  },
  {
    slug: "pac",
    categoryLabel: "Powdered Activated Carbon",
    title: "Powdered Activated Carbon",
    excerpt:
      "Fine PAC for taste, odor, and organic removal—economical, minimal sludge, and tailored pore structures for your treatment train.",
    summary:
      "Powdered Activated Carbon (PAC) is similar to Granular Activated Carbon (GAC) as it is made from high-quality coconut shells, coal, and wood. PAC is typically considered to have particles less than U.S. standard 80 mesh size (0.177 mm), which makes it ideal for water treatment. Magico Carbon PAC is a reliable, economical water treatment option for taste and odor control and removal of organic compounds. The use of PAC is beneficial economically and environmentally, since it reduces operating costs, produces minimal waste sludge, allows for the conservation of resources, and provides superior water quality.",
    image: "/images/CTC_Adsorption_3_4.png",
    featuresSectionTitle: "Features & Benefits",
    features: [
      "Powdered activated carbons (PAC) are fine particles passing through an 80-mesh sieve (0.177 mm) and smaller.",
      "Magico Carbon offers a variety of powdered activated carbon products, each designed with a specific pore structure and adsorption properties.",
      "The manufacturing process allows for the creation of unique internal pore structures, resulting in different adsorption properties for each product type.",
      "The choice of product depends on the specific application and the impurities present, as well as proprietary process conditions.",
      "Magico Carbon's powdered activated carbon has a high adsorptive capacity, making it effective in removing contaminants from water, air, liquids, and gases.",
      "The company is committed to environmental responsibility and can reactivate spent Granular Activated Carbon (GAC) through thermal oxidation to produce react PAC.",
      "Magico Carbon provides comprehensive analytical support, including feasibility studies and cost evaluations, as well as complete system design, service, and troubleshooting.",
      "Customers can rely on the expertise of industry experts in powdered activated carbon and trust in Magico Carbon's commitment to service.",
    ],
  },
  {
    slug: "pelletized",
    categoryLabel: "Pelletized Activated Carbon",
    title: "Pelletized Activated Carbon",
    excerpt:
      "Extruded pellets for vapor phase, low pressure drop, and VOC or mercury removal—with uniform geometry for consistent bed performance.",
    summary:
      "Magico Carbon offers pelletized activated carbon, consisting of compressed cylindrical pellets that deliver outstanding performance in numerous applications. These pellets effectively remove contaminants like volatile organic compounds (VOCs) and mercury from natural gas, ensuring the purity and safety of the supply. Additionally, they excel in odor control across various industries. The porous structure of the pellets enables them to adsorb and eliminate odor-causing compounds, creating a cleaner and more pleasant environment.",
    image: "/images/CARBON_2_3.png",
    featuresSectionTitle: "Features & Benefits",
    features: [
      "Pelletized activated carbon is created by extruding activated carbon into cylindrical-shaped pellets with diameters ranging from 0.8 to 5 mm.",
      "Their high activity and surface area make them ideal for many vapor phase applications.",
      "The uniformity of the shape makes it particularly useful in applications where low-pressure drop is a consideration.",
      "Magico Carbon manufactures many pellet types of activated carbon products, each specifically designed to provide a unique pore structure and adsorption properties.",
      "By varying manufacturing conditions, internal pore structures are created that impart unique adsorption properties specific to each product type. The choice of product for a specific application will vary due to differing impurities and process conditions.",
      "The adsorptive capacity of pelletized carbon makes it ideal for removing contaminants from air and gas streams. Pellets are reactivatable through thermal oxidation and can be used multiple times for the same application.",
    ],
  },
];

const bySlug = new Map(PRODUCTS.map((p) => [p.slug, p]));

/** Maps URL param (lowercase) → canonical product slug. */
const paramToCanonicalSlug = new Map<string, string>();

function seedParamRoutes(): void {
  PRODUCTS.forEach((p, index) => {
    paramToCanonicalSlug.set(p.slug.toLowerCase(), p.slug);
    paramToCanonicalSlug.set(String(index + 1), p.slug);
    for (const alt of p.alternateParams ?? []) {
      paramToCanonicalSlug.set(alt.toLowerCase().trim(), p.slug);
    }
  });
}

seedParamRoutes();

/**
 * Resolve a dynamic segment from `/products/[slug]` to a product.
 * Accepts canonical slugs (`gac`), numeric shortcuts (`1`…`n`), and any `alternateParams`.
 */
export function getProductByParam(param: string): CatalogProduct | undefined {
  const key = param.toLowerCase().trim();
  const canonical = paramToCanonicalSlug.get(key);
  if (!canonical) return undefined;
  return bySlug.get(canonical);
}

/** Canonical slug for URLs and redirects; undefined if param is not recognized. */
export function getCanonicalSlugForParam(param: string): string | undefined {
  const key = param.toLowerCase().trim();
  return paramToCanonicalSlug.get(key);
}

export function getProductBySlug(slug: string): CatalogProduct | undefined {
  return bySlug.get(slug);
}

export function getAllProductSlugs(): string[] {
  return PRODUCTS.map((p) => p.slug);
}
