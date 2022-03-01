import React from "react";

import Section from "/components/templates/section";

const Card = (props) => {
  return (
    <div className="bg-gradient-to-br from-slate-700 to-slate-800 text-white rounded-3xl flex flex-col justify-between space-y-4 p-8 basis-full">
      {props.number && <span className="text-gray-300">#{props.number}</span>}
      {props.title && <h3 className="text-3xl font-semibold">{props.title}</h3>}
      {props.cta && <span className="font-bold">{props.cta}</span>}
    </div>
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
