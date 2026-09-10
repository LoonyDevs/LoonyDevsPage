// the app rows, one per category, scroll sideways

import { SectionLabel } from "@/components/ui/section-label";
import { PROJECT_CATEGORIES, PROJECTS } from "@/lib/projects";
import ProjectCard from "./project-card";

const WorkSection = () => {
  const rows = PROJECT_CATEGORIES.map((category) => ({
    category,
    projects: PROJECTS.filter((project) => project.category === category),
  })).filter((row) => row.projects.length > 0);

  return (
    <section
      id="work"
      className="scroll-mt-20 border-t border-border py-20 sm:py-28"
    >
      <div className="mx-auto w-full max-w-6xl px-6 text-center">
        <SectionLabel>Our apps</SectionLabel>
        <h2 className="mt-4 font-heading text-3xl tracking-tight sm:text-4xl">
          A few things we&apos;ve shipped
        </h2>
      </div>

      <div className="mt-14 flex flex-col gap-12">
        {rows.map(({ category, projects }) => (
          <div key={category}>
            <h3 className="mx-auto w-full max-w-6xl px-6 font-heading text-xl tracking-tight">
              {category}
            </h3>

            <div className="mt-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pt-2 pb-10 [-ms-overflow-style:none] [scrollbar-width:none] sm:gap-5 lg:px-[max(1.5rem,calc((100%-72rem)/2))] [&::-webkit-scrollbar]:hidden">
              {projects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkSection;
