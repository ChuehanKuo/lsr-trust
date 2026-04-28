import { REVIEW_META, STATUS_LABELS } from "../data";

export function StatusBanner() {
  const status = STATUS_LABELS[REVIEW_META.status];
  const colorMap = {
    amber: { dot: "bg-amber-400", text: "text-amber-600", bg: "bg-amber-50 border-amber-200/50" },
    emerald: { dot: "bg-emerald-400", text: "text-emerald-600", bg: "bg-emerald-50 border-emerald-200/50" },
    primary: { dot: "bg-teal-400", text: "text-teal-600", bg: "bg-teal-50 border-teal-200/50" },
  };
  const c = colorMap[status.color];

  return (
    <div className="border-b border-ink-100">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 py-3 flex items-center justify-between">
        <div className={`flex items-center gap-2 px-3 py-1 rounded-full border ${c.bg}`}>
          <span className={`w-2 h-2 rounded-full ${c.dot} animate-pulse`} />
          <span className={`text-[12px] font-semibold ${c.text}`}>{status.label}</span>
        </div>
        <span className="text-[12px] text-ink-300 font-mono tabular-nums">
          Last updated {REVIEW_META.lastUpdated}
        </span>
      </div>
    </div>
  );
}
