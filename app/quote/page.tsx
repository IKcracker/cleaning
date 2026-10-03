import type { Metadata } from "next";
import Link from "next/link";
import QuoteForm from "./QuoteForm";
import MobileNav from "@/components/MobileNav";

export const metadata: Metadata = {
  title: "Get a Quote",
  description:
    "Request a cleaning quote for residential, office, deep, specialist, or commercial cleaning services.",
};

export default function QuotePage() {
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
            <Link className="transition hover:text-white" href="/how-it-works">How it works</Link>
            <Link className="transition hover:text-white" href="/contact">Contact</Link>
          </nav>

          <Link href="/quote" className="hidden min-h-11 items-center justify-center bg-[#b8f34b] px-5 text-sm font-semibold text-[#10251d] sm:px-6 lg:inline-flex">
            Get a quote
          </Link>
          <MobileNav />
        </div>
      </header>

      <section className="border-b border-[#10251d]/10 bg-[#10251d] py-16 text-white sm:py-20 lg:py-24">
        <div className="mx-auto grid w-full max-w-[1500px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.55fr_1.45fr] lg:px-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#b8f34b]">
              Quote request
            </p>
            <p className="mt-6 max-w-xs text-sm leading-7 text-white/55">
              Give us enough detail to understand the space and we can confirm the right service and next step.
            </p>
          </div>

          <div>
            <h1 className="max-w-6xl text-[clamp(3.8rem,7.5vw,8rem)] font-medium leading-[0.88] tracking-[-0.06em]">
              Let’s scope the
              <span className="block text-white/40">clean properly.</span>
            </h1>

            <div className="mt-12 grid gap-8 border-t border-white/15 pt-8 sm:grid-cols-2">
              <p className="max-w-lg text-lg leading-8 text-white/80">
                A better quote starts with a better brief.
              </p>
              <p className="max-w-lg text-base leading-7 text-white/55 sm:justify-self-end">
                Tell us what kind of space it is, the service you need, approximate size and preferred timing.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto grid w-full max-w-[1500px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:px-12 lg:gap-20">
          <aside>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#60766a]">
              What helps us quote accurately
            </p>

            <div className="mt-8 border-t border-[#10251d]/15">
              {[
                ["01", "Type of space", "House, apartment, office, school, restaurant, retail, or another environment."],
                ["02", "Service required", "Routine, once-off, deep, window, carpet, upholstery or commercial cleaning."],
                ["03", "Approximate size", "A rough floor area, room count, or list of areas that need attention."],
                ["04", "Timing", "Preferred date, time window, recurring frequency, or deadline."],
                ["05", "Special requirements", "Access details, pets, surfaces, equipment, high-traffic areas or other constraints."],
              ].map(([number, title, copy]) => (
                <div key={number} className="border-b border-[#10251d]/15 py-6">
                  <p className="text-xs font-semibold text-[#708579]">{number}</p>
                  <h2 className="mt-3 text-lg font-semibold">{title}</h2>
                  <p className="mt-2 text-sm leading-6 text-[#5c6f65]">{copy}</p>
                </div>
              ))}
            </div>
          </aside>

          <QuoteForm />
        </div>
      </section>

      <section className="bg-[#e4eadf] py-20 lg:py-24">
        <div className="mx-auto grid w-full max-w-[1500px] gap-10 px-5 sm:px-8 lg:grid-cols-3 lg:px-12">
          {[
            ["01", "We review", "We check the request and identify anything that needs clarification."],
            ["02", "We confirm", "We confirm the service scope, availability and next step."],
            ["03", "You decide", "Once the quote is clear, you can proceed with scheduling the clean."],
          ].map(([number, title, copy]) => (
            <div key={number} className="border-t border-[#10251d]/15 pt-6">
              <p className="text-xs font-semibold text-[#6f8378]">{number}</p>
              <h2 className="mt-8 text-2xl font-semibold">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-[#5a6d63]">{copy}</p>
            </div>
          ))}
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
                <Link href="/how-it-works">How it works</Link>
                <Link href="/contact">Contact</Link>
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
