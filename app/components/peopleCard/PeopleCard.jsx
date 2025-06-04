import Image from "next/image";
import styles from "./PeopleCard.module.scss";
import photoPlaceholder from "@/public/images/photoPlaceholder.png";

export default function PeopleCard({ person }) {
  const imageSrc = person.profile_path
    ? `https://image.tmdb.org/t/p/w200/${person.profile_path}`
    : photoPlaceholder;
  return (
    <article className={styles.card}>
      <Image
        src={imageSrc}
        alt="person photo"
        width={140}
        height={140}
        className={styles.cardImage}
      />
      <p className={styles.cardName}>{person.name}</p>
      <p className={styles.cardRole}>{person.character}</p>
    </article>
  );
}
