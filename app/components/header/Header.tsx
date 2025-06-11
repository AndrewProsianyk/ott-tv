import styles from "./Header.module.scss";

import Container from "../container/Container";
import Logo from "../logo/Logo";
import NavList from "../navList/NavList";
import HeaderTools from "../header-tools/HeaderTools";

export default function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.headerContent}>
          <Logo />
          <div className="flex gap-[40px] items-center">
            <NavList />
            <HeaderTools />
          </div>
        </div>
      </Container>
    </header>
  );
}
