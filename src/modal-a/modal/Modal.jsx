import classNames from "classnames";
import React from "react";
import CircularProgressBar from "../progress/CircularProgressBar";
import styles from "./styles.module.css";
import commonStyles from "../commonStyles/common.module.css";
import Radio from "../radio/Radio";
import CloseIcon from "../icon/Close";

const Modal = ({ onClose, _create }) => {
  const [form, setForm] = React.useState({
    email: "",
    mobile_no: "",
    name: "",
    password: "",
    access_type: "",
    is_paid_user: "",
    country_type: "",
    role: ""
  });

  const [loading, setLoading] = React.useState({ open: false });

  const onChange = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    setForm((prev) => ({
      ...prev,
      [id]: value
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
      [name]: id
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
        <h1 className={classNames(styles["modal__header"])}>
          Create a content
        </h1>
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
            placeholder="Please type user email..."
            type="email"
            id="email"
            onChange={(e) => onChange(e)}
            value={form.email}
          />
          <label className={classNames(styles["label"])} htmlFor="name">
            name
          </label>
          <input
            className={classNames(styles["text-field"])}
            placeholder="Please type user Name..."
            type="text"
            id="name"
            onChange={(e) => onChange(e)}
            value={form.name}
          />
          <label className={classNames(styles["label"])} htmlFor="mobile_no">
            Mobile Number
          </label>
          <input
            className={classNames(styles["text-field"])}
            placeholder="Please type Mobile Number..."
            type="text"
            id="mobile_no"
            onChange={(e) => onChange(e)}
            value={form.mobile_no}
          />
          <label className={classNames(styles["label"])} htmlFor="password">
            Password
          </label>
          <input
            className={classNames(styles["text-field"])}
            placeholder="Please type password..."
            type="password"
            id="password"
            onChange={(e) => onChange(e)}
            value={form.password}
          />

          <div className={commonStyles["mb--medium"]}>
            <p className={classNames(styles["label"])}>Access Type</p>
            <Radio
              onChange={onRadioChange}
              id="E"
              checked={form.access_type === "E" ? true : false}
              name="access_type"
            />
            <Radio
              onChange={onRadioChange}
              id="Z"
              checked={form.access_type === "Z" ? true : false}
              name="access_type"
            />
          </div>
          <div className={commonStyles["mb--medium"]}>
            <p className={classNames(styles["label"])}>Is Paid User?</p>
            <Radio
              onChange={onRadioChange}
              id="Y"
              checked={form.is_paid_user === "Y" ? true : false}
              name="is_paid_user"
            />
            <Radio
              onChange={onRadioChange}
              id="N"
              checked={form.is_paid_user === "N" ? true : false}
              name="is_paid_user"
            />
          </div>
          <div className={commonStyles["mb--medium"]}>
            <p className={classNames(styles["label"])}>Country Type</p>
            <Radio
              onChange={onRadioChange}
              id="1"
              checked={form.country_type === "1" ? true : false}
              name="country_type"
            />
            <Radio
              onChange={onRadioChange}
              id="2"
              checked={form.country_type === "2" ? true : false}
              name="country_type"
            />
          </div>
          <div className={commonStyles["mb--medium"]}>
            <p className={classNames(styles["label"])}>Role</p>

            <Radio
              onChange={onRadioChange}
              id="1"
              checked={form.role === "1" ? true : false}
              name="role"
            />
            <Radio
              onChange={onRadioChange}
              id="2"
              checked={form.role === "2" ? true : false}
              name="role"
            />
          </div>

          <div className={classNames(styles["modal__btn-container"])}>
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
                Create
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
