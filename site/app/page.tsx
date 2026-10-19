import Link from "next/link";
import Counter from "@/components/Counter";
import Marquee from "@/components/Marquee";
import PartCard from "@/components/PartCard";
import Reveal from "@/components/Reveal";
import { ArrowIcon, CheckIcon, LeafIcon, UserIcon } from "@/components/Icons";
import { brands, categories, contact, featured } from "@/lib/data";

const reasons = [
  {
    icon: CheckIcon,
    title: "Pièces testées & garanties",
    text: "Les pièces détachées d'occasion sont rigoureusement testées, nettoyées et couvertes par la garantie.",
  },
  {
    icon: LeafIcon,
    title: "Un geste pour la planète",
    text: "Le réemploi vous permet de faire un geste pour la planète tout en économisant beaucoup sur les coûts de réparation et d'entretien.",
  },
  {
    icon: UserIcon,
    title: "Service client d'excellence",
    text: "Assurer l'excellence du service client est une obligation. Nous vous conseillons pour trouver la bonne pièce.",
  },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-glow" />
        <div className="hero-text">
          <span className="eyebrow hero-in" style={{ animationDelay: "0ms" }}>
            Pièces auto d&apos;occasion · Châteauroux
          </span>
          <h1 className="hero-in" style={{ animationDelay: "120ms" }}>
            Des pièces détachées <em className="shine-text">garanties</em>, au juste prix.
          </h1>
          <p className="hero-in" style={{ animationDelay: "240ms" }}>
            JAS&apos;AUTO sélectionne, teste et reconditionne des pièces d&apos;occasion pour
            Renault, Peugeot, BMW, Tesla et bien d&apos;autres.
          </p>
          <div className="hero-actions hero-in" style={{ animationDelay: "360ms" }}>
            <Link href="/pieces-detachees" className="btn btn-yellow">
              Voir les pièces <ArrowIcon />
            </Link>
            <a href={`tel:${contact.phone}`} className="btn btn-ghost">
              {contact.phoneDisplay}
            </a>
          </div>
          <div className="stats hero-in" style={{ animationDelay: "480ms" }}>
            <div><strong><Counter to={brands.length} /></strong><span>Marques</span></div>
            <div><strong><Counter to={categories.length} /></strong><span>Catégories</span></div>
            <div><strong><Counter to={100} suffix="%" /></strong><span>Pièces testées</span></div>
          </div>
        </div>
      </section>

      <Marquee />

      <Reveal as="section" className="section">
        <div className="section-head">
          <h2 className="big-title">Pourquoi <span>JAS&apos;AUTO</span> et pas un autre ?</h2>
        </div>
        <div className="reasons">
          {reasons.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} as="article" className="reason" delay={i * 120}>
              <span className="reason-num">0{i + 1}</span>
              <span className="reason-icon"><Icon size={22} /></span>
              <h3>{title}</h3>
              <p>{text}</p>
            </Reveal>
          ))}
        </div>
      </Reveal>

      <section className="section">
        <Reveal className="section-head">
          <h2 className="big-title">Nos pièces <span>du moment</span></h2>
          <Link href="/pieces-detachees" className="link-arrow">
            Tout voir <ArrowIcon />
          </Link>
        </Reveal>
        <div className="parts-grid">
          {featured.map((p, i) => (
            <Reveal key={p.title} delay={(i % 4) * 90}>
              <PartCard {...p} />
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal as="section" className="section">
        <h2 className="big-title">Marques <span>disponibles</span></h2>
        <div className="brands">
          {brands.map((b) => (
            <Link key={b.name} href="/pieces-detachees" className="brand">
              <span>{b.name}</span>
              <small>{b.models.length ? b.models.join(" · ") : "Toutes pièces"}</small>
            </Link>
          ))}
        </div>
      </Reveal>

      <Reveal as="section" className="cta">
        <div>
          <h2>Vous cherchez une pièce précise ?</h2>
          <p>Contactez-nous, nous vérifions la disponibilité pour votre véhicule.</p>
        </div>
        <Link href="/contact" className="btn btn-yellow btn-lg">
          Nous contacter <ArrowIcon />
        </Link>
      </Reveal>
    </>
  );
}
