// site copy + links

export const APP_NAME = "Loony Devs";
export const APP_DESCRIPTION =
  "Loony Devs is a small team of developers building iOS and web apps, with games and game jams on the side.";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://loonydevs.com";

export const SUPPORT_EMAIL = "LoonyDevs@gmail.com";
export const MAILTO = `mailto:${SUPPORT_EMAIL}`;
export const GITHUB_URL = "https://github.com/LoonyDevs";

// the logo, in /public
export const LOGO_SRC = "/loonydevs-logo.png";

// drop a wide photo at public/feature.jpg and point this at it to show a hero image
export const FEATURE_IMAGE: string | null = null;

// nav, all anchor links
export const NAV_LINKS: { label: string; href: string }[] = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

// the 3 things in the about section
export const SERVICES: { title: string; description: string }[] = [
  { title: "iOS apps", description: "Native apps for iPhone and iPad." },
  {
    title: "Web apps",
    description: "The same apps on the web, one shared account.",
  },
  { title: "Games", description: "Side projects and game jams." },
];
