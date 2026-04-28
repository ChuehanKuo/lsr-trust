import { REVIEW_META } from "../data";

export function Footer() {
  const standards = [
    "PROSPERO pre-registered",
    "PRISMA-P 2015 protocol reporting",
    "PRISMA-LSR living review reporting",
    "MMAT quality appraisal",
    "GRADE certainty assessment",
  ];

  return (
    <footer className="bg-navy-950">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 py-14">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <h4 className="font-serif font-semibold text-white text-sm mb-3">{REVIEW_META.shortTitle}</h4>
            <p className="text-xs text-white/40 leading-relaxed">
              Living Systematic Review — continuously updated evidence synthesis
              on the impact of AI on physician&ndash;patient trust.
            </p>
            <p className="text-xs leading-relaxed mt-3 text-white/25">
              {REVIEW_META.contact.institution}
              <br />
              {REVIEW_META.contact.university}
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white text-xs uppercase tracking-wide mb-3">Reporting Standards</h4>
            <ul className="space-y-2">
              {standards.map((s) => (
                <li key={s} className="flex items-center gap-2 text-xs text-white/40">
                  <div className="w-1 h-1 rounded-full bg-teal-500/50 shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white text-xs uppercase tracking-wide mb-3">Contact</h4>
            <div className="space-y-2 text-xs text-white/40">
              <p>{REVIEW_META.contact.institution}</p>
              <p>{REVIEW_META.contact.university}</p>
              <p>{REVIEW_META.contact.location}</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-3 text-[11px] text-white/20">
          <span>&copy; {new Date().getFullYear()} {REVIEW_META.contact.university}</span>
          <span className="font-mono tabular-nums">{REVIEW_META.lastUpdated}</span>
        </div>
      </div>
    </footer>
  );
}
