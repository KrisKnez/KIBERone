import React from "react";
import classNames from "classnames";

import Image from "next/image";

import Section from "../templates/section";
import Button from "../atoms/Button";
import Accordion from "../organisms/Accordion";

import Kid from "../../assets/kid.jpg";
import Kids from "../../assets/kids_faded2.png";

const Hero = ({ className }) => {
  return (
    <Section className={classNames("relative h-full", className)}>
      {/* Background image */}
      <div className="absolute w-full h-full inset-0 -z-[1] flex justify-end">
        <div className="relative w-1/2 h-full hidden lg:block">
          <Image
            priority
            layout="fill"
            src={Kids}
            alt="Kid"
            objectFit="cover"
          />
        </div>
      </div>
      <div className="flex items-stretch relative">
        <div className="w-full lg:w-2/5 space-y-6">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold break-word">
            {/* Dijete stalno bulji u ekrane? Dovedite ga u KIBERONE! */}
            {/* Gubljenje vremena na gadgetima pretvaramo u korisno znanje! */}
            IT škola <i className="font-bold text-sky-600">programiranja</i>
            <br />
            za djecu
          </h1>
          <h2 className="text-3xl font-semibold">
            {/* Umjesto igrica, TikTok-a i YouTube-a, korisno znanje! */}
            <span className="text-sky-600">Korisno znanje</span> umjesto:
            igrica, TikTok-a i YouTube-a!
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
            {/* <Button>Edukacijski program i cijene</Button> */}
            <button className="rounded-xl p-4 font-bold text-xl text-white bg-gradient-to-br from-cyan-400 to-blue-500">Edukacijski program i cijene</button>
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
