import Link from "next/link";
import styles from "./LinkButton.module.scss";

export default function LinkButton({ href, icon = null, label }) {
  return (
    <Link href={href} className={styles.linkBtn}>
      {icon && icon}
      <span className={styles.linkLabel}>{label}</span>
    </Link>
  );
}
