import { TEAM } from "../data";
import { Section } from "./Section";
import { StaggerChildren, StaggerItem } from "./FadeIn";

export function TeamSection() {
  return (
    <Section id="team" title="Research Team" subtitle="Core review team and senior co-authors.">
      <div className="grid lg:grid-cols-2 gap-10">
        <div>
          <h3 className="text-[12px] font-semibold text-ink-400 uppercase tracking-[0.15em] mb-5">Core Team</h3>
          <StaggerChildren className="space-y-3">
            {TEAM.core.map((m) => (
              <StaggerItem key={m.name}>
                <div className="group relative flex items-center gap-4 p-4 rounded-2xl border border-ink-200/60 bg-white card-hover gradient-border">
                  <div className="shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-500 text-white font-semibold text-sm flex items-center justify-center shadow-lg shadow-teal-500/20">
                    {m.name.charAt(0)}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[14px] font-semibold text-ink-900">{m.name}</div>
                    <div className="text-[12px] text-teal-600 font-semibold">{m.role}</div>
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
          <h3 className="text-[12px] font-semibold text-ink-400 uppercase tracking-[0.15em] mb-5">Senior Co-Authors</h3>
          <StaggerChildren className="space-y-3">
            {TEAM.committee.map((m) => (
              <StaggerItem key={m.name}>
                <div className="group flex items-center gap-4 p-4 rounded-2xl border border-ink-200/60 bg-white card-hover">
                  <div className="shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-ink-300 to-ink-400 text-white font-semibold text-sm flex items-center justify-center">
                    {m.name.charAt(0)}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[14px] font-semibold text-ink-900">{m.name}</div>
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
