import styles from "./page.module.scss";
import ListSection from "./components/listSection/ListSection";
import { getPopularMovies, getMoviesByGenre } from "./utils/fetchMovies";
import HeroSlider from "./components/heroSlider/HeroSlider";

export default async function Home() {
  const popularMovies = await getPopularMovies();
  const actionMovies = await getMoviesByGenre(28);
  const comedyMovies = await getMoviesByGenre(35);
  const docMovies = await getMoviesByGenre(99);

  return (
    <div className={styles.page}>
      <HeroSlider movies={popularMovies.slice(0, 10)} />
      <div>
        <ListSection title="By genre Action" data={actionMovies} />
        <ListSection title="By genre Comedy" data={comedyMovies} />
        <ListSection title="By genre Documentary" data={docMovies} />
      </div>
    </div>
  );
}
