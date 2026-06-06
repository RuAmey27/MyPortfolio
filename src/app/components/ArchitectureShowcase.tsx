import  React  from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  Database,
  Cloud,
  MessageSquare,
  Workflow,
} from "lucide-react";

const nodes = [
  {
    id: "teams",
    label: "Microsoft Teams",
    icon: MessageSquare,
    color: "from-purple-400 to-primary",
  },
  {
    id: "middleware",
    label: "Middleware",
    icon: Workflow,
    color: "from-secondary to-purple-400",
  },
  {
    id: "eventhub",
    label: "Azure Event Hub",
    icon: Cloud,
    color: "from-primary to-secondary",
  },
  {
    id: "polarion",
    label: "Polarion",
    icon: Database,
    color: "from-cyan-400 to-primary",
  },
];

export default function ArchitectureShowcase() {
  return (
    <section
      id="architecture"
      className="py-24 px-6 bg-gradient-to-b from-transparent via-muted/5 to-transparent"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Polarion–Microsoft Teams Integration
          </h2>
          <p className="text-muted-foreground text-lg">
            Enterprise-grade integration for Siemens DISW
          </p>
        </motion.div>

        {/* Desktop/Tablet View */}
        <div className="hidden md:flex items-center justify-between gap-4 mb-8">
          {nodes.map((node, index) => (
            <div key={node.id} className="flex items-center gap-4 flex-1">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -8 }}
                className="flex-1"
              >
                <div
                  className={`p-6 rounded-2xl bg-gradient-to-br ${node.color} relative overflow-hidden group cursor-pointer`}
                >
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

                  <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-xl bg-white/10 backdrop-blur-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <node.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white">
                      {node.label}
                    </h3>
                  </div>

                  {/* Glow effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 bg-white/5 backdrop-blur-sm" />
                  </div>
                </div>
              </motion.div>

              {index < nodes.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.3, duration: 0.6 }}
                  className="flex items-center"
                >
                  <ArrowRight className="w-8 h-8 text-primary" />
                </motion.div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile View */}
        <div className="md:hidden space-y-4">
          {nodes.map((node, index) => (
            <div key={node.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="relative"
              >
                <div
                  className={`p-6 rounded-2xl bg-gradient-to-br ${node.color} relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

                  <div className="relative z-10 flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-white/10 backdrop-blur-xl flex items-center justify-center">
                      <node.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white">
                      {node.label}
                    </h3>
                  </div>
                </div>
              </motion.div>

              {index < nodes.length - 1 && (
                <div className="flex justify-center py-2">
                  <ArrowRight className="w-6 h-6 text-primary rotate-90" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-12 p-6 rounded-2xl bg-card/50 border border-border backdrop-blur-xl"
        >
          <h4 className="text-xl font-bold mb-3">
            Integration Pipeline Overview
          </h4>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Enterprise-grade integration connecting Siemens Polarion ALM with
            Microsoft Teams for collaboration, notifications, work item
            management, and workflow automation. Built with event-driven
            architecture using Azure Event Hubs and .NET Core middleware.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "React",
              "Fluent UI",
              ".NET Core",
              "Azure Event Hubs",
              "OAuth2",
              "SSO",
              "Teams Bot",
              "Java Plugin",
            ].map((tech) => (
              <div
                key={tech}
                className="px-3 py-2 rounded-lg bg-muted/50 border border-border text-sm text-center text-foreground/80"
              >
                {tech}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
