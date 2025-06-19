import styles from "./page.module.scss";
import ListSection from "./components/listSection/ListSection";
import { getMediaByGenre, getPopularMedia } from "./utils/fetchMedia";
import HeroSlider from "./components/heroSlider/HeroSlider";

export default async function Home() {
  const popularMovies = await getPopularMedia("movie");
  const actionMovies = await getMediaByGenre("movie", 28);
  const comedyMovies = await getMediaByGenre("movie", 35);
  const docMovies = await getMediaByGenre("movie", 99);

  return (
    <div className={styles.page}>
      <HeroSlider movies={popularMovies.slice(0, 10)} />
      <div>
        <ListSection
          title="By genre Action"
          data={actionMovies}
          type="movies"
        />
        <ListSection
          title="By genre Comedy"
          data={comedyMovies}
          type="movies"
        />
        <ListSection
          title="By genre Documentary"
          data={docMovies}
          type="movies"
        />
      </div>
    </div>
  );
}
