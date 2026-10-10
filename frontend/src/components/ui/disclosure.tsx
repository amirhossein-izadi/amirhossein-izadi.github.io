"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

interface DisclosureProps {
  summary: React.ReactNode | ((open: boolean) => React.ReactNode);
  children?: React.ReactNode;
  className?: string;
}

export function Disclosure({ summary, children, className }: DisclosureProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className={cn("border-b border-border last:border-b-0", className)}>
      <div
        className="flex cursor-pointer items-start gap-4 py-4"
        onClick={() => setOpen((value) => !value)}
      >
        <div className="min-w-0 flex-1">
          {typeof summary === "function" ? summary(open) : summary}
        </div>
        <button
          type="button"
          aria-expanded={open}
          aria-label={open ? "Collapse details" : "Expand details"}
          onClick={(event) => {
            event.stopPropagation();
            setOpen((value) => !value);
          }}
          className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <ChevronDown
            className={cn(
              "h-4 w-4 transition-transform duration-200",
              open && "rotate-180"
            )}
          />
        </button>
      </div>
      {open && children ? <div className="pb-4">{children}</div> : null}
    </div>
  );
}
