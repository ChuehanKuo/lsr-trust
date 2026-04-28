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
    <nav className="sticky top-0 z-50 bg-navy-950/95 backdrop-blur-md border-b border-white/[0.06]">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 flex items-center justify-between h-12">
        <a href="#" className="flex items-center gap-2 group">
          <span className="text-[13px] font-semibold text-white/90 tracking-tight group-hover:text-white transition-colors font-serif">
            AI & Patient Trust
          </span>
          <span className="hidden sm:inline px-1.5 py-0.5 rounded text-[9px] font-semibold text-teal-300/80 bg-teal-400/10 uppercase tracking-widest">
            LSR
          </span>
        </a>
        <div className="hidden lg:flex items-center gap-0.5">
          {LINKS.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="px-2.5 py-1 rounded text-[12px] text-white/40 hover:text-white/90 hover:bg-white/[0.06] transition-all font-medium"
            >
              {label}
            </a>
          ))}
        </div>
        <button
          className="lg:hidden p-1.5 rounded text-white/50 hover:text-white hover:bg-white/[0.06] transition-colors"
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
        <div className="lg:hidden border-t border-white/[0.06] bg-navy-950 px-5 py-2 space-y-0.5">
          {LINKS.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="block px-3 py-2 rounded text-sm text-white/60 hover:text-white hover:bg-white/[0.06]"
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
