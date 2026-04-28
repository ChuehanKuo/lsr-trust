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
          ? `${EXTRACTED_STUDIES.length} studies extracted. Updated after each quarterly search.`
          : "The extraction sheet will be populated as studies are screened and included. Template structure below."
      }
      actions={
        <a
          href="/data/extraction-template.csv"
          download
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-ink-900 text-white text-xs font-medium hover:bg-teal-700 transition-colors duration-300"
        >
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
          </svg>
          Download Template
        </a>
      }
    >
      {hasStudies ? <StudyTable /> : <ExtractionTemplate />}
    </Section>
  );
}

function ExtractionTemplate() {
  return (
    <div className="space-y-4">
      <StaggerChildren className="grid md:grid-cols-2 gap-3">
        {EXTRACTION_DOMAINS.map((domain, idx) => (
          <StaggerItem key={domain.domain}>
            <div className="group p-4 rounded-xl border border-ink-200/60 bg-white hover:border-teal-300/50 hover:shadow-lg hover:shadow-teal-500/5 transition-all duration-300">
              <div className="flex items-start gap-3">
                <div className="shrink-0 w-7 h-7 rounded-lg bg-gradient-to-br from-teal-50 to-sky-50 text-teal-600 flex items-center justify-center text-[11px] font-bold mt-0.5 group-hover:from-teal-100 group-hover:to-sky-100 transition-colors duration-300">
                  {idx + 1}
                </div>
                <div className="min-w-0">
                  <h4 className="text-sm font-semibold text-ink-900 mb-2">{domain.domain}</h4>
                  <div className="flex flex-wrap gap-1">
                    {domain.variables.map((v) => (
                      <span key={v} className="px-2 py-0.5 rounded-md bg-ink-100/60 text-[11px] text-ink-500">{v}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerChildren>

      <div className="p-5 rounded-xl bg-gradient-to-r from-teal-50/60 to-sky-50/40 border border-teal-200/30">
        <h4 className="text-sm font-semibold text-ink-900 mb-1">Synthesis Approach</h4>
        <p className="text-[13px] text-ink-500 leading-relaxed">
          Best-evidence synthesis across heterogeneous study designs. Meta-analysis when &ge;6
          comparable studies (I&sup2; for heterogeneity, funnel plots + Egger's test for
          publication bias, GRADE for certainty of evidence).
        </p>
      </div>
    </div>
  );
}

function StudyTable() {
  return (
    <div className="overflow-x-auto rounded-xl border border-ink-200">
      <table className="w-full text-xs">
        <thead>
          <tr className="bg-ink-100/40 border-b border-ink-200">
            {["Study", "Year", "Country", "Design", "AI System", "Setting", "Trust Outcome", "Effect", "MMAT"].map(h => (
              <th key={h} className="text-left p-3 font-semibold text-ink-500 text-[11px] uppercase tracking-wide">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {EXTRACTED_STUDIES.map((study, i) => (
            <tr key={study.id} className={`border-b border-ink-100 ${i % 2 === 0 ? "bg-white" : "bg-ink-100/20"}`}>
              <td className="p-3 font-medium text-ink-900 max-w-48">{study.authors} ({study.year})</td>
              <td className="p-3 text-ink-600 font-mono">{study.year}</td>
              <td className="p-3 text-ink-600">{study.country}</td>
              <td className="p-3 text-ink-600">{study.studyDesign}</td>
              <td className="p-3 text-ink-600">{study.aiSystemType}</td>
              <td className="p-3 text-ink-600">{study.clinicalSetting}</td>
              <td className="p-3 text-ink-600">{study.trustOutcome}</td>
              <td className="p-3">
                <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-semibold ${
                  { increase: "bg-emerald-50 text-emerald-700", decrease: "bg-rose-50 text-rose-700", mixed: "bg-amber-50 text-amber-700", "no change": "bg-ink-100 text-ink-600" }[study.effectDirection]
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
