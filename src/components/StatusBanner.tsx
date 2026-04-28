import { REVIEW_META, STATUS_LABELS } from "../data";

export function StatusBanner() {
  const status = STATUS_LABELS[REVIEW_META.status];
  const colorMap = {
    amber: { dot: "bg-amber-500", text: "text-amber-700" },
    emerald: { dot: "bg-emerald-600", text: "text-emerald-700" },
    primary: { dot: "bg-teal-600", text: "text-teal-700" },
  };
  const c = colorMap[status.color];

  return (
    <div className="bg-ink-50 border-b border-ink-200">
      <div className="max-w-[1100px] mx-auto px-6 py-2.5 flex items-center justify-between text-[12px]">
        <div className="flex items-center gap-2">
          <span className={`w-2 h-2 rounded-full ${c.dot}`} />
          <span className={`font-medium ${c.text}`}>{status.label}</span>
        </div>
        <span className="text-ink-400 font-mono tabular-nums">
          Updated {REVIEW_META.lastUpdated}
        </span>
      </div>
    </div>
  );
}
