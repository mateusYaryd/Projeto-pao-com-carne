"use client";
import { useRef, type CSSProperties, type ElementType, type ReactNode } from "react";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/cn";

interface RevealProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  /** atraso em ms, usado para entradas escalonadas */
  delay?: number;
  /** "up": sobe e aparece. "mask": o <img> interno é revelado por máscara. */
  variant?: "up" | "mask";
}

export function Reveal({ children, as: Tag = "div", className, delay = 0, variant = "up" }: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const seen = useInView(ref);
  return (
    <Tag
      ref={ref}
      className={cn(variant === "mask" ? "mask-rv" : "rv", seen && "is-in", className)}
      style={{ "--d": `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}
