import classNames from "classnames";
import React from "react";
import CircularProgressBar from "../progress/CircularProgressBar";
import styles from "./styles.module.css";
import commonStyles from "../commonStyles/common.module.css";
import Radio from "../radio/Radio";
import CloseIcon from "../icon/close";
import GroupIcon from "../icon/group";

const Modal = ({ onClose, _create }) => {
  const [form, setForm] = React.useState({
    email: "",
    mobile_no: "",
    name: "",
    password: "",
    access_type: "",
    is_paid_user: "",
    country_type: "",
    role: "",
  });

  const [loading, setLoading] = React.useState({ open: false });

  const onChange = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    setForm((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleClose = () => {
    onClose();
  };

  const onRadioChange = (e) => {
    const { name, id } = e.target;
    console.log("name ", name);
    console.log("id ", id);
    setForm((prev) => ({
      ...prev,
      [name]: id,
    }));
  };
  return (
    <div className={classNames(styles["modal__screen-wrapper"])}>
      <div className={classNames(styles["modal__wrapper"])}>
        <button
          type="button"
          className={classNames(styles["modal__close-btn"])}
          onClick={handleClose}
        >
          <CloseIcon className={styles["modal__close-icon"]} />
        </button>
        <div className={classNames(styles["modal__icon__wrapper"])}>
          <GroupIcon className={styles["modal__icon"]} />
        </div>
        <h1 className={classNames(styles["modal__header"])}>Create a User</h1>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            _create(form, setLoading);
          }}
          className={classNames(styles["modal__form"])}
        >
          <label className={classNames(styles["label"])} htmlFor="email">
            Email
          </label>
          <input
            className={classNames(styles["text-field"])}
            placeholder="Type user email..."
            type="email"
            id="email"
            onChange={(e) => onChange(e)}
            value={form.email}
          />
          <label className={classNames(styles["label"])} htmlFor="name">
            Name
          </label>
          <input
            className={classNames(styles["text-field"])}
            placeholder="Type user Name..."
            type="text"
            id="name"
            onChange={(e) => onChange(e)}
            value={form.name}
          />

          <div className={classNames(styles["modal__btn-container"])}>
            <button
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                _create(form, setLoading);
              }}
              className={classNames(
                commonStyles["text-btn--default--outlined--medium"],
                commonStyles["mr"]
              )}
            >
              Cancel
            </button>
            {loading.open ? (
              <button
                type="submit"
                disabled={true}
                className={classNames(
                  commonStyles["text-btn--secondary--contained--medium"],
                  commonStyles["btn--loading"]
                )}
              >
                <CircularProgressBar />
              </button>
            ) : (
              <button
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  _create(form, setLoading);
                }}
                className={classNames(
                  commonStyles["text-btn--secondary--contained--medium"]
                )}
              >
                Submit
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
