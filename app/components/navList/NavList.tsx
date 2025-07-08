import Link from "next/link";
import styles from "./NavList.module.scss";

type NavItem = {
  label: string;
  path: string;
};

const navList: NavItem[] = [
  {
    label: "Movies",
    path: "/movies",
  },
  {
    label: "TV Series",
    path: "/tv",
  },
  {
    label: "Favorite",
    path: "/favorite",
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
