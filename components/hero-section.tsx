"use client";

import { useEffect, useRef } from "react";
import {
  Anchor,
  ArrowDown,
  BrainCircuit,
  Cloud,
  Code2,
  Database,
  Download,
  Mail,
  Map,
  Sailboat,
  Sparkles,
  Trophy
} from "lucide-react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { highlights, profile } from "@/data/portfolio";
import { Badge, MagneticButton, cinematicReveal, reveal, stagger } from "@/components/ui";

function FloatingCompass() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7, rotate: -24 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 1.1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="intro-compass absolute right-4 top-28 hidden h-40 w-40 rounded-full border border-gold/30 bg-abyss/30 p-4 shadow-gold backdrop-blur-xl md:block lg:right-16 lg:top-36"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        className="compass-conic grid h-full w-full place-items-center rounded-full"
      >
        <div className="grid h-20 w-20 place-items-center rounded-full border border-white/20 bg-white/10">
          <Map className="h-8 w-8 text-gold" />
        </div>
      </motion.div>
    </motion.div>
  );
}

function ShipSilhouette() {
  return (
    <motion.div
      aria-hidden
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 0.72, y: 0 }}
      transition={{ duration: 1.2, delay: 1 }}
      className="intro-ship absolute bottom-24 left-1/2 h-28 w-72 -translate-x-1/2 animate-drift md:bottom-20 md:w-96 lg:left-[72%]"
    >
      <div className="absolute left-1/2 top-2 h-20 w-1 -translate-x-1/2 bg-white/28" />
      <div className="absolute left-[48%] top-3 h-0 w-0 border-y-[34px] border-l-[62px] border-y-transparent border-l-white/18" />
      <div className="absolute left-[31%] top-9 h-0 w-0 border-y-[22px] border-r-[48px] border-y-transparent border-r-cyan-200/16" />
      <div className="absolute bottom-3 left-1/2 h-10 w-64 -translate-x-1/2 rounded-b-[60px] rounded-t-lg bg-black/50 shadow-[0_22px_80px_rgba(14,165,233,.22)] md:w-80" />
      <Sailboat className="absolute left-1/2 top-8 h-20 w-20 -translate-x-1/2 text-cyan-100/30" />
    </motion.div>
  );
}

function BountyPoster() {
  return (
    <motion.div
      initial={{ opacity: 0, rotate: 6, y: 34 }}
      animate={{ opacity: 1, rotate: -2, y: 0 }}
      transition={{ duration: 1.1, delay: 1.15, ease: [0.22, 1, 0.36, 1] }}
      className="intro-poster wanted-paper absolute bottom-20 right-10 hidden w-72 overflow-hidden rounded-lg p-5 xl:block"
    >
      <div className="relative z-10 text-center">
        <div className="font-heading text-3xl font-black tracking-[0.12em]">WANTED</div>
        <div className="mx-auto mt-4 grid h-28 w-28 place-items-center rounded-full border-2 border-[#21120a]/45 bg-[#21120a]/10">
          <Trophy className="h-12 w-12" />
        </div>
        <div className="mt-4 font-heading text-xl font-black uppercase">Siddhardha Ravi</div>
        <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em]">AI/ML Data Engineer</div>
        <div className="mt-4 rounded-md border border-[#21120a]/25 bg-[#21120a]/10 px-3 py-2 font-heading text-2xl font-black">
          542.9M
        </div>
        <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em]">impact bounty</div>
      </div>
    </motion.div>
  );
}

const navItems = [
  { href: "#about", label: "Captain" },
  { href: "#experience", label: "Voyage" },
  { href: "#skills", label: "Arsenal" },
  { href: "#projects", label: "Adventures" },
  { href: "#contact", label: "Transmissions" }
];

