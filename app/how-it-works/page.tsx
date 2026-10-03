import type { Metadata } from "next";
import Link from "next/link";
import MobileNav from "@/components/MobileNav";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "See how Cleaning handles quote requests, service confirmation, scheduling, cleaning visits, and follow-up.",
};

const steps = [
  {
    number: "01",
    title: "Tell us about the space",
    copy:
      "Choose a service or describe what needs attention. Share the property type, size, preferred timing and any important details.",
  },
  {
    number: "02",
    title: "We confirm the scope",
    copy:
      "We review the request, clarify anything that affects the service, and confirm the right cleaning scope before the visit.",
  },
  {
    number: "03",
    title: "Choose a suitable time",
    copy:
      "Once the scope is clear, we agree on a date and time that works for the property and the service required.",
  },
  {
    number: "04",
    title: "We complete the clean",
    copy:
      "The team works through the agreed areas with attention to detail, access requirements and the way the space is used.",
  },
  {
    number: "05",
    title: "We close the loop",
    copy:
      "For recurring work, the service can be repeated on an agreed schedule. For once-off jobs, the visit is closed out cleanly.",
  },
];

export default function HowItWorksPage() {
  return (
    <main className="bg-[#f5f7f3] text-[#10251d]">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#10251d]/95 text-white backdrop-blur-xl">
        <div className="mx-auto flex h-20 w-full max-w-[1500px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <Link href="/" className="text-lg font-semibold uppercase tracking-[0.24em]">
            Cleaning<span className="text-[#b8f34b]">.</span>
          </Link>

          <nav className="hidden items-center gap-8 text-sm text-white/80 lg:flex">
            <Link className="transition hover:text-white" href="/services">Services</Link>
            <Link className="transition hover:text-white" href="/about">About</Link>
            <Link className="text-white" href="/how-it-works">How it works</Link>
            <Link className="transition hover:text-white" href="/contact">Contact</Link>
          </nav>

          <Link href="/quote" className="hidden min-h-11 items-center justify-center bg-[#b8f34b] px-5 text-sm font-semibold text-[#10251d] transition hover:bg-white sm:px-6 lg:inline-flex">
            Get a quote
          </Link>
          <MobileNav />
        </div>
      </header>

      <section className="bg-[#10251d] py-16 text-white lg:py-24">
        <div className="mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-14 lg:grid-cols-[0.5fr_1.5fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#b8f34b]">
                How it works
              </p>
              <p className="mt-6 max-w-xs text-sm leading-7 text-white/55">
                A simple process from first request to completed clean, with fewer unclear handoffs.
              </p>
            </div>

            <div>
              <h1 className="max-w-6xl text-[clamp(3.8rem,7.8vw,8.4rem)] font-medium leading-[0.88] tracking-[-0.06em]">
                Clear steps.
                <span className="block text-white/38">Less friction.</span>
              </h1>

              <div className="mt-12 grid gap-8 border-t border-white/15 pt-8 sm:grid-cols-2">
                <p className="max-w-lg text-lg leading-8 text-white/82">
                  You should always know what happens next — from requesting a service to the cleaning visit itself.
                </p>
                <div className="sm:justify-self-end">
                  <Link href="/quote" className="inline-flex min-h-12 items-center justify-center bg-[#b8f34b] px-6 text-sm font-semibold text-[#10251d]">
                    Start a request
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-12">
          <div className="border-t border-[#10251d]/15">
            {steps.map((step) => (
              <article
                key={step.number}
                className="grid gap-6 border-b border-[#10251d]/15 py-8 sm:grid-cols-[80px_0.7fr_1.3fr] sm:items-start lg:py-12"
              >
                <p className="text-xs font-semibold text-[#71857a]">{step.number}</p>
                <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                  {step.title}
                </h2>
                <p className="max-w-2xl text-base leading-7 text-[#5a6d63] sm:text-lg sm:leading-8">
                  {step.copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#e4eadf] py-24">
        <div className="mx-auto grid w-full max-w-[1500px] gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24 px-5 sm:px-8 lg:px-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#60766a]">
              Before the visit
            </p>
            <h2 className="mt-7 text-5xl font-medium leading-[0.94] tracking-[-0.05em] sm:text-6xl">
              The better the brief, the smoother the clean.
            </h2>
          </div>

          <div className="grid gap-px bg-[#10251d]/15 sm:grid-cols-2">
            {[
              ["Property type", "Home, office, commercial space or specialist cleaning requirement."],
              ["Approximate size", "A useful estimate of the space or areas that need attention."],
              ["Preferred timing", "The date, day or time window that works best for access."],
              ["Special notes", "Anything unusual about access, surfaces, pets, equipment or expectations."],
            ].map(([title, copy]) => (
              <div key={title} className="bg-[#e4eadf] p-7 sm:p-8">
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="mt-4 text-sm leading-6 text-[#5a6d63]">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#b8f34b] py-20 lg:py-24">
        <div className="mx-auto flex w-full max-w-[1500px] flex-col gap-10 lg:flex-row lg:items-end lg:justify-between px-5 sm:px-8 lg:px-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em]">
              Ready to start
            </p>
            <h2 className="mt-5 max-w-4xl text-5xl font-medium leading-[0.93] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
              Start with the space. We’ll handle the process.
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link href="/services" className="inline-flex min-h-14 items-center justify-center border border-[#10251d] px-7 font-semibold">
              View services
            </Link>
            <Link href="/quote" className="inline-flex min-h-14 items-center justify-center bg-[#10251d] px-7 font-semibold text-white">
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
                <Link href="/about">About</Link>
                <Link href="/quote">Get a quote</Link>
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
