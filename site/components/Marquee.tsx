import { categories } from "@/lib/data";

export default function Marquee() {
  const items = [...categories, ...categories];
  return (
    <div className="marquee" aria-hidden>
      <div className="marquee-track">
        {items.map((c, i) => (
          <span key={i}>
            {c} <b>✦</b>
          </span>
        ))}
      </div>
    </div>
  );
}
