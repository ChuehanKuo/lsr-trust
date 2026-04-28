import { TEAM } from "../data";
import { Section } from "./Section";

export function TeamSection() {
  return (
    <Section
      id="team"
      title="Research Team"
      dark
      subtitle="Core review team and international expert advisory committee."
    >
      <div className="grid lg:grid-cols-2 gap-8">
        <div>
          <h3 className="text-[11px] font-semibold text-ink-400 uppercase tracking-widest mb-4">Core Team</h3>
          <div className="space-y-2">
            {TEAM.core.map((m) => (
              <div
                key={m.name}
                className="flex items-center gap-3.5 p-3.5 rounded-lg border border-ink-200/80 bg-ivory hover:border-teal-300/60 transition-colors"
              >
                <div className="shrink-0 w-9 h-9 rounded bg-ink-800 text-white font-semibold text-xs flex items-center justify-center">
                  {m.name.charAt(0)}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-sm font-semibold text-ink-900">{m.name}</div>
                  <div className="text-xs text-teal-700 font-medium">{m.role}</div>
                  {m.affiliation && (
                    <div className="text-[11px] text-ink-400 mt-0.5 truncate">{m.affiliation}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-[11px] font-semibold text-ink-400 uppercase tracking-widest mb-4">International Expert Committee</h3>
          <div className="space-y-2">
            {TEAM.committee.map((m) => (
              <div
                key={m.name}
                className="flex items-center gap-3.5 p-3.5 rounded-lg border border-ink-200/80 bg-ivory hover:border-ink-300 transition-colors"
              >
                <div className="shrink-0 w-9 h-9 rounded bg-ink-300 text-white font-semibold text-xs flex items-center justify-center">
                  {m.name.charAt(0)}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-sm font-semibold text-ink-900">{m.name}</div>
                  <div className="text-[11px] text-ink-500 mt-0.5 truncate">{m.affiliation}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
