import clsx from "clsx";
import styles from "./Button.module.scss";

type ButtonProps = {
  label: string;
  variant?: "main" | "secondary";
  icon?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
};

export default function Button({
  icon = null,
  label,
  variant = "main",
  onClick,
  disabled,
}: ButtonProps) {
  return (
    <button
      className={clsx(
        styles.button,
        styles[variant],
        disabled && styles.disabled
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && icon}
      <span className={styles.btnLabel}>{label}</span>
    </button>
  );
}
