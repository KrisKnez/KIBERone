import React from "react";

import Image from "next/image";

// import Button from "/components/atoms/Button";

import Logo from "/assets/Logo.png";

const Header = () => {
  return (
    <header className="py-4">
      <div className="container mx-auto max-w-screen-xl flex flex-wrap justify-between items-center space-y-8 md:space-x-5">
        <div className="relative w-1/2 md:w-48 aspect-[16/10]">
          <Image src={Logo} layout="fill" alt="Logo" />
        </div>
        <div className="flex flex-col items-center w-1/2 md:w-auto">
          <span>Obuhvatna edukacija</span>
          <span>digitalnim tehnologijama</span>
          <span>za djecu od 6 do 14</span>
        </div>
        {/* <Button>Zatražite povratni poziv</Button> */}
        <a href="#contact" className="w-full md:w-auto flex justify-center">
          {/* <button className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800">Zatražite povratni poziv</button> */}
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-black rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:ring-cyan-200">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white  rounded-md group-hover:bg-opacity-0">
              Zatražite povratni poziv
            </span>
          </button>
        </a>
        <div className="flex flex-col items-center w-full md:w-auto">
          <span>Nazovite nas na</span>
          <a href="tel:0955402828" className="font-bold">
            +385 95 5402 828
          </a>
          <span>Okićeva 17, 21000 Zagreb</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
