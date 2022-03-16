import React from "react";
import classNames from "classnames";
import ContactModalContext from "./ContactModal.context";

import Image from "next/image";

import Logo from "/assets/Logo.png";

import MenuControlButton from "components/atoms/MenuControlButton";

const Header = () => {
  let [contactModalOpen, setContactModalOpen] =
    React.useContext(ContactModalContext);
  let [sidebarOpen, setSidebarOpen] = React.useState(false);
  React.useEffect(() => {
    if (sidebarOpen) {
      window.scrollTo(0, 0);
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [sidebarOpen]);

  let toggleSidebar = () =>
    sidebarOpen ? setSidebarOpen(false) : setSidebarOpen(true);

  let handleOpenContactModal = () => {
    setContactModalOpen(true);
    setSidebarOpen(false);
  };

  return (
    <header className="py-2 md:py-4">
      <div className="container mx-auto max-w-screen-xl flex justify-between items-center md:space-x-4 lg:space-x-24 px-4">
        {/* Logo */}
        <div className="w-16 md:w-48">
          <div className="aspect-w-16 aspect-h-10">
            <a href="#">
              <Image src={Logo} layout="fill" alt="Logo" />
            </a>
          </div>
        </div>
        {/* For Desktop */}
        <div className="grow hidden md:flex justify-between items-center space-x-4">
          {/* Obuhvatne edukacije */}
          <div className="flex flex-col items-center w-1/2 md:w-auto text-lg">
            <span>Digitalno obrazovanje</span>
            <span>za djecu od 6 do 14 godina</span>
          </div>
          {/* Button povratni poziv */}
          <a className="flex justify-center" onClick={handleOpenContactModal}>
            <button className="button-outlined">
              <span>Zatražite povratni poziv</span>
            </button>
          </a>
          {/* Kontakt broj */}
          <div className="flex flex-col items-end w-full md:w-auto">
            <a href="tel:385953943344" className="font-bold">
              +385 95 394 33 44
            </a>
            <span>Okićka 17, 21000 Zagreb</span>
          </div>
        </div>
        {/* Mobile button */}
        <button
          className="md:hidden w-12 h-12 flex items-center justify-center text-5xl"
          onClick={toggleSidebar}
          aria-label="Sidebar Toggle"
        >
          {/* <VscMenu /> */}
          <MenuControlButton active={sidebarOpen} />
        </button>
      </div>
      {/* Mobile sidebar */}
      <aside
        className={classNames(
          "md:hidden bg-white w-full h-full fixed top-[66px] pb-[86px] z-50 transition-all ease-[cubic-bezier(1.000,0.000,0.000,1.000)] duration-500 shadow-lg flex flex-col p-4",
          sidebarOpen
            ? "translate-y-0 opacity-1 visible"
            : "translate-y-1/4 opacity-0 invisible",
          "flex flex-col justify-between"
        )}
      >
        <div className="p-4 flex flex-col items-stretch space-y-4">
          <a onClick={handleOpenContactModal}>
            {/* <button className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-6 py-3.5 text-center"> */}
            <button className="w-full text-left text-xl">
              Naši IT partneri
            </button>
            {/* </button> */}
          </a>
          <a onClick={handleOpenContactModal}>
            {/* <button className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-6 py-3.5 text-center"> */}
            <button className="w-full text-left text-xl">Kontakt</button>
          </a>
          <a onClick={handleOpenContactModal}>
            {/* <button className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-6 py-3.5 text-center"> */}
            <button className="w-full text-left text-xl">
              Edukacijski program i cijene
            </button>
          </a>
        </div>
        <div>
          <div className="flex flex-col items-start space-y-5">
            <span>Digitalno obrazovanje za djecu od 6 do 14 godina</span>
            <div className="flex flex-col w-full">
              <a href="tel:385953943344" className="font-bold">
                +385 95 394 33 44
              </a>
              <span>Okićka 17, 21000 Zagreb</span>
            </div>
            <a
              className="flex justify-center w-full"
              onClick={handleOpenContactModal}
            >
              <button className="w-full text-white bg-gradient-to-r from-indigo-700 to-purple-500 focus:ring-4 focus:ring-blue-300 font-normal rounded text-base px-9 py-3 text-center">
                Zatražite povratni poziv
              </button>
            </a>
          </div>
        </div>
      </aside>
    </header>
  );
};

export default Header;
