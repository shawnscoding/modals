import React from "react";
import styles from "./styles.module.css";

const Checkbox = (props) => {
  const { checked, onChange } = props;
  return (
    <div className={styles["checkbox__wrapper--primary"]} aria-disabled="false">
      <input
        onChange={onChange}
        checked={checked ? true : false}
        className={styles["checkbox__clickable"]}
        type="checkbox"
        value=""
      />
      <div className={styles["checkbox__view"]}>
        <span className={styles["checkbox"]}></span>
      </div>
      <div className={styles["checkbox__animator"]}></div>
    </div>
  );
};

Checkbox.propTypes = {};

export default Checkbox;
