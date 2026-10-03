import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Cleaning for residential, office, deep, specialist, or commercial cleaning enquiries.",
};

export default function ContactPage() {
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
            <Link className="text-white" href="/contact">Contact</Link>
          </nav>

          <Link href="/#quote" className="inline-flex min-h-11 items-center justify-center bg-[#b8f34b] px-5 text-sm font-semibold text-[#10251d] transition hover:bg-white sm:px-6">
            Get a quote
          </Link>
        </div>
      </header>

      <section className="border-b border-[#10251d]/10 bg-[#e4eadf]">
        <div className="mx-auto w-full max-w-[1500px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.5fr_1.5fr] lg:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#60766a]">
                Contact
              </p>
              <p className="mt-6 max-w-xs text-sm leading-7 text-[#61736a]">
                Questions, custom scopes, recurring cleaning, or a once-off service — start here.
              </p>
            </div>

            <div>
              <h1 className="max-w-6xl text-[clamp(3.7rem,7.4vw,7.8rem)] font-medium leading-[0.88] tracking-[-0.06em]">
                Tell us what
                <span className="block text-[#74877c]">you need cleaned.</span>
              </h1>

              <div className="mt-12 grid gap-8 border-t border-[#10251d]/15 pt-8 sm:grid-cols-2">
                <p className="max-w-lg text-lg leading-8 text-[#30463c]">
                  The clearer the request, the faster we can confirm the right service and next step.
                </p>
                <p className="max-w-lg text-base leading-7 text-[#61736a] sm:justify-self-end">
                  Share the type of space, service needed, timing, and any details that affect access or scope.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto grid w-full max-w-[1500px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:px-12 lg:gap-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#60766a]">
              Start a conversation
            </p>

            <div className="mt-8 border-t border-[#10251d]/15">
              {[
                ["Service", "Home, office, deep, specialist or commercial cleaning."],
                ["Space", "Tell us what type of property or environment needs attention."],
                ["Timing", "Share your preferred date, day, or time window."],
                ["Details", "Add anything important about access, surfaces, size or expectations."],
              ].map(([title, copy]) => (
                <div key={title} className="border-b border-[#10251d]/15 py-6">
                  <h2 className="text-lg font-semibold">{title}</h2>
                  <p className="mt-2 text-sm leading-6 text-[#5d7066]">{copy}</p>
                </div>
              ))}
            </div>
          </div>

          <form className="grid gap-5 border border-[#10251d]/12 bg-white p-6 sm:grid-cols-2 sm:p-8 lg:p-10">
            <label className="grid gap-2 text-sm font-semibold">
              Name
              <input
                required
                name="name"
                type="text"
                placeholder="Your name"
                className="min-h-14 border border-[#10251d]/18 bg-transparent px-4 font-normal outline-none transition placeholder:text-[#10251d]/40 focus:border-[#10251d]"
              />
            </label>

            <label className="grid gap-2 text-sm font-semibold">
              Email
              <input
                required
                name="email"
                type="email"
                placeholder="you@example.com"
                className="min-h-14 border border-[#10251d]/18 bg-transparent px-4 font-normal outline-none transition placeholder:text-[#10251d]/40 focus:border-[#10251d]"
              />
            </label>

            <label className="grid gap-2 text-sm font-semibold">
              Phone
              <input
                name="phone"
                type="tel"
                placeholder="Your contact number"
                className="min-h-14 border border-[#10251d]/18 bg-transparent px-4 font-normal outline-none transition placeholder:text-[#10251d]/40 focus:border-[#10251d]"
              />
            </label>

            <label className="grid gap-2 text-sm font-semibold">
              Service
              <select
                name="service"
                defaultValue=""
                className="min-h-14 border border-[#10251d]/18 bg-transparent px-4 font-normal outline-none transition focus:border-[#10251d]"
              >
                <option value="" disabled>Select a service</option>
                <option>Home cleaning</option>
                <option>Office cleaning</option>
                <option>Deep cleaning</option>
                <option>Carpet & upholstery</option>
                <option>Window cleaning</option>
                <option>Commercial cleaning</option>
              </select>
            </label>

            <label className="grid gap-2 text-sm font-semibold sm:col-span-2">
              Message
              <textarea
                required
                name="message"
                rows={7}
                placeholder="Tell us about the space, preferred timing and anything else we should know."
                className="border border-[#10251d]/18 bg-transparent p-4 font-normal outline-none transition placeholder:text-[#10251d]/40 focus:border-[#10251d]"
              />
            </label>

            <div className="sm:col-span-2">
              <button
                type="submit"
                className="inline-flex min-h-14 w-full items-center justify-center bg-[#10251d] px-7 font-semibold text-white transition hover:bg-[#1d3d30] sm:w-auto"
              >
                Send enquiry
              </button>
              <p className="mt-3 text-xs leading-5 text-[#607168]">
                Contact delivery will be connected when we wire the forms to email or the CRM.
              </p>
            </div>
          </form>
        </div>
      </section>

      <section className="bg-[#10251d] py-20 text-white lg:py-24">
        <div className="mx-auto grid w-full max-w-[1500px] gap-10 px-5 sm:px-8 lg:grid-cols-3 lg:px-12">
          {[
            ["01", "Residential", "For homes, apartments and private spaces."],
            ["02", "Workplace", "For offices, shared spaces and recurring upkeep."],
            ["03", "Commercial", "For larger operational and custom cleaning requirements."],
          ].map(([number, title, copy]) => (
            <div key={number} className="border-t border-white/15 pt-6">
              <p className="text-xs font-semibold text-[#b8f34b]">{number}</p>
              <h2 className="mt-8 text-2xl font-semibold">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-white/55">{copy}</p>
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
