import classNames from "classnames";
import React from "react";
const GetAppIcon = ({ className }) => {
  return (
    <svg
      className={classNames(className)}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
    </svg>
  );
};

export default GetAppIcon;
