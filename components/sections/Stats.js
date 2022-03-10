import React from "react";

import Section from "/components/templates/Section";

const StatItem = (props) => {
  return (
    <div className="py-8 basis-1/2 md:basis-1/3 xl:basis-1/5 ">
      <div className="flex flex-col items-center space-y-2 h-full justify-between text-center">
        <div className="text-center">
          <span>&#8203;{props.pretext}</span>
          {props.data && (
            <h2 className="text-4xl lg:text-5xl font-semibold¸m-0">{props.data}</h2>
          )}
          <span>&#8203;{props.posttext}</span>
        </div>
        <div className="w-full px-4">
          <div className="w-full border-y border-slate-900" />
        </div>
        {props.title && <h4 className="h-16">{props.title}</h4>}
      </div>
    </div>
  );
};

const Stats = (props) => {
  return (
    <Section className="flex flex-wrap justify-center">
      <StatItem data="25" title="Država" />
      <StatItem data="250" title="Gradova" />
      <StatItem data="30.000+" title="Učenika" />
      <StatItem data="10.000" title="Prosječna plaća programera" />
      <StatItem data="80%" title="Prakse" />
    </Section>
  );
};

export default Stats;
