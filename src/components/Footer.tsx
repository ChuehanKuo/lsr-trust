import { REVIEW_META } from "../data";

export function Footer() {
  return (
    <footer className="border-t border-ink-200 bg-ink-50">
      <div className="max-w-[1100px] mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 text-[13px] text-ink-400">
          <div>
            <p className="font-semibold text-ink-700 mb-2">{REVIEW_META.shortTitle}</p>
            <p className="leading-relaxed">
              Living Systematic Review — continuously updated evidence synthesis.
            </p>
          </div>
          <div>
            <p className="font-semibold text-ink-700 mb-2">Standards</p>
            <p className="leading-relaxed">PROSPERO / PRISMA-P / PRISMA-LSR / MMAT / GRADE</p>
          </div>
          <div>
            <p className="font-semibold text-ink-700 mb-2">Contact</p>
            <p className="leading-relaxed">
              {REVIEW_META.contact.institution}<br />
              {REVIEW_META.contact.university}<br />
              {REVIEW_META.contact.location}
            </p>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-ink-200 flex flex-wrap items-center justify-between gap-3 text-[11px] text-ink-300">
          <span>&copy; {new Date().getFullYear()} {REVIEW_META.contact.university}</span>
          <span className="font-mono tabular-nums">{REVIEW_META.lastUpdated}</span>
        </div>
      </div>
    </footer>
  );
}
