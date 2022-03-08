import React from "react";

import Section from "/components/templates/Section";

const Card = (props) => {
  return (
    <a
      href="#contact"
      className="group relative basis-full overflow-hidden rounded-3xl bg-gradient-to-br from-slate-700 to-slate-800"
    >
      <div className="absolute bg-blue-600 w-0 group-hover:w-full h-0 group-hover:h-full bottom-0 left-0 rounded-full transition-all duration-300 ease-in transform-gpu -translate-x-full translate-y-full scale-[4]"></div>
      <div className="relative transition-all text-white  flex flex-col justify-between space-y-4 p-8">
        {props.number && <span className="text-gray-300">#{props.number}</span>}
        {props.title && (
          <h3 className="text-3xl font-semibold">{props.title}</h3>
        )}
        {props.cta && <span className="font-bold">{props.cta}</span>}
      </div>
    </a>
  );
};

const Cards = () => {
  return (
    <Section className="flex flex-wrap md:flex-nowrap justify-between md:space-x-8 space-y-8 md:space-y-0 px-4">
      <Card
        number="1"
        title="Što učiniti ako dijete previše vremena provodi pred ekranom?"
        cta="Saznaj više"
      />
      <Card
        number="2"
        title="Zašto je važno razviti vještine digitalne pismenosti?"
        cta="Saznaj više"
      />
      <Card
        number="3"
        title="Kako izgleda pohađanje edukacije u KIBERone-u?"
        cta="Saznaj više"
      />
    </Section>
  );
};

export default Cards;
