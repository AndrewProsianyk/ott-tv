import Container from "../container/Container";
import Copyright from "../copyright/Copyright";
import Logo from "../logo/Logo";
import SocialMediaLinks from "../socialMediaLinks/SocialMediaLinks";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className="py-[35px]">
      <Container>
        <div className="flex justify-between items-center">
          <Logo />
          <Copyright />
          <SocialMediaLinks />
        </div>
      </Container>
    </footer>
  );
}
