// open graph + twitter tags for link previews
//
// next replaces (not merges) openGraph/twitter when a page sets its own, so
// every page builds both through this, otherwise the image gets dropped

import type { Metadata } from "next";

import { APP_NAME } from "@/lib/site";

export type ShareImage = {
  url: string;
  width: number;
  height: number;
  alt: string;
};

// 1200x630, in /public
export const DEFAULT_SHARE_IMAGE: ShareImage = {
  url: "/opengraph-image.jpg",
  width: 1200,
  height: 630,
  alt: APP_NAME,
};

type ShareOptions = {
  title: string;
  description: string;
  // path on this site, e.g. "/tools"
  path: string;
  image?: ShareImage;
};

export const shareMetadata = ({
  title,
  description,
  path,
  image = DEFAULT_SHARE_IMAGE,
}: ShareOptions): Pick<Metadata, "openGraph" | "twitter"> => ({
  openGraph: {
    title,
    description,
    url: path,
    siteName: APP_NAME,
    type: "website",
    images: [image],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [{ url: image.url, alt: image.alt }],
  },
});
