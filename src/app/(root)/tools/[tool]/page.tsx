import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import SiteFooter from "@/components/layout/site-footer";
import CharacterCounter from "@/components/tools/CharacterCounter";
import ImageCompress from "@/components/tools/ImageCompress";
import ImageResize from "@/components/tools/ImageResize";
import JsonFormatter from "@/components/tools/JsonFormatter";
import LoremGenerator from "@/components/tools/LoremGenerator";
import PasswordGenerator from "@/components/tools/PasswordGenerator";
import SalaryCalculator from "@/components/tools/SalaryCalculator";
import UUIDGenerator from "@/components/tools/UUIDGenerator";
import { shareMetadata } from "@/lib/metadata";
import { APP_NAME, SITE_URL } from "@/lib/site";
import { findTool, toolSlug, TOOLS } from "@/lib/tools";

const toolComponents = {
  "character-word-counter": CharacterCounter,
  "image-compressor": ImageCompress,
  "image-resize": ImageResize,
  "json-formatter": JsonFormatter,
  "lorem-ipsum-generator": LoremGenerator,
  "password-generator": PasswordGenerator,
  "salary-calculator": SalaryCalculator,
  "uuid-generator": UUIDGenerator,
};

type Props = { params: Promise<{ tool: string }> };

// only the tools listed in lib/tools.ts get built ahead of time
export const generateStaticParams = () =>
  TOOLS.map((tool) => ({ tool: toolSlug(tool) }));

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const { tool: slug } = await params;
  const tool = findTool(slug);

  // tools that exist but aren't listed yet stay out of google
  if (!tool) return { robots: { index: false, follow: false } };

  return {
    title: tool.metaTitle,
    description: tool.metaDescription,
    alternates: { canonical: tool.href },
    ...shareMetadata({
      title: `${tool.metaTitle} · ${APP_NAME}`,
      description: tool.metaDescription,
      path: tool.href,
    }),
  };
};

const Tool = async ({ params }: Props) => {
  const { tool: slug } = await params;

  const ToolComponent = toolComponents[slug as keyof typeof toolComponents];

  if (!ToolComponent) {
    notFound();
  }

  const tool = findTool(slug);

  return (
    <div className="flex min-h-full flex-col">
      <main className="flex-1">
        <ToolComponent />

        {tool ? (
          <>
            <section className="mx-auto w-full max-w-lg px-6 pt-12 pb-20 sm:pb-28">
              <h2 className="font-heading text-xl tracking-tight">
                About the {tool.label}
              </h2>
              <div className="mt-4 space-y-4 text-sm text-muted-foreground">
                {tool.about.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <Link
                href="/tools"
                className="mt-6 inline-block border-b border-primary/40 pb-1 text-sm text-primary transition-colors hover:border-primary hover:text-primary/70"
              >
                All tools
              </Link>
            </section>

            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "WebApplication",
                  name: tool.label,
                  description: tool.metaDescription,
                  url: `${SITE_URL}${tool.href}`,
                  applicationCategory: "UtilitiesApplication",
                  operatingSystem: "Any",
                  browserRequirements: "Requires JavaScript",
                  offers: {
                    "@type": "Offer",
                    price: "0",
                    priceCurrency: "USD",
                  },
                  publisher: {
                    "@type": "Organization",
                    name: APP_NAME,
                    url: SITE_URL,
                  },
                }),
              }}
            />
          </>
        ) : null}
      </main>
      <SiteFooter />
    </div>
  );
};

export default Tool;
