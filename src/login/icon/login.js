import React from "react";
import classNames from "classnames";

const LoginIcon = ({ className }) => {
  return (
    <svg
      className={classNames(className)}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <rect fill="none" height="24" width="24" />
      </g>
      <g>
        <path d="M11,7L9.6,8.4l2.6,2.6H2v2h10.2l-2.6,2.6L11,17l5-5L11,7z M20,19h-8v2h8c1.1,0,2-0.9,2-2V5c0-1.1-0.9-2-2-2h-8v2h8V19z" />
      </g>
    </svg>
  );
};

export default LoginIcon;
