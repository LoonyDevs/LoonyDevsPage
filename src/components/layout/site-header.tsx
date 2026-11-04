// top nav, sticks to the top

import Link from "next/link";

import { APP_NAME, NAV_LINKS } from "@/lib/site";

const SiteHeader = () => {
  return (
    <header className="sticky top-0 z-30 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-4 sm:gap-4 sm:px-6 sm:py-5">
        <Link
          href="/"
          className="shrink-0 font-heading text-base tracking-tight sm:text-lg whitespace-nowrap text-primary"
          aria-label={APP_NAME}
        >
          {APP_NAME}
        </Link>
        <nav className="flex items-center gap-2 text-[11px] tracking-[0.05em] uppercase sm:gap-10 sm:text-xs sm:tracking-[0.18em]">
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default SiteHeader;
