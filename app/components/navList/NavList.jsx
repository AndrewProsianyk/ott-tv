import Link from "next/link";
import styles from "./NavList.module.scss";

const navList = [
  {
    label: "Movies",
    path: "/movies",
  },
  {
    label: "TV Series",
    path: "/tv-series",
  },
  {
    label: "Documentaries",
    path: "/documentaries",
  },
];

export default function NavList() {
  return (
    <nav>
      <ul className={styles.list}>
        {navList.map((item) => {
          return (
            <li key={item.label} className={styles.listItem}>
              <Link href={item.path}>{item.label}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
