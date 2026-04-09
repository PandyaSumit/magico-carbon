import { Metadata } from "next";

const regionCatalog: Record<
  string,
  {
    headline: string;
    industries: string[];
    logistics: string;
    callouts: string[];
  }
> = {
  texas: {
    headline: "Supplying Premium Activated Carbon to Texas",
    industries: [
      "Oil & Gas",
      "Municipal Water Treatment",
      "Chemical Processing",
      "Power & Refineries",
    ],
    logistics:
      "Same-day pickup from Houston | Batch shipping across Houston, Dallas, Austin, and San Antonio with bonded export handling for Gulf ports.",
    callouts: [
      "Heavy-duty logistics network, trucks staged in Houston plus partner carriers statewide.",
      "Customs support for cross-border loads to Mexico and export-ready Gulf shipments.",
    ],
  },
  seattle: {
    headline: "Supplying Premium Activated Carbon to Seattle",
    industries: [
      "Tech & Semiconductor",
      "Municipal Water Systems",
      "Marine & Ports",
      "Food & Beverage",
    ],
    logistics:
      "Rapid Pacific Northwest distribution via SeaTac hub with same-day tracking and rail-forward options to Portland and Vancouver, BC.",
    callouts: [
      "Clean-room compatible handling for semiconductor and lab customers.",
      "Temperature-controlled warehousing near the Port of Seattle.",
    ],
  },
  uk: {
    headline: "Supplying Premium Activated Carbon to the United Kingdom",
    industries: [
      "Utilities & Water Treatment",
      "Pharmaceutical",
      "Petrochemical",
      "Food Processing",
    ],
    logistics:
      "European fulfillment out of our Rotterdam partner warehouse with bonded road freight to the UK via Dover and direct air shipments.",
    callouts: [
      "CE-regulated documentation ready at dispatch.",
      "Dedicated account team handling VAT, duties and customs clearance.",
    ],
  },
  uae: {
    headline: "Supplying Premium Activated Carbon to the UAE",
    industries: [
      "Oil & Gas",
      "Industrial Manufacturing",
      "Hospitality & Resorts",
      "Water Reuse",
    ],
    logistics:
      "Transit via Dubai Jebel Ali with customs-compliant palletization plus direct fly cargo for urgent projects; inland delivery across Abu Dhabi, Sharjah, and Doha.",
    callouts: [
      "Export documentation inclusive of SASO, FTA, and customs bonding.",
      "24/7 logistics desk monitoring heat-sensitive loads.",
    ],
  },
};

const capitalize = (value: string) =>
  value
    .split("-")
    .map((part) => part[0].toUpperCase() + part.slice(1))
    .join(" ");

type Props = {
  params: Promise<{ region?: string }>;
};

export const dynamicParams = true;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { region } = await params;
  const regionParam = region ?? "texas";
  const key = regionParam.toLowerCase();
  const data = regionCatalog[key] ?? regionCatalog["texas"];

  return {
    title: `${data.headline} | Magico Carbon`,
    description: `Activated carbon supplier delivering to ${capitalize(
      regionParam
    )} with fast logistics, inbound industry expertise, and local contact support.`,
  };
}

export default async function RegionPage({ params }: Props) {
  const { region } = await params;
  const regionParam = region ?? "texas";
  const key = regionParam.toLowerCase();
  const data = regionCatalog[key] ?? regionCatalog["texas"];
  const regionLabel = capitalize(regionParam);

  return (
    <section className="min-h-screen bg-slate-50 text-slate-900">
      <div className="max-w-6xl mx-auto px-4 py-12 space-y-12">
        <header className="rounded-3xl bg-gradient-to-br from-[#060b33] to-[#1000cc] text-white p-10 shadow-2xl">
          <p className="text-sm uppercase tracking-[0.4em] text-[#f9a02b]">
            Activated Carbon Supplier in {regionLabel}
          </p>
          <h1 className="mt-6 text-4xl md:text-5xl font-bold leading-tight">
            {data.headline}
          </h1>
          <p className="mt-4 text-lg text-white/80">
            We combine our ISO-certified manufacturing with local logistics to
            keep Magico Carbon close to your site. Every shipment includes
            comprehensive documentation and proactive delivery tracking.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-[#f9a02b] px-8 py-3 text-base font-semibold uppercase tracking-[0.3em] text-slate-900 shadow-lg"
            >
              Request A Local Quote
            </a>
            <div className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.4em]">
              <span className="h-1 w-10 rounded-full bg-white"></span>
              Fast Response
            </div>
          </div>
        </header>

        <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-[1.2fr,1fr]">
          <div className="rounded-3xl bg-white p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-slate-900">
              Dedicated Logistics for {regionLabel}
            </h2>
            <p className="mt-4 text-slate-600">{data.logistics}</p>
            <ul className="mt-6 space-y-3 text-slate-600">
              {data.callouts.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#1000cc]"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl bg-gradient-to-br from-[#1000cc] to-[#060b33] p-8 text-white shadow-lg">
            <h3 className="text-2xl font-bold">Local Industries Served</h3>
            <ul className="mt-4 space-y-3 text-sm uppercase tracking-[0.3em]">
              {data.industries.map((industry) => (
                <li key={industry} className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#f9a02b]"></span>
                  <span className="text-base tracking-normal">{industry}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-white/70">
              Need a custom grade for your mill, refinery, or municipal plant?
              We stock multiple adsorption profiles and can deliver within 48
              hours to {regionLabel}.
            </p>
          </div>
        </section>

        <section className="rounded-3xl bg-white p-8 shadow-lg" id="contact">
          <div className="flex flex-col gap-1">
            <p className="text-xs uppercase tracking-[0.5em] text-[#1000cc]">
              Regional Contact
            </p>
            <h3 className="text-3xl font-bold">Speak with our {regionLabel} team</h3>
            <p className="text-slate-600">
              Submit the form and a local Magico Carbon specialist will confirm
              availability, pricing, and logistics tailored to your site.
            </p>
          </div>
          <form className="mt-8 grid gap-4 md:grid-cols-2">
            <input
              name="name"
              placeholder="Full Name"
              className="rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-[#1000cc] focus:ring-2 focus:ring-[#1000cc]/20"
            />
            <input
              name="company"
              placeholder="Company"
              className="rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-[#1000cc] focus:ring-2 focus:ring-[#1000cc]/20"
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-[#1000cc] focus:ring-2 focus:ring-[#1000cc]/20"
            />
            <input
              name="phone"
              placeholder="Phone"
              className="rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-[#1000cc] focus:ring-2 focus:ring-[#1000cc]/20"
            />
            <textarea
              name="details"
              rows={3}
              placeholder="Project details & delivery window"
              className="md:col-span-2 rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-[#1000cc] focus:ring-2 focus:ring-[#1000cc]/20"
            />
            <button
              type="submit"
              className="md:col-span-2 rounded-2xl bg-[#1000cc] px-6 py-3 text-sm font-semibold uppercase tracking-[0.4em] text-white transition hover:bg-[#0b0056]"
            >
              Send Inquiry
            </button>
          </form>
        </section>
      </div>
    </section>
  );
}
