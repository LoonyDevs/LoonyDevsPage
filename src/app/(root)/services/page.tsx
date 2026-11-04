import type { Metadata } from "next";

import SiteFooter from "@/components/layout/site-footer";
import ContactSection from "@/components/sections/contact-section";
import ServicesSection from "@/components/sections/services-section";
import { shareMetadata } from "@/lib/metadata";
import { SERVICE_AREAS, SERVICE_DETAILS } from "@/lib/services";
import { APP_NAME, LOCATION, SITE_URL } from "@/lib/site";

const TITLE = `Web & App Development in ${LOCATION.city}, ${LOCATION.regionCode}`;
const DESCRIPTION = `${APP_NAME} builds web apps, e-commerce sites and iOS apps for businesses in ${LOCATION.city} and across ${LOCATION.metro}. A small remote team based in ${LOCATION.city}, ${LOCATION.region}.`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/services" },
  ...shareMetadata({
    title: `${TITLE} · ${APP_NAME}`,
    description: DESCRIPTION,
    path: "/services",
  }),
};

// one per service, so google can match us to "web developer near me" style searches
const serviceSchemas = SERVICE_DETAILS.map((service) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: service.title,
  description: service.summary,
  url: `${SITE_URL}/services#${service.id}`,
  provider: { "@type": "Organization", name: APP_NAME, url: SITE_URL },
  areaServed: SERVICE_AREAS.map((name) => ({
    "@type":
      name.includes("County") || name === "Tampa Bay"
        ? "AdministrativeArea"
        : "City",
    name,
  })),
}));

const ServicesPage = () => {
  return (
    <div className="flex min-h-full flex-col">
      <main className="flex-1">
        <ServicesSection />
        <ContactSection />
      </main>
      <SiteFooter />
      {serviceSchemas.map((schema) => (
        <script
          key={schema.name}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </div>
  );
};

export default ServicesPage;
