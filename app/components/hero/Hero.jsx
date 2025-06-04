"use client";

import styles from "./Hero.module.scss";
import Container from "../container/Container";
import FadeBgImage from "../fadeBgImage/FadeBgImage";
import Button from "../button/Button";
import PlayIcon from "../icons/PlayIcon";
import PlusIcon from "../icons/PlusIcon";
import LinkButton from "../linkButton/LinkButton";
import AdditionalMovieInfo from "../additionalMovieInfo/AdditionalMovieInfo";

export default function Hero({ movie }) {
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
