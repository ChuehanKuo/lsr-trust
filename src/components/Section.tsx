import type { ReactNode } from "react";

export function Section({
  id,
  title,
  subtitle,
  actions,
  children,
  dark,
}: {
  id: string;
  title: string;
  subtitle?: string;
  actions?: ReactNode;
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <section id={id} className={dark ? "bg-ivory-warm" : "bg-ivory"}>
      <div className="max-w-5xl mx-auto px-5 sm:px-8 py-16 md:py-20">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="font-serif text-[1.7rem] md:text-[2rem] font-semibold text-ink-900 tracking-tight leading-tight">
              {title}
            </h2>
            {subtitle && (
              <p className="text-[0.9rem] text-ink-500 mt-2 max-w-2xl leading-relaxed">{subtitle}</p>
            )}
          </div>
          {actions}
        </div>
        {children}
      </div>
    </section>
  );
}
