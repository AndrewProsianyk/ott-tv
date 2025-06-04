import StarIcon from "../icons/StarIcon";
import styles from "./RatingStars.module.scss";

export default function RatingStars({ rating }) {
  const getVariant = (min, max) => {
    if (min < rating && rating < max) {
      return "half";
    } else if (rating >= max) {
      return "full";
    } else if (rating < min) {
      return "empty";
    }
    return;
  };

  return (
    <div className={styles.wrapper}>
      <StarIcon variant={getVariant(0, 2)} />
      <StarIcon variant={getVariant(2, 4)} />
      <StarIcon variant={getVariant(4, 6)} />
      <StarIcon variant={getVariant(6, 8)} />
      <StarIcon variant={getVariant(8, 10)} />
    </div>
  );
}
