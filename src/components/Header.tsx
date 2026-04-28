import { motion } from "motion/react";
import { REVIEW_META, SEARCH_ROUNDS, EXTRACTED_STUDIES, UPDATE_LOG, DATABASES } from "../data";

export function Header() {
  const stats = [
    { label: "Databases", value: DATABASES.filter(d => d.category === "primary").length, sub: "primary" },
    { label: "Studies", value: EXTRACTED_STUDIES.length > 0 ? EXTRACTED_STUDIES.length : null, sub: EXTRACTED_STUDIES.length > 0 ? "included" : "pending" },
    { label: "Rounds", value: SEARCH_ROUNDS.length, sub: "completed" },
    { label: "Updates", value: UPDATE_LOG.length, sub: "logged" },
  ];

  return (
    <header className="relative overflow-hidden bg-ink-950 min-h-[85vh] flex items-center">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[40%] -right-[20%] w-[800px] h-[800px] rounded-full bg-gradient-to-br from-teal-500/20 via-cyan-500/10 to-transparent blur-3xl animate-float" />
        <div className="absolute -bottom-[30%] -left-[10%] w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-violet-500/10 via-teal-500/5 to-transparent blur-3xl animate-float-delayed" />
        <div className="absolute top-[20%] left-[50%] w-[400px] h-[400px] rounded-full bg-gradient-to-r from-teal-400/5 to-cyan-400/5 blur-2xl animate-float-delayed" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      <div className="relative max-w-5xl mx-auto px-5 sm:px-8 py-20 md:py-0 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-3 mb-8">
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="px-3.5 py-1.5 rounded-full bg-gradient-to-r from-teal-500/20 to-cyan-500/20 border border-teal-400/30 text-teal-300 text-[11px] font-semibold uppercase tracking-[0.15em]"
            >
              Living Systematic Review
            </motion.span>
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/40 text-[11px] font-medium uppercase tracking-[0.15em]"
            >
              Protocol
            </motion.span>
          </div>

          <h1 className="font-serif text-[2.5rem] sm:text-[3.25rem] md:text-[3.75rem] font-normal text-white leading-[1.05] text-balance mb-3 tracking-[-0.02em]">
            {REVIEW_META.title}
          </h1>
          {REVIEW_META.subtitle && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="font-serif text-[1.15rem] sm:text-[1.35rem] text-white/30 italic mb-8"
            >
              {REVIEW_META.subtitle}
            </motion.p>
          )}

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-[1rem] text-white/40 leading-relaxed max-w-xl mb-12"
          >
            Open-access data warehouse with quarterly updates, PRISMA flow,
            data extraction, and methodology changelog.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-x-6 gap-y-2 text-[11px] mb-16"
          >
            {[
              ["PROSPERO", REVIEW_META.prosperoId],
              ["Reporting", "PRISMA-P / PRISMA-LSR"],
              ["Quality", "MMAT"],
              ["Cycle", "Quarterly"],
              ["Coverage", "Jan 2020 →"],
            ].map(([label, value]) => (
              <div key={label} className="flex items-center gap-2">
                <span className="text-white/20 font-medium uppercase tracking-wider">{label}</span>
                <span className="text-white/50 font-medium">{value}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-white/[0.04] border border-white/[0.08] p-5 hover:bg-white/[0.07] hover:border-white/[0.15] transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="text-[2rem] font-semibold text-white font-mono tracking-tight leading-none">
                  {s.value ?? "—"}
                </div>
                <div className="text-[11px] text-white/30 mt-2 font-medium">
                  {s.label}
                  <span className="text-white/15 mx-1">/</span>
                  {s.sub}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </header>
  );
}
