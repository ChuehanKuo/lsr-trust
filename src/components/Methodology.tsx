import { PICO, INCLUSION_CRITERIA, EXCLUSION_CRITERIA, SEARCH_STRATEGY } from "../data";
import { Section } from "./Section";
import { StaggerChildren, StaggerItem } from "./FadeIn";

export function Methodology() {
  return (
    <Section
      id="methods"
      title="Methodology"
      subtitle="Search framework, eligibility criteria, and the full PubMed/MEDLINE search strategy."
    >
      <div className="space-y-14">
        <PICOGrid />
        <EligibilityCriteria />
        <SearchStrategyBlock />
      </div>
    </Section>
  );
}

function PICOGrid() {
  const items: { code: string; label: string; text: string; bg: string; fg: string }[] = [
    { code: "P", label: "Population", text: PICO.population, bg: "bg-teal-600", fg: "text-white" },
    { code: "I", label: "Intervention", text: PICO.intervention, bg: "bg-ink-800", fg: "text-white" },
    { code: "C", label: "Comparison", text: PICO.comparison, bg: "bg-amber-500", fg: "text-white" },
    { code: "O", label: "Outcome", text: PICO.outcome, bg: "bg-emerald-600", fg: "text-white" },
  ];

  return (
    <div>
      <h3 className="text-[11px] font-medium text-ink-400 uppercase tracking-[0.12em] mb-5">PICO Framework</h3>
      <StaggerChildren className="grid md:grid-cols-2 gap-3">
        {items.map((item) => (
          <StaggerItem key={item.code}>
            <div className="p-5 bg-white rounded-lg border border-ink-200 hover:shadow-sm transition-shadow h-full">
              <div className="flex items-start gap-3.5">
                <div className={`shrink-0 w-9 h-9 rounded-lg ${item.bg} ${item.fg} font-bold text-sm flex items-center justify-center`}>
                  {item.code}
                </div>
                <div>
                  <div className="text-[14px] font-semibold text-ink-900 mb-1">{item.label}</div>
                  <p className="text-[13px] text-ink-500 leading-relaxed">{item.text}</p>
                </div>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerChildren>
    </div>
  );
}

function EligibilityCriteria() {
  return (
    <div>
      <h3 className="text-[11px] font-medium text-ink-400 uppercase tracking-[0.12em] mb-5">Eligibility Criteria</h3>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="rounded-lg overflow-hidden border border-emerald-200">
          <div className="px-5 py-3 bg-emerald-600 text-white flex items-center gap-2">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
            <h4 className="text-[11px] font-bold uppercase tracking-wide">Inclusion</h4>
          </div>
          <div className="p-5 bg-white space-y-3">
            {INCLUSION_CRITERIA.map((c, i) => (
              <div key={i} className="flex gap-2.5 text-[13px] text-ink-600 leading-relaxed">
                <div className="shrink-0 w-1.5 h-1.5 rounded-full bg-emerald-400 mt-[7px]" />
                {c}
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-lg overflow-hidden border border-rose-200">
          <div className="px-5 py-3 bg-rose-500 text-white flex items-center gap-2">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
            <h4 className="text-[11px] font-bold uppercase tracking-wide">Exclusion</h4>
          </div>
          <div className="p-5 bg-white space-y-3">
            {EXCLUSION_CRITERIA.map((c, i) => (
              <div key={i} className="flex gap-2.5 text-[13px] text-ink-600 leading-relaxed">
                <div className="shrink-0 w-1.5 h-1.5 rounded-full bg-rose-400 mt-[7px]" />
                {c}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function SearchStrategyBlock() {
  return (
    <div>
      <h3 className="text-[11px] font-medium text-ink-400 uppercase tracking-[0.12em] mb-5">
        PubMed/MEDLINE Search Strategy
      </h3>
      <div className="rounded-lg overflow-hidden border border-ink-200">
        <div className="px-4 py-2.5 bg-ink-800 flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-rose-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
          </div>
          <span className="text-[10px] text-ink-400 font-mono ml-2">PubMed/MEDLINE</span>
        </div>
        <div className="p-5 bg-ink-900 overflow-x-auto">
          <pre className="text-[13px] font-mono text-ink-300 leading-relaxed whitespace-pre-wrap">{SEARCH_STRATEGY}</pre>
        </div>
      </div>
      <p className="mt-3 text-[11px] text-ink-400">
        Coverage: January 1, 2020 to date of execution. English-language publications only. Strategy adapted for Web of Science, IEEE Xplore, and ACM Digital Library.
      </p>
    </div>
  );
}
