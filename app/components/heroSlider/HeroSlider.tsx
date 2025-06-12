"use client";

import { useEffect, useState } from "react";
import Hero from "../hero/Hero";
import styles from "./HeroSlider.module.scss";
import { Movie } from "@/app/utils/types";

type HeroSliderProps = {
  movies: Movie[];
};

export default function HeroSlider({ movies }: HeroSliderProps) {
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(null);

  useEffect(() => {
    if (movies.length > 0) {
      setTimeout(() => setIsVisible(true), 100);
    }
  }, [movies.length]);

  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setIsVisible(false);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % movies.length);
        setIsVisible(true);
      }, 600);
    }, 5000);

    return () => clearInterval(interval);
  }, [movies.length, isVisible]);

  return (
    <div
      className={`${styles.heroSlider} ${
        isVisible ? styles.visible : styles.hidden
      }`}
    >
      <Hero movie={movies[index]} />
    </div>
  );
}
