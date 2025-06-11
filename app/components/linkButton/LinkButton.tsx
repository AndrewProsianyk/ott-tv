import Link from "next/link";
import styles from "./LinkButton.module.scss";

type LinkButtonProps = {
  label: string;
  href: string;
  icon?: React.ReactNode;
};

export default function LinkButton({
  href,
  icon = null,
  label,
}: LinkButtonProps) {
  return (
    <Link href={href} className={styles.linkBtn}>
      {icon && icon}
      <span className={styles.linkLabel}>{label}</span>
    </Link>
  );
}
