import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  return (
    <button
      type="button"
      data-theme-toggle
      aria-label="Toggle color theme"
      title="Toggle color theme"
      className="flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <Sun className="h-4 w-4 dark:hidden" aria-hidden />
      <Moon className="hidden h-4 w-4 dark:block" aria-hidden />
    </button>
  );
}
