"use client";

import { Compass } from "lucide-react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export function ScrollCompass() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 28 });
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 540]);

  return (
    <div className="fixed right-5 top-1/2 z-50 hidden -translate-y-1/2 items-center gap-3 lg:flex">
      <div className="relative h-48 w-px overflow-hidden rounded-full bg-white/10">
        <motion.div
          style={{ scaleY, transformOrigin: "top" }}
          className="absolute inset-x-0 top-0 h-full bg-gradient-to-b from-gold via-cyan-300 to-crimson"
        />
      </div>
      <motion.div
        style={{ rotate }}
        className="compass-conic grid h-12 w-12 place-items-center rounded-full border border-white/15 shadow-gold"
      >
        <Compass className="h-5 w-5 text-white" />
      </motion.div>
    </div>
  );
}
