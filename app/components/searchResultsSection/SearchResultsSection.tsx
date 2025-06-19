import { Media } from "@/app/utils/types";
import Container from "../container/Container";
import MovieCard from "../movieCard/MovieCard";
import SectionTitle from "../sectionTitle/SectionTitle";
import styles from "./SearchResultsSection.module.scss";

type SearchResultsSectionProps = {
  results: Media[];
};

export default function SearchResultsSection({
  results,
}: SearchResultsSectionProps) {
  return (
    <section className={styles.wrapper}>
      <Container>
        <div className="results">
          <SectionTitle title="Search Results:" />

          {results && results.length > 0 && (
            <ul className={styles.movieGrid}>
              {results.map((movie: Media) => (
                <li key={movie.id}>
                  <MovieCard movie={movie} />
                </li>
              ))}
            </ul>
          )}
          {results && results.length === 0 && (
            <div className={styles.noResults}>
              <p>No movies found. Try a different search term.</p>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
