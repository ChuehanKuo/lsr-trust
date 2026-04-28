import { SEARCH_ROUNDS } from "../data";
import { Section } from "./Section";

export function PRISMAFlow() {
  const hasData = SEARCH_ROUNDS.length > 0;
  const latestRound = hasData ? SEARCH_ROUNDS[SEARCH_ROUNDS.length - 1] : null;

  const steps = [
    {
      label: "Identified",
      value: latestRound?.recordsIdentified,
      description: "Records from database searches",
      step: 1,
    },
    {
      label: "Deduplicated",
      value: latestRound?.duplicatesRemoved != null && latestRound?.recordsIdentified != null
        ? latestRound.recordsIdentified - latestRound.duplicatesRemoved
        : null,
      description: "After duplicate removal",
      step: 2,
    },
    {
      label: "Screened",
      value: latestRound?.screened,
      description: "Title/abstract screening",
      step: 3,
    },
    {
      label: "Assessed",
      value: latestRound?.fullTextAssessed,
      description: "Full-text eligibility",
      step: 4,
    },
    {
      label: "Included",
      value: latestRound?.included,
      description: "Studies in synthesis",
      step: 5,
    },
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
      <div className="flex flex-col md:flex-row items-stretch gap-2 md:gap-0">
        {steps.map((step, i) => {
          const isLast = i === steps.length - 1;
          return (
            <div key={step.label} className="flex items-center flex-1">
              <div className={`flex-1 rounded-lg border p-5 text-center transition-all ${
                hasData
                  ? isLast
                    ? "border-teal-200 bg-teal-50/60"
                    : "border-ink-200 bg-white"
                  : "border-dashed border-ink-200 bg-ink-100/50"
              }`}>
                <div className={`inline-flex items-center justify-center w-7 h-7 rounded-full text-[11px] font-bold mb-3 ${
                  hasData
                    ? isLast
                      ? "bg-teal-600 text-white"
                      : "bg-ink-900 text-white"
                    : "bg-ink-200 text-ink-400"
                }`}>
                  {step.step}
                </div>
                <div className={`text-2xl md:text-[1.75rem] font-semibold font-mono tracking-tight mb-1 ${
                  hasData
                    ? isLast ? "text-teal-700" : "text-ink-900"
                    : "text-ink-300"
                }`}>
                  {step.value != null ? step.value.toLocaleString() : "—"}
                </div>
                <div className={`text-[11px] font-semibold uppercase tracking-wide mb-0.5 ${
                  hasData ? "text-ink-600" : "text-ink-400"
                }`}>
                  {step.label}
                </div>
                <div className="text-[10px] text-ink-400">{step.description}</div>
              </div>
              {!isLast && (
                <div className="hidden md:flex items-center justify-center w-5 shrink-0 text-ink-300">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {!hasData && (
        <div className="mt-6 flex justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-200/60">
            <div className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-xs font-medium text-amber-700">
              Initial search anticipated July 2026
            </span>
          </div>
        </div>
      )}
    </Section>
  );
}
