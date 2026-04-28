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
    <nav className="sticky top-0 z-50 glass border-b border-white/10">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-teal-500/20">
            <span className="text-white font-serif font-bold text-sm">L</span>
          </div>
          <span className="text-[14px] font-semibold text-ink-900 tracking-tight">
            AI & Patient Trust
          </span>
        </a>
        <div className="hidden lg:flex items-center gap-1">
          {LINKS.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="px-3 py-2 rounded-lg text-[13px] text-ink-400 hover:text-ink-900 hover:bg-ink-100/80 transition-all duration-200 font-medium"
            >
              {label}
            </a>
          ))}
        </div>
        <button
          className="lg:hidden p-2 rounded-lg text-ink-400 hover:text-ink-900 hover:bg-ink-100 transition-colors"
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
        <div className="lg:hidden border-t border-ink-200/50 glass px-5 py-3 space-y-1">
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
