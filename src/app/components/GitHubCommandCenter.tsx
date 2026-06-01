import { React } from "react";
import { motion } from "motion/react";
import { Terminal, GitBranch, Star, GitPullRequest, Users } from "lucide-react";
import { useState, useEffect } from "react";

const stats = [
  {
    icon: GitBranch,
    label: "Repositories",
    value: "25+",
    color: "text-primary",
  },
  { icon: Star, label: "Projects", value: "8+", color: "text-secondary" },
  {
    icon: GitPullRequest,
    label: "Contributions",
    value: "500+",
    color: "text-cyan-400",
  },
  { icon: Users, label: "Active", value: "Daily", color: "text-purple-400" },
];

export default function GitHubCommandCenter() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

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
            GitHub Command Center
          </h2>
          <p className="text-muted-foreground text-lg">
            Development activity and contributions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Terminal Widget */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 p-6 rounded-2xl bg-black/80 border border-primary/30 backdrop-blur-xl font-mono text-sm overflow-hidden"
          >
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-primary/20">
              <Terminal className="w-4 h-4 text-primary" />
              <span className="text-primary">amey@RuAmey27:~$</span>
              <span className="text-muted-foreground">git log --oneline</span>
            </div>

            <div className="space-y-2 text-foreground/80">
              <p className="text-green-400">GitHub: github.com/RuAmey27</p>
              <p className="text-foreground/60">
                Active developer focused on enterprise solutions
              </p>
              <p className="mt-4 text-primary">Recent activity:</p>

              {[
                {
                  hash: "f8a9c2d",
                  msg: "feat: Teams Bot workflow automation",
                  time: "1 day ago",
                },
                {
                  hash: "e7b1d3c",
                  msg: "fix: OAuth2 token refresh logic",
                  time: "3 days ago",
                },
                {
                  hash: "c6d4a8e",
                  msg: "refactor: Event Hub middleware optimization",
                  time: "5 days ago",
                },
                {
                  hash: "b5e2f7a",
                  msg: "docs: Polarion integration architecture",
                  time: "1 week ago",
                },
              ].map((commit, index) => (
                <motion.div
                  key={commit.hash}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="pl-4 border-l-2 border-primary/30 hover:border-primary/60 transition-colors"
                >
                  <p>
                    <span className="text-primary">{commit.hash}</span>
                    <span className="text-muted-foreground mx-2">-</span>
                    <span className="text-foreground/70">{commit.msg}</span>
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {commit.time}
                  </p>
                </motion.div>
              ))}

              <div className="mt-6 pt-4 border-t border-primary/20">
                <p className="text-foreground/60">
                  <span className="text-primary animate-pulse">▸</span> Ready
                  for next command
                </p>
              </div>
            </div>
          </motion.div>

          {/* Stats Panel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-4"
          >
            {/* Time Widget */}
            <div className="p-6 rounded-2xl bg-card/50 border border-border backdrop-blur-xl">
              <p className="text-sm text-muted-foreground mb-2">System Time</p>
              <p className="text-2xl font-bold font-mono text-primary">
                {currentTime.toLocaleTimeString("en-US", { hour12: false })}
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                {currentTime.toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>

            {/* GitHub Stats */}
            <div className="p-6 rounded-2xl bg-card/50 border border-border backdrop-blur-xl">
              <h3 className="text-sm text-muted-foreground mb-4">
                GitHub Stats
              </h3>
              <div className="space-y-3">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.4 }}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center gap-2">
                      <stat.icon className={`w-4 h-4 ${stat.color}`} />
                      <span className="text-sm text-foreground/70">
                        {stat.label}
                      </span>
                    </div>
                    <span className={`font-bold ${stat.color}`}>
                      {stat.value}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
