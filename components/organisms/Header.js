import React from "react";
import classNames from "classnames";

import Image from "next/image";

import Logo from "/assets/Logo.png";

import { RiMenu5Line } from "react-icons/ri";

const Header = () => {
  let [sidebarOpen, setSidebarOpen] = React.useState(false);
  let openSidebar = () => {
    window.scrollTo(0, 0);
    setSidebarOpen(true);
  };
  let closeSidebar = () => {
    document.body.classList.remove("overflow-hidden");
    setSidebarOpen(false);
  };
  let toggleSidebar = () => {
    document.body.classList.add("overflow-hidden");
    sidebarOpen ? closeSidebar() : openSidebar();
  };

  return (
    <header className="py-4">
      <div className="container mx-auto max-w-screen-xl flex justify-between items-center md:space-x-4 lg:space-x-24 px-4">
        {/* Logo */}
        <div className="w-24 md:w-48">
          <div className="aspect-w-16 aspect-h-10">
            <a href="#">
              <Image src={Logo} layout="fill" alt="Logo" />
            </a>
          </div>
        </div>
        {/* For Desktop */}
        <div className="grow hidden md:flex justify-between items-center space-x-4">
          {/* Obuhvatne edukacije */}
          <div className="flex flex-col items-center w-1/2 md:w-auto">
            <span>Obuhvatna edukacija</span>
            <span>digitalnim tehnologijama</span>
            <span>za djecu od 6 do 14</span>
          </div>
          {/* Button povratni poziv */}
          <a href="#contact" className="flex justify-center">
            {/* <button className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800">Zatražite povratni poziv</button> */}
            <button className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm text-black rounded-md group bg-gradient-to-r from-indigo-700 to-purple-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:ring-cyan-200">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded group-hover:bg-opacity-0">
                Zatražite povratni poziv
              </span>
            </button>
          </a>
          {/* Kontakt broj */}
          <div className="flex flex-col items-end w-full md:w-auto">
            <span>Nazovite nas na</span>
            <a href="tel:0955402828" className="font-bold">
              +385 95 5402 828
            </a>
            <span>Okićeva 17, 21000 Zagreb</span>
          </div>
        </div>
        {/* Mobile button */}
        <button
          className="md:hidden w-12 h-12 flex items-center justify-center text-5xl"
          onClick={toggleSidebar}
        >
          <RiMenu5Line />
        </button>
      </div>
      {/* Mobile sidebar */}
      <aside
        className={classNames(
          "md:hidden bg-white w-full h-full fixed top-[92] z-50 transition-all ease-[cubic-bezier(1.000,0.000,0.000,1.000)] duration-500 shadow-lg flex flex-col p-4",
          sidebarOpen
            ? "translate-y-0 opacity-1 visible"
            : "translate-y-1/4 opacity-0 invisible"
        )}
      >
        <div className="p-4 pt-8 flex flex-col items-stretch space-y-4">
          <a href="#partners" onClick={() => closeSidebar()}>
            <button className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-6 py-3.5 text-center">
              Naši IT partneri
            </button>
          </a>
          <a href="#contact" onClick={() => closeSidebar()}>
            <button className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-6 py-3.5 text-center">
              Kontakt
            </button>
          </a>
          <a href="#contact" onClick={() => closeSidebar()}>
            <button className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-6 py-3.5 text-center">
              Edukacijski program i cijene
            </button>
          </a>
        </div>
      </aside>
    </header>
  );
};

export default Header;
