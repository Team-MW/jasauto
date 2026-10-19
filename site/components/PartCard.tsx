import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "./Icons";
import { formatPrice } from "@/lib/data";

type Props = { title: string; brand: string; price: number; image: string };

export default function PartCard({ title, brand, price, image }: Props) {
  return (
    <article className="part">
      <div className="part-img">
        <span className="part-badge">Garantie</span>
        <Image src={image} alt={title} fill sizes="(max-width: 640px) 100vw, 300px" />
      </div>
      <div className="part-body">
        <span className="part-brand">{brand}</span>
        <h3>{title}</h3>
        <div className="part-foot">
          <strong>{formatPrice(price)}</strong>
          <Link href="/contact" className="part-cta" aria-label="Se renseigner">
            <ArrowIcon />
          </Link>
        </div>
      </div>
    </article>
  );
}
