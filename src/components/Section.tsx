import type { ReactNode } from "react";
import { FadeIn } from "./FadeIn";

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
    <section id={id} className={dark ? "bg-ink-50" : "bg-white"}>
      <div className="section-divider" />
      <div className="max-w-5xl mx-auto px-5 sm:px-8 py-20 md:py-28">
        <FadeIn>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-1 rounded-full bg-gradient-to-r from-teal-500 to-cyan-400" />
              </div>
              <h2 className="font-serif text-[2rem] md:text-[2.5rem] font-normal text-ink-900 tracking-tight leading-tight">
                {title}
              </h2>
              {subtitle && (
                <p className="text-[0.95rem] text-ink-400 mt-3 max-w-2xl leading-relaxed">{subtitle}</p>
              )}
            </div>
            {actions}
          </div>
        </FadeIn>
        <FadeIn delay={0.15}>
          {children}
        </FadeIn>
      </div>
    </section>
  );
}
