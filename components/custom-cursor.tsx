"use client";

import { useEffect, useRef } from "react";

export function CustomCursor() {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ring = ringRef.current;
    const dot = dotRef.current;
    if (!ring || !dot || window.matchMedia("(pointer: coarse)").matches) return;

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let tx = x;
    let ty = y;
    let hover = false;

    const move = (event: PointerEvent) => {
      tx = event.clientX;
      ty = event.clientY;
      dot.style.transform = `translate3d(${tx - 4}px, ${ty - 4}px, 0)`;
    };

    const over = (event: Event) => {
      hover = Boolean((event.target as HTMLElement).closest("a, button, .project-card"));
    };

    const render = () => {
      x += (tx - x) * 0.18;
      y += (ty - y) * 0.18;
      const size = hover ? 54 : 34;
      ring.style.width = `${size}px`;
      ring.style.height = `${size}px`;
      ring.style.transform = `translate3d(${x - size / 2}px, ${y - size / 2}px, 0)`;
      requestAnimationFrame(render);
    };

    window.addEventListener("pointermove", move);
    window.addEventListener("mouseover", over);
    requestAnimationFrame(render);

    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("mouseover", over);
    };
  }, []);

  return (
    <>
      <div
        ref={ringRef}
        className="cursor-ring border border-cyan-200/70 bg-cyan-300/10 shadow-[0_0_32px_rgba(14,165,233,.55)] transition-[width,height,border-color] duration-200"
      />
      <div
        ref={dotRef}
        className="cursor-dot h-2 w-2 bg-gold shadow-[0_0_24px_rgba(245,158,11,.9)]"
      />
    </>
  );
}
