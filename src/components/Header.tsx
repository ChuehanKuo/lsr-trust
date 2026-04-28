import { REVIEW_META, SEARCH_ROUNDS, EXTRACTED_STUDIES, UPDATE_LOG, DATABASES } from "../data";

export function Header() {
  const stats = [
    { label: "Databases", value: DATABASES.filter(d => d.category === "primary").length.toString(), sub: "primary sources" },
    { label: "Studies", value: EXTRACTED_STUDIES.length > 0 ? EXTRACTED_STUDIES.length.toString() : "—", sub: EXTRACTED_STUDIES.length > 0 ? "included" : "awaiting search" },
    { label: "Search Rounds", value: SEARCH_ROUNDS.length > 0 ? SEARCH_ROUNDS.length.toString() : "0", sub: "completed" },
    { label: "Updates", value: UPDATE_LOG.length.toString(), sub: "logged" },
  ];

  return (
    <header className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-800 to-navy-900" />
      <div className="absolute inset-0 dot-pattern" />

      <div className="relative max-w-5xl mx-auto px-5 sm:px-8 pt-16 pb-14 md:pt-24 md:pb-20">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2.5 mb-6">
            <span className="px-2.5 py-1 rounded bg-teal-500/15 border border-teal-400/20 text-teal-300 text-[11px] font-semibold uppercase tracking-widest">
              Living Systematic Review
            </span>
            <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-white/35 text-[11px] font-medium uppercase tracking-widest">
              Protocol
            </span>
          </div>

          <h1 className="font-serif text-[2rem] sm:text-[2.5rem] md:text-[3rem] font-medium text-white leading-[1.1] text-balance mb-2 tracking-tight">
            {REVIEW_META.title}
          </h1>
          {REVIEW_META.subtitle && (
            <p className="font-serif text-[1.1rem] sm:text-[1.25rem] text-white/35 italic mb-6">
              {REVIEW_META.subtitle}
            </p>
          )}

          <p className="text-[0.95rem] sm:text-[1.05rem] text-white/45 leading-relaxed max-w-2xl mb-10">
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
                <span className="text-white/20 font-medium uppercase tracking-wider">{label}</span>
                <span className="text-white/55 font-medium">{value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-14">
          {stats.map((s) => (
            <div
              key={s.label}
              className="px-5 py-4 rounded-lg bg-white/[0.03] border border-white/[0.06]"
            >
              <div className="text-[1.75rem] font-semibold text-white/85 font-mono tracking-tight leading-none">
                {s.value}
              </div>
              <div className="text-[11px] text-white/30 mt-2">
                <span className="text-white/50 font-medium">{s.label}</span>
                <span className="mx-1.5 text-white/15">/</span>
                {s.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
