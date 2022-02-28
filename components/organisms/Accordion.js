import React from "react";
import classNames from "classnames";

import { BiCheck, BiPlus, BiMinus } from "react-icons/bi";

const Accordion = (props) => {
  let [extended, setExtended] = React.useState(false);
  let toggle = () => setExtended(!extended);

  return (
    <div className="w-full flex flex-col">
      <div
        className="flex w-full cursor-pointer select-none space-x-4"
        onClick={toggle}
      >
        <div className="flex items-center justify-center py-2 text-4xl">
          <BiCheck />
        </div>
        <div className="grow flex items-center text-xl font-semibold">
          {props.title}
        </div>
        <div className="flex items-center justify-center py-2 text-3xl">
          {extended ? <BiMinus /> : <BiPlus />}
        </div>
      </div>
      <div
        className={classNames(
          "transition-all overflow-hidden ease-in-out",
          extended ? "opacity-100 h-full" : "opacity-0 h-0"
        )}
      >
        <div className="py-2">{React.Children.map(props.children, (child) => child)}</div>
      </div>
    </div>
  );
};

export default Accordion;
