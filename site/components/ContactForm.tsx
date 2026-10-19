"use client";

import { useState } from "react";
import { ArrowIcon } from "./Icons";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return <p className="form-success">Merci, votre message a bien été envoyé. Nous vous répondons rapidement.</p>;
  }

  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <div className="form-grid">
        <label>
          Nom :
          <input name="nom" required />
        </label>
        <label>
          Prénom :
          <input name="prenom" required />
        </label>
        <label>
          Email :
          <input name="email" type="email" required />
        </label>
        <label>
          N° téléphone :
          <input name="tel" type="tel" />
        </label>
      </div>
      <label>
        Véhicule / pièce recherchée :
        <input name="piece" placeholder="Ex : Renault Scenic II, pompe de direction" />
      </label>
      <label>
        Message :
        <textarea name="message" rows={5} required />
      </label>
      <button type="submit" className="btn btn-dark btn-block">
        Envoyer <ArrowIcon />
      </button>
    </form>
  );
}
