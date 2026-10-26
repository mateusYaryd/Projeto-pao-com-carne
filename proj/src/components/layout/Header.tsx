"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { useActiveSection } from "@/hooks/useActiveSection";
import { IFOOD_URL, NAV_ITEMS } from "@/lib/config";
import { IMG } from "@/lib/images";
import { cn } from "@/lib/cn";

const IDS = NAV_ITEMS.map((n) => n.id);

export function Header() {
  const [solid, setSolid] = useState(false);
  const active = useActiveSection(IDS);

  useEffect(() => {
    const hero = document.getElementById("inicio");
    const onScroll = () => setSolid(scrollY > (hero?.offsetHeight ?? 600) - 90);
    onScroll();
    addEventListener("scroll", onScroll, { passive: true });
    return () => removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      aria-label="Principal"
      className={cn(
        "fixed inset-x-0 top-0 z-20 flex items-center justify-between px-4 py-3 text-cream transition-colors duration-300 sm:px-10",
        solid && "bg-brand shadow-[0_2px_14px_rgba(0,0,0,.35)]",
      )}
    >
      <a href="#inicio" aria-label="Início">
        <Image src={IMG.logo.src} alt={IMG.logo.alt} width={54} height={54} priority className="h-[54px] w-[54px] rounded-full ring-[3px] ring-cream" />
      </a>
      <ul className="hidden gap-9 sm:flex [text-shadow:0_1px_6px_rgba(0,0,0,.55)]">
        {NAV_ITEMS.map((n) => (
          <li key={n.id}>
            <a
              href={`#${n.id}`}
              aria-current={active === n.id ? "page" : undefined}
              className="font-semibold underline-offset-[6px] decoration-mustard decoration-[3px] hover:underline aria-[current=page]:underline"
            >
              {n.label}
            </a>
          </li>
        ))}
      </ul>
      <Button href={IFOOD_URL} small>Peça no iFood</Button>
    </nav>
  );
}
