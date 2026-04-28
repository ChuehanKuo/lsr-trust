import { UPDATE_LOG } from "../data";
import { Section } from "./Section";

const TYPE_STYLES: Record<string, { bg: string; text: string }> = {
  protocol:    { bg: "bg-teal-50", text: "text-teal-700" },
  search:      { bg: "bg-emerald-50", text: "text-emerald-700" },
  methodology: { bg: "bg-amber-50", text: "text-amber-700" },
  synthesis:   { bg: "bg-sky-50", text: "text-sky-700" },
  publication: { bg: "bg-ink-100", text: "text-ink-700" },
};

export function UpdateHistory() {
  return (
    <Section
      id="updates"
      title="Update History"
      subtitle="Versioned changelog of protocol revisions, search rounds, methodology changes, and synthesis updates."
    >
      <div className="relative">
        {UPDATE_LOG.length > 1 && (
          <div className="absolute left-[15px] top-10 bottom-10 w-px bg-gradient-to-b from-ink-200 via-ink-200 to-transparent" />
        )}
        <div className="space-y-4">
          {UPDATE_LOG.map((entry) => {
            const style = TYPE_STYLES[entry.type] || TYPE_STYLES.protocol;
            return (
              <div key={entry.version} className="flex gap-4 items-start">
                <div className="relative z-10 shrink-0 w-[31px] h-[31px] rounded-full bg-ivory border-2 border-ink-200 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-teal-500" />
                </div>
                <div className="flex-1 p-4 rounded-lg border border-ink-200/80 bg-ivory hover:border-ink-300 transition-colors">
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <span className="text-sm font-bold text-ink-900 font-mono">{entry.version}</span>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-semibold ${style.bg} ${style.text}`}>
                      {entry.type}
                    </span>
                    <span className="text-xs text-ink-400 font-mono tabular-nums">{entry.date}</span>
                  </div>
                  <p className="text-[13px] text-ink-600 leading-relaxed">{entry.summary}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
