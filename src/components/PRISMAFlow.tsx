import { motion } from "motion/react";
import { SEARCH_ROUNDS } from "../data";
import { Section } from "./Section";

export function PRISMAFlow() {
  const hasData = SEARCH_ROUNDS.length > 0;
  const latest = hasData ? SEARCH_ROUNDS[SEARCH_ROUNDS.length - 1] : null;

  const steps = [
    { label: "Identified", value: latest?.recordsIdentified, color: "bg-teal-600" },
    { label: "Deduplicated", value: latest?.duplicatesRemoved != null && latest?.recordsIdentified != null ? latest.recordsIdentified - latest.duplicatesRemoved : null, color: "bg-teal-500" },
    { label: "Screened", value: latest?.screened, color: "bg-amber-500" },
    { label: "Assessed", value: latest?.fullTextAssessed, color: "bg-amber-400" },
    { label: "Included", value: latest?.included, color: "bg-emerald-600" },
  ];

  return (
    <Section
      id="prisma"
      title="PRISMA Flow"
      subtitle={hasData ? `Latest search: ${latest!.date}` : "Awaiting initial search (anticipated July 2026)."}
    >
      <div className="grid grid-cols-5 gap-3">
        {steps.map((step, i) => (
          <motion.div
            key={step.label}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="text-center"
          >
            <div className={`${step.color} text-white rounded-lg p-5 mb-2`}>
              <div className="text-[1.75rem] font-serif leading-none">
                {step.value != null ? step.value.toLocaleString() : "—"}
              </div>
            </div>
            <div className="text-[11px] font-medium text-ink-600 uppercase tracking-wide">{step.label}</div>
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
