import type { Metadata } from "next";

import SiteFooter from "@/components/layout/site-footer";
import ToolsHome from "@/components/tools/ToolsHome";
import { shareMetadata } from "@/lib/metadata";
import { APP_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Tools",
  description:
    "Free browser-based tools from Loony Devs: UUID and password generators, a salary calculator, a character counter and more.",
  alternates: { canonical: "/tools" },
  ...shareMetadata({
    title: `Tools · ${APP_NAME}`,
    description:
      "Free browser-based tools from Loony Devs: UUID and password generators, a salary calculator, a character counter and more.",
    path: "/tools",
  }),
};

const ToolsPage = () => {
  return (
    <div className="flex min-h-full flex-col">
      <main className="flex-1">
        <ToolsHome />
      </main>
      <SiteFooter />
    </div>
  );
};

export default ToolsPage;
