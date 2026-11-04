// the /services page body

import { SectionLabel } from "@/components/ui/section-label";
import { LOCATION } from "@/lib/site";
import { PROCESS_STEPS, SERVICE_AREAS, SERVICE_DETAILS } from "@/lib/services";

const ServicesSection = () => {
  return (
    <>
      <section id="top">
        <div className="mx-auto w-full max-w-3xl px-6 py-20 text-center sm:py-28">
          <SectionLabel>Services</SectionLabel>
          <h1 className="mt-6 font-heading text-4xl leading-[1.1] tracking-tight text-balance sm:text-6xl">
            Web apps, <span className="whitespace-nowrap">e-commerce</span> and
            iOS apps in {LOCATION.city}.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
            We&apos;re a small remote team in {LOCATION.city}, {LOCATION.region}
            . We build web apps, online stores and iOS apps for businesses
            across {LOCATION.metro} and beyond.
          </p>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:py-28">
          <SectionLabel>What we build</SectionLabel>
          <div className="mt-10 grid gap-10 lg:grid-cols-3 lg:gap-12">
            {SERVICE_DETAILS.map((service) => (
              <article
                key={service.id}
                id={service.id}
                className="scroll-mt-24"
              >
                <h2 className="font-heading text-2xl tracking-tight">
                  {service.title}
                </h2>
                <p className="mt-3 text-sm text-muted-foreground">
                  {service.summary}
                </p>
                <ul className="mt-5 space-y-2 border-t border-border pt-5 text-sm">
                  {service.points.map((point) => (
                    <li key={point} className="text-muted-foreground">
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-accent">
        <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:py-28">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
            <div>
              <SectionLabel>How it works</SectionLabel>
              <h2 className="mt-4 font-heading text-3xl tracking-tight sm:text-4xl">
                Simple, and in the open.
              </h2>
            </div>
            <ol className="border-t border-border">
              {PROCESS_STEPS.map((step, index) => (
                <li
                  key={step.title}
                  className="grid gap-1 border-b border-border py-5 sm:grid-cols-[10rem_1fr] sm:gap-8"
                >
                  <span className="font-heading tracking-tight">
                    {index + 1}. {step.title}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {step.description}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto w-full max-w-3xl px-6 py-20 text-center sm:py-28">
          <SectionLabel>Where we work</SectionLabel>
          <h2 className="mt-4 font-heading text-3xl tracking-tight sm:text-4xl">
            Remote, from {LOCATION.city}.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-muted-foreground">
            We work with clients in {SERVICE_AREAS.join(", ")} and beyond. The
            work is all done remotely, so there&apos;s no office to visit and no
            need to be close by.
          </p>
        </div>
      </section>
    </>
  );
};

export default ServicesSection;
