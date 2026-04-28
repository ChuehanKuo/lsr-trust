import { TEAM } from "../data";
import { Section } from "./Section";
import { StaggerChildren, StaggerItem } from "./FadeIn";

export function TeamSection() {
  return (
    <Section id="team" title="Research Team" subtitle="Core review team and senior co-authors.">
      <div className="grid lg:grid-cols-2 gap-10">
        <div>
          <h3 className="text-[11px] font-medium text-ink-400 uppercase tracking-[0.12em] mb-4">Core Team</h3>
          <StaggerChildren className="divide-y divide-ink-100">
            {TEAM.core.map((m) => (
              <StaggerItem key={m.name}>
                <div className="py-4 first:pt-0 last:pb-0">
                  <div className="text-[14px] font-semibold text-ink-900">{m.name}</div>
                  <div className="text-[12px] text-teal-700 font-medium">{m.role}</div>
                  {m.affiliation && (
                    <div className="text-[12px] text-ink-400 mt-0.5">{m.affiliation}</div>
                  )}
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>

        <div>
          <h3 className="text-[11px] font-medium text-ink-400 uppercase tracking-[0.12em] mb-4">Senior Co-Authors</h3>
          <StaggerChildren className="divide-y divide-ink-100">
            {TEAM.committee.map((m) => (
              <StaggerItem key={m.name}>
                <div className="py-4 first:pt-0 last:pb-0">
                  <div className="text-[14px] font-semibold text-ink-900">{m.name}</div>
                  <div className="text-[12px] text-ink-400 mt-0.5">{m.affiliation}</div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </div>
    </Section>
  );
}
