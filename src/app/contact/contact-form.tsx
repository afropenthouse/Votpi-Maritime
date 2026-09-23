"use client";

import { useState, type FormEvent } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";

const enquirySchema = z.object({
  name: z.string().trim().min(2),
  company: z.string().trim().min(2),
  email: z.string().email(),
  phone: z.string().trim().min(7),
  product: z.string().trim().min(2),
  quantity: z.string().trim().min(1),
  loadingLocation: z.string().trim().min(2),
  dischargeLocation: z.string().trim().min(2),
  loadingDate: z.string().min(1),
  vesselSize: z.string().trim().min(1),
  requirements: z.string().trim().min(10),
});

const fields = [
  ["name", "Name", "text"],
  ["company", "Company", "text"],
  ["email", "Email", "email"],
  ["phone", "Phone", "tel"],
  ["product", "Product", "text"],
  ["quantity", "Quantity", "text"],
  ["loadingLocation", "Loading location", "text"],
  ["dischargeLocation", "Discharge location", "text"],
  ["loadingDate", "Required loading date", "date"],
  ["vesselSize", "Required vessel size", "text"],
] as const;

export function ContactForm() {
  const [error, setError] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const values = Object.fromEntries(new FormData(event.currentTarget));
    const parsed = enquirySchema.safeParse(values);
    if (!parsed.success) {
      setError("Please complete every field with valid contact and voyage details.");
      return;
    }
    setError("");
    const labels: Record<string, string> = {
      name: "Name",
      company: "Company",
      email: "Email",
      phone: "Phone",
      product: "Product",
      quantity: "Quantity",
      loadingLocation: "Loading location",
      dischargeLocation: "Discharge location",
      loadingDate: "Required loading date",
      vesselSize: "Required vessel size",
      requirements: "Charter requirements",
    };
    const body = Object.entries(parsed.data)
      .map(([key, value]) => `${labels[key]}: ${value}`)
      .join("\n");
    window.location.href = `mailto:info@votpimaritime.com?subject=${encodeURIComponent(`Vessel capacity enquiry — ${parsed.data.company}`)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={submit} noValidate className="grid gap-6 sm:grid-cols-2">
      {fields.map(([name, label, type]) => (
        <label key={name} className="grid gap-2 text-sm font-semibold">
          {label}
          <input
            name={name}
            type={type}
            className="h-12 border border-input bg-background px-4 font-normal outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
          />
        </label>
      ))}
      <label className="grid gap-2 text-sm font-semibold sm:col-span-2">
        Charter requirements
        <textarea
          name="requirements"
          rows={6}
          className="resize-y border border-input bg-background p-4 font-normal outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
        />
      </label>
      {error && (
        <p role="alert" className="text-sm font-semibold text-destructive sm:col-span-2">
          {error}
        </p>
      )}
      <div className="sm:col-span-2">
        <Button type="submit" size="lg">
          Prepare enquiry email
        </Button>
      </div>
    </form>
  );
}
