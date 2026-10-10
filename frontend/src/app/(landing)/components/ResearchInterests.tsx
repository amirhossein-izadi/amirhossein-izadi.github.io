import { Section } from "@/components/shared";
import { cn } from "@/lib/utils";

import { ADDITIONAL_RESEARCH, PRIMARY_RESEARCH } from "../constants";

interface ChipListProps {
  items: string[];
  primary?: boolean;
}

function ChipList({ items, primary = false }: ChipListProps) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {items.map((item) => (
        <span
          key={item}
          className={cn(
            "rounded-full border px-2.5 py-1 text-xs",
            primary
              ? "border-brand/30 bg-brand/5 text-foreground"
              : "border-border text-muted-foreground"
          )}
        >
          {item}
        </span>
      ))}
    </div>
  );
}

export function ResearchInterests() {
  return (
    <Section id="research" title="Research Interests">
      <div className="space-y-4">
        <div className="flex flex-col gap-1.5 sm:flex-row sm:gap-4">
          <span className="w-24 shrink-0 pt-1 text-xs font-medium text-muted-foreground">
            Primary
          </span>
          <ChipList items={PRIMARY_RESEARCH} primary />
        </div>
        <div className="flex flex-col gap-1.5 sm:flex-row sm:gap-4">
          <span className="w-24 shrink-0 pt-1 text-xs font-medium text-muted-foreground">
            Additional
          </span>
          <ChipList items={ADDITIONAL_RESEARCH} />
        </div>
      </div>
    </Section>
  );
}
