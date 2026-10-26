import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "yellow" | "dark" | "ghost";
interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: Variant;
  small?: boolean;
  children: ReactNode;
}

const variants: Record<Variant, string> = { yellow: "btn-yellow", dark: "btn-dark", ghost: "btn-ghost" };

/** Link estilizado como botão. Links externos abrem em nova aba automaticamente. */
export function Button({ href, variant = "yellow", small, className, children, ...rest }: ButtonProps) {
  const external = /^https?:/.test(href);
  return (
    <a
      href={href}
      className={cn("btn", variants[variant], small && "btn-sm", className)}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...rest}
    >
      {children}
    </a>
  );
}
