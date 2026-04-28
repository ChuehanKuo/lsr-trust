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
    <section id={id} className={dark ? "bg-ink-50 border-y border-ink-100" : "bg-white"}>
      <div className="max-w-[1100px] mx-auto px-6 py-16 md:py-24">
        <FadeIn>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
            <div>
              <h2 className="font-serif text-[1.75rem] md:text-[2rem] font-normal text-ink-900 leading-tight">
                {title}
              </h2>
              {subtitle && (
                <p className="text-[14px] text-ink-400 mt-2 max-w-2xl leading-relaxed">{subtitle}</p>
              )}
            </div>
            {actions}
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>{children}</FadeIn>
      </div>
    </section>
  );
}
