import React from "react";
import classNames from "classnames";

import Image from "next/image";

import RobloxLogo from "/assets/sponsors/Roblox-Logo.png";
import SamsungLogo from "/assets/sponsors/Logo-Samsung.png";
import CroAILogo from "/assets/sponsors/CroAI_color_smaller.png";
import MinecraftLogo from "/assets/sponsors/Minecraft-Logo_moved.png";
import MicrosoftLogo from "/assets/sponsors/Microsoft-Logo.png";

const Sponsor = (props) => {
  return (
    <div
      className={classNames("w-1/2 sm:w-1/3 md:w-1/5 px-4", {
        "brightness-0 invert": props.effect,
      })}
    >
      <div className="relative aspect-w-2 aspect-h-1">
        <Image
          layout="fill"
          objectFit="contain"
          src={props.src}
          alt={props.alt}
        />
      </div>
    </div>
  );
};

const sponsors = [
  {
    src: RobloxLogo,
    alt: "Roblox",
    effect: true,
  },
  {
    src: SamsungLogo,
    alt: "Samsung",
    effect: true,
  },
  {
    src: CroAILogo,
    alt: "CroAI",
    effect: true,
  },
  {
    src: MicrosoftLogo,
    alt: "Microsoft",
    effect: true,
  },
  {
    src: MinecraftLogo,
    alt: "Minecraft",
    effect: false,
  },
];

const Sponsors = () => {
  return (
    <section id="partners" className="bg-black py-8">
      <div className="container mx-auto max-w-screen-xl flex flex-wrap justify-center px-4">
        {sponsors.map((sponsor, i) => (
          <Sponsor
            key={i}
            src={sponsor.src}
            alt={sponsor.alt}
            effect={sponsor.effect}
          />
        ))}
      </div>
    </section>
  );
};

export default Sponsors;
