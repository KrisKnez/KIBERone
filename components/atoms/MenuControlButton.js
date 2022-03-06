import React from "react";
import classNames from "classnames";

import Styles from "./MenuControlButton.module.css";

const MenuControlButton = ({active, setActive}) => {
  return (
    <ul className={Styles["nav-header-controls"]}>
      <li
        className={classNames(
          Styles["nav-header-controls--burger"],
          active ? Styles["active"] : ""
        )}
      >
        <i></i>
        <i></i>
        <i></i>
      </li>
    </ul>
  );
};

export default MenuControlButton;
