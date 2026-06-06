import React from "react";
import { motion } from "motion/react";
import { Terminal, GitBranch, Star, Users, ExternalLink, GitMerge, GitCommitHorizontal, FolderGit2, Building2, Lock, Layers, BotMessageSquare, ShieldCheck, Workflow, Database } from "lucide-react";
import { useState, useEffect } from "react";
import { useGitHubStats } from "../hooks/useGitHubStats";

export default function GitHubCommandCenter() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const { repos, stars, followers, recentCommits, loading, error } =
    useGitHubStats();

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const statItems = [
    {
      icon: GitBranch,
      label: "Repositories",
      value: loading ? "…" : repos !== null ? String(repos) : "25+",
      color: "text-primary",
    },
    {
      icon: Star,
      label: "Stars",
      value: loading ? "…" : stars !== null ? String(stars) : "—",
      color: "text-secondary",
    },
    {
      icon: Users,
      label: "Followers",
      value: loading ? "…" : followers !== null ? String(followers) : "—",
      color: "text-purple-400",
    },
  ];

  const gitlabStats = [
    { icon: GitMerge,           label: "MRs Merged",          value: "38",    color: "text-orange-400" },
    { icon: GitCommitHorizontal, label: "Commits",             value: "2000+", color: "text-amber-400"  },
    { icon: FolderGit2,          label: "Projects Contributed", value: "13",   color: "text-yellow-400" },
  ];

  const gitlabHighlights = [
    {
      icon: BotMessageSquare,
      title: "Teams Bot Platform",
      desc: "Adaptive-card workflow engine with multi-step approval flows and Azure Bot Service integration.",
      tags: ["C#", "Azure Bot", "Adaptive Cards"],
    },
    {
      icon: ShieldCheck,
      title: "OAuth2 / SSO Layer",
      desc: "Silent-refresh token management and enterprise SSO across internal tooling.",
      tags: ["OAuth2", "MSAL", ".NET"],
    },
    {
      icon: Workflow,
      title: "Azure Event Hub Middleware",
      desc: "High-throughput consumer-group middleware for real-time telemetry pipelines.",
      tags: ["Event Hub", "C#", "Azure"],
    },
    {
      icon: Database,
      title: "Polarion Work-Item Sync",
      desc: "Bidirectional sync engine between Siemens Polarion ALM and internal project trackers.",
      tags: ["REST API", "Polarion", "Java"],
    },
  ];

  const hasPublicCommits = !loading && recentCommits.length > 0;

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
              <div className="flex items-center justify-between">
                <p className="text-green-400">GitHub: github.com/RuAmey27</p>
                <a
                  href="https://github.com/RuAmey27"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <p className="text-foreground/60">
                Java &amp; .NET engineer · cloud-native integrations · Azure
              </p>
              <p className="mt-4 text-primary">
                Recent public activity:
                {loading && (
                  <span className="ml-2 text-muted-foreground animate-pulse text-xs">
                    fetching…
                  </span>
                )}
              </p>

              {hasPublicCommits ? (
                recentCommits.map((commit, index) => (
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
                      <span className="text-cyan-500/70">[{commit.repo}]</span>
                      <span className="ml-2">{commit.time}</span>
                    </p>
                  </motion.div>
                ))
              ) : !loading && (
                <div className="pl-4 border-l-2 border-muted/30 space-y-1">
                  <p className="text-muted-foreground text-xs">
                    Most active work lives in private repositories —
                  </p>
                  <p className="text-muted-foreground text-xs">
                    enterprise projects at Connecticus / Siemens DISW.
                  </p>
                  <a
                    href="https://github.com/RuAmey27"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-primary hover:underline mt-1"
                  >
                    View public profile <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              )}

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
                {!loading && !error && (
                  <span className="ml-2 inline-block w-1.5 h-1.5 rounded-full bg-green-400 align-middle" title="Live data" />
                )}
              </h3>
              <div className="space-y-3">
                {statItems.map((stat, index) => (
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

        {/* ── GitLab Enterprise Sub-section ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 rounded-2xl border border-orange-500/25 bg-black/60 backdrop-blur-xl overflow-hidden"
        >
          {/* Header bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-orange-500/20 bg-orange-500/5">
            <div className="flex items-center gap-3">
              <Building2 className="w-5 h-5 text-orange-400" />
              <div>
                <p className="text-sm font-semibold text-orange-300">
                  Connecticus Technologies
                </p>
                <p className="text-xs text-muted-foreground">
                  Client · Siemens DISW &nbsp;·&nbsp; Internal GitLab
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Lock className="w-3 h-3" />
              <span>private instance</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-orange-500/15">
            {/* Contribution Highlights */}
            <div className="lg:col-span-2 p-6">
              <div className="flex items-center gap-2 mb-5">
                <Layers className="w-4 h-4 text-orange-400" />
                <span className="text-sm font-medium text-orange-300">Key Contribution Areas</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {gitlabHighlights.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                    className="p-4 rounded-xl bg-orange-500/5 border border-orange-500/15 hover:border-orange-500/30 transition-colors"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <item.icon className="w-4 h-4 text-orange-400 shrink-0" />
                      <span className="text-sm font-semibold text-foreground/90">{item.title}</span>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-3">{item.desc}</p>
                    <div className="flex flex-wrap gap-1">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] px-2 py-0.5 rounded-full bg-orange-500/10 text-orange-300/80 border border-orange-500/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* GitLab Stats */}
            <div className="p-6 flex flex-col justify-center gap-4">
              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">
                Contribution Stats
              </p>
              {gitlabStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.12 + 0.3 }}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-2">
                    <stat.icon className={`w-4 h-4 ${stat.color}`} />
                    <span className="text-sm text-foreground/70">{stat.label}</span>
                  </div>
                  <span className={`font-bold font-mono ${stat.color}`}>
                    {stat.value}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
