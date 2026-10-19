import Image from "next/image";
import Link from "next/link";
import { contact } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Image src="/logo.png" alt="Logo JAS'AUTO" width={140} height={81} />
          <p>Pièces détachées auto d&apos;occasion, testées et garanties.</p>
        </div>

        <div>
          <h4>Navigation</h4>
          <ul>
            <li><Link href="/">Accueil</Link></li>
            <li><Link href="/pieces-detachees">Pièces détachées</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4>Nous trouver</h4>
          <ul>
            <li>{contact.street}</li>
            <li>{contact.zip} {contact.city}</li>
            <li><a href={`tel:${contact.phone}`}>{contact.phoneDisplay}</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        © {new Date().getFullYear()} JAS&apos;AUTO — Tous droits réservés
      </div>
    </footer>
  );
}
