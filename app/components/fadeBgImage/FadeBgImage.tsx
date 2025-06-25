import Image from "next/image";
import styles from "./FadeBgImage.module.scss";

type FadeBgImageProps = {
  src: string;
};

export default function FadeBgImage({ src }: FadeBgImageProps) {
  return (
    <div className={styles.imageWrap}>
      <Image
        alt="movie poster"
        width={3840}
        height={2160}
        // width={1600}
        // height={900}
        src={src}
        style={{
          objectFit: "cover",
        }}
        priority={true}
      />
    </div>
  );
}
