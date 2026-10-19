"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CarIcon, HomeIcon, PhoneIcon, SearchIcon } from "./Icons";

const links = [
  { href: "/", label: "Accueil", icon: HomeIcon },
  { href: "/pieces-detachees", label: "Pièces détachées", icon: CarIcon },
  { href: "/contact", label: "Contact", icon: PhoneIcon },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-top">
        <Link href="/" className="header-logo" aria-label="JAS'AUTO - Accueil">
          <Image src="/logo.png" alt="Logo JAS'AUTO" width={605} height={351} priority />
        </Link>
        <Link href="/" className="header-title">
          JAS&apos;AUTO
        </Link>
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

      <nav className={`nav ${open ? "nav-open" : ""}`}>
        {links.map(({ href, label, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className={`nav-link ${pathname === href ? "active" : ""}`}
            onClick={() => setOpen(false)}
          >
            <Icon />
            <span>{label}</span>
          </Link>
        ))}
        <Link href="/pieces-detachees" className="nav-link nav-search" aria-label="Rechercher une pièce">
          <SearchIcon />
        </Link>
      </nav>
    </header>
  );
}
