// the apps, grouped into Apps / Games

export type ProjectLink = { label: string; href: string };

export type ProjectCategory = "Apps" | "Games";

export type Project = {
  name: string;
  // used for the asset folder: public/projects/<slug>/
  slug: string;
  category: ProjectCategory;
  tagline: string;
  description: string;
  status: "Live" | "Beta" | "In progress" | "Concept";
  year: string;
  // turn on once the file exists in the slug folder
  image?: boolean; // poster.jpg, wide image, used instead of the icon
  icon?: boolean; // icon.jpg, app icon on the poster
  links?: ProjectLink[];
  tags: string[];
};

// path to a file in a project's folder
export const projectAsset = (slug: string, file: string) =>
  `/projects/${slug}/${file}`;

// order the rows show up in
export const PROJECT_CATEGORIES: ProjectCategory[] = ["Apps", "Games"];

// to add one: copy a block, give it a slug + category, add the assets, flip icon/image
export const PROJECTS: Project[] = [
  {
    name: "Pivot Sports",
    slug: "pivot-sports",
    category: "Apps",
    tagline: "Sports team management without the group chat.",
    description:
      "Schedule events, track attendance, and keep everyone informed from one place — built for captains, coaches, and league organizers.",
    status: "Live",
    year: "2026",
    icon: true,
    links: [
      { label: "Website", href: "https://pivotsports.app" },
      {
        label: "App Store",
        href: "https://apps.apple.com/us/app/pivot-sports/id6756797740",
      },
    ],
    tags: ["iOS", "Web"],
  },
  {
    name: "Tipzy — Tip Calculator",
    slug: "tipzy",
    category: "Apps",
    tagline: "A tip calculator that splits the bill for you.",
    description:
      "Enter the bill, pick a tip, split it across the table — instant totals, no mental math.",
    status: "Live",
    year: "2025",
    icon: true,
    links: [
      {
        label: "App Store",
        href: "https://apps.apple.com/us/app/tipzy-tipcalculator/id6749466752",
      },
    ],
    tags: ["iOS"],
  },
  {
    name: "Vignette — Disposable Camera",
    slug: "vignette",
    category: "Apps",
    tagline: "A camera that makes you wait for the photos.",
    description:
      "Shoot now, see them later. A disposable-camera experience that brings back the anticipation of film.",
    status: "Beta",
    year: "2026",
    icon: true,
    tags: ["iOS"],
  },
  {
    name: "Guess What — APOD Edition",
    slug: "guess-what-apod",
    category: "Games",
    tagline: "A space guessing game powered by NASA's Picture of the Day.",
    description:
      "Each day, view an image from NASA's Astronomy Picture of the Day and guess what it shows. Part trivia game, part daily dose of space.",
    status: "Live",
    year: "2025",
    icon: true,
    links: [
      {
        label: "App Store",
        href: "https://apps.apple.com/us/app/guess-what-apod-edition/id6747625819",
      },
    ],
    tags: ["iOS", "Web soon"],
  },
  {
    name: "Guess What — Pokémon Edition",
    slug: "guess-what-pokemon",
    category: "Games",
    tagline: "Guess the Pokémon. Gotta catch 'em all.",
    description:
      "A quick guessing game built around the Pokémon roster. Playable on the web now, with an iOS version on the way.",
    status: "Beta",
    year: "2025",
    // icon: true, // waiting on an icon
    links: [
      { label: "Play on web", href: "https://guesswhat-pokemon.vercel.app" },
    ],
    tags: ["Web", "iOS soon"],
  },
];
