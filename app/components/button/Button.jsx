import clsx from "clsx";
import styles from "./Button.module.scss";

export default function Button({ icon = null, label, variant }) {
  return (
    <button className={clsx(styles.button, styles[variant])}>
      {icon && icon}
      <span className={styles.btnLabel}>{label}</span>
    </button>
  );
}
