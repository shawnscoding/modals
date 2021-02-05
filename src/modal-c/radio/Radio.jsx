import classNames from "classnames";
import React from "react";
import styles from "./styles.module.css";

const Radio = ({ name, checked, id, label, onChange }) => {
  return (
    <div className={classNames(styles["row"])}>
      <div className={classNames(styles["radio__container"])}>
        <input
          onChange={onChange}
          name={name}
          checked={checked}
          id={id}
          type="radio"
          className={classNames(styles["radio__input"])}
        />
        <div className={classNames(styles["radio__view"])}>
          <div className={classNames(styles["radio__circle"])}></div>
        </div>
        <div className={classNames(styles["radio__animator"])} />
      </div>
      <label className={classNames(styles["radio__label"])} htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

Radio.defaultProps = {
  checked: false,
};

export default Radio;
