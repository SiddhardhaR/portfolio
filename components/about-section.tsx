"use client";

import { motion } from "framer-motion";
import { Anchor, CheckCircle2, Compass, Target } from "lucide-react";
import { highlights, profile, strengths } from "@/data/portfolio";
import { Badge, Card, reveal, stagger } from "@/components/ui";

export function AboutSection() {
  return (
    <section id="about" className="relative py-28">
      <div aria-hidden className="map-texture pointer-events-none absolute inset-x-0 top-10 h-[92%] opacity-35" />
      <div className="section-shell">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]"
        >
          <motion.div variants={reveal}>
            <Badge className="mb-5 gap-2">
              <Anchor className="h-3.5 w-3.5 text-gold" />
              Captain&apos;s Log
            </Badge>
            <h2 className="font-heading text-4xl font-bold leading-tight text-white md:text-6xl">
              Data systems with a clear horizon.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">{profile.summary}</p>
            <Card className="mt-7 p-5 transition duration-300 hover:-translate-y-1 hover:border-gold/35">
              <div className="flex items-start gap-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-gold/15 text-gold">
                  <Target className="h-5 w-5" />
                </div>
                <p className="text-sm leading-7 text-slate-300">{profile.mission}</p>
              </div>
            </Card>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {["Recruiter-first", "Original cinematic", "Production polish"].map((tone) => (
                <div key={tone} className="ink-panel px-4 py-3 font-mono text-[11px] uppercase tracking-[0.16em] text-cyan-100/80">
                  {tone}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={reveal} className="relative">
            <div className="absolute inset-0 -z-10 rounded-[32px] bg-[radial-gradient(circle_at_40%_30%,rgba(14,165,233,.22),transparent_42%)]" />
            <Card className="overflow-hidden p-5 md:p-7">
              <div className="relative min-h-[430px] overflow-hidden rounded-lg border border-white/10 bg-slate-950/55 p-5">
                <div aria-hidden className="manga-speed-lines absolute inset-0 opacity-[0.11]" />
                <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:44px_44px]" />
                <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/20" />
                <div className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold/20" />
                <Compass className="absolute right-7 top-7 h-10 w-10 text-gold/70" />

                <div className="relative z-10 grid gap-4 sm:grid-cols-2">
                  {highlights.map((item) => (
                    <div key={item.label} className="rounded-lg border border-white/10 bg-white/[0.055] p-4 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-200/35">
                      <div className="font-heading text-3xl font-bold text-white">{item.value}</div>
                      <div className="mt-2 text-sm leading-6 text-slate-300">{item.label}</div>
                    </div>
                  ))}
                </div>

                <div className="relative z-10 mt-7 rounded-lg border border-cyan-200/15 bg-cyan-300/[0.045] p-5">
                  <div className="font-mono text-xs uppercase tracking-[0.18em] text-cyan-100">Core Strengths</div>
                  <div className="mt-4 grid gap-3">
                    {strengths.map((strength) => (
                      <div key={strength} className="flex gap-3 text-sm leading-6 text-slate-300">
                        <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-gold" />
                        {strength}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
