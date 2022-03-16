import React from "react";

import Image from "next/image";

import Histes from "/assets/awards/Histes-removebg-preview.png";
import Roblox from "/assets/awards/Roblox.png";
import Wsis from "/assets/awards/Wsis-removebg-preview.png";

const Footer = () => {
  return (
    <section className="bg-black overflow-auto text-white">
      <div className="container mx-auto max-w-screen-xl px-4 py-8 flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-16">
        <div className="basis-2/5 flex flex-col space-y-2 text-center">
          <span>
            © 2016-2021 KIBERone | 2018. godina- proglašena najboljom obrazovnom
            ustanovom za digitalni odgoj djece od 6 do 14 godina, na teritoriju
            Europske Unije.
          </span>
          <span>
            Nagrađeni od strane UN-a i UNESC-a prvim mjestom u kategoriji
            najbolji međunarodni projekt edukacije za djecu u području digitalne
            tehnologije.
          </span>
        </div>
        <div className="basis-3/5 flex flex-wrap justify-center space-y">
          <div className="w-full sm:w-1/2 lg:w-1/3 bg-black px-24 md:px-4 py-8 flex justify-center items-center">
            <div className="relative aspect-w-3 md:aspect-w-16 aspect-h-1 md:aspect-h-9 w-full">
              <Image
                layout="fill"
                src={Histes}
                alt="Histes"
                objectFit="contain"
              />  
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 bg-black px-8 md:px-4 py-8 flex justify-center items-center">
            <div className="relative aspect-w-3 md:aspect-w-16 aspect-h-1 md:aspect-h-9 w-full">
              <Image
                layout="fill"
                src={Roblox}
                alt="Roblox"
                objectFit="contain"
              />
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 bg-black px-8 md:px-4 py-8 flex justify-center items-center">
            <div className="relative aspect-w-3 md:aspect-w-16 aspect-h-1 md:aspect-h-9 w-full">
              <Image layout="fill" src={Wsis} alt="Wsis" objectFit="contain" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
