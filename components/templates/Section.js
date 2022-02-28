/* eslint-disable react/no-children-prop */

import React from "react";

import classNames from "classnames";

const Section = ({ children, className, ...props }) => {
  return <section children={children} {...props} className={classNames("container mx-auto max-w-screen-xl my-16 px-4", className)}></section>;
};

export default Section;
