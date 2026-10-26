import Image from "next/image";
import { IMG } from "@/lib/images";
import { SITE } from "@/lib/config";

export function Footer() {
  return (
    <footer className="flex flex-wrap items-center justify-between gap-5 bg-ink px-4 pb-24 pt-7 text-[15px] text-cream sm:px-14">
      <Image src={IMG.logo.src} alt="" width={64} height={64} className="rounded-full" />
      <span>{SITE.name} · {SITE.tagline}</span>
    </footer>
  );
}
