import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Cleaning, our approach to residential and commercial cleaning, and the standards behind every service.",
};

const values = [
  ["01", "Clear scope", "You should know what is being cleaned, what is included, and what happens next."],
  ["02", "Consistent care", "The quality of the service should not depend on whether it is the first visit or the tenth."],
  ["03", "Respect for space", "Homes and workplaces are personal environments. We work with care around people, property and routines."],
  ["04", "Practical service", "Cleaning should be easy to arrange, easy to understand and suited to the way the property is used."],
];

export default function AboutPage() {
  return (
    <main className="bg-[#f5f7f3] text-[#10251d]">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#10251d]/95 text-white backdrop-blur-xl">
        <div className="mx-auto flex h-20 w-full max-w-[1500px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <Link href="/" className="text-lg font-semibold uppercase tracking-[0.24em]">
            Cleaning<span className="text-[#b8f34b]">.</span>
          </Link>

          <nav className="hidden items-center gap-8 text-sm text-white/80 lg:flex">
            <Link className="transition hover:text-white" href="/services">Services</Link>
            <Link className="text-white" href="/about">About</Link>
            <Link className="transition hover:text-white" href="/how-it-works">How it works</Link>
            <Link className="transition hover:text-white" href="/#contact">Contact</Link>
          </nav>

          <Link href="/#quote" className="inline-flex min-h-11 items-center justify-center bg-[#b8f34b] px-5 text-sm font-semibold text-[#10251d] transition hover:bg-white sm:px-6">
            Get a quote
          </Link>
        </div>
      </header>

      <section className="border-b border-[#10251d]/10 bg-[#f5f7f3]">
        <div className="mx-auto w-full max-w-[1500px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.45fr_1.55fr] lg:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#60766a]">
                About Cleaning
              </p>
              <p className="mt-6 max-w-xs text-sm leading-7 text-[#61736a]">
                A modern cleaning service built around clarity, care and dependable standards.
              </p>
            </div>

            <div>
              <h1 className="max-w-6xl text-[clamp(3.7rem,7.4vw,7.8rem)] font-medium leading-[0.88] tracking-[-0.06em]">
                Good cleaning is
                <span className="block text-[#74877c]">felt before it is noticed.</span>
              </h1>

              <div className="mt-12 grid gap-8 border-t border-[#10251d]/15 pt-8 sm:grid-cols-2">
                <p className="max-w-lg text-lg leading-8 text-[#30463c]">
                  We focus on the details that make a space feel looked after — not just visually cleaner, but easier to live and work in.
                </p>
                <p className="max-w-lg text-base leading-7 text-[#61736a] sm:justify-self-end">
                  Our approach is simple: understand the space, agree on the scope, do the work carefully, and make the service easy to repeat when needed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-10 lg:py-12">
        <div className="mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-12">
          <div className="grid overflow-hidden border border-[#10251d]/10 lg:grid-cols-[1.08fr_0.92fr]">
            <div className="relative min-h-[420px] lg:min-h-[620px]">
              <Image
                src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1800&q=90"
                alt="Professional cleaning in a bright interior"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 54vw"
                className="object-cover"
              />
            </div>

            <div className="flex flex-col justify-between bg-[#10251d] px-6 py-12 text-white sm:px-8 sm:py-14 lg:px-10 lg:py-16 xl:px-12">
              <div className="max-w-xl">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#b8f34b]">
                  Our approach
                </p>
                <h2 className="mt-7 text-4xl font-medium leading-[0.95] tracking-[-0.04em] sm:text-5xl">
                  Clean spaces should make life simpler.
                </h2>
                <p className="mt-7 text-base leading-7 text-white/60">
                  That means fewer unclear expectations, less back-and-forth, and a service that fits the property instead of forcing every client into the same package.
                </p>
              </div>

              <div className="mt-14 border-t border-white/15 pt-7">
                <p className="text-4xl font-medium tracking-[-0.04em] text-[#b8f34b] sm:text-5xl">06</p>
                <p className="mt-2 text-sm text-white/55">Core service categories</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[0.6fr_1.4fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#60766a]">
                What matters to us
              </p>
            </div>
            <h2 className="max-w-5xl text-5xl font-medium leading-[0.94] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
              Standards that make the service easier to trust.
            </h2>
          </div>

          <div className="mt-14 border-t border-[#10251d]/15">
            {values.map(([number, title, copy]) => (
              <div key={number} className="grid gap-5 border-b border-[#10251d]/15 py-7 sm:grid-cols-[80px_0.65fr_1.35fr] sm:items-start lg:py-9">
                <p className="text-xs font-semibold text-[#708579]">{number}</p>
                <h3 className="text-2xl font-semibold tracking-tight">{title}</h3>
                <p className="max-w-2xl text-sm leading-7 text-[#5b6d64] sm:text-base">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#e4eadf] py-24">
        <div className="mx-auto grid w-full max-w-[1500px] gap-12 lg:grid-cols-2 lg:gap-20 px-5 sm:px-8 lg:px-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#60766a]">
              Who we serve
            </p>
            <h2 className="mt-7 text-5xl font-medium leading-[0.94] tracking-[-0.05em] sm:text-6xl">
              Homes, workplaces and everything in between.
            </h2>
          </div>

          <div className="grid gap-px bg-[#10251d]/15 sm:grid-cols-2">
            {[
              ["Homes", "Regular or once-off care for houses and apartments."],
              ["Offices", "Consistent upkeep for teams and client-facing spaces."],
              ["Commercial", "Flexible cleaning support for operational environments."],
              ["Specialist", "Carpets, upholstery, windows and detailed cleaning."],
            ].map(([title, copy]) => (
              <div key={title} className="bg-[#e4eadf] p-7 sm:p-8">
                <h3 className="text-2xl font-semibold">{title}</h3>
                <p className="mt-4 text-sm leading-6 text-[#5b6d64]">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#b8f34b] py-20 lg:py-24">
        <div className="mx-auto flex w-full max-w-[1500px] flex-col gap-10 lg:flex-row lg:items-end lg:justify-between px-5 sm:px-8 lg:px-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em]">
              Work with us
            </p>
            <h2 className="mt-5 max-w-4xl text-5xl font-medium leading-[0.93] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
              A cleaner space starts with a clear request.
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link href="/services" className="inline-flex min-h-14 items-center justify-center border border-[#10251d] px-7 font-semibold">
              View services
            </Link>
            <Link href="/#quote" className="inline-flex min-h-14 items-center justify-center bg-[#10251d] px-7 font-semibold text-white">
              Get a quote
            </Link>
          </div>
        </div>
      </section>

      <footer className="bg-[#091711] pb-8 pt-16 text-white">
        <div className="mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-12 border-b border-white/12 pb-14 lg:grid-cols-[1.4fr_0.6fr_0.6fr]">
            <div>
              <Link href="/" className="text-3xl font-semibold uppercase tracking-[0.2em]">
                Cleaning<span className="text-[#b8f34b]">.</span>
              </Link>
              <p className="mt-6 max-w-md text-base leading-7 text-white/55">
                Professional residential and commercial cleaning with a simpler, more modern service experience.
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">Navigate</p>
              <div className="mt-5 grid gap-3 text-sm">
                <Link href="/">Home</Link>
                <Link href="/services">Services</Link>
                <Link href="/how-it-works">How it works</Link>
                <Link href="/#quote">Get a quote</Link>
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">Services</p>
              <div className="mt-5 grid gap-3 text-sm text-white/80">
                <Link href="/services#home-cleaning">Residential</Link>
                <Link href="/services#office-cleaning">Office</Link>
                <Link href="/services#deep-cleaning">Deep cleaning</Link>
                <Link href="/services#commercial-cleaning">Commercial</Link>
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
