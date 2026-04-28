import { REVIEW_META } from "../data";
import { Section } from "./Section";

export function Resources() {
  const resources = [
    {
      title: "Data Extraction Template",
      description: "CSV template with all 40+ extraction variables organized by 10 domains.",
      href: "/data/extraction-template.csv",
      download: true,
      available: true,
    },
    {
      title: "Published Protocol",
      description: `Submitted to ${REVIEW_META.journalTarget}.`,
      href: REVIEW_META.protocolDoi ? `https://doi.org/${REVIEW_META.protocolDoi}` : undefined,
      download: false,
      available: !!REVIEW_META.protocolDoi,
    },
    {
      title: "PROSPERO Registration",
      description: `ID: ${REVIEW_META.prosperoId}`,
      href: REVIEW_META.prosperoId !== "Pending" ? `https://www.crd.york.ac.uk/PROSPERO/view/${REVIEW_META.prosperoId}` : undefined,
      download: false,
      available: REVIEW_META.prosperoId !== "Pending",
    },
    {
      title: "Extracted Data (Full Dataset)",
      description: "Complete data extraction sheet with all included studies.",
      href: undefined,
      download: true,
      available: false,
    },
  ];

  return (
    <Section id="resources" title="Resources & Downloads" dark subtitle="Protocols, templates, and datasets.">
      <div className="grid md:grid-cols-2 gap-3">
        {resources.map((r) => {
          const inner = (
            <div className="flex items-center justify-between gap-4">
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className={`text-sm font-semibold ${r.available ? "text-ink-900" : "text-ink-400"}`}>
                    {r.title}
                  </span>
                  {!r.available && (
                    <span className="px-2 py-0.5 rounded bg-ink-100 text-[10px] font-semibold text-ink-400">
                      Coming soon
                    </span>
                  )}
                </div>
                <p className="text-[13px] text-ink-500 mt-0.5">{r.description}</p>
              </div>
              {r.available && (
                <div className="shrink-0 text-ink-400">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    {r.download
                      ? <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                      : <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />}
                  </svg>
                </div>
              )}
            </div>
          );

          const cls = `p-4 rounded-lg border transition-colors ${
            r.available
              ? "border-ink-200/80 bg-ivory hover:border-teal-300/60 cursor-pointer"
              : "border-dashed border-ink-200 bg-ivory/50"
          }`;

          if (r.available && r.href) {
            return (
              <a
                key={r.title}
                href={r.href}
                className={cls}
                {...(r.download ? { download: true } : { target: "_blank", rel: "noopener noreferrer" })}
              >
                {inner}
              </a>
            );
          }
          return <div key={r.title} className={cls}>{inner}</div>;
        })}
      </div>
    </Section>
  );
}
