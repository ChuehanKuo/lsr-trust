import { TEAM } from "../data";
import { Section } from "./Section";
import { StaggerChildren, StaggerItem } from "./FadeIn";

export function TeamSection() {
  return (
    <Section id="team" title="Research Team">
      <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
        {TEAM.core.map((m) => (
          <StaggerItem key={m.name}>
            <div>
              <div className="text-[14px] font-semibold text-ink-900">{m.name}</div>
              {m.affiliation && (
                <div className="text-[12px] text-ink-400 mt-0.5">{m.affiliation}</div>
              )}
            </div>
          </StaggerItem>
        ))}
      </StaggerChildren>
    </Section>
  );
}
