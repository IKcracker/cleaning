"use client";

import { FormEvent, useState } from "react";

export default function QuoteForm() {
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage(
      "Quote submission is in demo mode for now. Your details have not been sent."
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-5 border border-[#10251d]/12 bg-white p-6 sm:grid-cols-2 sm:p-8 lg:p-10"
    >
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
          required
          name="service"
          defaultValue=""
          className="min-h-14 border border-[#10251d]/18 bg-transparent px-4 font-normal outline-none transition focus:border-[#10251d]"
        >
          <option value="" disabled>
            Select a service
          </option>
          <option>Home cleaning</option>
          <option>Office cleaning</option>
          <option>Deep cleaning</option>
          <option>Carpet & upholstery</option>
          <option>Window cleaning</option>
          <option>Commercial cleaning</option>
        </select>
      </label>

      <label className="grid gap-2 text-sm font-semibold">
        Property type
        <input
          name="propertyType"
          type="text"
          placeholder="House, office, restaurant..."
          className="min-h-14 border border-[#10251d]/18 bg-transparent px-4 font-normal outline-none transition placeholder:text-[#10251d]/40 focus:border-[#10251d]"
        />
      </label>

      <label className="grid gap-2 text-sm font-semibold">
        Approximate size
        <input
          name="size"
          type="text"
          placeholder="e.g. 3 bedrooms or 250 m²"
          className="min-h-14 border border-[#10251d]/18 bg-transparent px-4 font-normal outline-none transition placeholder:text-[#10251d]/40 focus:border-[#10251d]"
        />
      </label>

      <label className="grid gap-2 text-sm font-semibold">
        Preferred date
        <input
          name="preferredDate"
          type="date"
          className="min-h-14 border border-[#10251d]/18 bg-transparent px-4 font-normal outline-none transition focus:border-[#10251d]"
        />
      </label>

      <label className="grid gap-2 text-sm font-semibold">
        Frequency
        <select
          name="frequency"
          defaultValue=""
          className="min-h-14 border border-[#10251d]/18 bg-transparent px-4 font-normal outline-none transition focus:border-[#10251d]"
        >
          <option value="" disabled>
            Select frequency
          </option>
          <option>Once-off</option>
          <option>Weekly</option>
          <option>Bi-weekly</option>
          <option>Monthly</option>
          <option>Other / not sure</option>
        </select>
      </label>

      <label className="grid gap-2 text-sm font-semibold sm:col-span-2">
        Additional details
        <textarea
          name="message"
          rows={7}
          placeholder="Tell us what needs attention, access requirements, special surfaces, pets, or anything else that may affect the quote."
          className="border border-[#10251d]/18 bg-transparent p-4 font-normal outline-none transition placeholder:text-[#10251d]/40 focus:border-[#10251d]"
        />
      </label>

      <div className="sm:col-span-2">
        <button
          type="submit"
          className="inline-flex min-h-14 w-full items-center justify-center bg-[#10251d] px-7 font-semibold text-white transition hover:bg-[#1d3d30] sm:w-auto"
        >
          Submit quote request
        </button>

        {message ? (
          <p role="status" className="mt-4 max-w-xl text-sm leading-6 text-[#5f7167]">
            {message}
          </p>
        ) : (
          <p className="mt-3 max-w-xl text-xs leading-5 text-[#607168]">
            Online submission will be connected later.
          </p>
        )}
      </div>
    </form>
  );
}
