import React from "react";
import Image from "next/image";

import LogoImg from "@/public/logo_v.1.1.png";
import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className=" w-full justify-between items-center overflow-hidden">
      <div className="px-16 py-4 bg-[#FFF7F1]">
        <div className="flex w-full justify-between items-center">
          <div className="space-y-5">
            <Image src={LogoImg} alt="" width={150} height={100}></Image>
            <p className=" w-10/20">
              Binus Bite hadir sebagai solusi modern bagi mahasiswa BINUS yang
              ingin menikmati kuliner luar kampus tanpa harus meninggalkan kelas
              atau kegiatan.
            </p>
          </div>
          <div className="w-full flex justify-end">k
            <div className="w-1/2 grid grid-cols-5">
              {/* home */}
              <div>
                <span className="text-lg font-semibold">Home</span>
                <p className="text-[#909090]">Food</p>
                <p className="text-[#909090]">Drink</p>
                <p className="text-[#909090]">Snack</p>
                <p className="text-[#909090]">Dessert</p>
              </div>
              {/* services */}
              <div>
                <span className="text-lg font-semibold">Services</span>
                <p className="text-[#909090]">Privacy Policy</p>
                <p className="text-[#909090]">Features</p>
                <p className="text-[#909090]">Feedback</p>
                <p className="text-[#909090]">About Us</p>
              </div>
              {/* contact us */}
              <div className="col-span-2">
                <span className="text-lg font-semibold">Contact Us</span>
                <p className="text-[#909090]">
                  3M5J+8QG, Jl. Araya Mansion No.8 - 22, Genitri, Tirtomoyo,
                  Kec. Pakis, Kabupaten Malang, Jawa Timur 65154
                </p>
                <p className="text-[#FFA825]">Email:binusbite@gmail.com</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <span className="text-lg font-semibold text-[#FFA825]">
                  Follow Us
                </span>
                <div className="flex flex-col justify-center items-center">
                  {/* TWITTER */}
                  <FaXTwitter width={24} height={24} />
                  {/* INSTAGRAM */}
                  <FaInstagram width={24} height={24} />
                  {/* FACEBOOK */}
                  <FaFacebook width={24} height={24} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
