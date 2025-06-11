import Link from "next/link";
import SearchButton from "../search-button/SearchButton";
import styles from "./HeaderTools.module.scss";
import Image from "next/image";
import avatar from "@/public/images/avatar.png";

export default function HeaderTools() {
  return (
    <div className="flex gap-[40px] items-center">
      <SearchButton />
      <Link href={"/profile"}>
        <Image alt="avatar" width={40} height={41} src={avatar} />
      </Link>
    </div>
  );
}
