import Link from "next/link";
import { TOOLS } from "@/lib/tools";

const ToolsHome = () => {
  return (
    <div className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-20 text-center">
        <h1 className="mb-6 font-serif text-4xl text-zinc-950 md:text-5xl">
          Tools & Utilities
        </h1>
      </div>

      <div className="grid grid-cols-3 gap-x-30 gap-y-6">
        {TOOLS.map((tool) => (
          <Link
            key={tool.href}
            href={tool.href}
            className="w-fit text-violet-600 underline underline-offset-4 hover:text-violet-500"
          >
            {tool.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ToolsHome;
