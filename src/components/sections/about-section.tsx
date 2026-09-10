// about blurb + the what-we-do list

import { SectionLabel } from "@/components/ui/section-label";
import { SERVICES } from "@/lib/site";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="scroll-mt-20 border-t border-border bg-accent"
    >
      <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:py-28">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
          <div>
            <SectionLabel>About</SectionLabel>
            <h2 className="mt-4 font-heading text-3xl tracking-tight sm:text-4xl">
              A small team of developers.
            </h2>
          </div>

          <div className="space-y-5 text-base text-muted-foreground">
            <p>
              Loony Devs is a small team of developers. We build iOS and web
              apps, some running on both platforms with one shared account.
            </p>
            <p>
              The apps above are live on the App Store, with more in progress.
              We also build games and take part in game jams.
            </p>
          </div>
        </div>

        <dl className="mt-16 border-t border-border">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="grid gap-1 border-b border-border py-5 sm:grid-cols-[10rem_1fr] sm:gap-8"
            >
              <dt className="font-heading tracking-tight">{service.title}</dt>
              <dd className="text-sm text-muted-foreground">
                {service.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default AboutSection;
