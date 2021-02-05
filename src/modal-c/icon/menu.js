import React from "react";
import classNames from "classnames";

const menuIcon = ({ className }) => {
  return (
    <svg
      className={classNames(className)}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
    </svg>
  );
};

export default menuIcon;
