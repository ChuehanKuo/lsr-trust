import { REVIEW_META } from "../data";

export function Footer() {
  return (
    <footer className="bg-[#0f1a2e] text-white/30">
      <div className="max-w-[1100px] mx-auto px-6 py-14">
        <div className="grid md:grid-cols-3 gap-8 text-[13px]">
          <div>
            <p className="font-semibold text-white/70 mb-2">{REVIEW_META.shortTitle}</p>
            <p className="leading-relaxed">Living Systematic Review — continuously updated evidence synthesis.</p>
          </div>
          <div>
            <p className="font-semibold text-white/70 mb-2">Standards</p>
            <p className="leading-relaxed">PROSPERO / PRISMA-P / PRISMA-LSR / MMAT / GRADE</p>
          </div>
          <div>
            <p className="font-semibold text-white/70 mb-2">Contact</p>
            <p className="leading-relaxed">
              {REVIEW_META.contact.institution}<br />
              {REVIEW_META.contact.university}<br />
              {REVIEW_META.contact.location}
            </p>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-[11px] text-white/20">
          <span>&copy; {new Date().getFullYear()} {REVIEW_META.contact.university}</span>
          <span className="font-mono tabular-nums">{REVIEW_META.lastUpdated}</span>
        </div>
      </div>
    </footer>
  );
}
