import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound, permanentRedirect } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import {
  getAllProductSlugs,
  getProductByParam,
  PRODUCTS,
} from "@/lib/products";

type Props = {
  params: Promise<{ slug?: string }>;
};

export const dynamicParams = true;

export function generateStaticParams() {
  return getAllProductSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug: slugParam } = await params;
  const slug = slugParam ?? "";
  const product = getProductByParam(slug);
  if (!product) {
    return { title: "Product | Magico Carbon" };
  }
  return {
    title: `${product.title} | Magico Carbon`,
    description: product.excerpt,
    openGraph: {
      title: `${product.title} | Magico Carbon`,
      description: product.excerpt,
    },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug: slugParam } = await params;
  const slug = slugParam ?? "";
  const product = getProductByParam(slug);
  if (!product) {
    notFound();
  }

  if (slug.toLowerCase() !== product.slug) {
    permanentRedirect(`/products/${product.slug}`);
  }

  const sizesTitle = product.sizesSectionTitle ?? "Product Sizes";
  const featuresTitle = product.featuresSectionTitle ?? "Features & Benefits";
  const related = PRODUCTS.filter((p) => p.slug !== product.slug);
  const hasSpecs = Boolean(product.sizes?.length || product.features?.length);

  return (
    <div className="min-h-screen flex flex-col bg-[#f8f9fb] text-slate-900 font-sans antialiased">
      <Navbar />

      <main className="pt-20">
        <article>
          {/* Hero — asymmetric, depth without decorative fonts */}
          <section className="relative overflow-hidden border-b border-slate-200/80 bg-white">
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(16,0,204,0.06),transparent)]"
              aria-hidden
            />
            <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 py-14 sm:py-16 lg:py-20 lg:pb-20">
              <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10 xl:gap-14">
                <div className="lg:col-span-5 xl:col-span-5 lg:order-2 lg:pl-4">
                  <div className="flex items-center gap-3">
                    <span className="h-px w-8 bg-[#1000cc]" aria-hidden />
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#1000cc]">
                      {product.categoryLabel}
                    </p>
                  </div>
                  <h1 className="mt-5 text-[2rem] font-bold tracking-[-0.035em] text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.08]">
                    {product.title}
                  </h1>
                  <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600 lg:text-[1.125rem] lg:leading-[1.65]">
                    {product.excerpt}
                  </p>
                  <div className="mt-9 flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-8">
                    <Link
                      href="/#contact"
                      className="inline-flex h-12 items-center justify-center rounded-lg bg-[#1000cc] px-8 text-sm font-semibold text-white shadow-lg shadow-[#1000cc]/25 transition hover:bg-[#0d009f] hover:shadow-[#1000cc]/35"
                    >
                      Request a quote
                    </Link>
                    <Link
                      href="/products"
                      className="inline-flex items-center gap-1 text-sm font-semibold text-slate-600 transition hover:text-[#1000cc]"
                    >
                      Browse full catalog
                      <ChevronRight className="size-4" aria-hidden />
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-7 xl:col-span-7 lg:order-1">
                  <div className="relative mx-auto aspect-[16/10] w-full max-w-2xl overflow-hidden rounded-[1.25rem] bg-slate-200 shadow-[0_24px_60px_-15px_rgba(15,23,42,0.18)] ring-1 ring-slate-900/[0.06] lg:aspect-[5/4] lg:max-w-none">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 58vw"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Description — editorial column, scan-friendly */}
          <section className="border-b border-slate-200/80 bg-white">
            <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24">
              <div className="mx-auto max-w-3xl lg:mx-0 lg:max-w-none lg:grid lg:grid-cols-12 lg:gap-x-12">
                <div className="lg:col-span-4">
                  <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                    Technical overview
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-slate-500 lg:max-w-[220px]">
                    Application notes, feed compatibility, and grade rationale
                    in one place.
                  </p>
                </div>
                <div className="mt-10 border-l-0 border-slate-200 lg:col-span-8 lg:mt-0 lg:border-l lg:pl-12">
                  <p className="text-[1.0625rem] leading-[1.85] text-slate-600 sm:text-lg sm:leading-[1.82]">
                    {product.summary}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {hasSpecs ? (
            <section className="border-b border-slate-200/80 bg-[#f8f9fb]">
              <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 py-16 sm:py-20">
                {product.sizes && product.sizes.length > 0 ? (
                  <div className="lg:grid lg:grid-cols-12 lg:gap-x-14 lg:items-start">
                    <header className="mb-12 lg:col-span-4 lg:mb-0">
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#1000cc]">
                        Specifications
                      </p>
                      <h2
                        id="sizes-heading"
                        className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
                      >
                        {sizesTitle}
                      </h2>
                      <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-[15px]">
                        Standard catalogue cuts. Custom fractions, washing, and
                        packaging available.
                      </p>
                    </header>
                    <div className="lg:col-span-8">
                      <div className="overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-slate-200/60">
                        <div className="overflow-x-auto">
                          <table className="w-full min-w-[360px] border-collapse text-left">
                            <thead>
                              <tr className="bg-slate-50/90">
                                <th className="px-5 py-4 text-left text-[11px] font-bold uppercase tracking-wider text-slate-500 sm:px-6">
                                  Product cut
                                </th>
                                <th className="px-5 py-4 text-left text-[11px] font-bold uppercase tracking-wider text-slate-500 sm:px-6">
                                  Specification
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              {product.sizes.map((size) => (
                                <tr
                                  key={size.label}
                                  className="border-t border-slate-100 last:border-0"
                                >
                                  <td className="px-5 py-4 align-top text-sm font-semibold text-slate-900 sm:px-6 sm:text-[15px]">
                                    {size.label}
                                  </td>
                                  <td className="px-5 py-4 align-top text-sm text-slate-600 sm:px-6 sm:text-[15px] leading-relaxed">
                                    {size.detail}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null}

                {product.features && product.features.length > 0 ? (
                  <div
                    className={
                      product.sizes?.length
                        ? "mt-20 border-t border-slate-200 pt-20"
                        : ""
                    }
                  >
                    <header className="mb-10 max-w-2xl lg:mb-14">
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#1000cc]">
                        Why this grade
                      </p>
                      <h2
                        id="features-heading"
                        className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
                      >
                        {featuresTitle}
                      </h2>
                      <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-[15px]">
                        Engineering, service, and accountability aligned to your
                        process.
                      </p>
                    </header>
                    <div className="grid gap-5 sm:gap-6 md:grid-cols-2">
                      {product.features.map((feature, index) => (
                        <div
                          key={`${index}-${feature.slice(0, 20)}`}
                          className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-7 shadow-[0_1px_3px_rgba(15,23,42,0.04)] transition-shadow hover:shadow-md"
                        >
                          <span
                            className="absolute left-0 top-0 h-full w-1 bg-[#1000cc]"
                            aria-hidden
                          />
                          <span className="text-[10px] font-bold tabular-nums text-slate-300">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <p className="mt-3 text-[15px] leading-relaxed text-slate-600 sm:text-base">
                            {feature}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            </section>
          ) : null}

          <section className="bg-slate-950 text-white">
            <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-14 sm:px-8 sm:py-16 md:flex-row md:items-center md:justify-between lg:px-12">
              <div className="max-w-xl space-y-2">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">
                  Next step
                </p>
                <h2 className="text-xl font-bold text-white sm:text-2xl md:text-[1.75rem] md:leading-snug">
                  Pricing, COA, or delivery for this product?
                </h2>
                <p className="text-sm leading-relaxed text-slate-400 sm:text-base">
                  Send your application and target spec—we&apos;ll respond with
                  availability and options.
                </p>
              </div>
              <Link
                href="/#contact"
                className="inline-flex h-12 shrink-0 items-center justify-center rounded-lg bg-white px-8 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
              >
                Contact sales
              </Link>
            </div>
          </section>

          {related.length > 0 ? (
            <section className="border-t border-slate-200 bg-white">
              <div className="mx-auto max-w-6xl px-5 sm:px-8 py-14 sm:py-16">
                <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                  <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
                    Other products
                  </h2>
                  <Link
                    href="/products"
                    className="text-sm font-semibold text-[#1000cc] hover:underline"
                  >
                    View catalog
                  </Link>
                </div>
                <div className="grid gap-6 sm:grid-cols-2">
                  {related.map((p) => (
                    <Link
                      key={p.slug}
                      href={`/products/${p.slug}`}
                      className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition-all hover:border-[#1000cc]/40 hover:shadow-md"
                    >
                      <div className="relative aspect-[16/10] bg-slate-100">
                        <Image
                          src={p.image}
                          alt={p.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 100vw, 50vw"
                        />
                      </div>
                      <div className="flex flex-1 flex-col p-5">
                        <p className="text-xs font-semibold uppercase tracking-wide text-[#1000cc]">
                          {p.categoryLabel}
                        </p>
                        <p className="mt-2 text-lg font-bold text-slate-900 transition-colors group-hover:text-[#1000cc]">
                          {p.title}
                        </p>
                        <p className="mt-2 flex-1 line-clamp-2 text-sm leading-relaxed text-slate-600">
                          {p.excerpt}
                        </p>
                        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#1000cc]">
                          Read more
                          <ChevronRight className="size-4" aria-hidden />
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          ) : null}
        </article>
      </main>

      <Footer />
    </div>
  );
}
