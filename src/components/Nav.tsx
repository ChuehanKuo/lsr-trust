import { useState } from "react";

const LINKS = [
  ["PRISMA", "#prisma"],
  ["Data", "#data"],
  ["Search Log", "#search-log"],
  ["Methods", "#methods"],
  ["Updates", "#updates"],
  ["Resources", "#resources"],
  ["Team", "#team"],
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-ink-200/50">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 flex items-center justify-between h-14">
        <a href="#" className="flex items-center gap-2 group">
          <span className="text-[13px] font-semibold text-ink-900 tracking-tight group-hover:text-teal-700 transition-colors font-serif">
            AI & Patient Trust
          </span>
          <span className="hidden sm:inline px-1.5 py-0.5 rounded-full text-[9px] font-semibold text-teal-600 bg-teal-50 border border-teal-200/50 uppercase tracking-widest">
            LSR
          </span>
        </a>
        <div className="hidden lg:flex items-center gap-0.5">
          {LINKS.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="px-3 py-1.5 rounded-lg text-[12px] text-ink-400 hover:text-ink-900 hover:bg-ink-100/60 transition-all font-medium"
            >
              {label}
            </a>
          ))}
        </div>
        <button
          className="lg:hidden p-1.5 rounded-lg text-ink-400 hover:text-ink-900 hover:bg-ink-100 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-ink-200/50 bg-white/95 backdrop-blur-xl px-5 py-2 space-y-0.5">
          {LINKS.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="block px-3 py-2.5 rounded-lg text-sm text-ink-500 hover:text-ink-900 hover:bg-ink-50"
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
