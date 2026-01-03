import React from "react";
import { cn } from "@/utils/cn";
import Link from "next/link";

interface DataProps {
  children: React.ReactNode;
  style: "floating" | "outline";
  className?: string;
  padding?: boolean;
  href?: string;
}

const TrapComp = ({
  children,
  style = "floating",
  className,
  padding = false,
  href,
}: DataProps) => {
  const classNames = cn(
    "rounded-tr-[4rem] rounded-bl-[4rem]",
    { "px-6 py-2": padding },
    { "bg-[#FFA825] outline-none": style === "floating" },
    { "border-2 border-[#FFA825]": style === "outline" },
    className
  );
  return href ? (
    <Link href={href} className={classNames}>
      {children}
    </Link>
  ) : (
    <div className={classNames}>{children}</div>
  );
};

export default TrapComp;
