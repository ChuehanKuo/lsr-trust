import { REVIEW_META, STATUS_LABELS } from "../data";

export function StatusBanner() {
  const status = STATUS_LABELS[REVIEW_META.status];
  const colorMap = {
    amber: { dot: "bg-amber-400", text: "text-amber-200" },
    emerald: { dot: "bg-emerald-400", text: "text-emerald-200" },
    primary: { dot: "bg-teal-400", text: "text-teal-200" },
  };
  const c = colorMap[status.color];

  return (
    <div className="bg-navy-950">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 py-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className={`w-1.5 h-1.5 rounded-full ${c.dot} animate-pulse`} />
          <span className={`text-[11px] font-medium ${c.text}`}>{status.label}</span>
        </div>
        <span className="text-[11px] text-white/25 font-mono tabular-nums">
          {REVIEW_META.lastUpdated}
        </span>
      </div>
    </div>
  );
}
