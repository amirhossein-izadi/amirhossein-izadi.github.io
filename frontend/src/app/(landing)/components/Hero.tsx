import Image from "next/image";
import { Download, Mail, Send } from "lucide-react";
import type { ComponentType } from "react";

import { SITE } from "@/lib/constants";
import { GithubIcon, LinkedinIcon } from "@/components/shared";

interface HeroLink {
  href: string;
  label: string;
  icon: ComponentType<{ className?: string }>;
  download?: boolean;
  labeled?: boolean;
}

const LINKS: HeroLink[] = [
  {
    href: "/files/Amirhossein-Izadi-cv.pdf",
    label: "Download CV",
    icon: Download,
    download: true,
    labeled: true,
  },
  { href: `mailto:${SITE.email}`, label: "Email", icon: Mail },
  { href: SITE.github, label: "GitHub", icon: GithubIcon },
  { href: SITE.linkedin, label: "LinkedIn", icon: LinkedinIcon },
  { href: SITE.telegram, label: "Telegram", icon: Send },
];

export function Hero() {
  return (
    <section className="pb-4 pt-12 sm:pt-16">
      <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:items-start sm:gap-6 sm:text-left">
        <Image
          src="/avatar.jpg"
          alt={SITE.name}
          width={112}
          height={112}
          priority
          className="h-28 w-28 shrink-0 rounded-full border border-border object-cover sm:h-32 sm:w-32"
        />
        <div className="min-w-0 sm:flex-1">
          <h1 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
            {SITE.name}
          </h1>
          <p className="mt-1.5 text-sm text-muted-foreground sm:text-base">
            {SITE.title}
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            {SITE.affiliation} · {SITE.location}
          </p>
          <p className="mt-2 text-sm font-medium text-red-600 dark:text-red-400">
            Actively seeking MS/PhD opportunities - Fall 2027
          </p>
          <div className="mt-3 flex flex-wrap items-center justify-center gap-2 sm:justify-start">
            {LINKS.map((link) =>
              link.labeled ? (
                <a
                  key={link.label}
                  href={link.href}
                  title={link.label}
                  aria-label={link.label}
                  download={link.download ? "" : undefined}
                  className="inline-flex h-9 items-center gap-2 rounded-md border border-border px-3 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <link.icon className="h-4 w-4" />
                  {link.label}
                </a>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  title={link.label}
                  aria-label={link.label}
                  target={
                    link.href.startsWith("mailto:") ? undefined : "_blank"
                  }
                  rel={
                    link.href.startsWith("mailto:")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <link.icon className="h-4 w-4" />
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
