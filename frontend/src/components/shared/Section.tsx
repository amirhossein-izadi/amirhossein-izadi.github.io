import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  title?: string;
  description?: string;
  className?: string;
  children: React.ReactNode;
}

export function Section({ id, title, description, className, children }: SectionProps) {
  return (
    <section id={id} className={cn("scroll-mt-24 border-t border-border py-10 sm:py-12", className)}>
      {title ? (
        <h2 className="font-serif text-xl font-semibold tracking-tight sm:text-2xl">
          {title}
        </h2>
      ) : null}
      {description ? (
        <p className="mt-1.5 text-sm text-muted-foreground">{description}</p>
      ) : null}
      <div className={title || description ? "mt-6" : undefined}>{children}</div>
    </section>
  );
}
