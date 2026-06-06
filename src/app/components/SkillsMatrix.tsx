import  React  from "react";
import { motion } from "motion/react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

const skillsData = [
  { skill: "React", value: 3, fullMark: 5 },
  { skill: ".NET Core", value: 4.5, fullMark: 5 },
  { skill: "Azure", value: 3, fullMark: 5 },
  { skill: "Java", value: 4.5, fullMark: 5 },
  { skill: "C#", value: 4.5, fullMark: 5 },
  { skill: "SQL", value: 4, fullMark: 5 },
];

const skillsList = [
  { category: "Languages", skills: ["Java", "C#", "C", "SQL", "JavaScript"] },
  {
    category: "Frameworks",
    skills: ["React", ".NET Core", "Spring Boot", "Fluent UI", "TeamsFx SDK"],
  },
  {
    category: "Cloud & DevOps",
    skills: ["Azure Event Hubs", "Terraform", "Docker", "AWS", "Git", "OAuth2"],
  },
  { category: "Databases", skills: ["MySQL", "SQL Server"] },
  {
    category: "Concepts",
    skills: [
      "Event-Driven Architecture",
      "Microservices",
      "System Design",
      "OOP",
      "Data Structures",
    ],
  },
];

export default function SkillsMatrix() {
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills Matrix</h2>
          <p className="text-muted-foreground text-lg">
            Technical expertise across the stack
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Radar Chart */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-2xl bg-card/50 border border-border backdrop-blur-xl"
          >
            <ResponsiveContainer width="100%" height={400}>
              <RadarChart data={skillsData}>
                <PolarGrid stroke="rgba(0, 229, 255, 0.2)" />
                <PolarAngleAxis
                  dataKey="skill"
                  tick={{ fill: "rgba(255, 255, 255, 0.7)", fontSize: 14 }}
                />
                <PolarRadiusAxis
                  angle={90}
                  domain={[0, 5]}
                  tickCount={6}
                  tick={{ fill: "rgba(255, 255, 255, 0.5)", fontSize: 11 }}
                />
                <Radar
                  name="Proficiency"
                  dataKey="value"
                  stroke="#00E5FF"
                  fill="#00E5FF"
                  fillOpacity={0.3}
                  strokeWidth={2}
                  isAnimationActive={true}
                />
              </RadarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Skills List */}
          <div className="space-y-5">
            {skillsList.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 + 0.2, duration: 0.6 }}
                className="p-5 rounded-2xl bg-card/50 border border-border backdrop-blur-xl hover:border-primary/50 transition-all duration-300"
              >
                <h3 className="text-sm font-bold mb-2.5 text-primary">{category.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-lg bg-muted/50 border border-border text-xs text-foreground/80 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
