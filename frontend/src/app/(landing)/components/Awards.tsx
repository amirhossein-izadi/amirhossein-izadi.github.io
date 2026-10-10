"use client";

import { Trophy } from "lucide-react";

import { Section } from "@/components/shared";
import { Disclosure } from "@/components/ui/disclosure";

import { AWARDS } from "../constants";

export function Awards() {
  return (
    <Section id="awards" title="Honors & Awards">
      <div className="border-t border-border">
        {AWARDS.map((award) => (
          <Disclosure
            key={award.id}
            summary={
              <div className="flex min-w-0 items-center gap-3">
                <Trophy
                  className="h-4 w-4 shrink-0 text-muted-foreground"
                  aria-hidden
                />
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium leading-snug">
                    {award.title}
                  </p>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    {award.orgUrl ? (
                      <a
                        href={award.orgUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brand hover:underline"
                        onClick={(event) => event.stopPropagation()}
                      >
                        {award.org}
                      </a>
                    ) : (
                      award.org
                    )}{" "}
                    · {award.year}
                  </p>
                </div>
              </div>
            }
          >
            <p className="pl-7 text-sm leading-relaxed text-muted-foreground">
              {award.description}
            </p>
          </Disclosure>
        ))}
      </div>
    </Section>
  );
}
