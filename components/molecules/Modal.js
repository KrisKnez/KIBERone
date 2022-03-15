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
        "fixed w-screen h-screen bg-white inset-0 overflow-y-scroll flex flex-col transition-all",
        modalOpen ? "opacity-1 visible" : "opacity-0 invisible"
      )}
    >
      <div className="flex justify-end">
        <button
          className="p-2.5 text-gray-400 text-3xl"
          onClick={() => setModalOpen(false)}
        >
          <IoMdClose />
        </button>
      </div>
      <div>{React.Children.map(props.children, (child) => child)}</div>
    </div>
  );
};

export default Modal;
