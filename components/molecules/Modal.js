import React, { useEffect } from "react";
import classNames from "classnames";

import { IoMdClose } from "react-icons/io";

const Modal = (props) => {
  let [modalOpen, setModalOpen] = React.useState(true);
  React.useEffect(() => {
    if (modalOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [modalOpen]);

  return (
    <div
      className={classNames(
        "fixed w-screen h-screen inset-0 transition-all flex items-center justify-center bg-black/80",
        modalOpen ? "opacity-1 visible" : "opacity-0 invisible"
      )}
    >
      <div className="w-full h-full sm:max-w-[400px] sm:max-h-[800px] bg-white overflow-y-scroll sm:overflow-auto flex flex-col rounded-md">
        <div className="flex justify-end">
          <button
            className="p-3 text-gray-500 text-2xl"
            onClick={() => setModalOpen(false)}
          >
            <IoMdClose />
          </button>
        </div>
        <div className="p-4">
          {React.Children.map(props.children, (child) => child)}
        </div>
      </div>
    </div>
  );
};

export default Modal;
