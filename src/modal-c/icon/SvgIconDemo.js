import React from "react";
import classNames from "classnames";

const SvgDemo = ({ className }) => {
  return (
    <svg
      className={classNames(className)}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </svg>
  );
};

export default SvgDemo;
