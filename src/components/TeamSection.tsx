import { TEAM } from "../data";
import { Section } from "./Section";
import { StaggerChildren, StaggerItem } from "./FadeIn";

export function TeamSection() {
  return (
    <Section id="team" title="Research Team">
      <StaggerChildren className="grid grid-cols-6 gap-3">
        {TEAM.core.map((m) => (
          <StaggerItem key={m.name}>
            <div className="p-4 rounded-lg border border-ink-200 bg-ink-50 hover:border-teal-300 hover:shadow-sm transition-all h-full text-center">
              <div className="w-10 h-10 rounded-full bg-teal-700 text-white font-semibold text-[14px] flex items-center justify-center mb-3 mx-auto">
                {m.name.charAt(0)}
              </div>
              <div className="text-[13px] font-semibold text-ink-900">{m.name}</div>
              {m.affiliation && (
                <div className="text-[11px] text-ink-400 mt-1 leading-relaxed">{m.affiliation}</div>
              )}
            </div>
          </StaggerItem>
        ))}
      </StaggerChildren>
    </Section>
  );
}
