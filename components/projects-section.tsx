"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Swords } from "lucide-react";
import { profile, projects } from "@/data/portfolio";
import { Badge, Card, MagneticButton, reveal, stagger } from "@/components/ui";

export function ProjectsSection() {
  return (
    <section id="projects" className="relative py-28">
      <div className="section-shell">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={stagger}
        >
          <motion.div variants={reveal} className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <Badge className="mb-5 gap-2">
                <Swords className="h-3.5 w-3.5 text-gold" />
                Legendary Adventures
              </Badge>
              <h2 className="font-heading text-4xl font-bold leading-tight text-white md:text-6xl">
                Projects built for measurable momentum.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-7 text-slate-400">
              Each build pairs production-minded architecture with clear business or research impact.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {projects.map((project, index) => {
              const Icon = project.icon;
              const posterNumber = String(index + 1).padStart(2, "0");
              return (
                <motion.div key={project.title} variants={reveal} className={index === 0 ? "lg:col-span-2" : ""}>
                  <Card className="project-card group h-full overflow-hidden p-1 transition duration-300 hover:-translate-y-1 hover:shadow-gold">
                    <motion.div
                      whileHover={{ rotateX: 1.2, rotateY: index % 2 ? -1.2 : 1.2 }}
                      transition={{ duration: 0.25 }}
                      className="relative flex h-full flex-col overflow-hidden rounded-lg bg-slate-950/70 lg:flex-row"
                    >
                      <div
                        className="project-preview relative min-h-64 overflow-hidden border-b border-white/10 lg:min-h-[420px] lg:w-[44%] lg:border-b-0 lg:border-r"
                        style={{ background: project.image }}
                      >
                        <div aria-hidden className="manga-speed-lines absolute inset-0 opacity-[0.22]" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,.38),transparent_22%),linear-gradient(180deg,transparent,rgba(2,6,23,.75))]" />
                        <div className="absolute right-5 top-5 rounded-md border border-white/20 bg-black/25 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-white/75 backdrop-blur">
                          Poster {posterNumber}
                        </div>
                        <div className="absolute left-6 top-6 grid h-14 w-14 place-items-center rounded-lg border border-white/20 bg-black/25 backdrop-blur">
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <div className="absolute bottom-5 left-6 right-6">
                          <div className="font-mono text-xs uppercase tracking-[0.18em] text-white/70">{project.subtitle}</div>
                          <h3 className="mt-2 font-heading text-3xl font-bold text-white">{project.title}</h3>
                        </div>
                      </div>

                      <div className="flex flex-1 flex-col p-6 md:p-7">
                        <div className="mb-4 w-fit rounded-lg border border-gold/25 bg-gold/10 px-3 py-2 font-heading text-sm font-bold text-gold">
                          {project.metric}
                        </div>
                        <p className="text-sm leading-7 text-slate-300">{project.description}</p>
                        <div className="mt-6 grid gap-3">
                          {[
                            ["Problem", project.problem],
                            ["Solution", project.solution],
                            ["Impact", project.impact]
                          ].map(([label, value]) => (
                            <div key={label} className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
                              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-cyan-100/70">{label}</div>
                              <div className="mt-2 text-sm leading-6 text-slate-300">{value}</div>
                            </div>
                          ))}
                        </div>
                        <div className="mt-5 grid gap-2">
                          {project.details.map((detail) => (
                            <div key={detail} className="border-l border-cyan-200/25 pl-3 text-sm leading-6 text-slate-400">
                              {detail}
                            </div>
                          ))}
                        </div>
                        <div className="mt-5 flex flex-wrap gap-2">
                          {project.stack.map((tech) => (
                            <span key={tech} className="rounded-md bg-white/[0.055] px-2.5 py-1.5 font-mono text-[11px] text-cyan-100/85">
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="mt-6 flex gap-3">
                          <MagneticButton href={profile.github} target="_blank" rel="noreferrer" className="min-h-10 px-3 py-2 text-xs">
                            <Github className="h-4 w-4" />
                            GitHub
                          </MagneticButton>
                          <MagneticButton href={`mailto:${profile.email}?subject=Project walkthrough: ${encodeURIComponent(project.title)}`} className="min-h-10 px-3 py-2 text-xs">
                            <ExternalLink className="h-4 w-4" />
                            Walkthrough
                          </MagneticButton>
                        </div>
                      </div>
                    </motion.div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
