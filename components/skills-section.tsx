"use client";

import { motion } from "framer-motion";
import { Orbit } from "lucide-react";
import { skillGroups } from "@/data/portfolio";
import { Badge, Card, reveal, stagger } from "@/components/ui";

export function SkillsSection() {
  return (
    <section id="skills" className="relative py-28">
      <div className="section-shell">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={stagger}
        >
          <motion.div variants={reveal} className="mx-auto max-w-3xl text-center">
            <Badge className="mb-5 gap-2">
              <Orbit className="h-3.5 w-3.5 text-gold" />
              Crew Skills & Powers
            </Badge>
            <h2 className="font-heading text-4xl font-bold leading-tight text-white md:text-6xl">
              A balanced crew of engineering abilities.
            </h2>
          </motion.div>

          <div className="relative mt-14">
            <div aria-hidden className="constellation-lines absolute inset-0 hidden rounded-[32px] opacity-35 lg:block" />
            <div className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {skillGroups.map((group, index) => {
              const Icon = group.icon;
              return (
                <motion.div key={group.title} variants={reveal}>
                  <Card className="group relative h-full overflow-hidden p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-200/40 hover:shadow-glow">
                    <div className="absolute right-[-46px] top-[-46px] h-32 w-32 rounded-full border border-cyan-200/15 transition duration-500 group-hover:scale-125 group-hover:border-gold/30" />
                    <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/40 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                    <div className="relative z-10">
                      <motion.div
                        animate={{ y: [0, -7, 0], rotate: [0, index % 2 ? -4 : 4, 0] }}
                        transition={{ duration: 4 + index * 0.2, repeat: Infinity, ease: "easeInOut" }}
                        className="grid h-12 w-12 place-items-center rounded-lg border border-white/10 bg-cyan-300/10 text-cyan-100 shadow-glow"
                      >
                        <Icon className="h-5 w-5" />
                      </motion.div>
                      <h3 className="mt-5 font-heading text-xl font-bold text-white">{group.title}</h3>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {group.items.map((item) => (
                          <span
                            key={item}
                            className="rounded-md border border-white/10 bg-white/[0.055] px-2.5 py-1.5 font-mono text-[11px] text-slate-300 transition group-hover:border-cyan-200/20"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
