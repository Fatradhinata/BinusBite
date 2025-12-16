import React from "react";
import Image from "next/image";

import LogoImg from "@/public/logo_v.1.1.png";

const Footer = () => {
  return (
    <footer className="w-full justify-between items-center">
      <div className="px-16 py-20 bg-[#FFF7F1]">
        <div className="flex w-full justify-between items-center">
          <div className="space-y-5">
            <Image src={LogoImg} alt=""></Image>
            <p className=" w-7/20">
              Binus Bite hadir sebagai solusi modern bagi mahasiswa BINUS yang
              ingin menikmati kuliner luar kampus tanpa harus meninggalkan kelas
              atau kegiatan.
            </p>
          </div>
          <div className="flex flex-col justify-between">
            <div>
              {/* home */}
              <div>
                <h6>Home</h6>
                <p>Food</p>
                <p>Drink</p>
                <p>Snack</p>
                <p>Dessert</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
