// one app card. poster on top, info below, more shows on hover

import { ArrowUpRight } from "lucide-react";

import { projectAsset, type Project } from "@/lib/projects";
import { cn } from "@/lib/utils";

const ProjectCard = ({ project }: { project: Project }) => {
  const primary = project.links?.[0];

  return (
    <div className="group relative w-[76vw] shrink-0 snap-start transition-transform duration-300 ease-out sm:w-[340px] lg:hover:z-10 lg:hover:scale-[1.04]">
      <div className="overflow-hidden rounded-xl border border-border bg-card transition-colors duration-300 group-hover:border-primary/50 group-hover:shadow-xl">
        <div className="relative flex aspect-video items-center justify-center overflow-hidden bg-accent">
          {project.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={projectAsset(project.slug, "poster.jpg")}
              alt={project.name}
              className="absolute inset-0 h-full w-full object-cover"
            />
          ) : project.icon ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={projectAsset(project.slug, "icon.jpg")}
              alt={`${project.name} app icon`}
              className="h-[46%] w-auto rounded-[22%] shadow-lg ring-1 ring-black/5"
            />
          ) : (
            <span className="px-6 text-center font-heading text-xl text-primary/40 italic">
              {project.name}
            </span>
          )}
          <span className="pointer-events-none absolute inset-0 bg-primary/0 transition-colors duration-300 group-hover:bg-primary/5" />
          {primary ? (
            <a
              href={primary.href}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.name} — ${primary.label}`}
              className="absolute inset-0"
            />
          ) : null}
        </div>

        <div className="p-4">
          <div className="flex items-baseline justify-between gap-3">
            <h3 className="font-heading text-lg tracking-tight">
              {project.name}
            </h3>
            <span className="shrink-0 text-xs tracking-[0.15em] text-muted-foreground uppercase">
              {project.year}
            </span>
          </div>
          <p
            className={cn(
              "mt-1 text-xs tracking-[0.15em] uppercase",
              project.status === "Beta" ? "text-spark" : "text-primary",
            )}
          >
            {project.status}
          </p>
          <p className="mt-2 text-sm text-muted-foreground">{project.tagline}</p>

          {/* shows on hover */}
          <div className="grid grid-rows-[0fr] transition-all duration-300 ease-out group-hover:grid-rows-[1fr]">
            <div className="overflow-hidden">
              <p className="pt-2 text-xs text-muted-foreground">
                {project.tags.join(" · ")}
              </p>
              {project.links?.length ? (
                <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
                  {project.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="relative z-10 inline-flex items-center gap-1 text-sm text-primary hover:underline"
                    >
                      {link.label} <ArrowUpRight className="size-3.5" />
                    </a>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
