import { TEAM } from "../data";
import { Section } from "./Section";
import { StaggerChildren, StaggerItem } from "./FadeIn";

export function TeamSection() {
  return (
    <Section
      id="team"
      title="Research Team"
      subtitle="Core review team and senior co-authors."
    >
      <div className="grid lg:grid-cols-2 gap-8">
        <div>
          <h3 className="text-[11px] font-semibold text-ink-400 uppercase tracking-widest mb-4">Core Team</h3>
          <StaggerChildren className="space-y-2">
            {TEAM.core.map((m) => (
              <StaggerItem key={m.name}>
                <div className="group flex items-center gap-3.5 p-3.5 rounded-xl border border-ink-200/60 bg-white hover:border-teal-200 hover:shadow-lg hover:shadow-teal-500/5 transition-all duration-300">
                  <div className="shrink-0 w-9 h-9 rounded-lg bg-gradient-to-br from-teal-500 to-teal-600 text-white font-semibold text-xs flex items-center justify-center">
                    {m.name.charAt(0)}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-sm font-semibold text-ink-900">{m.name}</div>
                    <div className="text-xs text-teal-600 font-medium">{m.role}</div>
                    {m.affiliation && (
                      <div className="text-[11px] text-ink-400 mt-0.5 truncate">{m.affiliation}</div>
                    )}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>

        <div>
          <h3 className="text-[11px] font-semibold text-ink-400 uppercase tracking-widest mb-4">Senior Co-Authors</h3>
          <StaggerChildren className="space-y-2">
            {TEAM.committee.map((m) => (
              <StaggerItem key={m.name}>
                <div className="group flex items-center gap-3.5 p-3.5 rounded-xl border border-ink-200/60 bg-white hover:border-ink-300 hover:shadow-md transition-all duration-300">
                  <div className="shrink-0 w-9 h-9 rounded-lg bg-gradient-to-br from-ink-300 to-ink-400 text-white font-semibold text-xs flex items-center justify-center">
                    {m.name.charAt(0)}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-sm font-semibold text-ink-900">{m.name}</div>
                    <div className="text-[11px] text-ink-400 mt-0.5 truncate">{m.affiliation}</div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </div>
    </Section>
  );
}
