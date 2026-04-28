import { SEARCH_ROUNDS, DATABASES } from "../data";
import { Section } from "./Section";

export function SearchLog() {
  const hasSearches = SEARCH_ROUNDS.length > 0;

  return (
    <Section
      id="search-log"
      title="Search Log"
      subtitle={
        hasSearches
          ? `${SEARCH_ROUNDS.length} search round(s) completed.`
          : "Search rounds will be logged here starting with the initial search in July 2026."
      }
    >
      {hasSearches ? <SearchTable /> : <SearchPlaceholder />}
    </Section>
  );
}

function SearchPlaceholder() {
  const primary = DATABASES.filter(d => d.category === "primary");
  const grey = DATABASES.filter(d => d.category === "grey");

  return (
    <div className="space-y-6">
      <div className="rounded-lg border border-dashed border-ink-200 bg-ivory-warm/50 overflow-hidden">
        <div className="hidden md:grid grid-cols-7 text-[11px] font-semibold text-ink-400 uppercase tracking-wide border-b border-ink-200/50">
          {["Round", "Date", "Type", "Records", "Duplicates", "Screened", "Included"].map(h => (
            <div key={h} className="px-4 py-3">{h}</div>
          ))}
        </div>
        <div className="px-4 py-10 text-center">
          <p className="text-sm text-ink-400">No search rounds recorded yet</p>
          <p className="text-xs text-ink-300 mt-1">Initial search anticipated July 2026</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="p-5 rounded-lg bg-ivory border border-ink-200/80">
          <h4 className="text-[11px] font-semibold text-ink-500 uppercase tracking-wide mb-4">Primary Databases</h4>
          <div className="space-y-2.5">
            {primary.map(d => (
              <div key={d.name} className="flex items-center gap-2.5 text-[13px] text-ink-700">
                <div className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                {d.name}
              </div>
            ))}
          </div>
        </div>
        <div className="p-5 rounded-lg bg-ivory border border-ink-200/80">
          <h4 className="text-[11px] font-semibold text-ink-500 uppercase tracking-wide mb-4">Grey Literature</h4>
          <div className="space-y-2.5">
            {grey.map(d => (
              <div key={d.name} className="flex items-center gap-2.5 text-[13px] text-ink-700">
                <div className="w-1.5 h-1.5 rounded-full bg-ink-300" />
                {d.name}
              </div>
            ))}
          </div>
          <p className="mt-4 text-[11px] text-ink-400 leading-relaxed">
            Google Scholar: first 200 results by relevance. Backward citation tracking for all included studies.
          </p>
        </div>
      </div>
    </div>
  );
}

function SearchTable() {
  return (
    <div className="rounded-lg border border-ink-200 overflow-hidden">
      <table className="w-full text-xs">
        <thead>
          <tr className="bg-ivory-warm border-b border-ink-200">
            {["Round", "Date", "Type", "Records", "Duplicates", "Screened", "Included", "Notes"].map(h => (
              <th key={h} className="text-left p-3 font-semibold text-ink-500 text-[11px] uppercase tracking-wide">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {SEARCH_ROUNDS.map((round, i) => (
            <tr key={round.id} className={`border-b border-ink-100 ${i % 2 === 0 ? "bg-ivory" : "bg-ivory-warm/50"}`}>
              <td className="p-3 font-semibold text-ink-900">{round.id}</td>
              <td className="p-3 text-ink-600 font-mono tabular-nums">{round.date}</td>
              <td className="p-3">
                <span className={`px-2 py-0.5 rounded text-[10px] font-semibold ${
                  round.type === "initial" ? "bg-teal-50 text-teal-700" : "bg-ink-100 text-ink-600"
                }`}>{round.type}</span>
              </td>
              <td className="p-3 text-right font-mono tabular-nums text-ink-700">{round.recordsIdentified?.toLocaleString() ?? "—"}</td>
              <td className="p-3 text-right font-mono tabular-nums text-ink-700">{round.duplicatesRemoved?.toLocaleString() ?? "—"}</td>
              <td className="p-3 text-right font-mono tabular-nums text-ink-700">{round.screened?.toLocaleString() ?? "—"}</td>
              <td className="p-3 text-right font-mono tabular-nums font-semibold text-ink-900">{round.included?.toLocaleString() ?? "—"}</td>
              <td className="p-3 text-ink-500 max-w-48">{round.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
