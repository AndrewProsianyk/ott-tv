import Container from "@/app/components/container/Container";
import styles from "./page.module.scss";
import { getMovieById } from "@/app/utils/fetchMovies";
import FadeBgImage from "@/app/components/fadeBgImage/FadeBgImage";
import LinkButton from "@/app/components/linkButton/LinkButton";
import Button from "@/app/components/button/Button";
import AdditionalMovieInfo from "@/app/components/additionalMovieInfo/AdditionalMovieInfo";
import PlayIcon from "@/app/components/icons/PlayIcon";
import PlusIcon from "@/app/components/icons/PlusIcon";

export default async function MoviePage({ params }) {
  const movie = await getMovieById(params.id);
  console.log(movie);

  return (
    <div className={styles.heroSection}>
      <Container>
        <div className="relative">
          <FadeBgImage
            src={`https://image.tmdb.org/t/p/w1280${movie?.backdrop_path}`}
          />
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>{movie.title}</h1>
            <AdditionalMovieInfo movie={movie} />
            <p className={styles.description}>{movie.overview}</p>
            <div className="flex gap-[24px]">
              <LinkButton href={"/qwe"} icon={<PlayIcon />} label="Watch" />
              <Button icon={<PlusIcon />} label="Add to list" />
            </div>
            {movie?.adult && (
              <div className={styles.ageRating}>
                <span className={styles.ageTag}>18+</span>
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}
