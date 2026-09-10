import * as React from "react";

import { cn } from "@/lib/utils";

// small caps label that sits above a heading
function SectionLabel({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      className={cn(
        "text-xs font-medium tracking-[0.2em] text-primary uppercase",
        className,
      )}
      {...props}
    />
  );
}

export { SectionLabel };
