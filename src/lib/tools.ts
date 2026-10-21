// the tools listed on /tools

export type Tool = {
  label: string;
  href: string;
  description: string;
};

export const TOOLS: Tool[] = [
  {
    label: "UUID Generator",
    href: "/tools/uuid-generator",
    description: "Generate random v4 UUIDs, then copy or download them.",
  },
  {
    label: "Password Generator",
    href: "/tools/password-generator",
    description: "Random passwords or PINs, at the length you choose.",
  },
  {
    label: "Lorem Ipsum Generator",
    href: "/tools/lorem-ipsum-generator",
    description: "Placeholder text by the word, sentence or paragraph.",
  },
  {
    label: "Character & Word Counter",
    href: "/tools/character-word-counter",
    description: "Count characters and words as you type.",
  },
  {
    label: "Salary/Hourly Calculator",
    href: "/tools/salary-calculator",
    description:
      "Convert hourly pay to salary and back, with weekly and monthly pay.",
  },
  // { label: "Image Resize", href: "/tools/image-resize" },
  // { label: "Image Compressor", href: "/tools/image-compressor" },
  // { label: "JSON Formatter", href: "/tools/json-formatter" },
];
