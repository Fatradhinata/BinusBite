import TrapComp from "@/components/TrapComp";
import HeroImage from "@/public/landing-page-hero.png";
import IconImageLeft from "@/public/icon-food-left.png";
import IconImageRight from "@/public/icon-food-right.png";
import AboutUsImg from "@/public/about-us-img.png";
import ForkIcon from "@/public/fork-el.png";
import Image from "next/image";
import CardComp from "@/components/CardComp";

// DUMMY DATA
import DummyData from "@/data/DummyData.json";

// IMAGE
import ImgTutor1 from "@/public/tutor/img-tutor-1.png";
import ImgTutor2 from "@/public/tutor/img-tutor-2.png";
import ImgTutor3 from "@/public/tutor/img-tutor-3.png";
import Link from "next/link";

export default function Home() {
  const tutorData = [
    {
      id: 1,
      img: ImgTutor1,
      desc: "Pilih Menu yang Bikin Kamu Laper Duluan.",
      color: "#FFFBF1",
      accentColor: "#FCE8C9",
    },
    {
      id: 2,
      img: ImgTutor2,
      desc: "Bayar Dengan Cepat,Tanpa Ribet.",
      color: "#F1FAFF",
      accentColor: "#D1EEF6",
    },
    {
      id: 3,
      img: ImgTutor3,
      desc: "Kami Antar Makananmu Langsung ke Kelas Kamu.",
      color: "#FFF1F1",
      accentColor: "#FFADAB",
    },
  ];
  return (
    <section className="w-full h-full ">
      <div className="w-full h-full relative">
        {/* MAIN HERO */}
        <div className="flex flex-col">
          <div className="w-full relative">
            <Image
              src={HeroImage}
              alt="Hero Image"
              className="object-cover w-full h-auto"
              priority
            />
            <div className="absolute inset-0 px-16 py-20 z-10">
              <div className="w-7/20 flex flex-col gap-8 p-6">
                <h1 className="font-bold text-5xl">
                  Solusi Jastip Makanan untuk Mahasiswa{" "}
                  <span className="text-[#FFA825]">Binus!</span>
                </h1>
                <p className="text-xl w-15/20 mt-4">
                  <span className="text-[#FFA825]">BinusBite</span>{" "}
                  menghubungkan mahasiswa yang ingin memesan makanan dengan
                  mahasiswa lain yang siap membelikan dan mengantarkan.
                  Sistemnya simpel, aman, dan efisien, semua dalam satu platform
                  yang dibuat oleh dan untuk mahasiswa BINUS.
                </p>

                <div className="max-w-max mt-6">
                  <TrapComp style="floating" padding>
                    <div className="px-6">
                      <h6 className="text-xl text-white font-semibold">
                        Make Your Order
                      </h6>
                    </div>
                  </TrapComp>
                </div>
              </div>
            </div>
            <div className="absolute w-full bottom-0 h-28 bg-linear-to-t from-white to-[#fafafa00]" />
          </div>
        </div>

        <div className="flex justify-center items-center w-full relative mt-16">
          <TrapComp style="outline" padding>
            <div className="px-8 flex gap-8 justify-between items-center text-center">
              {/* <div className="text-center"> */}
              <h6 className="text-[20px]">
                100+
                <br />
                Menu Kampus Favorit
              </h6>
              <h6 className="text-[20px]">
                1k+
                <br />
                Pesanan Terpenuhi
              </h6>
              <h6 className="text-[20px]">
                20+
                <br />
                Partner Kuliner Binus
              </h6>
              {/* </div> */}
            </div>
          </TrapComp>
          <Image
            src={IconImageLeft}
            alt="icon-food-left"
            className="absolute w-48 left-0 top-0"
          ></Image>
          <Image
            src={IconImageRight}
            alt="icon-food-right"
            className="absolute w-48 right-0 -top-10"
          ></Image>
        </div>

        {/* TUTORIAL ORDER */}
        <div className="w-full px-16 py-20 mt-80">
          <div className="flex items-end justify-between">
            <h2 className="max-w-1/3 font-bold bg-lime-100">
              Pesan <span className="text-[#FFA825]">Makanan</span> Favoritmu
              dalam 3 Langkah Mudah!
            </h2>
            <p className="max-w-6/20 mr-10 text-lg">
              Kuliah, tugas, rapat, tapi tetep bisa makan <br />
              Binus Bite siap jadi partner jastip setia buat perutmu yang nggak
              bisa nunggu. Pesan, bayar, santai — sisanya biar kami yang jalanin
            </p>
          </div>
          <div className="mt-16 flex justify-evenly gap-8">
            {tutorData.map((data) => (
              <CardComp key={data.id} color={data.color} radiusSize={32}>
                <div
                  key={data.id}
                  className="flex flex-col justify-between gap-2 h-full max-w-[400px]"
                >
                  <div className="text-end">
                    <span
                      className="px-2 py-1 rounded-full font-bold"
                      style={{ backgroundColor: `${data.accentColor}` }}
                    >
                      {data.id}
                    </span>
                  </div>
                  <Image
                    src={data.img}
                    alt="img"
                    width={400}
                    height={269}
                  ></Image>
                  <span className="font-medium w-3/4 text-xl">{data.desc}</span>
                </div>
              </CardComp>
            ))}
          </div>
        </div>

        {/* ABOUT US */}
        <div className="mt-24 w-full py-16 flex justify-center">
          <div className="w-1/2 flex flex-col items-center gap-8">
            <h2 className="font-semibold">
              Tentang <span className="text-[#FFA825]">Kami</span>
            </h2>
            <p className="text-xl w-3/4">
              <span className="text-[#FFA825] font-medium">Binus Bite</span>{" "}
              lahir dari kebutuhan sederhana para Binusian: pesan makanan kampus
              tanpa ribet. <br />
              <br />
              Waktu masa FYP dan ospek, banyak banget jastip makanan yang
              tersebar lewat grup dan chat pribadi, kadang ada yang ketinggalan
              order, atau pesanannya gak tercatat rapi. Dari situ kami sadar,
              sistemnya perlu lebih efisien. <br />
              <br />
              Dengan{" "}
              <span className="text-[#FFA825] font-medium">Binus Bite</span>,
              semua bisa dipesan lewat satu platform. Mulai dari memilih menu,
              bayar, sampai tracking pesanan semua serba mudah dan otomatis.
              <br />
              <br />
              Kami ingin membantu mahasiswa{" "}
              <span className="text-[#FFA825] font-medium">BINUS</span> agar
              bisa hemat waktu, gak kelaparan, dan tetap fokus kuliah.
            </p>
          </div>

          <div className="w-1/2 flex justify-center">
            <Image src={AboutUsImg} alt=""></Image>
          </div>
        </div>

        {/* CATEGORY SECTION */}
        <div className="mt-24 w-full px-16 py-20 ">
          {/* FORK ICON */}
          <div className="relative w-full h-full">
            <Image
              src={ForkIcon}
              alt="fork-el"
              width={300}
              height={450}
              className="absolute -top-44 -left-[265px]"
            ></Image>
            <Image
              src={ForkIcon}
              alt="fork-el"
              width={300}
              height={450}
              className="absolute -top-44 -right-[265px] scale-x-[-1]"
            ></Image>
          </div>
          {/* TITLE */}
          <div className="w-full flex flex-col justify-center items-center gap-5">
            <h2 className="font-semibold">
              Jelajahi Menu Lezat dari{" "}
              <span className="text-[#FFA825]">Binus Bite!</span>
            </h2>
            <span className="text-[#909090]">
              Mulai hari dengan makanan dan minuman terbaikmu.
            </span>
          </div>

          {/* CONTENT OF CATEGORY */}
          <div className="mt-32">
            {Object.entries(DummyData).map(([key, value]) => (
              <div key={key} className="flex flex-col gap-5">
                <div className="flex justify-between">
                  <h3 className="capitalize font-semibold">{key}</h3>
                  <Link href={"#"}>Lihat Lainnya</Link>
                </div>
                <div className="grid grid-cols-3 gap-6">
                  {value.map((item) => (
                    <div key={item.id} className="">
                      <h5>{item.id}</h5>
                      <h4>{item.title}</h4>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            <div className="w-full flex justify-center mt-20">
              <TrapComp style="outline" className="bg-[#FFF7F1] px-10 py-4">
                <p className="text-xl font-medium">
                  <span className="text-[#FFA825] font-semibold">
                    Fun Fact:
                  </span>{" "}
                  Binus Bite dikembangkan hanya oleh dua orang Binusian!
                </p>
              </TrapComp>
            </div>
          </div>
        </div>

        {/* CONTENT OF FOOD */}
        <div className="mt-24 w-full px-16 py-20">
          {/* TITLE */}
          <div className="w-full flex flex-col items-center justify-center gap-5">
            <h2 className="font-bold">
              Temukan <span className="text-[#FFA825]">Makanan</span> Favoritmu!
            </h2>
            <p className="text-center text-xl">
              Nikmati aneka pilihan makanan kampus yang bisa <br />
              kamu pesan kapan aja
            </p>
          </div>

          {/* CONTENT */}
          <div className="grid grid-cols-4 place-items-center gap-5 mt-32">
            {Array.from({ length: 8 }).map((_, key) => (
              <CardComp
                color="#FFFFFF"
                radiusSize={8}
                className="shadow-[inset_0_0_20px_0_rgba(0,0,50,0.2)] w-2xs h-40"
                key={key}
              >
                <div className="flex items-center justify-center">
                  {key + 1}
                </div>
              </CardComp>
            ))}
          </div>
          {/* GRADIENT TRANSPARENT */}
          {/* <div className="w-full h-60 bg-lime-200 absolute left-0 bottom-0" /> */}
        </div>
      </div>
    </section>
  );
}
