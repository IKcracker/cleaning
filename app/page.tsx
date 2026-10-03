import Image from "next/image";
import MobileNav from "@/components/MobileNav";

const services = [
  {
    number: "01",
    title: "Home cleaning",
    description:
      "Reliable recurring and once-off cleaning for homes, apartments, and private residences.",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1400&q=85",
  },
  {
    number: "02",
    title: "Office cleaning",
    description:
      "Structured workplace cleaning that keeps offices fresh, presentable, and ready for business.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=85",
  },
  {
    number: "03",
    title: "Deep cleaning",
    description:
      "A detailed top-to-bottom clean for spaces that need more attention than a standard visit.",
    image:
      "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1400&q=85",
  },
  {
    number: "04",
    title: "Carpet & upholstery",
    description:
      "Careful cleaning for carpets, couches, chairs, mattresses, and other soft furnishings.",
    image:
      "https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=1400&q=85",
  },
  {
    number: "05",
    title: "Window cleaning",
    description:
      "Interior and exterior window cleaning for clearer glass and a brighter finish.",
    image:
      "https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?auto=format&fit=crop&w=1400&q=85",
  },
  {
    number: "06",
    title: "Commercial cleaning",
    description:
      "Flexible cleaning support for restaurants, schools, canteens, retail, and commercial spaces.",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=85",
  },
];

const steps = [
  {
    number: "01",
    title: "Tell us about your space",
    description:
      "Choose the service you need and share a few details about the property.",
  },
  {
    number: "02",
    title: "Choose your preferred time",
    description:
      "Request a date that works for you. We confirm availability before the visit.",
  },
  {
    number: "03",
    title: "We take care of the clean",
    description:
      "Our team arrives prepared and works through the agreed cleaning checklist.",
  },
  {
    number: "04",
    title: "Enjoy the reset",
    description:
      "Walk back into a cleaner, fresher, more comfortable space.",
  },
];

