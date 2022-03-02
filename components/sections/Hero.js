import React from "react";
import classNames from "classnames";

import Image from "next/image";

import Section from "/components/templates/Section";
import Accordion from "/components/organisms/Accordion";

import Kids from "/assets/kids_faded2_cut.png";

const Hero = ({ className }) => {
  return (
    <Section
      className={classNames(
        "relative h-full flex flex-col justify-center lg:justify-start",
        className
      )}
    >
      {/* Background image */}
      <div className="absolute w-full h-full inset-0 flex justify-end items-start">
        <div className="relative w-1/2 aspect-[71/91] hidden lg:block">
          <Image
            priority
            layout="fill"
            src={Kids}
            alt="Kid"
            objectFit="scale-down"
          />
        </div>
      </div>
      <div className="flex items-stretch relative text-center lg:text-left">
        <div className="w-full lg:w-2/5 space-y-6">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold break-word">
            {/* Dijete stalno bulji u ekrane? Dovedite ga u KIBERONE! */}
            {/* Gubljenje vremena na gadgetima pretvaramo u korisno znanje! */}
            IT škola <br />
            <i className="font-bold text-cyan-500">programiranja</i>
            <br />
            za djecu
          </h1>
          <h2 className="text-3xl font-semibold">
            {/* Umjesto igrica, TikTok-a i YouTube-a, korisno znanje! */}
            <span className="text-cyan-500 underline">Korisno znanje</span>{" "}
            umjesto: igrica, TikTok-a i YouTube-a!
          </h2>
          <div className="divide-y">
            <Accordion title="Individualan pristup">
              Nastava se vrši u malim grupama do 10 učenika.
            </Accordion>
            <Accordion title="Jednom tjedno, vikendom.">
              Nastava se vrši jednom tjedno, vikendom (ujutro, poslijepodne,
              navečer).
            </Accordion>
            <Accordion title="Besplatna ogledna radionica">
              Svaki vikend je besplatna ogledna radionica!
            </Accordion>
            <Accordion title="Dijete razvija korisne vještine">
              Dijete razvija &quot;soft skills&quot; vještine: kritičko i
              logičko razmišljanje, brzinu donošenja odluka
            </Accordion>
          </div>
          <div className="flex flex-col">
            <a href="#contact">
              <button className="text-white bg-gradient-to-r from-indigo-700 to-purple-500 focus:ring-4 focus:ring-blue-300 font-normal rounded text-base px-9 py-3 text-center">
                Edukacijski program i cijene
              </button>
            </a>
            <div className="prose">
              <ul className="list-disc">
                <li>Više od 50 modula u ponudi</li>
                <li>Svaki modul završava vlastitim IT projektom</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
