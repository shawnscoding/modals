import classNames from "classnames";
import React from "react";

const EqualizerIcon = ({ className }) => {
  return (
    <svg
      className={classNames(className)}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M10 20h4V4h-4v16zm-6 0h4v-8H4v8zM16 9v11h4V9h-4z" />
    </svg>
  );
};

export default EqualizerIcon;
