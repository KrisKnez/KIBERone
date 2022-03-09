import React from "react";
import classNames from "classnames";

import Image from "next/image";

import Section from "/components/templates/Section";
import Accordion from "/components/organisms/Accordion";

import { BiPlus } from "react-icons/bi";

import Kids from "/assets/kids_faded2_cut.png";

const Hero = ({ className }) => {
  return (
    <Section
      className={classNames(
        "relative h-full flex flex-col justify-center lg:justify-start",
        className
      )}
    >
      {/* Backgrou  nd image */}
      <div className="absolute w-full h-full inset-0 flex justify-end items-start">
        <div className="relative w-3/5 md:w-1/2 aspect-[71/91]  lg:block">
          <Image
            priority
            layout="fill"
            src={Kids}
            alt="Kid"
            objectFit="scale-down"
          />
        </div>
      </div>
      <div className="flex items-stretch relative text-center md:text-left">
        <div className="w-full md:w-2/5 space-y-10">
          <div className="relative">
            <div className="absolute inset-0 w-full h-full flex justify-end">
              <div className="relative aspect-w-7 aspect-h-9 h-full">
                <Image
                  priority
                  layout="fill"
                  src={Kids}
                  alt="Kid"
                  objectFit="scale-down"
                />
              </div>
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-7xl font-semibold break-word text-left">
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
          <div className="flex flex-col sm:flex-row items-center space-x-2">
            <a href="#contact">
              <button className="button">
                Edukacijski program i cijene
              </button>
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
