import React from "react";
import { cn } from "@/utils/cn";

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
  isPadding = true,
  isHover = false,
}: Readonly<{
  children: React.ReactNode;
  color: string;
  radiusSize: 0 | 4 | 8 | 12 | 16 | 32 | 100;
  className?: string;
  isPadding?: boolean;
  isHover?: boolean;
}>) => {
  return (
    <div
      className={cn(
        radiusMap[radiusSize],
        { "p-6": isPadding },
        { "transition-transform scale-100 hover:scale-[1.03]": isHover },
        className
      )}
      style={{ backgroundColor: color }}
    >
      {children}
    </div>
  );
};

export default CardComp;
