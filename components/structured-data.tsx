export function StructuredData() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "Magico Carbon",
        url: "https://www.magicocarbon.com",
        logo: "https://www.magicocarbon.com/images/logo.png",
        description:
          "Global supplier of premium activated carbon for water treatment, air purification, and industrial applications.",
        address: {
          "@type": "PostalAddress",
          streetAddress: "A-14/2, Malviya Nagar Extn, Saket",
          addressLocality: "Delhi",
          postalCode: "110017",
          addressCountry: "IN",
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+91-8010223355",
          contactType: "Sales",
        },
        sameAs: ["https://www.linkedin.com/company/magico-carbon"],
      },
      {
        "@type": "WebSite",
        name: "Magico Carbon",
        url: "https://www.magicocarbon.com",
        potentialAction: {
          "@type": "SearchAction",
          target: "https://www.magicocarbon.com/products?query={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
