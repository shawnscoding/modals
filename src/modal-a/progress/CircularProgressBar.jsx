import classNames from "classnames";
import React from "react";
import styles from "./styles.module.css";

const CircularProgressBar = () => {
  return (
    <div>
      <div
        className={classNames(styles["circle-indeteminate"])}
        role="progressbar"
      >
        <svg
          className={classNames(styles["circle-indeteminate__svg"])}
          viewBox="22 22 44 44"
        >
          <circle
            cx="44"
            cy="44"
            r="20.2"
            fill="none"
            strokeWidth="3.6"
          ></circle>
        </svg>
      </div>
    </div>
  );
};

export default CircularProgressBar;
