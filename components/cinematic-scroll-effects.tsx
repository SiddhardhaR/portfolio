"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function CinematicScrollEffects() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const contexts = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((element) => {
        const speed = Number(element.dataset.parallax || "0.18");
        gsap.to(element, {
          yPercent: speed * -100,
          ease: "none",
          scrollTrigger: {
            trigger: element,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        });
      });

      gsap.utils.toArray<HTMLElement>(".glass").forEach((element) => {
        gsap.fromTo(
          element,
          { "--glow": 0 },
          {
            "--glow": 1,
            duration: 1,
            scrollTrigger: {
              trigger: element,
              start: "top 78%",
              end: "top 42%",
              scrub: true
            }
          }
        );
      });
    });

    return () => contexts.revert();
  }, []);

  return (
    <>
      <div data-parallax="0.08" className="pointer-events-none fixed left-8 top-32 z-[1] h-48 w-48 rounded-full border border-cyan-200/10 opacity-60" />
      <div data-parallax="0.12" className="pointer-events-none fixed bottom-24 right-20 z-[1] h-32 w-32 rounded-full border border-gold/10 opacity-70" />
    </>
  );
}