const orbitIcons = [
  { Icon: BrainCircuit, label: "AI", className: "left-[12%] top-[18%] orbit-float-a" },
  { Icon: Database, label: "Data", className: "right-[12%] top-[24%] orbit-float-b" },
  { Icon: Cloud, label: "Cloud", className: "left-[18%] bottom-[30%] orbit-float-c" },
  { Icon: Code2, label: "Code", className: "right-[18%] bottom-[34%] orbit-float-a" }
];

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = heroRef.current;
    if (!root || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const context = gsap.context(() => {
      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .from(".intro-horizon", { opacity: 0, scaleX: 0.55, duration: 0.9 }, 0)
        .from(".intro-compass", { opacity: 0, scale: 0.72, rotate: -24, duration: 0.9 }, 0.18)
        .from(".intro-ship", { opacity: 0, y: 30, duration: 1.1 }, 0.28)
        .from(".intro-poster", { opacity: 0, y: 30, rotate: 5, duration: 0.85 }, 0.95);
    }, root);

    return () => context.revert();
  }, []);

  return (
    <section ref={heroRef} id="top" className="relative min-h-screen overflow-hidden pb-20 pt-8">
      <div aria-hidden className="manga-speed-lines pointer-events-none absolute inset-0 z-[1] opacity-[0.14]" />
      <div aria-hidden className="intro-horizon pointer-events-none absolute left-1/2 top-[32%] z-[1] h-px w-[86%] -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-200/50 to-transparent shadow-[0_0_60px_rgba(6,182,212,.45)]" />
      <div
        aria-hidden
        className="series-wordmark pointer-events-none absolute left-1/2 top-28 z-[1] hidden -translate-x-1/2 whitespace-nowrap font-heading text-[10rem] font-black uppercase leading-none tracking-normal opacity-70 lg:block"
      >
        Voyage
      </div>
      <FloatingCompass />
      <ShipSilhouette />
      <BountyPoster />
      <motion.nav
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75 }}
        className="fixed left-1/2 top-4 z-50 flex w-[min(1180px,calc(100%_-_32px))] -translate-x-1/2 items-center justify-between rounded-lg border border-white/10 bg-slate-950/55 px-4 py-3 shadow-[0_18px_70px_rgba(2,6,23,.36)] backdrop-blur-xl"
      >
        <a href="#top" className="flex items-center gap-2 font-heading text-sm font-bold tracking-[0.22em] text-white">
          <Anchor className="h-4 w-4 text-gold" />
          SR
        </a>
        <div className="hidden items-center gap-5 font-mono text-[11px] uppercase tracking-[0.18em] text-slate-300 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="nav-link transition hover:text-cyan-200">
              {item.label}
            </a>
          ))}
        </div>
        <a
          href={`mailto:${profile.email}`}
          className="rounded-lg border border-gold/30 px-3 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-gold transition hover:bg-gold/10"
        >
          Contact
        </a>
      </motion.nav>

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="section-shell relative z-10 grid min-h-[calc(100vh-72px)] items-center gap-12 pt-20 lg:grid-cols-[0.95fr_1.05fr]"
      >
        <div>
          <motion.div variants={reveal} className="intro-copy">
            <Badge className="mb-6 gap-2">
              <Sparkles className="h-3.5 w-3.5 text-gold" />
              Grand Line Developer Journey
            </Badge>
          </motion.div>

          <motion.div variants={reveal} className="intro-copy anime-frame mb-5 rounded-lg px-4 py-3">
            <div className="relative z-10 font-mono text-[11px] uppercase tracking-[0.24em] text-gold">
              Episode 01
            </div>
            <div className="relative z-10 mt-1 font-heading text-lg font-bold text-white md:text-2xl">
              Navigating the Grand Line of Technology
            </div>
          </motion.div>

          <motion.h1
            variants={cinematicReveal}
            className="intro-copy anime-title max-w-5xl font-heading text-5xl font-bold leading-[0.94] tracking-normal text-white sm:text-7xl lg:text-8xl"
          >
            {profile.name}
          </motion.h1>

          <motion.div
            variants={reveal}
            className="intro-copy poster-ribbon mt-5 flex min-h-10 max-w-full items-center rounded-lg px-3 py-2 font-mono text-xs font-bold uppercase tracking-[0.12em] text-cyan-100 md:text-base md:tracking-[0.22em]"
          >
            <span className="max-w-full whitespace-normal pr-2 leading-7 sm:whitespace-nowrap">
              {profile.role}
            </span>
            <span aria-hidden className="typing-caret h-5" />
          </motion.div>

          <motion.p
            variants={reveal}
            className="intro-copy mt-7 max-w-2xl text-balance text-lg leading-8 text-slate-300 md:text-xl"
          >
            {profile.tagline} I build pipelines, AI evaluation systems, and analytics products with the precision of engineering and the momentum of story.
          </motion.p>

          <motion.div variants={reveal} className="intro-copy mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <MagneticButton href="#about" className="bg-cyan-300/12">
              <ArrowDown className="h-4 w-4" />
              Explore Journey
            </MagneticButton>
            <MagneticButton href="#projects">
              <Sparkles className="h-4 w-4" />
              View Projects
            </MagneticButton>
            <MagneticButton href={profile.resumeFile} download>
              <Download className="h-4 w-4" />
              Download Resume
            </MagneticButton>
          </motion.div>
        </div>

        <motion.div variants={reveal} className="intro-copy relative min-h-[420px] lg:min-h-[560px]">
          <div className="absolute inset-0 rounded-[28px] border border-white/10 bg-white/[0.035] shadow-[0_30px_120px_rgba(2,6,23,.42)] backdrop-blur-md" />
          <div aria-hidden className="absolute inset-4 overflow-hidden rounded-[22px] border border-cyan-200/10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(6,182,212,.22),transparent_32%),linear-gradient(180deg,rgba(15,23,42,.2),rgba(2,6,23,.88))]" />
            <div className="anime-impact-burst absolute inset-0 opacity-30" />
            <div className="absolute inset-x-0 top-[48%] h-px bg-gradient-to-r from-transparent via-cyan-100/50 to-transparent shadow-[0_0_42px_rgba(6,182,212,.55)]" />
            <div className="absolute bottom-[-32px] left-[-12%] h-36 w-[124%] rounded-[50%] border-t border-cyan-200/25 bg-cyan-400/10 blur-sm animate-wave" />
            <div className="absolute bottom-[-46px] left-[-8%] h-40 w-[116%] rounded-[50%] border-t border-gold/15 bg-blue-500/10 blur-md animate-wave [animation-delay:-4s]" />
            <div className="absolute left-1/2 top-[45%] h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-200/15" />
            <div className="absolute left-1/2 top-[45%] h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold/15" />
            {orbitIcons.map(({ Icon, label, className }) => (
              <div
                key={label}
                className={`absolute grid h-16 w-16 place-items-center rounded-full border border-white/15 bg-black/25 text-cyan-100 shadow-glow backdrop-blur ${className}`}
              >
                <Icon className="h-6 w-6" />
                <span className="sr-only">{label}</span>
              </div>
            ))}
            <div className="absolute left-1/2 top-[50%] h-32 w-1 -translate-x-1/2 bg-white/30" />
            <div className="absolute left-[47%] top-[51%] h-0 w-0 border-y-[46px] border-l-[82px] border-y-transparent border-l-white/20" />
            <div className="absolute left-[31%] top-[57%] h-0 w-0 border-y-[28px] border-r-[66px] border-y-transparent border-r-cyan-200/18" />
            <div className="absolute bottom-[98px] left-1/2 h-14 w-[72%] -translate-x-1/2 rounded-b-[70px] rounded-t-lg bg-black/55 shadow-[0_28px_90px_rgba(14,165,233,.24)]" />
            <Sailboat className="absolute left-1/2 top-[54%] h-24 w-24 -translate-x-1/2 text-cyan-100/35" />
            <Map className="absolute right-8 top-8 h-9 w-9 text-gold/70" />
          </div>
          <div className="relative z-10 flex h-full min-h-[420px] flex-col justify-end p-6 lg:min-h-[560px] lg:p-8">
            <div className="grid gap-3 sm:grid-cols-2">
              {highlights.slice(0, 4).map((item, index) => (
                <div key={item.label} className="rounded-lg border border-white/10 bg-black/20 p-4 backdrop-blur">
                  <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-cyan-100/70">
                    Signal {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="mt-1 font-heading text-2xl font-black text-gold">{item.value}</div>
                  <div className="mt-1 line-clamp-2 text-xs leading-5 text-slate-300">{item.label}</div>
                </div>
              ))}
            </div>
            <a
              href={`mailto:${profile.email}`}
              className="mt-4 inline-flex items-center gap-2 self-start rounded-lg border border-cyan-200/20 bg-cyan-300/10 px-3 py-2 font-mono text-[11px] uppercase tracking-[0.16em] text-cyan-100 transition hover:bg-cyan-300/15"
            >
              <Mail className="h-3.5 w-3.5" />
              Open transmission
            </a>
          </div>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-40 overflow-hidden">
        <div className="absolute bottom-[-40px] left-[-10%] h-28 w-[120%] rounded-[50%] border-t border-cyan-200/20 bg-cyan-400/10 blur-sm animate-wave" />
        <div className="absolute bottom-[-52px] left-[-8%] h-32 w-[116%] rounded-[50%] border-t border-gold/10 bg-blue-500/10 blur-md animate-wave [animation-delay:-4s]" />
      </div>
    </section>
  );
}
