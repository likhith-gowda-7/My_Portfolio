import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { PERSONAL } from "../../data/portfolioData";
import {
  Mail,
  Github,
  Linkedin,
  Send,
  MapPin,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from "lucide-react";

// ─── Web3Forms access key ───────────────────────────────────────────────────
// Get your FREE key at: https://web3forms.com (just enter your email)
// Replace the placeholder below with your actual key
const WEB3FORMS_KEY = "95ecf1c7-8dba-4e21-b8d9-3f154c4a15d2";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          name: form.name,
          email: form.email,
          message: form.message,
          subject: `Portfolio Contact from ${form.name}`,
          from_name: "Portfolio Contact Form",
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        throw new Error(data.message || "Failed to send");
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div
        className="absolute bottom-0 left-0 right-0 h-80 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(249,115,22,0.04), transparent)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="h-px w-8" style={{ background: "#F97316" }} />
          <span
            className="text-xs font-mono uppercase tracking-widest"
            style={{ color: "#F97316" }}
          >
            root/contact
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-black mb-5"
              style={{
                fontFamily: "Poppins",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                lineHeight: 1.1,
              }}
            >
              Let's{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #F97316, #EA580C)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Connect
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="text-muted-foreground leading-relaxed mb-10"
            >
              Open to SDE, Backend, and Full-Stack opportunities. If you're
              building something exciting or have a role that fits, let's talk.
            </motion.p>

            {/* Contact links */}
            <div className="space-y-4">
              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: PERSONAL.email,
                  href: `mailto:${PERSONAL.email}`,
                },
                {
                  icon: Github,
                  label: "GitHub",
                  value: "github.com/likhith-gowda-7",
                  href: PERSONAL.social.github,
                },
                {
                  icon: Linkedin,
                  label: "LinkedIn",
                  value: "linkedin.com/in/d-m-likhith",
                  href: PERSONAL.social.linkedin,
                },
                {
                  icon: MapPin,
                  label: "Location",
                  value: PERSONAL.location,
                  href: null,
                },
              ].map(({ icon: Icon, label, value, href }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  {href ? (
                    <a
                      href={href}
                      className="flex items-center gap-4 p-4 rounded-2xl border border-border/60 hover:border-amber-400/50 transition-all duration-300 group"
                    >
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                        style={{ background: "rgba(249,115,22,0.1)" }}
                      >
                        <Icon size={16} style={{ color: "#F97316" }} />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">{label}</p>
                        <p className="font-medium text-sm group-hover:text-amber-500 transition-colors">
                          {value}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 p-4 rounded-2xl border border-border/60">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                        style={{ background: "rgba(249,115,22,0.1)" }}
                      >
                        <Icon size={16} style={{ color: "#F97316" }} />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">{label}</p>
                        <p className="font-medium text-sm">{value}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="p-8 rounded-2xl border border-border/60"
            style={{ background: "rgba(249,115,22,0.02)" }}
          >
            {status === "sent" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center gap-4 py-12"
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(34,197,94,0.1)" }}
                >
                  <CheckCircle2 size={28} style={{ color: "#22C55E" }} />
                </div>
                <p className="font-semibold text-lg">Message Sent!</p>
                <p className="text-muted-foreground text-sm text-center">
                  Thanks for reaching out. I'll get back to you soon.
                </p>
              </motion.div>
            ) : status === "error" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center gap-4 py-12"
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(239,68,68,0.1)" }}
                >
                  <AlertCircle size={28} style={{ color: "#EF4444" }} />
                </div>
                <p className="font-semibold text-lg">Something went wrong</p>
                <p className="text-muted-foreground text-sm text-center">
                  Please try again or email me directly at {PERSONAL.email}
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <p className="text-xs font-mono text-muted-foreground mb-6">
                  // new_message.send()
                </p>

                <div>
                  <label className="block text-xs font-mono text-muted-foreground mb-2">
                    name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border/60 bg-transparent text-sm focus:outline-none focus:border-amber-400 transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-muted-foreground mb-2">
                    email
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-border/60 bg-transparent text-sm focus:outline-none focus:border-amber-400 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-muted-foreground mb-2">
                    message
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-border/60 bg-transparent text-sm focus:outline-none focus:border-amber-400 transition-colors resize-none"
                    placeholder="Let's talk about..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm text-white transition-all duration-300 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
                  style={{
                    background: "linear-gradient(135deg, #F97316, #EA580C)",
                    boxShadow: "0 8px 24px rgba(249,115,22,0.3)",
                  }}
                >
                  {status === "sending" ? (
                    <>
                      <Loader2 size={15} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-20 pt-8 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <span className="text-sm text-muted-foreground font-mono">
            &copy; 2026 Likhith D M. Built with precision.
          </span>
          <span
            className="text-xs text-muted-foreground font-mono"
            style={{ color: "#F97316" }}
          >
            &gt; root/exit — Thanks for visiting
          </span>
        </motion.div>
      </div>
    </section>
  );
}
