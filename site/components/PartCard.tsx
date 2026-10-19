import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "./Icons";
import { formatPrice } from "@/lib/data";

type Props = { title: string; brand: string; price: number };

export default function PartCard({ title, brand, price }: Props) {
  return (
    <article className="part">
      <div className="part-img">
        <span className="part-badge">Garantie</span>
        <Image src="/logo.png" alt="" width={140} height={81} />
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
