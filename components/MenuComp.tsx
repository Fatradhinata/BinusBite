import React from "react";
import CardComp from "./CardComp";
// import ModalMenu from "@/components/ModalMenu";
import Image from "next/image";
import { rupiah } from "@/utils/currencyRupiah";
import TrapComp from "./TrapComp";

// IMAGE
import MakananContent from "@/public/makanan/makanan.jpg";
import { MenuTypesDetail } from "@/types/MenuType";
import { PaginateFunc } from "@/utils/paginateFunc";

// TYPES
interface MenuTypes<T> {
  data: T[];
  category: "makanan" | "minuman";
  limit?: number;
  currPage?: number;
}

const MenuComp = <T extends MenuTypesDetail>({
  data,
  category,
  currPage = 1,
  limit = 8,
}: MenuTypes<T>) => {
  const dataFilter = data.filter((item) => item.category === category);
  const { paginateData } = PaginateFunc({
    data: dataFilter,
    currentPage: currPage,
    limit: limit,
  });
  return (
    <div className="w-full">
      <div className="grid grid-cols-4 place-items-center gap-5 mt-20 relative">
        {paginateData.map((item) => (
          <CardComp
            color="#FFFFFF"
            radiusSize={32}
            className="shadow-[inset_0_0_20px_0_rgba(0,0,50,0.2)] w-[325px] overflow-hidden"
            isHover
            key={item.id}
          >
            <div className="flex flex-col">
              <div className="mt-10 flex w-full items-center justify-center">
                <Image
                  src={MakananContent}
                  alt=""
                  width={200}
                  height={200}
                  className="object-cover rounded-full"
                />
              </div>
              <div className="">
                <span className="text-lg font-semibold">{item.name}</span>
                <p className="text-sm">{item.description}</p>
              </div>
              <div className="mt-4 flex w-full justify-between items-center">
                <h6 className="text-[#FFA825] font-bold">
                  {rupiah(item.price)}
                </h6>
                <TrapComp style="floating" className="px-6 py-1.5">
                  <button className="text-white font-medium">Order</button>
                </TrapComp>
              </div>
            </div>
          </CardComp>
        ))}
      </div>
    </div>
  );
};

export default MenuComp;
