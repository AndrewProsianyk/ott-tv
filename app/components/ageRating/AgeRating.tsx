import { Media } from "@/app/utils/types";
import styles from "./AgeRating.module.scss";

export default function AgeRating({ movie }: { movie: Media }) {
  return (
    <>
      {movie?.adult && (
        <div className={styles.ageRating}>
          <span className={styles.ageTag}>18+</span>
        </div>
      )}
    </>
  );
}
