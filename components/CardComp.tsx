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
}: Readonly<{
  children: React.ReactNode;
  color: string;
  radiusSize: 0 | 4 | 8 | 12 | 16 | 32 | 100;
  className?: string;
}>) => {
  return (
    <div
      className={cn("p-6", radiusMap[radiusSize], className)}
      style={{ backgroundColor: color }}
    >
      {children}
    </div>
  );
};

export default CardComp;
