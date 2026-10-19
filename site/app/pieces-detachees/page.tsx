import type { Metadata } from "next";
import PartCard from "@/components/PartCard";
import Reveal from "@/components/Reveal";
import { CarIcon, GearIcon } from "@/components/Icons";
import { brands, categories, featured } from "@/lib/data";

export const metadata: Metadata = {
  title: "Pièces détachées | JAS'AUTO",
};

export default function PiecesPage() {
  return (
    <>
      <div className="page-title">
        <h1>Pièces détachées</h1>
        <p>Pièces d&apos;occasion testées, nettoyées et garanties.</p>
      </div>

      <div className="two-cols">
        <Reveal as="section" className="panel">
          <div className="panel-head">
            <span className="panel-icon"><CarIcon /></span>
            <h2>Par marque</h2>
          </div>
          <ul className="list">
            {brands.map((b) => (
              <li key={b.name}>
                <strong>{b.name}</strong>
                {b.models.length > 0 && (
                  <span className="tags">
                    {b.models.map((m) => <span key={m} className="tag">{m}</span>)}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal as="section" className="panel" delay={120}>
          <div className="panel-head">
            <span className="panel-icon"><GearIcon /></span>
            <h2>Par catégorie</h2>
          </div>
          <ul className="list">
            {categories.map((c) => <li key={c}>{c}</li>)}
          </ul>
        </Reveal>
      </div>

      <section className="section">
        <Reveal>
          <h2 className="big-title">Sondes de <span>température</span></h2>
        </Reveal>
        <div className="parts-grid">
          {featured.map((p, i) => (
            <Reveal key={p.title} delay={(i % 4) * 90}>
              <PartCard {...p} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
