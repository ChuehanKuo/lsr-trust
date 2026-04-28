import { motion } from "motion/react";
import { REVIEW_META, SEARCH_ROUNDS, EXTRACTED_STUDIES, UPDATE_LOG, DATABASES } from "../data";

export function Header() {
  const stats = [
    { label: "Databases", value: DATABASES.filter(d => d.category === "primary").length },
    { label: "Studies", value: EXTRACTED_STUDIES.length || "—" },
    { label: "Rounds", value: SEARCH_ROUNDS.length },
    { label: "Updates", value: UPDATE_LOG.length },
  ];

  return (
    <header className="bg-[#0f1a2e] text-white">
      <div className="max-w-[1100px] mx-auto px-6 py-16 md:py-24">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <div className="flex items-center gap-3 mb-10">
            <span className="px-3 py-1.5 rounded-full bg-teal-600 text-white text-[11px] font-semibold uppercase tracking-[0.12em]">
              Living Systematic Review
            </span>
            <span className="px-3 py-1.5 rounded-full border border-white/20 text-white/50 text-[11px] font-medium uppercase tracking-[0.12em]">
              Protocol
            </span>
          </div>

          <h1 className="font-serif text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] font-normal leading-[1.08] text-balance mb-5 max-w-3xl">
            {REVIEW_META.title}
          </h1>
          {REVIEW_META.subtitle && (
            <p className="text-[1.15rem] text-white/40 mb-10 max-w-2xl">
              {REVIEW_META.subtitle}
            </p>
          )}

          <p className="text-[15px] text-white/50 leading-[1.7] max-w-xl mb-14">
            Open-access data warehouse with quarterly search updates, PRISMA flow
            diagrams, data extraction sheets, and a methodology changelog.
          </p>

          <div className="flex flex-wrap gap-x-8 gap-y-2 text-[12px] mb-14">
            {[
              ["PROSPERO", REVIEW_META.prosperoId],
              ["Reporting", "PRISMA-P / PRISMA-LSR"],
              ["Quality", "MMAT"],
              ["Cycle", "Quarterly"],
              ["Coverage", "Jan 2020 →"],
            ].map(([label, value]) => (
              <div key={label}>
                <span className="text-white/25 uppercase tracking-wider text-[11px]">{label}</span>{" "}
                <span className="text-white/60">{value}</span>
              </div>
            ))}
          </div>

          <div className="flex gap-8 max-w-lg">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-[2rem] font-serif leading-none mb-1">{s.value}</div>
                <div className="text-[11px] text-white/35 uppercase tracking-wide">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="h-1 bg-gradient-to-r from-teal-600 via-teal-500 to-teal-600" />
    </header>
  );
}
