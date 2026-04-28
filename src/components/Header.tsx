import { motion } from "motion/react";
import { REVIEW_META, SEARCH_ROUNDS, EXTRACTED_STUDIES, UPDATE_LOG, DATABASES } from "../data";

export function Header() {
  const stats = [
    { label: "Databases", value: DATABASES.filter(d => d.category === "primary").length.toString(), sub: "primary sources" },
    { label: "Studies", value: EXTRACTED_STUDIES.length > 0 ? EXTRACTED_STUDIES.length.toString() : "—", sub: EXTRACTED_STUDIES.length > 0 ? "included" : "awaiting search" },
    { label: "Search Rounds", value: SEARCH_ROUNDS.length > 0 ? SEARCH_ROUNDS.length.toString() : "0", sub: "completed" },
    { label: "Updates", value: UPDATE_LOG.length.toString(), sub: "logged" },
  ];

  return (
    <header className="relative overflow-hidden hero-gradient">
      <div className="absolute inset-0 gradient-mesh" />

      <div className="relative max-w-5xl mx-auto px-5 sm:px-8 pt-20 pb-16 md:pt-28 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-2.5 mb-8">
            <span className="px-3 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-700 text-[11px] font-semibold uppercase tracking-widest">
              Living Systematic Review
            </span>
            <span className="px-3 py-1.5 rounded-full bg-ink-100 border border-ink-200 text-ink-400 text-[11px] font-medium uppercase tracking-widest">
              Protocol
            </span>
          </div>

          <h1 className="font-serif text-[2.25rem] sm:text-[2.75rem] md:text-[3.25rem] font-medium text-ink-900 leading-[1.08] text-balance mb-3 tracking-tight">
            {REVIEW_META.title}
          </h1>
          {REVIEW_META.subtitle && (
            <p className="font-serif text-[1.15rem] sm:text-[1.3rem] text-ink-400 italic mb-8">
              {REVIEW_META.subtitle}
            </p>
          )}

          <p className="text-[0.95rem] text-ink-500 leading-relaxed max-w-2xl mb-10">
            Open-access data warehouse hosting the living data extraction sheet,
            PRISMA flow, search audit trail, and methodology changelog. Updated
            quarterly as new evidence emerges.
          </p>

          <div className="flex flex-wrap gap-x-6 gap-y-2 text-[11px]">
            {[
              ["PROSPERO", REVIEW_META.prosperoId],
              ["Reporting", "PRISMA-P / PRISMA-LSR"],
              ["Quality", "MMAT"],
              ["Cycle", "Quarterly"],
              ["Coverage", "Jan 2020 →"],
            ].map(([label, value]) => (
              <div key={label} className="flex items-center gap-1.5">
                <span className="text-ink-300 font-medium uppercase tracking-wider">{label}</span>
                <span className="text-ink-600 font-medium">{value}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-14"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
              className="group px-5 py-4 rounded-xl bg-white border border-ink-200/60 hover:border-teal-300/60 hover:shadow-lg hover:shadow-teal-500/5 transition-all duration-300"
            >
              <div className="text-[1.75rem] font-semibold text-ink-900 font-mono tracking-tight leading-none group-hover:text-teal-700 transition-colors">
                {s.value}
              </div>
              <div className="text-[11px] text-ink-400 mt-2">
                <span className="text-ink-600 font-medium">{s.label}</span>
                <span className="mx-1.5 text-ink-200">/</span>
                {s.sub}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-300/30 to-transparent" />
    </header>
  );
}
