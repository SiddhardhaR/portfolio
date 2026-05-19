"use client";

import { AboutSection } from "@/components/about-section";
import { BackgroundScene } from "@/components/background-scene";
import { CustomCursor } from "@/components/custom-cursor";
import { CinematicScrollEffects } from "@/components/cinematic-scroll-effects";
import { ExperienceSection } from "@/components/experience-section";
import { HeroSection } from "@/components/hero-section";
import { ProjectsSection } from "@/components/projects-section";
import { ScrollCompass } from "@/components/scroll-compass";
import { SkillsSection } from "@/components/skills-section";
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider";
import { FinalSection } from "@/components/final-section";

export default function Home() {
  return (
    <SmoothScrollProvider>
      <main className="relative min-h-screen overflow-hidden bg-abyss">
        <BackgroundScene />
        <CinematicScrollEffects />
        <CustomCursor />
        <ScrollCompass />
        <div className="noise" />
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <FinalSection />
      </main>
    </SmoothScrollProvider>
  );
}
