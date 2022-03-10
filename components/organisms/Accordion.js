import React from "react";
import classNames from "classnames";

import { BiCheck, BiPlus, BiMinus } from "react-icons/bi";

const Accordion = (props) => {
  let [extended, setExtended] = React.useState(false);
  let toggle = () => setExtended(!extended);

  return (
    <div className="w-full flex flex-col text-left transition-all">
      {/* Header */}
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
            <div
              className={classNames(
                "absolute transition-transform ease-in",
                extended ? "scale-y-0" : " scale-y-100"
              )}
            >
              <BiPlus />
            </div>
          </div>
        </div>
      </div>
      {/* Content */}
      <div
        className={classNames(
          "overflow-hidden transition-all ease-in-out duration-500",
          extended ? "max-h-64" : "max-h-0"
        )}
      >
        <div className={classNames("py-2 transition-all ease-in-out delay-200", extended ? "opacity-100" : "opacity-0")}>
          {React.Children.map(props.children, (child) => child)}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
