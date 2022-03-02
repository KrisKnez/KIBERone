import React from "react";
import classNames from "classnames";

import Image from "next/image";

import Logo from "/assets/Logo.png";

import { RiMenu5Line } from "react-icons/ri";

const Header = () => {
  let [sidebarOpen, setSidebarOpen] = React.useState(false);
  let toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <header className="py-4">
      <div className="container mx-auto max-w-screen-xl flex flex-wrap justify-between items-center space-y-8 md:space-x-5 px-4">
        <div className="w-48">
          <div className="aspect-w-16 aspect-h-10">
            <a href="#">
              <Image src={Logo} layout="fill" alt="Logo" />
            </a>
          </div>
        </div>
        <div className="hidden md:flex flex-col items-center w-1/2 md:w-auto">
          <span>Obuhvatna edukacija</span>
          <span>digitalnim tehnologijama</span>
          <span>za djecu od 6 do 14</span>
        </div>
        {/* <Button>Zatražite povratni poziv</Button> */}
        <a
          href="#contact"
          className="w-full md:w-auto hidden md:flex justify-center"
        >
          {/* <button className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800">Zatražite povratni poziv</button> */}
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-black rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:ring-cyan-200">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white  rounded-md group-hover:bg-opacity-0">
              Zatražite povratni poziv
            </span>
          </button>
        </a>
        <div className="hidden md:flex flex-col items-center w-full md:w-auto">
          <span>Nazovite nas na</span>
          <a href="tel:0955402828" className="font-bold">
            +385 95 5402 828
          </a>
          <span>Okićeva 17, 21000 Zagreb</span>
        </div>
      </div>
      {/* Mobile stuff below */}
      <aside
        className={classNames(
          "md:hidden bg-white w-full h-full fixed inset-0 z-50 transition-transform ease-out shadow-lg flex flex-col p-4",
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="relative w-48 md:w-48">
          <div className="aspect-w-16 aspect-h-10">
            <a href="#" onClick={() => setSidebarOpen(false)}>
              <Image src={Logo} layout="fill" alt="Logo" />
            </a>
          </div>
        </div>
        <div className="p-4 pt-8 flex flex-col items-stretch space-y-4">
          <a href="#partners" onClick={() => setSidebarOpen(false)}>
            <button className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-6 py-3.5 text-center">
              Naši IT partneri
            </button>
          </a>
          <a href="#contact" onClick={() => setSidebarOpen(false)}>
            <button className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-6 py-3.5 text-center">
              Kontakt
            </button>
          </a>
          <a href="#contact" onClick={() => setSidebarOpen(false)}>
            <button className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-6 py-3.5 text-center">
              Edukacijski program i cijene
            </button>
          </a>
        </div>
      </aside>
      <button
        className="md:hidden bg-sky-600 text-white w-16 h-16 fixed top-8 right-8 z-50 flex items-center justify-center text-4xl rounded-2xl shadow-lg shadow-sky-500/50"
        onClick={toggleSidebar}
      >
        <RiMenu5Line />
      </button>
    </header>
  );
};

export default Header;
