"use client";

import styles from "./Hero.module.scss";
import Container from "../container/Container";
import FadeBgImage from "../fadeBgImage/FadeBgImage";
import Button from "../button/Button";
import PlayIcon from "../icons/PlayIcon";
import PlusIcon from "../icons/PlusIcon";
import LinkButton from "../linkButton/LinkButton";
import AdditionalMovieInfo from "../additionalMovieInfo/AdditionalMovieInfo";
import { Movie } from "@/app/utils/types";

type HeroProps = {
  movie: Movie;
};

export default function Hero({ movie }: HeroProps) {
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
              <LinkButton
                href={`/movies/${movie.id}`}
                icon={<PlayIcon />}
                label="Watch"
              />
              <Button
                icon={<PlusIcon />}
                label="Add to list"
                variant="secondary"
              />
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
