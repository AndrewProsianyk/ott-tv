import Link from "next/link";
import styles from "./MovieCard.module.scss";
import Image from "next/image";

export default function MovieCard({ movie }) {
  return (
    <Link href={`/movies/${movie.id}`} className={styles.card}>
      <Image
        src={`https://image.tmdb.org/t/p/w1280${movie?.poster_path}`}
        width={236}
        height={280}
        className={styles.image}
        alt="movie poster"
      />
      <p className={styles.title}>{movie.original_title}</p>
    </Link>
  );
}
