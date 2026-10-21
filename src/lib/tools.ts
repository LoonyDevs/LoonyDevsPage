// the tools listed on /tools. each one also gets its own page at /tools/<slug>
// (title, meta description and the "about" text below are what google indexes)

export type Tool = {
  label: string;
  href: string;
  // one line, shown in the list on /tools
  description: string;
  // <title> for the page, keep it under ~45 chars ("· Loony Devs" is added)
  metaTitle: string;
  // meta description, ~120-155 chars
  metaDescription: string;
  // short paragraphs shown under the tool, plain facts about what it does
  about: string[];
};

export const TOOLS: Tool[] = [
  {
    label: "UUID Generator",
    href: "/tools/uuid-generator",
    description: "Generate random v4 UUIDs, then copy or download them.",
    metaTitle: "UUID Generator (v4) – Free Online Tool",
    metaDescription:
      "Generate a random version 4 UUID in one click. Copy it or download it as a text file. Free, runs in your browser, nothing is sent to a server.",
    about: [
      "A UUID (universally unique identifier) is a 128-bit value used to label records, files and requests without a central counter. Version 4 UUIDs are built from random numbers, so you can create them anywhere without coordinating.",
      "This tool creates one with your browser's built-in crypto.randomUUID(). It is generated on your device, and you can copy it or download it as a text file.",
    ],
  },
  {
    label: "Password Generator",
    href: "/tools/password-generator",
    description: "Random passwords or PINs, at the length you choose.",
    metaTitle: "Random Password & PIN Generator",
    metaDescription:
      "Generate a random password from 6 to 100 characters, with optional numbers and symbols, or a 4 to 12 digit PIN. Free and runs in your browser.",
    about: [
      "Choose a length from 6 to 100 characters and turn numbers and symbols on or off. The PIN tab makes a numeric code from 4 to 12 digits.",
      "Passwords are generated in your browser with crypto.getRandomValues, the browser's cryptographic random number generator. Nothing you generate is sent to a server.",
    ],
  },
  {
    label: "Lorem Ipsum Generator",
    href: "/tools/lorem-ipsum-generator",
    description: "Placeholder text by the word, sentence or paragraph.",
    metaTitle: "Lorem Ipsum Generator – Words & Paragraphs",
    metaDescription:
      "Generate lorem ipsum placeholder text by the word, sentence or paragraph, from 1 to 1000. Copy it with one click. Free and runs in your browser.",
    about: [
      "Lorem ipsum is placeholder text used in designs and mockups so the layout can be judged before the real copy is written.",
      "Pick words, sentences or paragraphs, set a count from 1 to 1000, and copy the result.",
    ],
  },
  {
    label: "Character & Word Counter",
    href: "/tools/character-word-counter",
    description: "Count characters and words as you type.",
    metaTitle: "Character & Word Counter",
    metaDescription:
      "Count the characters and words in your text as you type or paste. Free, instant and private: your text stays in your browser.",
    about: [
      "Type or paste text and the character and word counts update as you go. Characters include spaces and line breaks, and words are separated by whitespace.",
      "Useful for checking limits on posts, meta descriptions, bios and forms. Your text stays in your browser.",
    ],
  },
  {
    label: "Salary/Hourly Calculator",
    href: "/tools/salary-calculator",
    description:
      "Convert hourly pay to salary and back, with weekly and monthly pay.",
    metaTitle: "Hourly to Salary Calculator",
    metaDescription:
      "Convert an hourly wage to an annual salary, or a salary to an hourly rate. Set your hours per week and see weekly, biweekly and monthly pay.",
    about: [
      "Enter an hourly wage and your hours per week to get an annual salary, or enter a salary to get the hourly rate. The default is 40 hours a week.",
      "The math uses 52 weeks a year and also shows weekly, biweekly and monthly pay. It is a pre-tax estimate and does not account for overtime, unpaid time off or deductions.",
    ],
  },
  // { label: "Image Resize", href: "/tools/image-resize" },
  // { label: "Image Compressor", href: "/tools/image-compressor" },
  // { label: "JSON Formatter", href: "/tools/json-formatter" },
];

// "/tools/uuid-generator" -> "uuid-generator"
export const toolSlug = (tool: Tool) => tool.href.replace("/tools/", "");

export const findTool = (slug: string) =>
  TOOLS.find((tool) => toolSlug(tool) === slug);
