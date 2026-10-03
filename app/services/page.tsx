import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore residential, office, deep, carpet and upholstery, window, and commercial cleaning services.",
};

const services = [
  {
    id: "home-cleaning",
    number: "01",
    eyebrow: "Residential",
    title: "Home cleaning",
    description:
      "A practical cleaning service for houses, apartments and private residences — available for regular upkeep or a once-off reset.",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1800&q=90",
    includes: [
      "Kitchen surfaces and common touchpoints",
      "Bathrooms and sanitary areas",
      "Bedrooms and living areas",
      "Dusting, vacuuming and floor care",
      "Once-off or recurring service requests",
    ],
  },
  {
    id: "office-cleaning",
    number: "02",
    eyebrow: "Workplaces",
    title: "Office cleaning",
    description:
      "Consistent cleaning support for workspaces that need to stay presentable for staff, clients and day-to-day operations.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=90",
    includes: [
      "Desks and shared work areas",
      "Reception and client-facing spaces",
      "Kitchens and staff areas",
      "Bathrooms and high-touch surfaces",
      "Flexible recurring cleaning schedules",
    ],
  },
  {
    id: "deep-cleaning",
    number: "03",
    eyebrow: "Detailed care",
    title: "Deep cleaning",
    description:
      "A more detailed service for spaces that need extra attention beyond routine cleaning, seasonal maintenance or occupation changes.",
    image:
      "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1800&q=90",
    includes: [
      "Detailed surface cleaning",
      "Hard-to-reach and overlooked areas",
      "Kitchen and bathroom deep clean",
      "Built-up dust and grime attention",
      "Custom scope based on the property",
    ],
  },
  {
    id: "carpet-upholstery",
    number: "04",
    eyebrow: "Specialist",
    title: "Carpet & upholstery",
    description:
      "Focused care for carpets and soft furnishings to refresh frequently used surfaces in homes and workplaces.",
    image:
      "https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=1800&q=90",
    includes: [
      "Carpet cleaning",
      "Couches and upholstered chairs",
      "Mattress cleaning requests",
      "Soft-furnishing refreshes",
      "Residential and workplace applications",
    ],
  },
  {
    id: "window-cleaning",
    number: "05",
    eyebrow: "Glass care",
    title: "Window cleaning",
    description:
      "Interior and exterior window cleaning for clearer glass, brighter rooms and a more polished overall presentation.",
    image:
      "https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?auto=format&fit=crop&w=1800&q=90",
    includes: [
      "Interior glass cleaning",
      "Exterior glass where safely accessible",
      "Frames and surrounding surfaces",
      "Residential windows",
      "Office and commercial windows",
    ],
  },
  {
    id: "commercial-cleaning",
    number: "06",
    eyebrow: "Business",
    title: "Commercial cleaning",
    description:
      "Flexible cleaning support for larger or operational spaces such as restaurants, schools, canteens, retail environments and similar facilities.",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1800&q=90",
    includes: [
      "Site-specific cleaning scope",
      "Shared and high-traffic areas",
      "Washrooms and staff facilities",
      "Routine or scheduled service",
      "Quote based on operational requirements",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-[#f5f7f3] text-[#10251d]">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#10251d]/95 text-white backdrop-blur-xl">
        <div className="mx-auto flex h-20 w-full max-w-[1500px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <Link
            href="/"
            className="text-lg font-semibold uppercase tracking-[0.24em]"
            aria-label="Cleaning home"
          >
            Cleaning<span className="text-[#b8f34b]">.</span>
          </Link>

          <nav
            className="hidden items-center gap-8 text-sm text-white/80 lg:flex"
            aria-label="Main navigation"
          >
            <Link className="text-white" href="/services">
              Services
            </Link>
            <Link className="transition hover:text-white" href="/#about">
              About
            </Link>
            <Link className="transition hover:text-white" href="/#process">
              How it works
            </Link>
            <Link className="transition hover:text-white" href="/#contact">
              Contact
            </Link>
          </nav>

          <Link
            href="/#quote"
            className="inline-flex min-h-11 items-center justify-center bg-[#b8f34b] px-5 text-sm font-semibold text-[#10251d] transition hover:bg-white sm:px-6"
          >
            Get a quote
          </Link>
        </div>
      </header>

      <section className="bg-[#10251d] px-5 pb-20 pt-20 text-white sm:px-8 lg:px-12 lg:pb-28 lg:pt-28">
        <div className="mx-auto w-full max-w-[1500px]">
          <div className="grid gap-12 lg:grid-cols-[0.55fr_1.45fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#b8f34b]">
                Our services
              </p>
              <p className="mt-6 max-w-sm text-base leading-7 text-white/55">
                Choose a service that fits your space. For larger or unusual
                requirements, we can shape the scope around the property.
              </p>
            </div>

            <h1 className="max-w-6xl text-[clamp(4rem,9vw,9rem)] font-medium leading-[0.82] tracking-[-0.065em]">
              Cleaning for
              <span className="block text-white/40">every kind</span>
              <span className="block text-[#b8f34b]">of space.</span>
            </h1>
          </div>

          <div className="mt-16 grid gap-px border border-white/12 bg-white/12 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <a
                key={service.id}
                href={`#${service.id}`}
                className="group flex items-center justify-between bg-[#10251d] p-5 transition hover:bg-[#173126] sm:p-6"
              >
                <span>
                  <span className="block text-xs font-semibold text-[#b8f34b]">
                    {service.number}
                  </span>
                  <span className="mt-2 block text-lg font-semibold">
                    {service.title}
                  </span>
                </span>
                <span
                  aria-hidden="true"
                  className="text-xl text-white/40 transition group-hover:translate-y-1 group-hover:text-white"
                >
                  ↓
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#10251d]/10 bg-[#b8f34b] px-5 py-8 sm:px-8 lg:px-12">
        <div className="mx-auto flex w-full max-w-[1500px] flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-xl font-semibold tracking-tight sm:text-2xl">
            Not sure which service fits? Start with a quote request and describe
            the space.
          </p>
          <Link
            href="/#quote"
            className="inline-flex min-h-12 shrink-0 items-center justify-center bg-[#10251d] px-6 text-sm font-semibold text-white"
          >
            Request a quote
          </Link>
        </div>
      </section>

      <section>
        {services.map((service, index) => (
          <article
            key={service.id}
            id={service.id}
            className="scroll-mt-24 border-b border-[#10251d]/10"
          >
            <div
              className={`mx-auto grid min-h-[720px] w-full max-w-[1500px] lg:grid-cols-2 ${
                index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="relative min-h-[430px] overflow-hidden lg:min-h-full">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute left-5 top-5 bg-[#10251d] px-4 py-3 text-sm font-semibold text-white sm:left-8 sm:top-8">
                  {service.number}
                </div>
              </div>

              <div className="flex flex-col justify-center px-5 py-16 sm:px-8 lg:px-16 lg:py-20">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#6a8074]">
                  {service.eyebrow}
                </p>
                <h2 className="mt-6 text-5xl font-medium leading-[0.94] tracking-[-0.05em] sm:text-6xl">
                  {service.title}
                </h2>
                <p className="mt-7 max-w-xl text-lg leading-8 text-[#53665d]">
                  {service.description}
                </p>

                <div className="mt-10 border-t border-[#10251d]/15 pt-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6a8074]">
                    Service can include
                  </p>
                  <ul className="mt-5 grid gap-4">
                    {service.includes.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-4 text-sm leading-6 sm:text-base"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1.5 w-1.5 shrink-0 bg-[#10251d]"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-10 flex flex-wrap gap-3">
                  <Link
                    href="/#quote"
                    className="inline-flex min-h-14 items-center justify-center bg-[#10251d] px-7 font-semibold text-white transition hover:bg-[#1d3d30]"
                  >
                    Request this service
                  </Link>
                  <a
                    href="#top"
                    className="inline-flex min-h-14 items-center justify-center border border-[#10251d]/20 px-7 font-semibold transition hover:border-[#10251d]"
                  >
                    Back to top
                  </a>
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section
        id="top"
        className="bg-[#e4eadf] px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
      >
        <div className="mx-auto grid w-full max-w-[1500px] gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#5f7669]">
              Choosing a service
            </p>
            <h2 className="mt-7 text-5xl font-medium leading-[0.94] tracking-[-0.05em] sm:text-6xl">
              The scope should match the space.
            </h2>
          </div>

          <div className="grid gap-px border border-[#10251d]/15 bg-[#10251d]/15 sm:grid-cols-2">
            {[
              [
                "Routine",
                "For ongoing upkeep where the space is already maintained regularly.",
              ],
              [
                "Once-off",
                "For a specific visit when you need a professional clean without a recurring schedule.",
              ],
              [
                "Deep",
                "For spaces needing more detailed attention than a routine service.",
              ],
              [
                "Commercial",
                "For operational spaces where scope, frequency and access need to be planned around the business.",
              ],
            ].map(([title, copy], index) => (
              <div key={title} className="bg-[#e4eadf] p-7 sm:p-8">
                <p className="text-xs font-semibold text-[#6f8579]">
                  0{index + 1}
                </p>
                <h3 className="mt-8 text-2xl font-semibold">{title}</h3>
                <p className="mt-4 text-sm leading-6 text-[#53665d]">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#b8f34b] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto flex w-full max-w-[1500px] flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em]">
              Ready when you are
            </p>
            <h2 className="mt-5 max-w-4xl text-5xl font-medium leading-[0.93] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
              Tell us what you need cleaned.
            </h2>
          </div>
          <Link
            href="/#quote"
            className="inline-flex min-h-14 shrink-0 items-center justify-center bg-[#10251d] px-8 font-semibold text-white transition hover:bg-[#1d3d30]"
          >
            Get a quote
          </Link>
        </div>
      </section>

      <footer className="bg-[#091711] px-5 pb-8 pt-16 text-white sm:px-8 lg:px-12">
        <div className="mx-auto w-full max-w-[1500px]">
          <div className="grid gap-12 border-b border-white/12 pb-14 lg:grid-cols-[1.4fr_0.6fr_0.6fr]">
            <div>
              <Link
                href="/"
                className="text-3xl font-semibold uppercase tracking-[0.2em]"
              >
                Cleaning<span className="text-[#b8f34b]">.</span>
              </Link>
              <p className="mt-6 max-w-md text-base leading-7 text-white/55">
                Professional residential and commercial cleaning with a
                simpler, more modern service experience.
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
                Navigate
              </p>
              <div className="mt-5 grid gap-3 text-sm">
                <Link href="/" className="hover:text-[#b8f34b]">
                  Home
                </Link>
                <Link href="/#about" className="hover:text-[#b8f34b]">
                  About
                </Link>
                <Link href="/#process" className="hover:text-[#b8f34b]">
                  How it works
                </Link>
                <Link href="/#quote" className="hover:text-[#b8f34b]">
                  Get a quote
                </Link>
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
                Services
              </p>
              <div className="mt-5 grid gap-3 text-sm text-white/80">
                <a href="#home-cleaning">Residential</a>
                <a href="#office-cleaning">Office</a>
                <a href="#deep-cleaning">Deep cleaning</a>
                <a href="#commercial-cleaning">Commercial</a>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 pt-7 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Cleaning. All rights reserved.</p>
            <p>Clean spaces. Clear minds.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
