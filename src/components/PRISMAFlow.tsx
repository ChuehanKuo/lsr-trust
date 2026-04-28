import { motion } from "motion/react";
import { SEARCH_ROUNDS } from "../data";
import { Section } from "./Section";

export function PRISMAFlow() {
  const hasData = SEARCH_ROUNDS.length > 0;
  const latestRound = hasData ? SEARCH_ROUNDS[SEARCH_ROUNDS.length - 1] : null;

  const steps = [
    { label: "Identified", value: latestRound?.recordsIdentified, desc: "Database searches", step: 1 },
    { label: "Deduplicated", value: latestRound?.duplicatesRemoved != null && latestRound?.recordsIdentified != null ? latestRound.recordsIdentified - latestRound.duplicatesRemoved : null, desc: "After removal", step: 2 },
    { label: "Screened", value: latestRound?.screened, desc: "Title & abstract", step: 3 },
    { label: "Assessed", value: latestRound?.fullTextAssessed, desc: "Full-text review", step: 4 },
    { label: "Included", value: latestRound?.included, desc: "Final synthesis", step: 5 },
  ];

  return (
    <Section
      id="prisma"
      title="PRISMA Flow"
      subtitle={
        hasData
          ? `Results from the ${latestRound!.type === "initial" ? "initial" : "latest quarterly"} search (${latestRound!.date}).`
          : "Will be populated when the initial search begins (anticipated July 2026)."
      }
    >
      {/* Flow container */}
      <div className="relative">
        {/* Connecting line (desktop) */}
        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[2px] -translate-y-1/2 bg-gradient-to-r from-teal-200 via-cyan-200 to-teal-200 z-0" />

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-6 relative z-10">
          {steps.map((step, i) => {
            const isLast = i === steps.length - 1;
            return (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, y: 24, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className={`group relative rounded-2xl border p-6 text-center card-hover cursor-default ${
                  hasData
                    ? isLast
                      ? "border-teal-200 bg-gradient-to-b from-teal-50 to-white"
                      : "border-ink-200 bg-white"
                    : "border-dashed border-ink-200 bg-ink-50/50"
                }`}
              >
                <div className={`inline-flex items-center justify-center w-10 h-10 rounded-full text-[13px] font-bold mb-4 ${
                  hasData
                    ? isLast
                      ? "bg-gradient-to-br from-teal-500 to-cyan-500 text-white shadow-lg shadow-teal-500/20"
                      : "bg-ink-900 text-white"
                    : "bg-ink-200 text-ink-400"
                }`}>
                  {step.step}
                </div>
                <div className={`text-[1.75rem] font-semibold font-mono tracking-tight mb-1 ${
                  hasData ? isLast ? "gradient-text" : "text-ink-900" : "text-ink-300"
                }`}>
                  {step.value != null ? step.value.toLocaleString() : "—"}
                </div>
                <div className={`text-[12px] font-semibold uppercase tracking-wide mb-1 ${hasData ? "text-ink-700" : "text-ink-400"}`}>
                  {step.label}
                </div>
                <div className="text-[11px] text-ink-400">{step.desc}</div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {!hasData && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="mt-8 flex justify-center"
        >
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-amber-50 border border-amber-200/60">
            <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-[13px] font-medium text-amber-700">
              Initial search anticipated July 2026
            </span>
          </div>
        </motion.div>
      )}
    </Section>
  );
}
