import { ExternalLink, FileText } from "lucide-react";

import { OrgLogo } from "@/components/shared";
import { Disclosure } from "@/components/ui/disclosure";
import { cn } from "@/lib/utils";

import type { CourseLine, ExperienceEntry, Ref } from "../types";

const TYPE_DOT: Record<ExperienceEntry["type"], string> = {
  research: "bg-violet-500",
  academic: "bg-emerald-500",
  industry: "bg-sky-500",
};

function RefLink({ item }: { item: Ref }) {
  return (
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-brand hover:underline"
      onClick={(event) => event.stopPropagation()}
    >
      {item.label}
    </a>
  );
}

function RefList({ items }: { items: Ref[] }) {
  return (
    <>
      {items.map((item, index) => (
        <span key={`${item.label}-${item.href}`}>
          {index > 0 ? ", " : ""}
          <RefLink item={item} />
        </span>
      ))}
    </>
  );
}

function CourseName({ name }: { name: string }) {
  const segments = name.split("(Graduate Course)");
  if (segments.length === 1) {
    return <>{name}</>;
  }
  return (
    <>
      {segments.map((segment, index) => (
        <span key={`${segment}-${index}`}>
          {segment}
          {index < segments.length - 1 ? (
            <>
              (
              <strong className="font-semibold text-foreground">
                Graduate Course
              </strong>
              )
            </>
          ) : null}
        </span>
      ))}
    </>
  );
}

function CourseLines({ courses }: { courses: CourseLine[] }) {
  return (
    <ul className="space-y-1">
      {courses.map((line) => (
        <li
          key={`${line.name}-${line.terms}`}
          className="flex gap-2 text-[13px] leading-relaxed text-muted-foreground"
        >
          <span
            className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-muted-foreground/50"
            aria-hidden
          />
          <span>
            <CourseName name={line.name} /> - {line.terms}
            {line.instructors.length > 0 ? (
              <>
                {" · "}
                <RefList items={line.instructors} />
              </>
            ) : null}
          </span>
        </li>
      ))}
    </ul>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-1">
      {items.map((item) => (
        <li
          key={item}
          className="flex gap-2 text-[13px] leading-relaxed text-muted-foreground"
        >
          <span
            className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-muted-foreground/50"
            aria-hidden
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

interface ExperienceEntryItemProps {
  entry: ExperienceEntry;
}

export function ExperienceEntryItem({ entry }: ExperienceEntryItemProps) {
  const hasDetails = Boolean(
    entry.description ||
      entry.achievements?.length ||
      entry.courses?.length ||
      entry.positions?.length ||
      entry.mentors?.length ||
      entry.documents?.length ||
      entry.references?.length
  );

  return (
    <Disclosure
      summary={(open) => (
        <div className="flex min-w-0 items-start gap-3">
          <OrgLogo
            src={entry.logo}
            darkSrc={entry.logoDarkSrc}
            alt={entry.org}
          />
          <div className="min-w-0 flex-1">
            <p className="text-sm font-medium leading-snug">{entry.role}</p>
            <p className="mt-0.5 text-xs text-muted-foreground">
              {entry.orgUrl ? (
                <RefLink item={{ label: entry.org, href: entry.orgUrl }} />
              ) : (
                entry.org
              )}{" "}
              · {entry.period}
            </p>
            <p
              className={cn(
                "mt-1 text-xs leading-relaxed text-muted-foreground",
                !open && "max-sm:truncate sm:line-clamp-2"
              )}
            >
              {entry.summary}
            </p>
          </div>
          <span className="mt-1 hidden shrink-0 items-center gap-1.5 text-[11px] capitalize text-muted-foreground sm:inline-flex">
            <span
              className={cn("h-1.5 w-1.5 rounded-full", TYPE_DOT[entry.type])}
              aria-hidden
            />
            {entry.type}
          </span>
        </div>
      )}
    >
      {hasDetails ? (
        <div className="space-y-3 sm:pl-[4.25rem]">
          {entry.description ? (
            <p className="text-sm leading-relaxed text-muted-foreground">
              {entry.description}
            </p>
          ) : null}
          {entry.achievements?.length ? (
            <BulletList items={entry.achievements} />
          ) : null}
          {entry.courses?.length ? (
            <CourseLines courses={entry.courses} />
          ) : null}
          {entry.positions?.map((position) => (
            <div
              key={position.title}
              className="rounded-md border border-border/70 bg-muted/30 p-3.5"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                <p className="text-xs font-semibold text-foreground">
                  {position.title}
                </p>
                <span className="text-[11px] text-muted-foreground">
                  {position.period}
                </span>
              </div>
              {position.description ? (
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {position.description}
                </p>
              ) : null}
              {position.courses?.length ? (
                <div className="mt-2">
                  <CourseLines courses={position.courses} />
                </div>
              ) : null}
              {position.items?.length ? (
                <div className="mt-2">
                  <BulletList items={position.items} />
                </div>
              ) : null}
            </div>
          ))}
          {entry.mentors?.length ? (
            <p className="text-sm leading-relaxed text-muted-foreground">
              Supervised by <RefList items={entry.mentors} />
            </p>
          ) : null}
          {entry.documents?.length ? (
            <div className="flex flex-wrap gap-3">
              {entry.documents.map((doc) => (
                <a
                  key={doc.href}
                  href={doc.href}
                  download
                  className="inline-flex items-center gap-1.5 text-xs text-brand hover:underline"
                  onClick={(event) => event.stopPropagation()}
                >
                  <FileText className="h-3.5 w-3.5" aria-hidden />
                  {doc.label}
                </a>
              ))}
            </div>
          ) : null}
          {entry.references?.length ? (
            <div className="flex flex-wrap gap-3">
              {entry.references.map((reference) => (
                <a
                  key={reference.href}
                  href={reference.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-brand hover:underline"
                  onClick={(event) => event.stopPropagation()}
                >
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                  {reference.label}
                </a>
              ))}
            </div>
          ) : null}
        </div>
      ) : null}
    </Disclosure>
  );
}