const testimonials = [
  {
    quote:
      "Professional, punctual and thorough. The difference after the deep clean was immediately noticeable.",
    name: "Residential client",
  },
  {
    quote:
      "The service is easy to arrange and gives us one less thing to manage in the office each week.",
    name: "Office client",
  },
  {
    quote:
      "A dependable team with great attention to detail. We would happily book again.",
    name: "Commercial client",
  },
];

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#f5f7f3] text-[#10251d]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#10251d]/92 text-white backdrop-blur-xl">
        <div className="mx-auto flex h-20 w-full max-w-[1500px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <a
            href="#top"
            className="text-lg font-semibold uppercase tracking-[0.24em]"
            aria-label="Cleaning home"
          >
            Cleaning<span className="text-[#b8f34b]">.</span>
          </a>

          <nav
            className="hidden items-center gap-8 text-sm text-white/80 lg:flex"
            aria-label="Main navigation"
          >
            <a className="transition hover:text-white" href="/services">
              Services
            </a>
            <a className="transition hover:text-white" href="/about">
              About
            </a>
            <a className="transition hover:text-white" href="/how-it-works">
              How it works
            </a>
            <a className="transition hover:text-white" href="/contact">
              Contact
            </a>
          </nav>

          <a
            href="/quote"
            className="hidden min-h-11 items-center justify-center bg-[#b8f34b] px-5 text-sm font-semibold text-[#10251d] transition hover:bg-white sm:px-6 lg:inline-flex"
          >
            Get a quote
          </a>
          <MobileNav />
        </div>
      </header>

      <section
        id="top"
        className="relative min-h-[900px] bg-[#10251d] pt-20 text-white lg:min-h-screen"
      >
        <div className="mx-auto grid min-h-[820px] w-full max-w-[1500px] lg:grid-cols-[0.92fr_1.08fr]">
          <div className="flex flex-col justify-between px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
            <div className="max-w-3xl">
              <p className="mb-8 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#b8f34b]">
                <span className="h-px w-10 bg-[#b8f34b]" />
                Residential & commercial cleaning
              </p>

              <h1 className="max-w-[820px] text-[clamp(4rem,9vw,9.2rem)] font-medium leading-[0.82] tracking-[-0.065em]">
                A cleaner
                <span className="block text-white/42">space.</span>
                <span className="block">A better</span>
                <span className="block text-[#b8f34b]">day.</span>
              </h1>
            </div>

            <div className="mt-14 grid gap-10 border-t border-white/15 pt-8 sm:grid-cols-[1fr_auto] sm:items-end">
              <p className="max-w-md text-base leading-7 text-white/65 sm:text-lg">
                Professional cleaning for homes, workplaces and commercial
                spaces — delivered with care, consistency and attention to
                detail.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="/quote"
                  className="inline-flex min-h-14 items-center justify-center bg-[#b8f34b] px-7 font-semibold text-[#10251d] transition hover:bg-white"
                >
                  Book a cleaning
                </a>
                <a
                  href="/services"
                  className="inline-flex min-h-14 items-center justify-center border border-white/25 px-7 font-semibold text-white transition hover:border-white hover:bg-white hover:text-[#10251d]"
                >
                  Explore services
                </a>
              </div>
            </div>
          </div>

          <div className="relative min-h-[520px] overflow-hidden lg:min-h-full">
            <Image
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1800&q=90"
              alt="Professional cleaner working in a bright modern home"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 54vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#10251d]/60 via-transparent to-transparent lg:bg-gradient-to-r lg:from-[#10251d]/15 lg:to-transparent" />

            <div className="absolute bottom-6 left-5 right-5 grid grid-cols-3 divide-x divide-white/20 bg-[#10251d]/86 p-5 text-white backdrop-blur-xl sm:bottom-8 sm:left-8 sm:right-8 sm:p-6">
              <div className="pr-4">
                <p className="text-xl font-semibold sm:text-2xl">01</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-white/55 sm:text-xs">
                  Book
                </p>
              </div>
              <div className="px-4">
                <p className="text-xl font-semibold sm:text-2xl">02</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-white/55 sm:text-xs">
                  We clean
                </p>
              </div>
              <div className="pl-4">
                <p className="text-xl font-semibold sm:text-2xl">03</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-white/55 sm:text-xs">
                  Enjoy
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#10251d]/10 bg-[#b8f34b]">
        <div className="mx-auto grid w-full max-w-[1500px] divide-y divide-[#10251d]/15 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {[
            ["Flexible", "Cleaning plans"],
            ["Detailed", "Quality-focused"],
            ["Simple", "Booking process"],
          ].map(([title, subtitle]) => (
            <div key={title} className="px-5 py-7 sm:px-8 lg:px-12">
              <p className="text-2xl font-semibold tracking-tight">{title}</p>
              <p className="mt-1 text-sm text-[#10251d]/65">{subtitle}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="py-24 lg:py-32">
        <div className="mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-12">
          <div className="mb-14 grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#537260]">
              What we clean
            </p>
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <h2 className="max-w-4xl text-5xl font-medium leading-[0.94] tracking-[-0.045em] sm:text-6xl lg:text-8xl">
                Professional care
                <span className="block text-[#799083]">for every space.</span>
              </h2>
              <p className="max-w-sm text-base leading-7 text-[#4f625a]">
                From routine home cleaning to larger commercial requirements,
                choose the level of support that fits your space.
              </p>
            </div>
          </div>

          <div className="grid gap-px overflow-hidden border border-[#10251d]/12 bg-[#10251d]/12 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.number}
                className="group bg-[#f5f7f3] p-3 transition duration-500 hover:bg-white"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-[1.04]"
                  />
                  <span className="absolute left-4 top-4 bg-[#10251d] px-3 py-2 text-xs font-semibold text-white">
                    {service.number}
                  </span>
                </div>
                <div className="p-3 pb-7 pt-6 sm:p-5 sm:pb-8">
                  <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                    {service.title}
                  </h3>
                  <p className="mt-4 max-w-sm text-sm leading-6 text-[#5c6d65] sm:text-base sm:leading-7">
                    {service.description}
                  </p>
                  <a
                    href="/quote"
                    className="mt-7 inline-flex items-center gap-3 text-sm font-semibold"
                  >
                    Request this service
                    <span
                      aria-hidden="true"
                      className="transition-transform group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="bg-[#e4eadf]">
        <div className="mx-auto grid w-full max-w-[1500px] lg:grid-cols-2">
          <div className="relative min-h-[560px] lg:min-h-[800px]">
            <Image
              src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1600&q=90"
              alt="Cleaner preparing a bright living space"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col justify-between px-5 py-20 sm:px-8 lg:px-16 lg:py-24">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#537260]">
                Why Cleaning
              </p>
              <h2 className="mt-8 max-w-2xl text-5xl font-medium leading-[0.94] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
                Cleaning that feels considered, not rushed.
              </h2>
              <p className="mt-8 max-w-xl text-lg leading-8 text-[#4f625a]">
                We believe a good cleaning service should be easy to arrange,
                consistent from visit to visit, and detailed enough that you can
                see the difference.
              </p>
            </div>

            <div className="mt-16 grid gap-px border-y border-[#10251d]/15 sm:grid-cols-2">
              {[
                ["01", "Clear service scope"],
                ["02", "Flexible scheduling"],
                ["03", "Careful attention to detail"],
                ["04", "Residential & commercial"],
              ].map(([number, label]) => (
                <div
                  key={number}
                  className="border-b border-[#10251d]/15 py-6 sm:border-b-0 sm:odd:border-r sm:odd:pr-6 sm:even:pl-6"
                >
                  <p className="text-xs font-semibold text-[#6b8175]">{number}</p>
                  <p className="mt-3 text-lg font-semibold">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="bg-[#10251d] py-24 text-white lg:py-32">
        <div className="mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#b8f34b]">
                How it works
              </p>
            </div>
            <h2 className="max-w-5xl text-5xl font-medium leading-[0.94] tracking-[-0.045em] sm:text-6xl lg:text-8xl">
              From booking to beautifully clean.
            </h2>
          </div>

          <div className="mt-16 grid border-t border-white/15 lg:grid-cols-4">
            {steps.map((step) => (
              <article
                key={step.number}
                className="border-b border-white/15 py-8 lg:border-b-0 lg:border-r lg:px-7 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0"
              >
                <p className="text-sm font-semibold text-[#b8f34b]">
                  {step.number}
                </p>
                <h3 className="mt-12 text-2xl font-semibold tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-white/55">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="mx-auto grid w-full max-w-[1500px] gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20 px-5 sm:px-8 lg:px-12">
          <div className="relative min-h-[540px] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=90"
              alt="Modern clean commercial office"
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#10251d]/60 to-transparent" />
            <div className="absolute bottom-0 left-0 max-w-sm bg-[#b8f34b] p-7 text-[#10251d] sm:p-9">
              <p className="text-xs font-semibold uppercase tracking-[0.22em]">
                For business
              </p>
              <p className="mt-4 text-2xl font-semibold tracking-tight">
                A cleaner workplace makes a better first impression.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center lg:py-12">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#537260]">
              Commercial cleaning
            </p>
            <h2 className="mt-7 text-5xl font-medium leading-[0.95] tracking-[-0.045em] sm:text-6xl">
              Cleaning support built around your business.
            </h2>
            <p className="mt-7 max-w-xl text-lg leading-8 text-[#4f625a]">
              Offices, restaurants, schools, canteens, retail environments and
              other commercial spaces can request flexible cleaning support
              based on their operating needs.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="/quote"
                className="inline-flex min-h-14 items-center justify-center bg-[#10251d] px-7 font-semibold text-white transition hover:bg-[#1d3d30]"
              >
                Request commercial quote
              </a>
              <a
                href="/contact"
                className="inline-flex min-h-14 items-center justify-center border border-[#10251d]/20 px-7 font-semibold transition hover:border-[#10251d]"
              >
                Talk to us
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#10251d]/10 bg-white py-24">
        <div className="mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-3">
            {testimonials.map((item, index) => (
              <figure
                key={item.name}
                className="flex min-h-72 flex-col justify-between border border-[#10251d]/10 p-7 sm:p-9"
              >
                <div>
                  <p className="text-sm font-semibold text-[#7b8f84]">
                    0{index + 1}
                  </p>
                  <blockquote className="mt-8 text-2xl font-medium leading-9 tracking-tight">
                    “{item.quote}”
                  </blockquote>
                </div>
                <figcaption className="mt-10 text-sm text-[#5c6d65]">
                  {item.name}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="quote" className="bg-[#b8f34b] py-24 lg:py-28">
        <div className="mx-auto flex w-full max-w-[1500px] flex-col gap-10 px-5 sm:px-8 lg:flex-row lg:items-end lg:justify-between lg:px-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em]">
              Request a quote
            </p>
            <h2 className="mt-7 max-w-4xl text-5xl font-medium leading-[0.94] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
              Tell us what needs cleaning.
            </h2>
            <p className="mt-7 max-w-xl text-base leading-7 text-[#10251d]/70">
              Use the dedicated quote page to share the space, service, timing
              and details we need to scope the clean properly.
            </p>
          </div>

          <a
            href="/quote"
            className="inline-flex min-h-14 shrink-0 items-center justify-center bg-[#10251d] px-8 font-semibold text-white transition hover:bg-[#1d3d30]"
          >
            Start quote request
          </a>
        </div>
      </section>

      <footer id="contact" className="bg-[#091711] pb-8 pt-20 text-white">
        <div className="mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-12 border-b border-white/12 pb-16 lg:grid-cols-[1.4fr_0.6fr_0.6fr]">
            <div>
              <p className="text-3xl font-semibold uppercase tracking-[0.2em]">
                Cleaning<span className="text-[#b8f34b]">.</span>
              </p>
              <p className="mt-6 max-w-md text-base leading-7 text-white/55">
                Professional residential and commercial cleaning with a simpler,
                more modern service experience.
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
                Navigate
              </p>
              <div className="mt-5 grid gap-3 text-sm">
                <a href="/services" className="hover:text-[#b8f34b]">
                  Services
                </a>
                <a href="/about" className="hover:text-[#b8f34b]">
                  About
                </a>
                <a href="/how-it-works" className="hover:text-[#b8f34b]">
                  How it works
                </a>
                <a href="/quote" className="hover:text-[#b8f34b]">
                  Get a quote
                </a>
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
                Services
              </p>
              <div className="mt-5 grid gap-3 text-sm text-white/80">
                <span>Residential</span>
                <span>Office</span>
                <span>Deep cleaning</span>
                <span>Commercial</span>
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
