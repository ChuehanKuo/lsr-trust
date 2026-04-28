import { REVIEW_META, STATUS_LABELS } from "../data";

export function StatusBanner() {
  const status = STATUS_LABELS[REVIEW_META.status];
  const colorMap = {
    amber: { dot: "bg-amber-500", text: "text-amber-700", bg: "bg-amber-50" },
    emerald: { dot: "bg-emerald-500", text: "text-emerald-700", bg: "bg-emerald-50" },
    primary: { dot: "bg-teal-500", text: "text-teal-700", bg: "bg-teal-50" },
  };
  const c = colorMap[status.color];

  return (
    <div className="bg-white border-b border-ink-200/50">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 py-2 flex items-center justify-between">
        <div className={`flex items-center gap-2 px-2.5 py-1 rounded-full ${c.bg}`}>
          <span className={`w-1.5 h-1.5 rounded-full ${c.dot} animate-pulse`} />
          <span className={`text-[11px] font-medium ${c.text}`}>{status.label}</span>
        </div>
        <span className="text-[11px] text-ink-300 font-mono tabular-nums">
          {REVIEW_META.lastUpdated}
        </span>
      </div>
    </div>
  );
}
