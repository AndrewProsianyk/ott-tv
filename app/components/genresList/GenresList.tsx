import { Movie } from "@/app/utils/types";
import styles from "./GenresList.module.scss";

type GenresListProps = {
  movie: Movie;
};

export default function GenresList({ movie }: GenresListProps) {
  const genres = movie?.genres;
  return (
    <ul className={styles.genresList}>
      {genres.length > 0 &&
        genres.map((genre) => (
          <li key={genre.id} className={styles.listItem}>
            <span className={styles.genreName}>{genre.name}</span>
          </li>
        ))}
    </ul>
  );
}
