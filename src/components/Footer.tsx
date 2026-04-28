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
    <footer className="bg-ink-950 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -bottom-[50%] -right-[20%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-teal-500/5 to-transparent blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-5 sm:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center">
                <span className="text-white font-serif font-bold text-sm">L</span>
              </div>
              <h4 className="font-serif text-white text-[15px]">{REVIEW_META.shortTitle}</h4>
            </div>
            <p className="text-[13px] text-white/30 leading-relaxed">
              Living Systematic Review — continuously updated evidence synthesis
              on the impact of AI on physician&ndash;patient trust.
            </p>
            <p className="text-[12px] leading-relaxed mt-4 text-white/15">
              {REVIEW_META.contact.institution}
              <br />
              {REVIEW_META.contact.university}
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white/50 text-[12px] uppercase tracking-[0.15em] mb-4">Reporting Standards</h4>
            <ul className="space-y-2.5">
              {standards.map((s) => (
                <li key={s} className="flex items-center gap-2.5 text-[13px] text-white/30">
                  <div className="w-1.5 h-1.5 rounded-full bg-teal-500/40 shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white/50 text-[12px] uppercase tracking-[0.15em] mb-4">Contact</h4>
            <div className="space-y-2.5 text-[13px] text-white/30">
              <p>{REVIEW_META.contact.institution}</p>
              <p>{REVIEW_META.contact.university}</p>
              <p>{REVIEW_META.contact.location}</p>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-3 text-[11px] text-white/15">
          <span>&copy; {new Date().getFullYear()} {REVIEW_META.contact.university}</span>
          <span className="font-mono tabular-nums">{REVIEW_META.lastUpdated}</span>
        </div>
      </div>
    </footer>
  );
}
