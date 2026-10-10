"use client";

import { useMemo, useState } from "react";

import { Section } from "@/components/shared";
import { cn } from "@/lib/utils";

import { EXPERIENCES } from "../constants";
import type { ExperienceType } from "../types";
import { ExperienceEntryItem } from "./ExperienceEntry";

type FilterId = ExperienceType | "all";

const FILTERS: { id: FilterId; label: string }[] = [
  { id: "all", label: "All" },
  { id: "research", label: "Research" },
  { id: "academic", label: "Academic" },
  { id: "industry", label: "Industry" },
];

export function Experience() {
  const [filter, setFilter] = useState<FilterId>("all");

  const entries = useMemo(
    () =>
      filter === "all"
        ? EXPERIENCES
        : EXPERIENCES.filter((entry) => entry.type === filter),
    [filter]
  );

  return (
    <Section
      id="experience"
      title="Experience"
      description="Research, teaching, and industry roles - expand any entry for details."
    >
      <div className="mb-4 flex flex-wrap gap-1.5">
        {FILTERS.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setFilter(item.id)}
            aria-pressed={filter === item.id}
            className={cn(
              "rounded-full border px-3 py-1 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              filter === item.id
                ? "border-brand bg-brand text-brand-foreground"
                : "border-border text-muted-foreground hover:text-foreground"
            )}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="border-t border-border">
        {entries.map((entry) => (
          <ExperienceEntryItem key={entry.id} entry={entry} />
        ))}
      </div>
    </Section>
  );
}
