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
    <nav className="sticky top-0 z-50 bg-white border-b border-ink-200">
      <div className="max-w-[1100px] mx-auto px-6 flex items-center justify-between h-[52px]">
        <a href="#" className="text-[14px] font-semibold text-ink-900 tracking-tight hover:text-teal-700 transition-colors">
          AI & Patient Trust
        </a>
        <div className="hidden lg:flex items-center gap-6">
          {LINKS.map(([label, href]) => (
            <a key={href} href={href} className="text-[12px] text-ink-400 hover:text-ink-900 transition-colors">
              {label}
            </a>
          ))}
        </div>
        <button
          className="lg:hidden p-2 text-ink-400 hover:text-ink-900"
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
        <div className="lg:hidden border-t border-ink-100 px-6 py-3 bg-white">
          {LINKS.map(([label, href]) => (
            <a key={href} href={href} className="block py-2.5 text-[14px] text-ink-500 hover:text-ink-900" onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
