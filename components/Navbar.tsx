"use client";
import React, { useEffect, useState } from "react";
import LogoBinBite from "@/public/logo_v.1.1.png";
import Image from "next/image";
import TrapComp from "./TrapComp";
import Link from "next/link";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`overflow-hidden top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow" : "bg-[#FFF7F1]"
      }`}
    >
      <div className=" mx-auto px-16 py-6 flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <Image
            src={LogoBinBite}
            alt="logo binus bite"
            width={87}
            height={65}
          />
          <h5 className="text-3xl font-bold uppercase text-[#FEA726]">
            BinusBite
          </h5>
        </div>
        <ul className="flex space-x-6">
          <li>
            <h6>
              <Link href="/" className="hover:text-blue-500">
                Home
              </Link>
            </h6>
          </li>
          <li>
            <h6>
              <Link href="/bite-me" className="hover:text-blue-500">
                Bite Me!
              </Link>
            </h6>
          </li>
          <li>
            <h6>
              <a href="#" className="hover:text-blue-500">
                Gallery
              </a>
            </h6>
          </li>
        </ul>
        <TrapComp style="floating" padding>
          <button className="text-xl font-semibold text-white px-3">
            Sign In
          </button>
        </TrapComp>
      </div>
    </nav>
  );
};

export default Navbar;
