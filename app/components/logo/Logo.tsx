import logo from "@/public/images/logo.png";
import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href={"/"}>
      <Image src={logo} width={110} height={45} alt="site logo" />
    </Link>
  );
}
