import { OrgLogo, Section } from "@/components/shared";

import { EDUCATION } from "../constants";

export function Education() {
  return (
    <Section id="education" title="Education">
      <div className="flex items-start gap-4">
        <OrgLogo
          src="/logos/sbu.svg"
          darkSrc="/logos/sbu-dark.svg"
          alt={EDUCATION.school}
        />
        <div className="min-w-0 flex-1">
          <h3 className="text-sm font-medium leading-snug">
            {EDUCATION.degree} ·{" "}
            <a
              href={EDUCATION.schoolUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand hover:underline"
            >
              {EDUCATION.school}
            </a>
          </h3>
          <p className="mt-0.5 text-xs text-muted-foreground">
            {EDUCATION.period}
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            GPA {EDUCATION.gpa} · Last two years {EDUCATION.recentGpa}
          </p>
          <p className="mt-3 text-xs font-medium text-muted-foreground">
            Notable coursework
          </p>
          <div className="mt-1.5 flex flex-wrap gap-1.5">
            {EDUCATION.coursework.map((item) => (
              <span
                key={item.course}
                className="rounded-full border border-border px-2.5 py-1 text-xs text-muted-foreground"
              >
                {item.course}{" "}
                <span className="font-medium text-foreground">
                  {item.score}
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
