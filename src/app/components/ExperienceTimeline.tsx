import  React  from "react";
import { motion } from "motion/react";
import { Calendar, Building2 } from "lucide-react";

const experiences = [
  {
    role: "Software Engineer",
    company: "Connecticus Technologies Pvt. Ltd.",
    client: "Siemens DISW",
    period: "January 2026 - Present",
    description:
      "Leading development of full-stack enterprise integration between Polarion ALM and Microsoft Teams.",
    highlights: [
      "Designing event-driven architecture using Azure Event Hubs and .NET Core middleware",
      "Enhancing Teams application UI using React, Fluent UI, and TeamsFx SDK",
      "Implementing OAuth2 and SSO authentication for secure enterprise access",
      "Developing Teams Bot capabilities and workflow automation",
      "Handling production issues and deployment readiness",
    ],
  },
  {
    role: "Graduate Trainee Engineer",
    company: "Connecticus Technologies Pvt. Ltd.",
    client: "Siemens DISW",
    period: "July 2025 - December 2025",
    description:
      "Contributed to Polarion-Microsoft Teams integration project with focus on middleware and Teams UI development.",
    highlights: [
      "Built .NET Core middleware for event processing from Azure Event Hubs",
      "Developed Teams UI components using React and Fluent UI",
      "Integrated Teams Single Sign-On for seamless authentication",
      "Collaborated with cross-functional teams on enterprise delivery",
    ],
  },
  {
    role: "Software Engineering Intern",
    company: "Connecticus Technologies Pvt. Ltd.",
    client: "Siemens DISW",
    period: "January 2025 - June 2025",
    description:
      "Started journey in enterprise software development working on Polarion-Teams integration project.",
    highlights: [
      "Developed Polarion plugin publishing events to Azure Event Hubs",
      "Learned React, .NET Core, and Azure cloud services",
      "Participated in agile development cycles and code reviews",
      "Gained experience in enterprise collaboration workflows",
    ],
  },
];

export default function ExperienceTimeline() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Experience Timeline
          </h2>
          <p className="text-muted-foreground text-lg">
            Professional journey in software engineering
          </p>
        </motion.div>

        <div className="relative">
          {/* Animated connection line - left aligned on all screens */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary/20" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="relative pl-12 md:pl-20"
              >
                {/* Timeline node */}
                <div className="absolute left-4 md:left-8 top-6 -translate-x-1/2 z-10">
                  <motion.div
                    className="w-4 h-4 rounded-full bg-primary shadow-lg shadow-primary/50"
                    animate={{
                      boxShadow: [
                        "0 0 20px rgba(0, 229, 255, 0.5)",
                        "0 0 40px rgba(0, 229, 255, 0.8)",
                        "0 0 20px rgba(0, 229, 255, 0.5)",
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>

                {/* Content card */}
                <motion.div
                  whileHover={{ y: -4, scale: 1.01 }}
                  className="p-6 md:p-8 rounded-2xl bg-card/50 border border-border backdrop-blur-xl hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
                >
                  {/* Header with period */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4 pb-4 border-b border-border/50">
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold mb-2 text-foreground">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 text-muted-foreground mb-1">
                        <Building2 className="w-4 h-4" />
                        <span className="text-sm md:text-base">
                          {exp.company}
                        </span>
                      </div>
                      {"client" in exp && (
                        <p className="text-primary text-sm md:text-base font-medium">
                          Client: {exp.client}
                        </p>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-primary shrink-0">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm md:text-base font-medium">
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-foreground/80 mb-5 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-2.5">
                    {exp.highlights.map((highlight, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm md:text-base text-muted-foreground"
                      >
                        <span className="text-primary mt-1 text-lg">▹</span>
                        <span className="leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
