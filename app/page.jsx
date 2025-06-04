import styles from "./page.module.scss";
import Hero from "./components/hero/Hero";
import ListSection from "./components/listSection/ListSection";
import { getMovieById, getMoviesByGenre } from "./utils/fetchMovies";

export default async function Home() {
  const heroMovie = await getMovieById(986056);
  const actionMovies = await getMoviesByGenre(28);
  const comedyMovies = await getMoviesByGenre(35);
  const docMovies = await getMoviesByGenre(99);
  console.log(heroMovie);

  return (
    <div className={styles.page}>
      <Hero movie={heroMovie} />
      <div>
        <ListSection title="By genre Action" data={actionMovies} />
        <ListSection title="By genre Comedy" data={comedyMovies} />
        <ListSection title="By genre Documentary" data={docMovies} />
      </div>
    </div>
  );
}
