import { React } from "react";
import { motion } from "motion/react";
import HeroSection from "./components/HeroSection";
import MissionControl from "./components/MissionControl";
import ExperienceTimeline from "./components/ExperienceTimeline";
import ArchitectureShowcase from "./components/ArchitectureShowcase";
import SkillsMatrix from "./components/SkillsMatrix";
import ProjectsSection from "./components/ProjectsSection";
import GitHubCommandCenter from "./components/GitHubCommandCenter";
import LeadershipWall from "./components/LeadershipWall";
import AwardsSection from "./components/AwardsSection";
import ContactTerminal from "./components/ContactTerminal";

export default function App() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        <HeroSection />
        <MissionControl />
        <ExperienceTimeline />
        <ArchitectureShowcase />
        <SkillsMatrix />
        <ProjectsSection />
        <GitHubCommandCenter />
        <LeadershipWall />
        <AwardsSection />
        <ContactTerminal />

        {/* Footer */}
        <footer className="py-8 border-t border-border/30">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="text-muted-foreground text-sm">
              © 2026 Amey Ananta Pande. Built with React, .NET Core & Azure.
            </p>
            <p className="text-muted-foreground text-xs mt-2">
              Software Engineer @ Connecticus Technologies | Siemens DISW
            </p>
          </div>
        </footer>
      </motion.div>
    </div>
  );
}
