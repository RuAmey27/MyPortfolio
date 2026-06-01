import { React } from "react";
import { motion } from "motion/react";
import { Download, Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Animated Glowing Orb */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="relative w-[400px] h-[400px] lg:w-[600px] lg:h-[600px]">
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-[80px] opacity-30" />
          <div className="absolute inset-[20%] bg-gradient-to-br from-primary/50 to-secondary/50 rounded-full blur-[60px]" />
          <motion.div
            className="absolute inset-[35%] bg-primary rounded-full blur-[40px]"
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted border border-border/50 mb-6 backdrop-blur-xl"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">
              Available for opportunities
            </span>
          </motion.div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-foreground via-primary to-secondary bg-clip-text text-transparent">
              Amey Ananta Pande
            </span>
          </h1>

          <p className="text-2xl md:text-3xl lg:text-4xl mb-4 text-foreground/90">
            Software Engineer
          </p>

          <p className="text-base md:text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
            Building scalable enterprise software solutions connecting Siemens
            Polarion ALM with Microsoft Teams through cloud-native architectures
          </p>

          <div className="flex items-center justify-center gap-3 mb-12 flex-wrap">
            {["React", ".NET Core", "Azure", "Microsoft Teams"].map(
              (tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="px-4 py-2 rounded-lg bg-card/50 border border-border backdrop-blur-xl text-foreground/80"
                >
                  {tech}
                </motion.span>
              ),
            )}
          </div>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(0, 229, 255, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-xl bg-primary text-primary-foreground font-medium shadow-lg shadow-primary/30 transition-all"
              onClick={() =>
                document
                  .getElementById("architecture")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View Projects
            </motion.button>

            <motion.button
              whileHover={{
                scale: 1.05,
                borderColor: "rgba(0, 229, 255, 0.6)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-xl bg-card/50 border border-border backdrop-blur-xl text-foreground font-medium flex items-center gap-2 transition-all"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Contact Me
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
          <motion.div
            className="w-1.5 h-1.5 bg-primary rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
