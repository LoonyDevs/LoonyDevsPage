// bottom bar, copyright + links

import { APP_NAME, GITHUB_URL, NAV_LINKS } from "@/lib/site";

const SiteFooter = () => {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>
          &copy; {new Date().getFullYear()}{" "}
          <span className="font-heading text-primary">{APP_NAME}</span>
        </p>

        <nav className="flex gap-6">
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-primary"
          >
            GitHub
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default SiteFooter;
