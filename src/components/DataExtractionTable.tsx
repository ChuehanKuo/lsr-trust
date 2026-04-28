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
          : "Template structure for the 10 extraction domains and 40+ variables. Will be populated as studies are screened."
      }
      actions={
        <a
          href="/data/extraction-template.csv"
          download
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-ink-900 text-white text-[13px] font-medium hover:bg-ink-800 transition-all duration-300 shadow-lg shadow-ink-900/10 hover:shadow-xl hover:shadow-ink-900/20 hover:-translate-y-0.5"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
          </svg>
          Download CSV
        </a>
      }
    >
      {hasStudies ? <StudyTable /> : <ExtractionTemplate />}
    </Section>
  );
}

function ExtractionTemplate() {
  return (
    <div className="space-y-6">
      <StaggerChildren className="grid md:grid-cols-2 gap-4">
        {EXTRACTION_DOMAINS.map((domain, idx) => (
          <StaggerItem key={domain.domain}>
            <div className="group relative p-5 rounded-2xl border border-ink-200/60 bg-white card-hover gradient-border">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-teal-50 to-cyan-50 border border-teal-100 text-teal-600 flex items-center justify-center text-[13px] font-bold group-hover:from-teal-100 group-hover:to-cyan-100 transition-colors duration-300">
                  {String(idx + 1).padStart(2, '0')}
                </div>
                <div className="min-w-0">
                  <h4 className="text-[14px] font-semibold text-ink-900 mb-2.5">{domain.domain}</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {domain.variables.map((v) => (
                      <span key={v} className="px-2.5 py-1 rounded-lg bg-ink-50 text-[11px] text-ink-500 font-medium">{v}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerChildren>

      <div className="p-6 rounded-2xl bg-gradient-to-r from-teal-50 via-white to-cyan-50 border border-teal-100">
        <div className="flex items-start gap-4">
          <div className="shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-500 text-white flex items-center justify-center shadow-lg shadow-teal-500/20">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
            </svg>
          </div>
          <div>
            <h4 className="text-[15px] font-semibold text-ink-900 mb-1">Synthesis Approach</h4>
            <p className="text-[13px] text-ink-500 leading-relaxed">
              Best-evidence synthesis across heterogeneous study designs. Meta-analysis when &ge;6
              comparable studies (I&sup2; for heterogeneity, funnel plots + Egger's test for
              publication bias, GRADE for certainty of evidence).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function StudyTable() {
  return (
    <div className="overflow-x-auto rounded-2xl border border-ink-200 shadow-sm">
      <table className="w-full text-[13px]">
        <thead>
          <tr className="bg-ink-50 border-b border-ink-200">
            {["Study", "Year", "Country", "Design", "AI System", "Setting", "Trust Outcome", "Effect", "MMAT"].map(h => (
              <th key={h} className="text-left p-4 font-semibold text-ink-500 text-[11px] uppercase tracking-wide">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {EXTRACTED_STUDIES.map((study, i) => (
            <tr key={study.id} className={`border-b border-ink-100 hover:bg-ink-50/50 transition-colors ${i % 2 === 0 ? "bg-white" : "bg-ink-50/30"}`}>
              <td className="p-4 font-medium text-ink-900">{study.authors} ({study.year})</td>
              <td className="p-4 text-ink-600 font-mono">{study.year}</td>
              <td className="p-4 text-ink-600">{study.country}</td>
              <td className="p-4 text-ink-600">{study.studyDesign}</td>
              <td className="p-4 text-ink-600">{study.aiSystemType}</td>
              <td className="p-4 text-ink-600">{study.clinicalSetting}</td>
              <td className="p-4 text-ink-600">{study.trustOutcome}</td>
              <td className="p-4">
                <span className={`inline-block px-2.5 py-1 rounded-lg text-[11px] font-semibold ${
                  { increase: "bg-emerald-50 text-emerald-700", decrease: "bg-rose-50 text-rose-700", mixed: "bg-amber-50 text-amber-700", "no change": "bg-ink-100 text-ink-600" }[study.effectDirection]
                }`}>{study.effectDirection}</span>
              </td>
              <td className="p-4 text-ink-600 font-mono">{study.mmatScore}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
