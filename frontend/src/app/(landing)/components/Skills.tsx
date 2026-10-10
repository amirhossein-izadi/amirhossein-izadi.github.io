import { Section } from "@/components/shared";

import { SKILL_GROUPS } from "../constants";

export function Skills() {
  return (
    <Section id="skills" title="Skills">
      <dl className="space-y-3.5">
        {SKILL_GROUPS.map((group) => (
          <div
            key={group.label}
            className="flex flex-col gap-1.5 sm:flex-row sm:gap-4"
          >
            <dt className="w-40 shrink-0 pt-1 text-xs font-medium text-muted-foreground">
              {group.label}
            </dt>
            <dd className="flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border px-2.5 py-1 text-xs text-muted-foreground"
                >
                  {item}
                </span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
