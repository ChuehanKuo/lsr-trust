import { PICO, INCLUSION_CRITERIA, EXCLUSION_CRITERIA, SEARCH_STRATEGY } from "../data";
import { Section } from "./Section";

export function Methodology() {
  return (
    <Section
      id="methods"
      title="Methodology"
      dark
      subtitle="Search framework, eligibility criteria, and the full PubMed/MEDLINE search strategy."
    >
      <div className="space-y-12">
        <PICOGrid />
        <EligibilityCriteria />
        <SearchStrategyBlock />
      </div>
    </Section>
  );
}

function PICOGrid() {
  const items: { code: string; label: string; text: string; accent: string }[] = [
    { code: "P", label: "Population", text: PICO.population, accent: "bg-teal-700" },
    { code: "I", label: "Intervention", text: PICO.intervention, accent: "bg-ink-800" },
    { code: "C", label: "Comparison", text: PICO.comparison, accent: "bg-amber-600" },
    { code: "O", label: "Outcome", text: PICO.outcome, accent: "bg-emerald-700" },
  ];

  return (
    <div>
      <h3 className="text-[11px] font-semibold text-ink-400 uppercase tracking-widest mb-5">PICO Framework</h3>
      <div className="grid md:grid-cols-2 gap-3">
        {items.map((item) => (
          <div key={item.code} className="p-5 bg-ivory rounded-lg border border-ink-200/80 hover:border-ink-300/80 transition-colors">
            <div className="flex items-start gap-3.5">
              <div className={`shrink-0 w-8 h-8 rounded ${item.accent} text-white font-bold text-sm flex items-center justify-center`}>
                {item.code}
              </div>
              <div>
                <div className="text-sm font-semibold text-ink-900 mb-1.5">{item.label}</div>
                <p className="text-[13px] text-ink-500 leading-relaxed">{item.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function EligibilityCriteria() {
  return (
    <div>
      <h3 className="text-[11px] font-semibold text-ink-400 uppercase tracking-widest mb-5">Eligibility Criteria</h3>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="rounded-lg overflow-hidden border border-emerald-200/80">
          <div className="px-5 py-3 bg-emerald-50 border-b border-emerald-100 flex items-center gap-2">
            <svg className="w-3.5 h-3.5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
            <h4 className="text-[11px] font-bold text-emerald-800 uppercase tracking-wide">Inclusion</h4>
          </div>
          <div className="p-5 bg-ivory space-y-3">
            {INCLUSION_CRITERIA.map((c, i) => (
              <div key={i} className="flex gap-2.5 text-[13px] text-ink-700 leading-relaxed">
                <div className="shrink-0 w-1.5 h-1.5 rounded-full bg-emerald-400 mt-[7px]" />
                {c}
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-lg overflow-hidden border border-rose-200/80">
          <div className="px-5 py-3 bg-rose-50 border-b border-rose-100 flex items-center gap-2">
            <svg className="w-3.5 h-3.5 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
            <h4 className="text-[11px] font-bold text-rose-800 uppercase tracking-wide">Exclusion</h4>
          </div>
          <div className="p-5 bg-ivory space-y-3">
            {EXCLUSION_CRITERIA.map((c, i) => (
              <div key={i} className="flex gap-2.5 text-[13px] text-ink-700 leading-relaxed">
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
      <h3 className="text-[11px] font-semibold text-ink-400 uppercase tracking-widest mb-5">
        PubMed/MEDLINE Search Strategy
      </h3>
      <div className="rounded-lg overflow-hidden border border-ink-800">
        <div className="px-4 py-2.5 bg-ink-800 border-b border-ink-700/50 flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-ink-600" />
            <div className="w-2.5 h-2.5 rounded-full bg-ink-600" />
            <div className="w-2.5 h-2.5 rounded-full bg-ink-600" />
          </div>
          <span className="text-[10px] text-ink-400 font-mono ml-2">PubMed/MEDLINE</span>
        </div>
        <div className="p-5 bg-ink-900 overflow-x-auto">
          <pre className="text-[13px] font-mono text-ink-300 leading-relaxed whitespace-pre-wrap">{SEARCH_STRATEGY}</pre>
        </div>
      </div>
      <p className="mt-3 text-[11px] text-ink-400">
        Coverage: January 1, 2020 to date of execution. No language restrictions. Strategy adapted for Web of Science, IEEE Xplore, and ACM Digital Library.
      </p>
    </div>
  );
}
