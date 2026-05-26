"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "@/public/logos/logo-white.png";
import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";

/* -------------------- Config (single source of truth) -------------------- */

type FooterLink = { label: string; href: string };
type BusinessHour = { day: string; time: string };

const FOOTER = {
  brand: {
    blurb:
      "A co-educational day school nurturing curious, confident, and compassionate learners from Nursery to Grade 10.",
    socials: [
      { label: "Instagram", href: "#", icon: Instagram },
      { label: "Facebook", href: "#", icon: Facebook },
      { label: "Twitter", href: "#", icon: Twitter },
      { label: "LinkedIn", href: "#", icon: Linkedin },
    ],
  },
  sections: {
    infos: {
      title: "Infos",
      links: [
        { label: "Admissions", href: "#/admissions" },
        { label: "Academic Programs", href: "#/academics" },
        { label: "Clubs & Activities", href: "#/co-curriculars" },
        { label: "Downloads & Policies", href: "#/downloads" },
      ] as FooterLink[],
    },
    hours: {
      title: "Office Hours",
      rows: [
        { day: "Sun – Fri:", time: "9:30am – 4:00pm" },
        { day: "Saturday:", time: "Closed" },
        { day: "Admissions:", time: "Sun – Fri 10:00am – 3:00pm" },
        { day: "Library:", time: "Sun – Fri 8:00am – 5:00pm" },
      ] as BusinessHour[],
    },
    contact: {
      title: "Contact Us",
      address: "Nuwakot, Nepal",
      addressLink:
        "https://maps.google.com/?q=Balkumari,+Lalitpur+44700,+Nepal",
      phone: "+977 1-5551234",
      email: "info@nawajyoti.edu.np",
    },
  },
} as const;

/* ------------------------------- Component ------------------------------- */

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-scarlet text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 lg:py-16">
        {/* Top grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand + blurb */}
          <div>
            <Link
              href="/"
              aria-label="Home"
              className="inline-flex items-center"
            >
              <Image
                src={Logo}
                alt="School logo"
                width={120}
                height={120}
                className="h-10 w-auto sm:h-12 object-contain"
                priority
              />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-6 text-white/85">
              {FOOTER.brand.blurb}
            </p>

            <div className="mt-4 flex items-center gap-4">
              {FOOTER.brand.socials.map(({ label, href, icon: Icon }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition"
                >
                  <Icon className="h-4 w-4 text-white" />
                </Link>
              ))}
            </div>
          </div>

          {/* Infos */}
          <FooterColumn title={FOOTER.sections.infos.title}>
            <nav aria-label="Footer menu">
              <ul className="space-y-2">
                {FOOTER.sections.infos.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/90 hover:text-white underline-offset-4 hover:underline transition"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </FooterColumn>

          {/* Business Hours */}
          <FooterColumn title={FOOTER.sections.hours.title}>
            <ul className="space-y-2">
              {FOOTER.sections.hours.rows.map(({ day, time }) => (
                <li key={day} className="flex items-start gap-3">
                  <span className="min-w-[88px] text-sm text-white/90">
                    {day}
                  </span>
                  <span className="text-sm text-white/90">{time}</span>
                </li>
              ))}
            </ul>
          </FooterColumn>

          {/* Contact */}
          <FooterColumn title={FOOTER.sections.contact.title}>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-white" />
                <Link
                  href={FOOTER.sections.contact.addressLink}
                  target="_blank"
                  className="text-sm text-white/90 hover:text-white transition"
                >
                  {FOOTER.sections.contact.address}
                </Link>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 text-white" />
                <Link
                  href={`tel:${FOOTER.sections.contact.phone.replace(
                    /[^0-9+]/g,
                    ""
                  )}`}
                  className="text-sm text-white/90 hover:text-white transition"
                >
                  {FOOTER.sections.contact.phone}
                </Link>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 text-white" />
                <Link
                  href={`mailto:${FOOTER.sections.contact.email}`}
                  className="text-sm text-white/90 hover:text-white transition"
                >
                  {FOOTER.sections.contact.email}
                </Link>
              </li>
            </ul>
          </FooterColumn>
        </div>

        {/* Divider */}
        <hr className="my-8 border-white/20" />

        {/* Bottom bar */}
        <div className="text-center text-xs text-white/80">
          Copyright © {year} • Shree Nawajyoti Secondary School. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

/* --------------------------- Small helper piece -------------------------- */

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="text-base font-semibold leading-7">{title}</h3>
      <div className="mt-4">{children}</div>
    </div>
  );
}
