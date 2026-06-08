import  React  from "react";
import { motion } from "motion/react";
import { Code2, ExternalLink, Globe } from "lucide-react";

const projects = [
  {
    title: "Slack Data Search App",
    tech: ["Spring Boot", "OpenSearch", "Kubernetes", "Docker", "Debian Linux", "HTML"],
    description:
      "Internal enterprise search application that indexes and queries Slack data using a containerized OpenSearch service. Deployed on a 3-node Debian Kubernetes cluster, the Spring Boot backend with HTML frontend is architected to handle 200 concurrent users as per production requirements.",
    category: "Cloud / DevOps",
  },
  {
    title: "Ground Transport System",
    tech: ["Spring Boot", "React", "MySQL"],
    description:
      "Capstone project built using Agile methodologies, SOLID principles, and database design practices to create a scalable transportation management solution.",
    category: "Full-Stack",
  },
  {
    title: "PRAGYAA 2K23 Website",
    tech: ["Tailwind CSS", "HTML", "JavaScript"],
    description:
      "Developed a responsive technical festival website with interactive sections including Home, About, Schedule, and Gallery.",
    category: "Frontend",
  },
  {
    title: "Sign Language Animator",
    tech: ["Django", "Python", "Machine Learning"],
    description:
      "Application converting text and audio input into sign language animations to assist deaf individuals.",
    category: "Web Application",
  },
  {
    title: "LiFi Based Data Transfer System",
    tech: ["Arduino C", "Microcontrollers", "LED/LDR"],
    description:
      "Implemented LED and LDR-based communication system for wireless text transmission using light fidelity technology.",
    category: "IoT",
  },
];

export default function ProjectsSection() {
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
            Additional Projects
          </h2>
          <p className="text-muted-foreground text-lg">
            Academic and personal development projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -4 }}
              className="group relative"
            >
              <div className="h-full p-6 rounded-2xl bg-card/50 border border-border backdrop-blur-xl hover:border-primary/50 transition-all duration-300">
                {/* Category badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 mb-4">
                  <Code2 className="w-3 h-3 text-primary" />
                  <span className="text-xs text-primary font-medium">
                    {project.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 rounded-md bg-muted/50 border border-border text-xs text-foreground/70"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Hover glow */}
                <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-primary/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16"
        >
          <h3 className="text-3xl font-bold mb-8 text-center">Education</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                degree: "B.Tech Information Technology",
                institution:
                  "Shri Guru Gobind Singhji Institute of Engineering and Technology",
                period: "2021 - 2025",
                grade: "CGPA: 8.64/10",
              },
              {
                degree: "Higher Secondary Education",
                institution: "HSC Board",
                period: "2021",
                grade: "94.50%",
              },
              {
                degree: "Secondary School Education",
                institution: "SSC Board",
                period: "2019",
                grade: "90.40%",
              },
            ].map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.5, duration: 0.6 }}
                className="p-6 rounded-2xl bg-card/50 border border-border backdrop-blur-xl hover:border-primary/50 transition-all duration-300"
              >
                <div className="mb-3">
                  <h4 className="font-bold text-lg mb-1">{edu.degree}</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    {edu.institution}
                  </p>
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-border/50">
                  <span className="text-xs text-muted-foreground">
                    {edu.period}
                  </span>
                  <span className="text-sm font-bold text-primary">
                    {edu.grade}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
