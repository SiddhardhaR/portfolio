"use client";

import { type HTMLAttributes, type MouseEventHandler, type ReactNode } from "react";
import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

export function Badge({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-100/85 shadow-[0_0_30px_rgba(6,182,212,.12)] backdrop-blur",
        className
      )}
      {...props}
    />
  );
}

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("glass rounded-lg", className)} {...props} />;
}

export function MagneticButton({
  className,
  children,
  href,
  download,
  target,
  rel,
  onClick,
  disabled,
  type = "button"
}: {
  href?: string;
  children: ReactNode;
  className?: string;
  download?: boolean | string;
  target?: string;
  rel?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}) {
  const sharedClass = cn(
    "magnetic group relative inline-flex min-h-12 items-center justify-center overflow-hidden rounded-lg border border-white/15 bg-white/[0.06] px-5 py-3 font-heading text-sm font-bold text-white shadow-glow transition hover:border-cyan-200/50 hover:bg-cyan-300/10 focus:outline-none focus:ring-2 focus:ring-cyan-300/60",
    className
  );

  const content = (
    <>
      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition duration-700 group-hover:translate-x-full" />
      <span className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 scale-0 rounded-full bg-cyan-200/15 opacity-0 transition duration-500 group-hover:scale-100 group-hover:opacity-100" />
      <span className="absolute inset-x-4 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-200 to-transparent opacity-70" />
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        download={download}
        target={target}
        rel={rel}
        className={sharedClass}
        whileHover={{ y: -3, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={sharedClass}
      whileHover={{ y: -3, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {content}
    </motion.button>
  );
}

export const reveal: Variants = {
  hidden: { opacity: 0, y: 32, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] as const }
  }
};

export const cinematicReveal: Variants = {
  hidden: { opacity: 0, y: 44, scale: 0.985, filter: "blur(14px)" },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const }
  }
};

export const stagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12
    }
  }
};
