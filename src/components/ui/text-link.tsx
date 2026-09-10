import * as React from "react";

import { cn } from "@/lib/utils";

type TextLinkProps = React.ComponentProps<"a"> & {
  // solid = always underlined, muted = underline on hover
  tone?: "solid" | "muted";
};

// underlined text link
function TextLink({
  className,
  tone = "solid",
  children,
  ...props
}: TextLinkProps) {
  return (
    <a
      className={cn(
        "pb-1 text-sm transition-colors",
        tone === "solid" &&
          "border-b border-primary/40 text-primary hover:border-primary hover:text-primary/70",
        tone === "muted" &&
          "border-b border-transparent text-muted-foreground hover:text-foreground",
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
}

export { TextLink };
