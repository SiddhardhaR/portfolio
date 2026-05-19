"use client";

import { motion } from "framer-motion";
import { MapPinned } from "lucide-react";
import { experiences } from "@/data/portfolio";
import { Badge, Card, reveal, stagger } from "@/components/ui";

export function ExperienceSection() {
  return (
    <section id="experience" className="relative py-28">
      <div className="section-shell">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={stagger}
        >
          <motion.div variants={reveal} className="max-w-3xl">
            <Badge className="mb-5 gap-2">
              <MapPinned className="h-3.5 w-3.5 text-gold" />
              Grand Line Journey
            </Badge>
            <h2 className="font-heading text-4xl font-bold leading-tight text-white md:text-6xl">
              Each role, a new island of impact.
            </h2>
          </motion.div>

          <div className="relative mt-14">
            <div className="absolute left-4 top-0 hidden h-full w-px bg-white/10 md:block" />
            <motion.div
              aria-hidden
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: "-160px" }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              className="absolute left-4 top-0 hidden h-full w-px origin-top bg-gradient-to-b from-cyan-300 via-gold to-crimson md:block"
            />
            <div className="grid gap-6">
              {experiences.map((experience, index) => (
                <motion.div key={experience.company} variants={reveal} className="relative md:pl-14">
                  <div className="absolute left-[9px] top-7 hidden h-4 w-4 rounded-full border border-white bg-gold shadow-gold md:block">
                    <span className="absolute inset-[-10px] rounded-full border border-gold/25 animate-ping" />
                  </div>
                  <Card className="group overflow-hidden p-1 transition duration-300 hover:-translate-y-1 hover:shadow-glow">
                    <div className="relative overflow-hidden rounded-lg bg-slate-950/65 p-6 md:p-7">
                      <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${experience.color}`} />
                      <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                        <div>
                          <div className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-100/75">
                            Arc {String(index + 1).padStart(2, "0")} - {experience.island}
                          </div>
                          <h3 className="mt-3 font-heading text-2xl font-bold text-white">{experience.role}</h3>
                          <p className="mt-2 text-slate-300">{experience.company}</p>
                          <p className="mt-1 text-sm text-slate-500">{experience.location} · {experience.period}</p>
                        </div>
                        <div className="rounded-lg border border-gold/25 bg-gold/10 px-4 py-3 text-left lg:text-right">
                          <div className="font-heading text-lg font-bold text-gold">{experience.impact}</div>
                          <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-slate-400">charted result</div>
                        </div>
                      </div>
                      <ul className="mt-6 grid gap-3 text-sm leading-7 text-slate-300 md:grid-cols-2">
                        {experience.bullets.map((bullet) => (
                          <li key={bullet} className="border-l border-cyan-200/20 pl-4">{bullet}</li>
                        ))}
                      </ul>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
