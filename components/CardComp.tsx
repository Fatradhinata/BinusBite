import React from "react";
import { cn } from "@/utils/cn";
import Link from "next/link";

const radiusMap: Record<number, string> = {
  0: "rounded-none",
  4: "rounded",
  8: "rounded-md",
  12: "rounded-lg",
  16: "rounded-xl",
  32: "rounded-2xl",
  100: "rounded-full",
};

const CardComp = ({
  children,
  color,
  radiusSize,
  className,
  href,
  isPadding = true,
  isHover = false,
}: Readonly<{
  children: React.ReactNode;
  color: string;
  radiusSize: 0 | 4 | 8 | 12 | 16 | 32 | 100;
  className?: string;
  href?: string;
  isPadding?: boolean;
  isHover?: boolean;
}>) => {
  return (
    <Link
      href={href ? href : ""}
      className={cn(
        radiusMap[radiusSize],
        { "p-6": isPadding },
        { "transition-transform scale-100 hover:scale-[1.03]": isHover },
        className
      )}
      style={{ backgroundColor: color }}
    >
      {children}
    </Link>
  );
};

export default CardComp;
