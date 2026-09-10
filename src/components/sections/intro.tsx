// top of the page

import { SectionLabel } from "@/components/ui/section-label";
import { TextLink } from "@/components/ui/text-link";
import { APP_NAME, FEATURE_IMAGE } from "@/lib/site";

const Intro = () => {
  return (
    <section id="top">
      <div className="mx-auto w-full max-w-3xl px-6 py-20 text-center sm:py-28">
        <SectionLabel>Independent developers</SectionLabel>
        <h1 className="mt-6 font-heading text-4xl leading-[1.1] tracking-tight text-balance sm:text-6xl">
          We build iOS and web apps.
        </h1>
        <p className="mx-auto mt-6 max-w-lg text-base text-muted-foreground sm:text-lg">
          {APP_NAME} is a small team making our own products. Several are live on
          the App Store, with more in progress.
        </p>

        <div className="mt-9 flex flex-wrap justify-center gap-x-8 gap-y-3">
          <TextLink href="#work">See the apps</TextLink>
          <TextLink href="#contact" tone="muted">
            Get in touch
          </TextLink>
        </div>
      </div>

      {FEATURE_IMAGE ? (
        <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden border-y border-border px-6 sm:aspect-[21/9]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={FEATURE_IMAGE}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/55" />
          <p className="relative text-center font-heading text-lg tracking-[0.08em] text-white uppercase sm:text-2xl">
            Building. Breaking. Creating.
          </p>
        </div>
      ) : null}
    </section>
  );
};

export default Intro;
