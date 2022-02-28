import React from "react";

import Image from "next/image";

import Button from "../atoms/Button";

import Logo from "../../assets/Logo.png";

const Header = () => {
  return (
    <header className="py-4">
      <div className="container mx-auto max-w-screen-xl flex flex-row justify-between items-center space-x-5">
        <div className="relative w-48 aspect-[16/10]">
          <Image src={Logo} layout="fill" alt="Logo" />
        </div>
        <div className="flex flex-col items-center">
          <span>Obuhvatna edukacija</span>
          <span>digitalnim tehnologijama</span>
          <span>za djecu od 6 do 14</span>
        </div>
        {/* <Button>Zatražite povratni poziv</Button> */}
        <button className="">Zatražite povratni poziv</button>
        <div className="flex flex-col items-center">
          <span>Nazovite nas na</span>
          <a href="tel:0955402828" className="font-bold">+385 95 5402 828</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
