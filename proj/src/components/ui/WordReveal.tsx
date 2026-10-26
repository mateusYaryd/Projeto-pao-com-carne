"use client";
import { Fragment, useRef, type ElementType } from "react";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/cn";

interface WordRevealProps {
  text: string;
  as?: ElementType;
  className?: string;
  /** intervalo entre palavras, em ms */
  step?: number;
}

/**
 * Revela o texto palavra por palavra. Usa só transições CSS com atraso por palavra
 * (sem timers pendentes) e não usa innerHTML. O texto completo fica no aria-label.
 */
export function WordReveal({ text, as: Tag = "h2", className, step = 70 }: WordRevealProps) {
  const ref = useRef<HTMLElement>(null);
  const seen = useInView(ref, { threshold: 0.2 });
  const words = text.trim().split(/\s+/);
  return (
    <Tag ref={ref} aria-label={text} className={cn(className, seen && "is-in")}>
      {words.map((w, i) => (
        <Fragment key={`${w}-${i}`}>
          <span aria-hidden="true" className="palavra" style={{ transitionDelay: `${i * step}ms` }}>{w}</span>
          {i < words.length - 1 ? " " : null}
        </Fragment>
      ))}
    </Tag>
  );
}
