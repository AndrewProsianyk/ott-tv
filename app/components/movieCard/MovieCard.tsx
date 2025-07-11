import Link from "next/link";
import styles from "./MovieCard.module.scss";
import Image from "next/image";
import mediaPlaceholder from "@/public/images/mediaPlaceholder.png";
import { Media } from "@/app/utils/types";

type MoviecardProps = {
  movie: Media;
  type?: "movies" | "tv";
};

export default function MovieCard({ movie, type = "movies" }: MoviecardProps) {
  const posterSrc = movie.poster_path
    ? `https://image.tmdb.org/t/p/w1280${movie.poster_path}`
    : mediaPlaceholder;

  return (
    <Link
      href={`/${type}/${movie.id}`}
      className={styles.card}
      aria-label="Link to movie or tv serial page"
    >
      <Image
        src={posterSrc}
        width={236}
        height={280}
        className={styles.image}
        alt="movie poster"
      />
      <p className={styles.title}>{movie.title || movie.name}</p>
    </Link>
  );
}
