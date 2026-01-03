import React from "react";
import SearchComp from "@/components/SearchComp";
import Image from "next/image";
import ImagePattern from "@/public/bg_pattern.png";
import MenuDatas from "@/data/MenuData.json";
import MenuComp from "@/components/MenuComp";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const page = () => {
  const data = MenuDatas;
  return (
    <div className="w-full">
      <div className=" px-16 py-20 relative overflow-hidden">
        <Image
          src={ImagePattern}
          alt="bg-pattern"
          className="absolute w-full h-full object-cover -z-10 left-0 top-0 opacity-25 blur-[2px]"
        />
        <div className="w-full flex flex-col items-center justify-center gap-5">
          <h5 className="font-bold">
            Semua <span className="text-[#FFA825]">menu</span> , semua{" "}
            <span className="text-[#FFA825]">rasa</span> , satu{" "}
            <span className="text-[#FFA825]">tempat</span>
          </h5>
          <SearchComp />
        </div>
        <div className="w-full h-10 bg-linear-to-t from-[rgba(256,256,256,1)] to-[rgba(256,256,256,0.0)] absolute bottom-0 left-0" />
      </div>
      <div className="px-16 py-10 relative">
        <div className="flex w-full justify-between items-center">
          <h2>Makanan</h2>
          <Link
            href={"/binus-bite/makanan"}
            className="flex items-center gap-2"
          >
            <span>View More </span>
            <ArrowRight />
          </Link>
        </div>
        <MenuComp data={data} category="makanan" limit={16} />
      </div>
      <div className="px-16 py-10 relative">
        <div className="flex w-full justify-between items-center">
          <h2>Minuman</h2>
          <Link
            href={"/binus-bite/minuman"}
            className="flex items-center gap-2"
          >
            <span>View More </span>
            <ArrowRight />
          </Link>
        </div>
        <MenuComp data={data} category="minuman" limit={16} />
      </div>
    </div>
  );
};

export default page;
