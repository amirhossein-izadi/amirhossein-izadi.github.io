import { Mail } from "lucide-react";
import type { ComponentType } from "react";

import { SITE } from "@/lib/constants";
import { GithubIcon, LinkedinIcon } from "@/components/shared";

interface FooterLink {
  href: string;
  label: string;
  icon: ComponentType<{ className?: string }>;
}

const FOOTER_LINKS: FooterLink[] = [
  { href: `mailto:${SITE.email}`, label: "Email", icon: Mail },
  { href: SITE.github, label: "GitHub", icon: GithubIcon },
  { href: SITE.linkedin, label: "LinkedIn", icon: LinkedinIcon },
];

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="flex flex-col items-center justify-between gap-3 text-xs text-muted-foreground sm:flex-row">
        <p>© {new Date().getFullYear()} {SITE.name}</p>
        <div className="flex items-center gap-1">
          {FOOTER_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={
                link.href.startsWith("mailto:")
                  ? undefined
                  : "noopener noreferrer"
              }
              aria-label={link.label}
              className="flex h-8 w-8 items-center justify-center rounded-md transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <link.icon className="h-3.5 w-3.5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
