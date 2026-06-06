import  React  from "react";
import { motion } from "motion/react";
import { Send, Mail, Linkedin, Github, MapPin, Terminal, Loader2, AlertCircle } from "lucide-react";
import { useState } from "react";
import { useContactSubmit } from "../hooks/useContactSubmit";

export default function ContactTerminal() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { status, error, submit, reset } = useContactSubmit();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submit(formData);
    // clear form after successful send
    if (status !== "error") {
      setTimeout(() => {
        setFormData({ name: "", email: "", message: "" });
        reset();
      }, 4000);
    }
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Contact Terminal
          </h2>
          <p className="text-muted-foreground text-lg">
            Let's connect and build something amazing
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {/* Quick Links */}
            <div className="p-6 rounded-2xl bg-card/50 border border-border backdrop-blur-xl">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Terminal className="w-5 h-5 text-primary" />
                Quick Links
              </h3>
              <div className="space-y-3">
                {[
                  {
                    icon: Mail,
                    label: "Email",
                    value: "ameypande2709@gmail.com",
                    href: "mailto:ameypande2709@gmail.com",
                  },
                  {
                    icon: Linkedin,
                    label: "LinkedIn",
                    value: "linkedin.com/in/ameypande",
                    href: "https://linkedin.com/in/ameypande",
                  },
                  {
                    icon: Github,
                    label: "GitHub",
                    value: "github.com/RuAmey27",
                    href: "https://github.com/RuAmey27",
                  },
                  {
                    icon: MapPin,
                    label: "Location",
                    value: "Umarkhed, Maharashtra, India",
                    href: null,
                  },
                ].map((item) => (
                  <motion.div
                    key={item.label}
                    whileHover={{ x: 4 }}
                    className="flex items-start gap-3 group"
                  >
                    <item.icon className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="text-xs text-muted-foreground">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-sm text-foreground/80 hover:text-primary transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm text-foreground/80">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Status */}
            <div className="p-6 rounded-2xl bg-card/50 border border-border backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <motion.div
                    className="absolute inset-0 w-3 h-3 rounded-full bg-green-500"
                    animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
                <div>
                  <p className="text-sm font-medium">Available for work</p>
                  <p className="text-xs text-muted-foreground">
                    Open to new opportunities
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Terminal Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="p-6 rounded-2xl bg-black/80 border border-primary/30 backdrop-blur-xl overflow-hidden">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-primary/20 font-mono">
                <Terminal className="w-4 h-4 text-primary" />
                <span className="text-primary text-sm">amey@contact:~$</span>
                <span className="text-muted-foreground text-sm">
                  ./send-message.sh
                </span>
              </div>

              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center font-mono"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-primary" />
                  </div>
                  <p className="text-green-400 mb-2">Message sent successfully!</p>
                  <p className="text-muted-foreground text-sm">
                    I'll get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 font-mono text-sm"
                >
                  <div>
                    <label className="block text-primary mb-2">
                      <span className="text-muted-foreground">$</span> name:
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-primary mb-2">
                      <span className="text-muted-foreground">$</span> email:
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-primary mb-2">
                      <span className="text-muted-foreground">$</span> message:
                    </label>
                    <textarea
                      required
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                      placeholder="Your message here..."
                    />
                  </div>

                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-start gap-2 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs"
                    >
                      <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                      <span>Failed to send: {error}. Please email directly at ameypande2709@gmail.com</span>
                    </motion.div>
                  )}

                  <motion.button
                    type="submit"
                    disabled={status === "sending"}
                    whileHover={status !== "sending" ? { scale: 1.02, boxShadow: "0 0 30px rgba(0, 229, 255, 0.4)" } : {}}
                    whileTap={status !== "sending" ? { scale: 0.98 } : {}}
                    className="w-full px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium shadow-lg shadow-primary/30 flex items-center justify-center gap-2 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === "sending" ? (
                      <><Loader2 className="w-5 h-5 animate-spin" /> Sending…</>
                    ) : (
                      <><Send className="w-5 h-5" /> Execute Command</>
                    )}
                  </motion.button>

                  <p className="text-xs text-muted-foreground text-center mt-4">
                    <span className="text-primary animate-pulse">▸</span> Press
                    Enter or click to send
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
