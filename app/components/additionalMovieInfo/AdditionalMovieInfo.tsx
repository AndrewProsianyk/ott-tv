import { Media } from "@/app/utils/types";
import RatingStars from "../starsRate/RatingStars";
import styles from "./AdditionalMovieInfo.module.scss";

type AdditionalMovieInfoProps = {
  movie: Media;
};

export default function AdditionalMovieInfo({
  movie,
}: AdditionalMovieInfoProps) {
  const companyName = movie.production_companies?.[0]?.name
    ? movie.production_companies[0].name
    : null;

  return (
    <div className={styles.additionalInfo}>
      <span>
        {movie.release_date?.slice(0, 4) || movie.first_air_date?.slice(0, 4)}
      </span>
      <div className={styles.verticalLine}></div>
      {companyName && (
        <>
          <span>By {companyName}</span>
          <div className={styles.verticalLine}></div>
        </>
      )}
      <RatingStars rating={movie?.vote_average} />
    </div>
  );
}
