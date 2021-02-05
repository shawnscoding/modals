import React from "react";
import Checkbox from "../checkbox/Checkbox";
import styles from "./styles.module.css";
import classNames from "classnames";

const Selectbox = ({ onSelect, list, selectedVal, id }) => {
  return (
    <>
      <div className={classNames(styles["dropdown__wrapper"])}>
        <input
          id={id}
          type="checkbox"
          className={classNames(styles["dropdown__opener"])}
          value=""
          readOnly
        />
        <div className={classNames(styles["dropdown__ui"])}>
          <p className={classNames(styles["dropdown__text"])}>Select</p>
          <p>
            <i className={classNames(styles["arrow--down"])}></i>
          </p>
        </div>
        <div className={classNames(styles["dropdown__list-wrapper"])}>
          <ul className={classNames(styles["dropdown__list"])}>
            {list &&
              list.map((item) => {
                const { label, value } = item;
                const isSelected = selectedVal === value;
                return (
                  <li
                    key={label}
                    className={classNames(styles["dropdown__list-item"])}
                    onClick={() => onSelect(value)}
                  >
                    <button
                      className={classNames(
                        {
                          [styles["dropdown__list-btn--selected"]]: isSelected,
                        },
                        { [styles["dropdown__list-btn"]]: !isSelected }
                      )}
                      type="button"
                    >
                      {label}
                      <Checkbox checked={isSelected} />
                    </button>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Selectbox;
