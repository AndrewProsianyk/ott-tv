"use server";

import { API_BASE_URL } from "../constants/apiRoutes";
import { Movie, MovieCredits, Review } from "./types";

const API_TOKEN = process.env.TMDB_API_READ_ACCESS_TOKEN;
const CACHE_TIME = 3600;

const fetchOptions = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_TOKEN}`,
  },
  next: { revalidate: CACHE_TIME },
};

export async function getTVSerialById(movieId: number): Promise<Movie | null> {
  try {
    const response = await fetch(
      `${API_BASE_URL}/tv/${movieId}?language=en-US`,
      fetchOptions
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return (await response.json()) as Movie;
  } catch (error) {
    console.error("Error fetching movie:", error);
    return null;
  }
}

export async function getTVSerialByGenre(
  genreId: number,
  page = 1
): Promise<Movie[]> {
  try {
    const response = await fetch(
      `${API_BASE_URL}/discover/tv?with_genres=${genreId}&language=en-US&sort_by=popularity.desc&page=${page}`,
      fetchOptions
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.results as Movie[];
  } catch (error) {
    console.error("Can`t fetch series by genre", error);
    return [];
  }
}

export async function getTVSerialCredits(
  movieId: number
): Promise<MovieCredits> {
  try {
    const response = await fetch(
      `${API_BASE_URL}/tv/${movieId}/credits?language=en-US`,
      fetchOptions
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return {
      cast: data.cast || [],
      crew: data.crew || [],
    };
  } catch (error) {
    console.error("Can`t fetch credits", error);
    return { cast: [], crew: [] };
  }
}

type MovieLogoType = {
  aspect_ratio: number;
  file_path: string;
  iso_639_1: string;
  vote_average: number;
  width: number;
  height: number;
};

export async function getTVSerialLogo(movieId: number) {
  try {
    const response = await fetch(
      `${API_BASE_URL}/tv/${movieId}/images`,
      fetchOptions
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    return data.logos.find((img: MovieLogoType) => img.iso_639_1 === "en");
  } catch (error) {
    console.error("Error fetching logo:", error);
    return null;
  }
}

export async function getTVserialReviewIds(
  movieId: number
): Promise<number[] | null> {
  try {
    const response = await fetch(
      `${API_BASE_URL}/tv/${movieId}/reviews?language=en-US`,
      fetchOptions
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (!data.results || data.results.length === 0) return null;

    const reviewIDs = data.results.map((review: any) => review.id);
    return reviewIDs;
  } catch (error) {
    console.error("Error fetching reviews:", error);
    return null;
  }
}
