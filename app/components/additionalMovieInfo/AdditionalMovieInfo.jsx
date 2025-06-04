import RatingStars from "../starsRate/RatingStars";
import styles from "./AdditionalMovieInfo.module.scss";

export default function AdditionalMovieInfo({ movie }) {
  const companyName = movie.production_companies[0]?.name
    ? movie.production_companies[0].name
    : null;

  return (
    <div className={styles.additionalInfo}>
      <span>{movie.release_date?.slice(0, 4)}</span>
      <div className={styles.verticalLine}></div>
      {companyName && <span>By {companyName}</span>}
      <div className={styles.verticalLine}></div>
      <span>2008</span>
      <div className={styles.verticalLine}></div>
      <RatingStars rating={movie?.vote_average} />
    </div>
  );
}
