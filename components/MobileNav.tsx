"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/contact", label: "Contact" },
];

export default function MobileNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-expanded={open}
        aria-controls="mobile-navigation"
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        className="flex h-11 w-11 items-center justify-center border border-white/20 text-white transition hover:border-white/50"
      >
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        <span className="flex w-5 flex-col gap-1.5" aria-hidden="true">
          <span
            className={`h-px w-full bg-current transition-transform duration-200 ${
              open ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-full bg-current transition-transform duration-200 ${
              open ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </span>
      </button>

      {open ? (
        <div
          id="mobile-navigation"
          className="fixed inset-x-0 top-20 z-50 border-t border-white/10 bg-[#10251d] px-5 pb-8 pt-4 text-white shadow-2xl sm:px-8"
        >
          <nav aria-label="Mobile navigation">
            <div className="divide-y divide-white/10 border-y border-white/10">
              {links.map((link, index) => {
                const active = pathname === link.href;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className="group flex min-h-16 items-center justify-between py-4"
                  >
                    <span className="flex items-center gap-4">
                      <span className="text-xs font-semibold text-[#b8f34b]">
                        0{index + 1}
                      </span>
                      <span
                        className={`text-lg font-semibold ${
                          active ? "text-[#b8f34b]" : "text-white"
                        }`}
                      >
                        {link.label}
                      </span>
                    </span>
                    <span
                      aria-hidden="true"
                      className="text-xl text-white/40 transition group-hover:translate-x-1 group-hover:text-white"
                    >
                      →
                    </span>
                  </Link>
                );
              })}
            </div>

            <Link
              href="/quote"
              onClick={closeMenu}
              className="mt-5 flex min-h-14 items-center justify-between bg-[#b8f34b] px-5 font-semibold text-[#10251d]"
            >
              Get a quote
              <span aria-hidden="true">→</span>
            </Link>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
