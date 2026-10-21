// Fly My Kite privacy policy. App Store Connect points at /fly-my-kite/privacy

import type { Metadata } from "next";

import SiteFooter from "@/components/layout/site-footer";
import { SectionLabel } from "@/components/ui/section-label";
import { shareMetadata, type ShareImage } from "@/lib/metadata";
import { APP_NAME, MAILTO, SUPPORT_EMAIL } from "@/lib/site";

const KITE_SHARE_IMAGE: ShareImage = {
  url: "/projects/fly-my-kite/share.jpg",
  width: 1200,
  height: 630,
  alt: "Fly My Kite app screens showing a YES answer and wind conditions",
};

export const metadata: Metadata = {
  title: "Fly My Kite Privacy Policy",
  description:
    "How Fly My Kite handles your location, settings and notification data.",
  alternates: { canonical: "/fly-my-kite/privacy" },
  ...shareMetadata({
    title: `Fly My Kite Privacy Policy · ${APP_NAME}`,
    description:
      "How Fly My Kite handles your location, settings and notification data.",
    path: "/fly-my-kite/privacy",
    image: KITE_SHARE_IMAGE,
  }),
};

const EFFECTIVE_DATE = "October 21, 2026";

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="mt-12 font-heading text-2xl tracking-tight">{children}</h2>
);

const ExternalLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="text-primary underline-offset-4 hover:underline"
  >
    {children}
  </a>
);

const PrivacyPage = () => {
  return (
    <div className="flex min-h-full flex-col">
      <main className="flex-1">
        <article className="mx-auto w-full max-w-3xl px-6 py-16 sm:py-24">
          <SectionLabel>Fly My Kite</SectionLabel>
          <h1 className="mt-4 font-heading text-4xl tracking-tight sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">
            Effective {EFFECTIVE_DATE}
          </p>

          <div className="mt-8 space-y-4 text-base text-muted-foreground [&_li]:ml-5 [&_li]:list-disc [&_li]:pl-1 [&_strong]:font-medium [&_strong]:text-foreground [&_ul]:space-y-2">
            <p>
              Fly My Kite (&ldquo;the app&rdquo;) is made by Loony Devs
              (&ldquo;we&rdquo;, &ldquo;us&rdquo;). This policy explains what
              the app collects, why, and the choices you have. In short: there
              are no accounts, no ads and no tracking. The app only uses your
              location to show you the wind.
            </p>

            <H2>What we collect</H2>
            <p>
              <strong>Location.</strong> If you allow it, the app reads your
              device&rsquo;s location while you are using it, to show current
              wind and the forecast where you are. If you search a ZIP code
              instead, the app uses the place you searched. You can turn
              location off at any time in iOS Settings; the app still works with
              ZIP code search.
            </p>
            <p>
              <strong>Settings and saved places.</strong> Your preferences
              (units, minimum wind speed, alert options), your saved and recent
              places, and the last place you checked.
            </p>
            <p>
              <strong>An anonymous device ID.</strong> The app creates a random
              ID for your installation so your settings can be linked to your
              device without an account. It is not your name, email, or Apple
              ID, and it is not used to track you across other apps or websites.
            </p>
            <p>
              <strong>Push notification token.</strong> If you turn on alerts,
              Apple gives the app a device token that lets us send you
              notifications through the Apple Push Notification service.
            </p>
            <p>
              We do <strong>not</strong> collect your name, email address, phone
              number, contacts, photos, or payment information. The app has no
              sign-up, no advertising, and no third-party analytics or tracking.
            </p>

            <H2>How we use it</H2>
            <ul>
              <li>
                To fetch current wind, temperature and forecast for your
                location.
              </li>
              <li>
                To send the alerts you ask for, such as when the wind reaches
                your minimum speed, or a daily forecast. To do that, our server
                checks the weather at your last-used location and compares it to
                your settings.
              </li>
              <li>To remember your places and preferences between launches.</li>
            </ul>
            <p>We do not sell your data or use it for advertising.</p>

            <H2>Where your data goes</H2>
            <p>
              <strong>On your device.</strong> Settings, saved places, recent
              searches and the anonymous device ID are stored on your device.
            </p>
            <p>
              <strong>Our backend (Supabase).</strong> So that alerts and synced
              places work, the app sends the following to our backend, hosted by{" "}
              <ExternalLink href="https://supabase.com/privacy">
                Supabase
              </ExternalLink>
              : your anonymous device ID, your notification token and
              preferences, your saved places, and the last location you used
              (coordinates and place name). Records are protected so that a
              device can only read and change its own.
            </p>
            <p>
              <strong>Apple.</strong> Weather in the app comes from Apple
              Weather (WeatherKit), and ZIP code and place lookups use
              Apple&rsquo;s location services. Alerts are delivered through the
              Apple Push Notification service. See{" "}
              <ExternalLink href="https://www.apple.com/legal/privacy/">
                Apple&rsquo;s privacy policy
              </ExternalLink>
              .
            </p>
            <p>
              <strong>Open-Meteo.</strong> To check wind for alerts, our server
              requests weather for your last-used coordinates from{" "}
              <ExternalLink href="https://open-meteo.com/en/terms">
                Open-Meteo
              </ExternalLink>
              . Only coordinates are sent. Your device ID is not.
            </p>
            <p>
              We do not share your data with anyone else, except if required by
              law.
            </p>

            <H2>Retention and your choices</H2>
            <ul>
              <li>
                <strong>Location:</strong> allow or deny it in iOS Settings
                &rarr; Fly My Kite &rarr; Location.
              </li>
              <li>
                <strong>Alerts:</strong> turn them off in the app&rsquo;s
                Settings or in iOS Settings &rarr; Notifications. We stop
                sending alerts when they are off.
              </li>
              <li>
                <strong>Saved places:</strong> delete them in the app and they
                are removed from our backend as well.
              </li>
              <li>
                <strong>Delete everything:</strong> email us at{" "}
                <a
                  href={MAILTO}
                  className="text-primary underline-offset-4 hover:underline"
                >
                  {SUPPORT_EMAIL}
                </a>{" "}
                and we will delete the records tied to your device. Because
                there are no accounts, we can&rsquo;t look you up by name or
                email, so we may ask for details (such as the places you
                searched) to find them. Deleting the app removes the data stored
                on your device.
              </li>
            </ul>

            <H2>Children</H2>
            <p>
              The app is not directed to children under 13 and we do not
              knowingly collect personal information from them. It collects no
              name, email or similar details. If you believe a child has given
              us personal information, contact us and we will delete it.
            </p>

            <H2>Security</H2>
            <p>
              Data is sent over encrypted connections, and our backend limits
              each device to its own records. No method of storage or
              transmission is perfectly secure, but we take reasonable steps to
              protect your information.
            </p>

            <H2>Changes</H2>
            <p>
              If we change this policy, we will update the date above. If the
              change is significant, we will also say so in the app or its App
              Store release notes.
            </p>

            <H2>Contact</H2>
            <p>
              Questions or requests? Email{" "}
              <a
                href={MAILTO}
                className="text-primary underline-offset-4 hover:underline"
              >
                {SUPPORT_EMAIL}
              </a>
              .
            </p>
          </div>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
};

export default PrivacyPage;
