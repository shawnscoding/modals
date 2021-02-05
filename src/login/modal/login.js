import classNames from "classnames";
import React from "react";
import CircularProgressBar from "../progress/CircularProgressBar";
import styles from "./styles.module.css";
import commonStyles from "../commonStyles/common.module.css";
import CloseIcon from "../icon/close";
import GroupIcon from "../icon/group";

const Modal = ({ onClose, _create }) => {
  const [form, setForm] = React.useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = React.useState({ open: false });
  const [msg, setMsg] = React.useState({ msg: "", code: null });

  const onChange = (e) => {
    const { id, value } = e.target;

    setForm({
      ...form,
      [id]: value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading({ loading: true });
    try {
      const { data } = await apiClient.post("/auth/login", form);
      console.log("data ::", data);
      location.href = "home";
    } catch (err) {
      console.log("err", err);
      const { error, code } = err.response.data;
      setMsg({ msg: error, code });
    }
    // form validation -> return false;
    return false;
  };
  return (
    <div className={classNames(styles["modal__screen-wrapper"])}>
      <div className={classNames(styles["modal__wrapper"])}>
        <button
          type="button"
          className={classNames(styles["modal__close-btn"])}
          onClick={onClose}
        >
          <CloseIcon className={styles["modal__close-icon"]} />
        </button>
        <div className={classNames(styles["modal__icon__wrapper"])}>
          <GroupIcon className={styles["modal__icon"]} />
        </div>
        <h1 className={classNames(styles["modal__header"])}>Log In</h1>

        <form onSubmit={onSubmit} className={classNames(styles["modal__form"])}>
          <label className={classNames(styles["label"])} htmlFor="email">
            Email
          </label>
          <input
            className={classNames(styles["text-field"])}
            placeholder="Type your email..."
            type="email"
            id="email"
            onChange={(e) => onChange(e)}
            value={form.email}
          />
          <label className={classNames(styles["label"])} htmlFor="password">
            Password
          </label>
          <input
            className={classNames(styles["text-field"])}
            placeholder="Type your password..."
            type="password"
            id="password"
            onChange={(e) => onChange(e)}
            value={form.password}
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
                onClick={onSubmit}
                className={classNames(
                  commonStyles["text-btn--secondary--contained--medium"]
                )}
              >
                Log In
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
