import  React  from "react";
import { motion } from "motion/react";
import {
  Users,
  Award,
  Target,
  TrendingUp,
  Lightbulb,
  Shield,
} from "lucide-react";

const achievements = [
  {
    icon: Users,
    title: "Secretary",
    organization: "E-Cell SGGSIE&T",
    description:
      "Promoted entrepreneurship and organized student-focused innovation activities at the institute level",
    period: "2023 - 2024",
    color: "from-primary to-cyan-400",
  },
  {
    icon: Target,
    title: "Event Manager",
    organization: "PRAGYAA 2K24",
    description:
      "Managed planning and execution of the institute's flagship technical festival with multiple events and competitions",
    period: "2024",
    color: "from-secondary to-purple-400",
  },
  {
    icon: Award,
    title: "Assistant Web Developer",
    organization: "PRAGYAA 2K23",
    description:
      "Designed and developed the complete responsive website for the technical festival using modern web technologies",
    period: "2023",
    color: "from-cyan-400 to-primary",
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    organization: "Competitive Programming",
    description:
      "Active on LeetCode, GeeksForGeeks, and HackerRank, solving data structure and algorithm challenges",
    period: "2021 - Present",
    color: "from-purple-400 to-secondary",
  },
  {
    icon: TrendingUp,
    title: "Enterprise Developer",
    organization: "Siemens DISW Project",
    description:
      "Building scalable enterprise integration solutions for Siemens using React, .NET Core, and Azure",
    period: "2025 - Present",
    color: "from-primary to-secondary",
  },
  {
    icon: Shield,
    title: "Full-Stack Engineer",
    organization: "Connecticus Technologies",
    description:
      "Specialized in enterprise integrations, Microsoft Teams applications, and cloud-native architectures",
    period: "2025 - Present",
    color: "from-cyan-400 to-purple-400",
  },
];

export default function LeadershipWall() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Leadership Wall
          </h2>
          <p className="text-muted-foreground text-lg">
            Achievements and leadership positions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              <div className="h-full p-6 rounded-2xl bg-card/50 border border-border backdrop-blur-xl overflow-hidden transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-lg group-hover:shadow-primary/10">
                {/* Gradient overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${achievement.color} p-3 mb-4 shadow-lg shadow-primary/10 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <achievement.icon className="w-full h-full text-white" />
                  </div>

                  {/* Content */}
                  <div className="mb-3">
                    <h3 className="text-xl font-bold mb-1">
                      {achievement.title}
                    </h3>
                    <p className="text-sm text-primary">
                      {achievement.organization}
                    </p>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {achievement.description}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-border/50">
                    <span className="text-xs text-muted-foreground">
                      {achievement.period}
                    </span>
                    <div className="w-2 h-2 rounded-full bg-primary shadow-lg shadow-primary/50" />
                  </div>
                </div>

                {/* Glow effect */}
                <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-primary/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
