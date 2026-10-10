import Image from "next/image";
import { Building2 } from "lucide-react";

import { cn } from "@/lib/utils";

interface OrgLogoProps {
  src?: string;
  darkSrc?: string;
  alt: string;
  className?: string;
}

export function OrgLogo({ src, darkSrc, alt, className }: OrgLogoProps) {
  return (
    <span className={cn("relative block h-10 w-14 shrink-0", className)}>
      {src ? (
        <>
          <Image
            src={src}
            alt={alt}
            fill
            sizes="56px"
            unoptimized
            className={cn("object-contain", darkSrc && "dark:hidden")}
          />
          {darkSrc ? (
            <Image
              src={darkSrc}
              alt={alt}
              fill
              sizes="56px"
              unoptimized
              className="hidden object-contain dark:block"
            />
          ) : null}
        </>
      ) : (
        <span className="flex h-full w-full items-center justify-center">
          <Building2 className="h-5 w-5 text-muted-foreground" aria-hidden />
        </span>
      )}
    </span>
  );
}
