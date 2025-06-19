import Link from "next/link";
import styles from "./HeaderTools.module.scss";
import Image from "next/image";
import avatar from "@/public/images/avatar.png";
import SearchIcon from "../icons/SearchIcon";

export default function HeaderTools() {
  return (
    <div className="flex gap-[40px] items-center">
      <Link
        href={"/search"}
        className={styles.searchButton}
        aria-label="Go to search page"
      >
        <SearchIcon />
      </Link>
      <Link href={"/profile"}>
        <Image alt="avatar" width={40} height={41} src={avatar} />
      </Link>
    </div>
  );
}
