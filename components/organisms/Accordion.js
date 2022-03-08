import React from "react";
import classNames from "classnames";

import { BiCheck, BiPlus, BiMinus } from "react-icons/bi";

const Accordion = (props) => {
  let [extended, setExtended] = React.useState(false);
  let toggle = () => setExtended(!extended);

  return (
    <div className="w-full flex flex-col text-left">
      <div
        className="flex w-full cursor-pointer select-none space-x-4"
        onClick={toggle}
      >
        <div className="flex items-start justify-center py-2 text-4xl">
          <BiCheck />
        </div>
        <div className="grow flex items-center text-xl font-semibold py-2">
          {props.title}
        </div>
        <div className="flex items-center justify-center py-2 text-2xl">
          <div className="w-8 h-8 flex items-center justify-center">
            <div className="absolute">
              <BiMinus />
            </div>
            <div className={classNames("absolute transition-transform ease-in", extended ? "scale-y-0" : " scale-y-100")}>
              <BiPlus />
            </div>
          </div>
        </div>
      </div>
      <div
        className={classNames(
          "transition-all overflow-hidden ease-in-out text-left",
          extended ? "opacity-100 h-full" : "opacity-0 h-0"
        )}
      >
        <div className="py-2">
          {React.Children.map(props.children, (child) => child)}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
