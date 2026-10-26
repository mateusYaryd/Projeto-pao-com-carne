import Image from "next/image";
import { IMG, type ImgKey } from "@/lib/images";
import { cn } from "@/lib/cn";

interface PhotoProps {
  name: ImgKey;
  /** o contêiner pai precisa ser `relative` e ter dimensões ou aspect-ratio */
  sizes?: string;
  className?: string;
  priority?: boolean;
  alt?: string;
}

export function Photo({ name, sizes = "(max-width: 768px) 100vw, 50vw", className, priority, alt }: PhotoProps) {
  const { src, alt: defaultAlt } = IMG[name];
  return <Image src={src} alt={alt ?? defaultAlt} fill sizes={sizes} priority={priority} className={cn("object-cover", className)} />;
}
