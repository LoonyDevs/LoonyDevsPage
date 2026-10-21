// Fly My Kite app page

import type { Metadata } from "next";
import Image from "next/image";

import SiteFooter from "@/components/layout/site-footer";
import { SectionLabel } from "@/components/ui/section-label";
import { TextLink } from "@/components/ui/text-link";
import { projectAsset } from "@/lib/projects";
import { MAILTO, SUPPORT_EMAIL } from "@/lib/site";

const SLUG = "fly-my-kite";

export const metadata: Metadata = {
  title: "Fly My Kite",
  description:
    "Fly My Kite gives you a clear YES or NOT YET for kite flying, with live wind, an hour-by-hour forecast and the best window of the day to fly.",
  alternates: { canonical: "/fly-my-kite" },
};

const FEATURES = [
  {
    title: "A clear answer",
    description:
      "A bold YES or NOT YET based on the wind range that works for kites (10–24 mph), with a simple wind gauge.",
  },
  {
    title: "Flying Windows",
    description:
      "Hour-by-hour wind for the next 12 hours, with the best stretch of the day called out.",
  },
  {
    title: "Search any ZIP code",
    description:
      "Check anywhere you plan to fly. Recent places are one tap away, and so is your current location.",
  },
  {
    title: "Optional alerts",
    description:
      "Get a notification when the wind looks good, or a daily forecast. Set your own minimum wind speed, or use the recommended one.",
  },
  {
    title: "Your units",
    description: "Choose mph or km/h, and Fahrenheit or Celsius.",
  },
  {
    title: "Made for bigger screens",
    description:
      "On iPad: a 24-hour wind trend, a 7-day outlook and extra conditions like gusts, humidity, visibility, rain chance, UV index and sunset. Also ready for iPhone Duo.",
  },
];

const FlyMyKitePage = () => {
  return (
    <div className="flex min-h-full flex-col">
      <main className="flex-1">
        <section className="mx-auto w-full max-w-6xl px-6 py-16 sm:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
            <div>
              <Image
                width={96}
                height={96}
                priority
                src={projectAsset(SLUG, "icon.jpg")}
                alt="Fly My Kite app icon"
                className="size-24 rounded-[22%] shadow-lg ring-1 ring-black/5"
              />
              <SectionLabel className="mt-8">iOS app</SectionLabel>
              <h1 className="mt-4 font-heading text-4xl tracking-tight sm:text-5xl">
                Fly My Kite
              </h1>
              <p className="mt-5 max-w-xl text-lg text-muted-foreground">
                Can I fly my kite? Know before you go. A clear YES or NOT YET,
                live wind, and the best window of the day to fly.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3">
                <TextLink href="/fly-my-kite/privacy">Privacy policy</TextLink>
                <TextLink href={MAILTO} tone="muted">
                  Support
                </TextLink>
              </div>
            </div>

            <div className="flex justify-center gap-4 lg:justify-end">
              {[1, 2, 3].map((n) => (
                <Image
                  key={n}
                  width={500}
                  height={1087}
                  src={projectAsset(SLUG, `screenshot-${n}.jpg`)}
                  alt={`Fly My Kite screenshot ${n}`}
                  className={
                    n === 2
                      ? "hidden w-36 rounded-2xl border border-border shadow-xl sm:block lg:w-40"
                      : n === 3
                        ? "hidden w-36 rounded-2xl border border-border shadow-xl md:block lg:w-40"
                        : "w-44 rounded-2xl border border-border shadow-xl sm:w-36 lg:w-40"
                  }
                />
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-border bg-accent">
          <div className="mx-auto w-full max-w-6xl px-6 py-16 sm:py-24">
            <SectionLabel>Features</SectionLabel>
            <h2 className="mt-4 font-heading text-3xl tracking-tight sm:text-4xl">
              Pick the right time and place.
            </h2>

            <dl className="mt-12 border-t border-border">
              {FEATURES.map((feature) => (
                <div
                  key={feature.title}
                  className="grid gap-1 border-b border-border py-5 sm:grid-cols-[14rem_1fr] sm:gap-8"
                >
                  <dt className="font-heading tracking-tight">
                    {feature.title}
                  </dt>
                  <dd className="text-sm text-muted-foreground">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>

            <p className="mt-8 text-sm text-muted-foreground">
              Weather data provided by Apple Weather. Questions? Email{" "}
              <a
                href={MAILTO}
                className="text-primary underline-offset-4 hover:underline"
              >
                {SUPPORT_EMAIL}
              </a>
              .
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
};

export default FlyMyKitePage;
