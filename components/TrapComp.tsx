import React from "react";
import { cn } from "@/utils/cn";

interface DataProps {
  children: React.ReactNode;
  style: "floating" | "outline";
  className?: string;
  padding?: boolean;
}

const TrapComp = ({
  children,
  style = "floating",
  className,
  padding = false,
}: DataProps) => {
  return (
    <div
      className={cn(
        "rounded-tr-[4rem] rounded-bl-[4rem]",
        { "px-6 py-2": padding },
        { "bg-[#FFA825] outline-none": style === "floating" },
        { "border-2 border-[#FFA825]": style === "outline" },
        className
      )}
    >
      {children}
    </div>
  );
};

export default TrapComp;
