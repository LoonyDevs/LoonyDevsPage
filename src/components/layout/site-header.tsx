// top nav, sticks to the top

import { APP_NAME, NAV_LINKS } from "@/lib/site";

const SiteHeader = () => {
  return (
    <header className="sticky top-0 z-30 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 sm:py-5">
        <a
          href="#top"
          className="font-heading text-lg tracking-tight text-primary"
          aria-label={APP_NAME}
        >
          {APP_NAME}
        </a>
        <nav className="flex items-center gap-6 text-xs tracking-[0.18em] uppercase sm:gap-10">
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
