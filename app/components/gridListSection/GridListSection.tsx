import { Media } from "@/app/utils/types";
import Container from "../container/Container";
import MovieCard from "../movieCard/MovieCard";
import SectionTitle from "../sectionTitle/SectionTitle";
import styles from "./GridListSection.module.scss";

type GridListSectionProps = {
  list: Media[];
  title: string;
  noDataMsg: string;
};

export default function GridListSection({
  list,
  title,
  noDataMsg,
}: GridListSectionProps) {
  return (
    <section className={styles.wrapper}>
      <Container>
        <div>
          <SectionTitle title={title} />

          {list && list.length > 0 && (
            <ul className={styles.movieGrid}>
              {list.map((movie: Media) => (
                <li key={movie.id}>
                  <MovieCard movie={movie} />
                </li>
              ))}
            </ul>
          )}
          {list && list.length === 0 && (
            <div className={styles.noData}>
              <p>{noDataMsg}</p>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
