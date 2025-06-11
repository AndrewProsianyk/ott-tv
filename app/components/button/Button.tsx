import clsx from "clsx";
import styles from "./Button.module.scss";

type ButtonProps = {
  label: string;
  variant?: "main" | "secondary";
  icon?: React.ReactNode;
  onClick?: () => void;
};

export default function Button({
  icon = null,
  label,
  variant = "main",
  onClick,
}: ButtonProps) {
  return (
    <button className={clsx(styles.button, styles[variant])} onClick={onClick}>
      {icon && icon}
      <span className={styles.btnLabel}>{label}</span>
    </button>
  );
}
