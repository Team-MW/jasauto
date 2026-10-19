import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { PhoneIcon, PinIcon, UserIcon } from "@/components/Icons";
import { contact } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact | JAS'AUTO",
};

export default function ContactPage() {
  const mapQuery = encodeURIComponent(`${contact.street} ${contact.zip} ${contact.city}`);

  return (
    <>
      <div className="page-title">
        <h1>Contact</h1>
        <p>Une question sur une pièce ? Écrivez-nous ou appelez-nous.</p>
      </div>

      <div className="contact-layout">
        <Reveal as="section" className="panel">
          <div className="panel-head">
            <span className="panel-icon"><UserIcon /></span>
            <h2>Formulaire de contact</h2>
          </div>
          <ContactForm />
        </Reveal>

        <aside className="summary reveal-side">
          <h3>{contact.name}</h3>
          <div className="summary-row">
            <PinIcon />
            <span>{contact.street}<br />{contact.zip} {contact.city.toUpperCase()}</span>
          </div>
          <div className="summary-row">
            <PhoneIcon />
            <a href={`tel:${contact.phone}`}>{contact.phoneDisplay}</a>
          </div>
          <a
            className="btn btn-dark btn-block"
            href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
            target="_blank"
            rel="noreferrer"
          >
            Itinéraire
          </a>
        </aside>
      </div>
    </>
  );
}
