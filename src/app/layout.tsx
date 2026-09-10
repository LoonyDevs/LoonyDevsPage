import type { Metadata } from "next";
import { Inter, Newsreader } from "next/font/google";

import {
  APP_DESCRIPTION,
  APP_NAME,
  GITHUB_URL,
  LOGO_SRC,
  SITE_URL,
  SUPPORT_EMAIL,
} from "@/lib/site";
import "../styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: APP_NAME,
    template: `%s · ${APP_NAME}`,
  },
  description: APP_DESCRIPTION,
  applicationName: APP_NAME,
  alternates: { canonical: "/" },
  openGraph: {
    title: APP_NAME,
    description: APP_DESCRIPTION,
    url: SITE_URL,
    siteName: APP_NAME,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: APP_NAME,
    description: APP_DESCRIPTION,
  },
  // paste the google search console token here to verify the site
  // verification: { google: "..." },
};

// helps google figure out what loony devs is
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: APP_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}${LOGO_SRC}`,
  description: APP_DESCRIPTION,
  email: SUPPORT_EMAIL,
  sameAs: [GITHUB_URL],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${newsreader.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </body>
    </html>
  );
}
