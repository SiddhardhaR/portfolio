"use client";

import { motion } from "framer-motion";
import { Download, Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { certifications, education, profile } from "@/data/portfolio";
import { Badge, Card, MagneticButton, reveal, stagger } from "@/components/ui";

export function FinalSection() {
  return (
    <section id="contact" className="relative py-28">
      <div className="section-shell">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={stagger}
          className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]"
        >
          <motion.div variants={reveal}>
            <Card className="terminal-panel overflow-hidden rounded-lg p-7 md:p-10">
              <Badge className="mb-5 gap-2">
                <Send className="h-3.5 w-3.5 text-gold" />
                Transmissions
              </Badge>
              <h2 className="font-heading text-4xl font-bold leading-tight text-white md:text-6xl">
                Let&apos;s build something reliable, intelligent, and beautifully useful.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                I am looking for teams where data engineering, analytics, and AI systems meet real product impact. If your roadmap needs clean infrastructure and sharper decisions, I would be glad to talk.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <MagneticButton href={`mailto:${profile.email}`} className="bg-gold/10 shadow-gold">
                  <Mail className="h-4 w-4" />
                  Email Me
                </MagneticButton>
                <MagneticButton href={profile.resumeFile} download>
                  <Download className="h-4 w-4" />
                  Download Resume
                </MagneticButton>
              </div>
              <div className="mt-8 rounded-lg border border-cyan-200/15 bg-black/25 p-4 font-mono text-xs leading-6 text-cyan-100/80">
                <div className="flex items-center gap-2 text-gold">
                  <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_18px_rgba(110,231,183,.8)]" />
                  online / available for data engineering and AI analytics roles
                </div>
                <div className="mt-3 text-slate-300">
                  $ send_signal --to {profile.email}<span className="typing-caret ml-1" />
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div variants={reveal} className="grid gap-6">
            <Card className="p-6">
              <div className="flex items-center gap-3 font-heading text-xl font-bold text-white">
                <MapPin className="h-5 w-5 text-gold" />
                Coordinates
              </div>
              <div className="mt-4 space-y-2 text-sm leading-7 text-slate-300">
                <p>{profile.location}</p>
                <p>{profile.email}</p>
                <p>{profile.phone}</p>
              </div>
            </Card>
            <Card className="p-6">
              <h3 className="font-heading text-xl font-bold text-white">Channels</h3>
              <div className="mt-4 grid gap-3">
                <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-slate-300 transition hover:border-cyan-200/35 hover:text-white">
                  <Linkedin className="h-4 w-4 text-cyan-200" />
                  LinkedIn
                </a>
                <a href={profile.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-slate-300 transition hover:border-cyan-200/35 hover:text-white">
                  <Github className="h-4 w-4 text-cyan-200" />
                  GitHub
                </a>
              </div>
            </Card>
            <Card className="p-6">
              <h3 className="font-heading text-xl font-bold text-white">Education</h3>
              <div className="mt-4 grid gap-4">
                {education.map((item) => (
                  <div key={item.degree} className="border-l border-cyan-200/25 pl-4">
                    <div className="font-semibold text-white">{item.degree}</div>
                    <div className="mt-1 text-sm text-slate-400">{item.school} · {item.period}</div>
                    <div className="mt-1 text-sm leading-6 text-slate-300">{item.detail}</div>
                  </div>
                ))}
              </div>
            </Card>
            <Card className="p-6">
              <h3 className="font-heading text-xl font-bold text-white">Signals</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {certifications.map((item) => (
                  <span key={item} className="rounded-md border border-white/10 bg-white/[0.055] px-3 py-2 text-xs text-slate-300">
                    {item}
                  </span>
                ))}
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
