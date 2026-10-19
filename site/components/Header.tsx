"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { PhoneIcon } from "./Icons";
import { contact } from "@/lib/data";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/pieces-detachees", label: "Pièces détachées" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""} ${open ? "menu-open" : ""}`}>
      <div className="header-bar">
        <Link href="/" className="brand-link" aria-label="JAS'AUTO - Accueil">
          <Image src="/logo.png" alt="" width={605} height={351} priority />
          <span>JAS&apos;AUTO</span>
        </Link>

        <nav className="nav">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`nav-link ${pathname === href ? "active" : ""}`}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>

        <a href={`tel:${contact.phone}`} className="header-call">
          <PhoneIcon size={15} />
          <span>{contact.phoneDisplay}</span>
        </a>

        <button
          className="burger"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
