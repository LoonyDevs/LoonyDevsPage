import type { Metadata, Viewport } from "next";
import { Inter, Newsreader } from "next/font/google";

import { shareMetadata } from "@/lib/metadata";
import { PROJECTS } from "@/lib/projects";
import {
  APP_DESCRIPTION,
  APP_NAME,
  GITHUB_URL,
  KEYWORDS,
  LOCATION,
  LOGO_SRC,
  SITE_URL,
  SUPPORT_EMAIL,
} from "@/lib/site";
import "../styles/globals.css";
import SiteHeader from "@/components/layout/site-header";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  preload: false,
});

const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-heading",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${APP_NAME} · iOS & web apps`,
    template: `%s · ${APP_NAME}`,
  },
  description: APP_DESCRIPTION,
  keywords: KEYWORDS,
  applicationName: APP_NAME,
  authors: [{ name: APP_NAME, url: SITE_URL }],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  icons: { icon: "/icon.png", apple: "/icon.png" },
  ...shareMetadata({
    title: APP_NAME,
    description: APP_DESCRIPTION,
    path: "/",
  }),
  // old-school geo tags, bing and some directories still read these
  other: {
    "geo.region": `${LOCATION.country}-${LOCATION.regionCode}`,
    "geo.placename": `${LOCATION.city}, ${LOCATION.region}`,
    "geo.position": `${LOCATION.latitude};${LOCATION.longitude}`,
    ICBM: `${LOCATION.latitude}, ${LOCATION.longitude}`,
  },
  // paste the google search console token here to verify the site
  // verification: { google: "..." },
};

// colors the browser chrome on mobile (address bar, etc.)
export const viewport: Viewport = {
  themeColor: "#6D28D9",
};

// helps google figure out what loony devs is, and that we're a St. Pete business
// so we can show up for nearby searches
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  name: APP_NAME,
  address: {
    "@type": "PostalAddress",
    addressLocality: LOCATION.city,
    addressRegion: LOCATION.regionCode,
    addressCountry: LOCATION.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: LOCATION.latitude,
    longitude: LOCATION.longitude,
  },
  serviceType: [
    "iOS app development",
    "Web development",
    "Web app development",
    "E-commerce development",
  ],
  areaServed: [
    { "@type": "City", name: LOCATION.city },
    { "@type": "AdministrativeArea", name: LOCATION.county },
    { "@type": "AdministrativeArea", name: LOCATION.metro },
    { "@type": "State", name: LOCATION.region },
  ],
  alternateName: ["LoonyDevs", "LoonyDevs.com"],
  url: SITE_URL,
  logo: `${SITE_URL}${LOGO_SRC}`,
  description: APP_DESCRIPTION,
  email: SUPPORT_EMAIL,
  sameAs: [GITHUB_URL],
};

// one of these per shipped app, so they can show up as apps in search, not
// just lines on our page
const appSchemas = PROJECTS.filter((project) => project.links?.length).map(
  (project) => ({
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.name,
    description: project.description,
    applicationCategory:
      project.category === "Games" ? "GameApplication" : "MobileApplication",
    operatingSystem:
      project.tags.filter((tag) => tag === "iOS" || tag === "Web").join(", ") ||
      "iOS",
    url: project.links![0].href,
    author: { "@type": "Organization", name: APP_NAME, url: SITE_URL },
  }),
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${newsreader.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <SiteHeader />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        {appSchemas.map((schema) => (
          <script
            key={schema.name}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
        <Toaster />
      </body>
    </html>
  );
}
