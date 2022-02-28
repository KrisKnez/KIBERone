import React from "react";

const Button = ({ className, children, ...props }) => {
  return (
    <button
      className="px-4 py-2 rounded-md text-sm font-medium border-b-2 focus:outline-none focus:ring transition text-white bg-blue-500 border-blue-800 hover:bg-blue-600 active:bg-blue-700 focus:ring-blue-300"
      {...props}
    >
      {React.Children.map(children, child => child)}
    </button>
  );
};

export default Button;
