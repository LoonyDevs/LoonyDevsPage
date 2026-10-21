// the /tools index, a ruled list

import Link from "next/link";

import { SectionLabel } from "@/components/ui/section-label";
import { TOOLS } from "@/lib/tools";

const ToolsHome = () => {
  return (
    <section className="mx-auto w-full max-w-4xl px-6 py-16 sm:py-24">
      <SectionLabel>Free tools</SectionLabel>
      <h1 className="mt-4 font-heading text-4xl tracking-tight sm:text-5xl">
        Tools &amp; utilities
      </h1>
      <p className="mt-4 max-w-xl text-base text-muted-foreground">
        Free utilities that run in your browser. Nothing you enter is sent
        anywhere.
      </p>

      <ul className="mt-12 border-t border-border">
        {TOOLS.map((tool) => (
          <li key={tool.href} className="border-b border-border">
            <Link
              href={tool.href}
              className="group relative grid gap-1 py-5 sm:grid-cols-[16rem_1fr_auto] sm:items-baseline sm:gap-8"
            >
              <span className="pr-8 font-heading text-lg tracking-tight transition-colors group-hover:text-primary sm:pr-0">
                {tool.label}
              </span>
              <span className="text-sm text-muted-foreground">
                {tool.description}
              </span>
              <span
                aria-hidden
                className="absolute top-5 right-0 text-primary transition-opacity sm:static sm:opacity-0 sm:group-hover:opacity-100"
              >
                &rarr;
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ToolsHome;
