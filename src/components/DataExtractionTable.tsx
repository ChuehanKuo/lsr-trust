import { EXTRACTION_DOMAINS, EXTRACTED_STUDIES } from "../data";
import { Section } from "./Section";
import { StaggerChildren, StaggerItem } from "./FadeIn";

export function DataExtractionTable() {
  const hasStudies = EXTRACTED_STUDIES.length > 0;

  return (
    <Section
      id="data"
      title="Data Extraction"
      dark
      subtitle={
        hasStudies
          ? `${EXTRACTED_STUDIES.length} studies extracted across ${EXTRACTION_DOMAINS.length} domains.`
          : "Template structure for the 10 extraction domains. Populated as studies are screened and included."
      }
      actions={
        <a
          href="/data/extraction-template.csv"
          download
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-teal-700 text-white text-[13px] font-medium hover:bg-teal-800 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
          </svg>
          Download CSV template
        </a>
      }
    >
      {hasStudies ? <StudyTable /> : <ExtractionTemplate />}
    </Section>
  );
}

function ExtractionTemplate() {
  const colors = [
    "border-l-teal-500", "border-l-teal-500",
    "border-l-amber-500", "border-l-amber-500",
    "border-l-rose-400", "border-l-rose-400",
    "border-l-ink-400", "border-l-ink-400",
    "border-l-emerald-500", "border-l-emerald-500",
  ];

  return (
    <div className="space-y-6">
      <StaggerChildren className="grid md:grid-cols-2 gap-3">
        {EXTRACTION_DOMAINS.map((domain, idx) => (
          <StaggerItem key={domain.domain}>
            <div className={`p-4 bg-white rounded-lg border border-ink-200 border-l-4 ${colors[idx]} hover:shadow-sm transition-shadow h-full`}>
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-[11px] font-mono text-ink-300 tabular-nums">{String(idx + 1).padStart(2, '0')}</span>
                <h4 className="text-[14px] font-semibold text-ink-900">{domain.domain}</h4>
              </div>
              <div className="flex flex-wrap gap-1.5 ml-7">
                {domain.variables.map((v) => (
                  <span key={v} className="px-2 py-0.5 rounded bg-ink-100 text-[11px] text-ink-600">{v}</span>
                ))}
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerChildren>

      <div className="p-5 bg-teal-50 rounded-lg border border-teal-200">
        <h4 className="text-[14px] font-semibold text-ink-900 mb-2">Synthesis approach</h4>
        <p className="text-[13px] text-ink-600 leading-relaxed">
          Best-evidence synthesis across heterogeneous study designs. Meta-analysis when &ge;6
          comparable studies (I&sup2; for heterogeneity, funnel plots + Egger&apos;s test for
          publication bias, GRADE for certainty of evidence).
        </p>
      </div>
    </div>
  );
}

function StudyTable() {
  return (
    <div className="overflow-x-auto rounded-lg border border-ink-200">
      <table className="w-full text-[13px]">
        <thead>
          <tr className="bg-ink-50 border-b border-ink-200">
            {["Study", "Year", "Country", "Design", "AI System", "Setting", "Trust Outcome", "Effect", "MMAT"].map(h => (
              <th key={h} className="text-left p-3 font-medium text-ink-500 text-[11px] uppercase tracking-wide">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {EXTRACTED_STUDIES.map((study, i) => (
            <tr key={study.id} className={`border-b border-ink-100 ${i % 2 === 1 ? "bg-ink-50/50" : ""}`}>
              <td className="p-3 font-medium text-ink-900">{study.authors} ({study.year})</td>
              <td className="p-3 text-ink-600 font-mono">{study.year}</td>
              <td className="p-3 text-ink-600">{study.country}</td>
              <td className="p-3 text-ink-600">{study.studyDesign}</td>
              <td className="p-3 text-ink-600">{study.aiSystemType}</td>
              <td className="p-3 text-ink-600">{study.clinicalSetting}</td>
              <td className="p-3 text-ink-600">{study.trustOutcome}</td>
              <td className="p-3">
                <span className={`px-2 py-0.5 rounded text-[11px] font-medium ${
                  { increase: "bg-emerald-50 text-emerald-700", decrease: "bg-rose-50 text-rose-600", mixed: "bg-amber-50 text-amber-700", "no change": "bg-ink-100 text-ink-600" }[study.effectDirection]
                }`}>{study.effectDirection}</span>
              </td>
              <td className="p-3 text-ink-600 font-mono">{study.mmatScore}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
