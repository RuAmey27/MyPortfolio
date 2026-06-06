import  React  from "react";
import { motion } from "motion/react";
import { Briefcase, Code, Trophy, Target } from "lucide-react";

const cards = [
  {
    icon: Briefcase,
    title: "Current Role",
    value: "Software",
    unit: "Engineer",
    description: "Connecticus Technologies",
    color: "from-primary to-cyan-400",
  },
  {
    icon: Code,
    title: "Experience",
    value: "1.5+",
    unit: "Years",
    description: "Enterprise integrations",
    color: "from-secondary to-purple-400",
  },
  {
    icon: Trophy,
    title: "CGPA",
    value: "8.64",
    unit: "/10",
    description: "B.Tech Information Technology",
    color: "from-primary to-secondary",
  },
  {
    icon: Target,
    title: "Featured Project",
    value: "Polarion",
    unit: "Teams",
    description: "Siemens DISW Integration",
    color: "from-cyan-400 to-primary",
  },
];

export default function MissionControl() {
  return (
    <section id="mission-control" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Mission Control Dashboard
          </h2>
          <p className="text-muted-foreground text-lg">
            Real-time engineering metrics
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              <div className="relative h-full p-6 rounded-2xl bg-card/50 border border-border backdrop-blur-xl overflow-hidden transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-lg group-hover:shadow-primary/20">
                {/* Gradient overlay on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />

                <div className="relative z-10">
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${card.color} p-2.5 mb-4 shadow-lg shadow-primary/20`}
                  >
                    <card.icon className="w-full h-full text-white" />
                  </div>

                  <h3 className="text-sm text-muted-foreground mb-2">
                    {card.title}
                  </h3>

                  <div className="mb-1">
                    <span
                      className={`text-4xl font-bold bg-gradient-to-r ${card.color} bg-clip-text text-transparent`}
                    >
                      {card.value}
                    </span>
                    <span className="text-lg text-foreground/70 ml-2">
                      {card.unit}
                    </span>
                  </div>

                  <p className="text-sm text-muted-foreground">
                    {card.description}
                  </p>
                </div>

                {/* Glow effect */}
                <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-primary/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
