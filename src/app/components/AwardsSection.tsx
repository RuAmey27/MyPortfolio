import { React } from "react";
import { motion } from "motion/react";
import {
  Trophy,
  Star,
  Zap,
  Crown,
  Medal,
  Award,
  Users,
  Lightbulb,
} from "lucide-react";

const awards = [
  {
    icon: Trophy,
    title: "Best Team Work Award",
    year: "2025",
    organization: "Connecticus Technologies Pvt. Ltd.",
    description: "Exceptional teamwork and collaboration",
    color: "from-yellow-400 to-primary",
  },
  {
    icon: Users,
    title: "Cross-Functional Excellence",
    year: "2025",
    organization: "Siemens DISW Project",
    description: "Outstanding cross-functional collaboration",
    color: "from-primary to-secondary",
  },
  {
    icon: Star,
    title: "Enterprise Delivery",
    year: "2025",
    organization: "Polarion-Teams Integration",
    description: "Successful enterprise project delivery",
    color: "from-secondary to-purple-400",
  },
  {
    icon: Zap,
    title: "Team Coordination",
    year: "2025",
    organization: "Frontend & Backend Teams",
    description: "Seamless coordination across teams",
    color: "from-purple-400 to-primary",
  },
  {
    icon: Award,
    title: "Academic Excellence",
    year: "2025",
    organization: "SGGSIE&T",
    description: "Graduated with 8.64 CGPA",
    color: "from-cyan-400 to-primary",
  },
  {
    icon: Crown,
    title: "Higher Secondary",
    year: "2021",
    organization: "Academic Achievement",
    description: "Scored 94.50% in HSC",
    color: "from-primary to-cyan-400",
  },
  {
    icon: Medal,
    title: "Secondary School",
    year: "2019",
    organization: "Academic Achievement",
    description: "Scored 90.40% in SSC",
    color: "from-secondary to-purple-400",
  },
  {
    icon: Lightbulb,
    title: "Innovation Leader",
    year: "2024",
    organization: "E-Cell Secretary",
    description: "Led entrepreneurship initiatives",
    color: "from-purple-400 to-cyan-400",
  },
];

export default function AwardsSection() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-transparent via-muted/5 to-transparent">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Awards & Recognition
          </h2>
          <p className="text-muted-foreground text-lg">
            Celebrating excellence and achievement
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.6 }}
              whileHover={{
                y: -12,
                rotateY: 5,
                rotateX: 5,
                scale: 1.05,
              }}
              style={{ transformStyle: "preserve-3d" }}
              className="group relative cursor-pointer"
            >
              <div className="h-full p-6 rounded-2xl bg-card/50 border border-border backdrop-blur-xl overflow-hidden transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-2xl group-hover:shadow-primary/20">
                {/* 3D floating effect background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${award.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                {/* Animated glow rings */}
                <motion.div
                  className="absolute -inset-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle, transparent 60%, rgba(0, 229, 255, 0.1) 100%)`,
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                <div className="relative z-10 flex flex-col items-center text-center">
                  {/* Trophy Icon with 3D effect */}
                  <motion.div
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${award.color} p-4 mb-4 shadow-2xl shadow-primary/30`}
                    whileHover={{ rotateY: 360 }}
                    transition={{ duration: 0.8 }}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <award.icon className="w-full h-full text-white drop-shadow-lg" />
                  </motion.div>

                  {/* Year badge */}
                  <div className="mb-3 px-3 py-1 rounded-full bg-primary/10 border border-primary/30">
                    <span className="text-sm font-bold text-primary">
                      {award.year}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold mb-2 leading-tight">
                    {award.title}
                  </h3>

                  {/* Organization */}
                  <p className="text-xs text-primary mb-3">
                    {award.organization}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {award.description}
                  </p>
                </div>

                {/* Bottom glow effect */}
                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Floating particles effect */}
                <motion.div
                  className="absolute top-4 right-4 w-2 h-2 rounded-full bg-primary/50 blur-sm"
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
