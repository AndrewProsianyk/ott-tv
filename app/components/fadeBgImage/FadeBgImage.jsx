import Image from "next/image";
import styles from "./FadeBgImage.module.scss";

export default function FadeBgImage({ src }) {
  return (
    <div className={styles.imageWrap}>
      <Image
        alt="hero section image"
        width={1600}
        height={785}
        src={src}
        style={{
          objectFit: "cover",
        }}
        priority={true}
      />
    </div>
  );
}
