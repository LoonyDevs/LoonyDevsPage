// what we build for other people, shown on /services

export type ServiceDetail = {
  id: string;
  title: string;
  // short line under the title, also used in the structured data
  summary: string;
  points: string[];
};

export const SERVICE_DETAILS: ServiceDetail[] = [
  {
    id: "web-apps",
    title: "Web apps",
    summary:
      "Custom web apps built around how your business actually works: booking tools, customer portals, dashboards and internal apps.",
    points: [
      "Fast, mobile-friendly apps that work in any browser",
      "Accounts, logins and data that sync with a mobile app",
      "Hosted, monitored and kept up to date after launch",
    ],
  },
  {
    id: "e-commerce",
    title: "E-commerce",
    summary:
      "Online stores and storefronts that make it easy for customers to find what they want and check out.",
    points: [
      "Product pages, carts, checkout and payments",
      "Built to load quickly and rank in search",
      "Order and inventory handling that fits your business",
    ],
  },
  {
    id: "ios-apps",
    title: "iOS apps",
    summary:
      "Native iPhone and iPad apps, from the first idea through App Store release. We ship our own apps, so we know the process end to end.",
    points: [
      "Design, build, testing and App Store submission",
      "Apps that pair with a web version and one shared account",
      "Updates and support after release",
    ],
  },
];

// how a project goes
export const PROCESS_STEPS: { title: string; description: string }[] = [
  {
    title: "Talk",
    description: "We learn what you need and who it's for.",
  },
  {
    title: "Plan",
    description: "We agree on scope, features and what gets built first.",
  },
  {
    title: "Build",
    description: "We build in small steps and show you work along the way.",
  },
  {
    title: "Launch",
    description: "We ship it, then stay around for fixes and updates.",
  },
];

// towns we say we work with, for people searching nearby
export const SERVICE_AREAS = [
  "St. Petersburg",
  "Tampa",
  "Clearwater",
  "Largo",
  "Pinellas Park",
  "Pinellas County",
  "Tampa Bay",
];
