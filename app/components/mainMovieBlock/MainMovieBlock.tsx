"use client";

import Image from "next/image";
import Container from "../container/Container";
import FadeBgImage from "../fadeBgImage/FadeBgImage";
import styles from "./MainMovieBlock.module.scss";
import AdditionalMovieInfo from "../additionalMovieInfo/AdditionalMovieInfo";
import PlayIcon from "../icons/PlayIcon";
import Button from "../button/Button";
import PlusIcon from "../icons/PlusIcon";
import AgeRating from "../ageRating/AgeRating";
import GenresList from "../genresList/GenresList";
import { Media, MediaLogoType } from "@/app/utils/types";
import DescriptionBlock from "../descriptionBlock/DescriptionBlock";

type MainMovieBlockProps = {
  movie: Media;
  logo: MediaLogoType;
};

export default function MainMovieBlock({ movie, logo }: MainMovieBlockProps) {
  return (
    <Container>
      <div className="relative">
        <FadeBgImage
          src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
        />
        <div className={styles.content}>
          {logo ? (
            <Image
              alt="movie logo"
              title={movie.title || movie.name}
              key={logo.file_path}
              width={500}
              height={logo.width / logo.aspect_ratio}
              src={`https://image.tmdb.org/t/p/original${logo.file_path}`}
            />
          ) : (
            <h1 className={styles.title}>{movie.title || movie.name}</h1>
          )}

          <AdditionalMovieInfo movie={movie} />
          <DescriptionBlock text={movie.overview} />
          <GenresList movie={movie} />
          <div className="flex gap-[24px]">
            <Button
              onClick={() => {
                if (typeof window !== "undefined") {
                  const trailerEl = document.getElementById("trailer-section");
                  trailerEl?.scrollIntoView({ behavior: "smooth" });
                }
              }}
              icon={<PlayIcon />}
              label="Watch trailer"
              variant="main"
            />
            <Button
              icon={<PlusIcon />}
              label="Add to list"
              variant="secondary"
            />
          </div>
          <AgeRating movie={movie} />
        </div>
      </div>
    </Container>
  );
}
