import { motion } from "motion/react";
import { SEARCH_ROUNDS } from "../data";
import { Section } from "./Section";

export function PRISMAFlow() {
  const hasData = SEARCH_ROUNDS.length > 0;
  const latest = hasData ? SEARCH_ROUNDS[SEARCH_ROUNDS.length - 1] : null;

  const steps = [
    { label: "Identified", value: latest?.recordsIdentified },
    { label: "Deduplicated", value: latest?.duplicatesRemoved != null && latest?.recordsIdentified != null ? latest.recordsIdentified - latest.duplicatesRemoved : null },
    { label: "Screened", value: latest?.screened },
    { label: "Assessed", value: latest?.fullTextAssessed },
    { label: "Included", value: latest?.included },
  ];

  return (
    <Section
      id="prisma"
      title="PRISMA Flow"
      subtitle={hasData ? `Latest search: ${latest!.date}` : "Awaiting initial search (anticipated July 2026)."}
    >
      <div className="grid grid-cols-5 gap-px bg-ink-200 rounded-lg overflow-hidden">
        {steps.map((step, i) => (
          <motion.div
            key={step.label}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className={`p-6 text-center ${i === steps.length - 1 && hasData ? "bg-teal-50" : "bg-white"}`}
          >
            <div className={`text-[2rem] font-serif mb-1 ${
              hasData ? i === steps.length - 1 ? "text-teal-700" : "text-ink-900" : "text-ink-300"
            }`}>
              {step.value != null ? step.value.toLocaleString() : "—"}
            </div>
            <div className="text-[11px] font-medium text-ink-500 uppercase tracking-wide">{step.label}</div>
          </motion.div>
        ))}
      </div>

      {!hasData && (
        <p className="mt-6 text-center text-[13px] text-amber-600">
          Initial search anticipated July 2026
        </p>
      )}
    </Section>
  );
}
