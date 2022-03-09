import React from "react";
import classNames from "classnames";

import Image from "next/image";

import Section from "/components/templates/Section";
import Accordion from "/components/organisms/Accordion";

import { BiPlus } from "react-icons/bi";

import Kids from "/assets/kids_faded2_cut.png";
import KidsSquare from "/assets/kids_square.png";

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
        <div className="relative w-3/5 md:w-1/2 aspect-[71/91]  hidden lg:block">
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
        <div className="w-full lg:w-2/5 space-y-10">
          <div className="relative border lg:border-0 p-8 lg:p-0 rounded-3xl overflow-hidden lg:overflow-visible flex">
            {/* Background image */}
            <div className="absolute h-full w-full inset-0 lg:hidden">
              <div className="relative h-full w-full inset-0">
                <Image
                  priority
                  layout="fill"
                  src={KidsSquare}
                  alt="Kid"
                  objectFit="scale-down"
                  objectPosition="right"
                />
              </div>
            </div>
            <h1 className="relative text-4xl sm:text-6xl md:text-7xl lg:text-7xl font-semibold break-word text-left">
              {/* Dijete stalno bulji u ekrane? Dovedite ga u KIBERONE! */}
              {/* Gubljenje vremena na gadgetima pretvaramo u korisno znanje! */}
              IT škola <br />
              <i className="font-bold text-cyan-500">programiranja</i>
              <br />
              za djecu
            </h1>
          </div>

          <h2 className="text-3xl font-semibold hidden md:block">
            {/* Umjesto igrica, TikTok-a i YouTube-a, korisno znanje! */}
            <span className="text-cyan-500 underline">Korisno znanje</span>{" "}
            umjesto igrica, TikTok-a i YouTube-a!
          </h2>
          <div className="divide-y">
            <Accordion title="Individualan pristup">
              Nastava se vrši u malim grupama do 10 učenika.
            </Accordion>
            <Accordion title="Jednom tjedno-vikendom">
              Nastava se vrši jednom tjedno-vikendom (ujutro, poslijepodne,
              navečer).
            </Accordion>
            <Accordion title="Besplatna ogledna radionica">
              Svaki vikend je besplatna ogledna radionica!
            </Accordion>
            <Accordion title="Dijete razvija korisne vještine">
              Dijete razvija &quot;soft skills&quot; vještine: kritičko i
              logičko razmišljanje, brzinu donošenja odluka.
            </Accordion>
          </div>
          <div className="flex flex-col sm:flex-row items-center sm:space-x-2 space-y-4 sm:space-y-0">
            <a href="#contact" className="w-full sm:w-auto">
              <button className="button">Edukacijski program i cijene</button>
            </a>
            <div className="flex flex-col text text-left">
              <div className="flex">
                <div className="p-1">
                  <BiPlus />
                </div>
                <div>
                  <span className="font-bold text-amber-600">
                    Više od 50 modula
                  </span>{" "}
                  u ponudi
                </div>
              </div>
              <div className="flex">
                <div className="p-1">
                  <BiPlus />
                </div>
                <div>
                  Svaki modul završava{" "}
                  <span className="font-bold text-amber-600">
                    vlastitim IT projektom
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
