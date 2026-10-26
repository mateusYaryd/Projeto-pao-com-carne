"use client";
import { useEffect, useState } from "react";

/** Id da seção visível entre as informadas (para o estado ativo da navegação). */
export function useActiveSection(ids: readonly string[]): string | null {
  const [active, setActive] = useState<string | null>(null);
  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting) setActive(e.target.id);
        else setActive((cur) => (cur === e.target.id ? null : cur));
      }
    }, { threshold: 0.35 });
    ids.forEach((id) => { const el = document.getElementById(id); if (el) io.observe(el); });
    return () => io.disconnect();
  }, [ids]);
  return active;
}
