import { motion } from "motion/react";
import { REVIEW_META, SEARCH_ROUNDS, EXTRACTED_STUDIES, UPDATE_LOG, DATABASES } from "../data";

export function Header() {
  const stats = [
    { label: "Databases", value: DATABASES.filter(d => d.category === "primary").length },
    { label: "Studies included", value: EXTRACTED_STUDIES.length || "—" },
    { label: "Search rounds", value: SEARCH_ROUNDS.length },
    { label: "Updates logged", value: UPDATE_LOG.length },
  ];

  return (
    <header className="bg-ink-50 border-b border-ink-200">
      <div className="max-w-[1100px] mx-auto px-6 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="px-3 py-1.5 rounded-full bg-teal-700 text-white text-[11px] font-semibold uppercase tracking-[0.12em]">
              Living Systematic Review
            </span>
            <span className="px-3 py-1.5 rounded-full bg-ink-200 text-ink-600 text-[11px] font-semibold uppercase tracking-[0.12em]">
              Protocol
            </span>
          </div>

          <h1 className="font-serif text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] font-normal text-ink-950 leading-[1.08] text-balance mb-4 max-w-3xl">
            {REVIEW_META.title}
          </h1>
          {REVIEW_META.subtitle && (
            <p className="text-[1.15rem] text-ink-500 mb-8 max-w-2xl">
              {REVIEW_META.subtitle}
            </p>
          )}

          <p className="text-[15px] text-ink-600 leading-[1.7] max-w-xl mb-12">
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
                <span className="text-ink-400 uppercase tracking-wider text-[11px]">{label}</span>{" "}
                <span className="text-ink-700 font-medium">{value}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-ink-200 rounded-lg overflow-hidden max-w-2xl">
            {stats.map((s) => (
              <div key={s.label} className="bg-white p-5">
                <div className="text-[1.75rem] font-serif text-ink-900 leading-none mb-1">
                  {s.value}
                </div>
                <div className="text-[12px] text-ink-500">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </header>
  );
}
