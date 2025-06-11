"use server";

import { Movie, MovieCredits } from "./types";

const API_BASE_URL = "https://api.themoviedb.org/3";
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

export async function getMovieById(movieId: number): Promise<Movie | null> {
  try {
    const response = await fetch(
      `${API_BASE_URL}/movie/${movieId}?language=en-US`,
      fetchOptions
    );
    console.log(response);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return (await response.json()) as Movie;
  } catch (error) {
    console.error("Error fetching movie:", error);
    return null;
  }
}

export async function getMovieCredits(movieId: number): Promise<MovieCredits> {
  try {
    const response = await fetch(
      `${API_BASE_URL}/movie/${movieId}/credits?language=en-US`,
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

export async function getMoviesByGenre(
  genreId: number,
  page = 1
): Promise<Movie[]> {
  try {
    const response = await fetch(
      `${API_BASE_URL}/discover/movie?with_genres=${genreId}&language=en-US&sort_by=popularity.desc&page=${page}`,
      fetchOptions
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.results as Movie[];
  } catch (error) {
    console.error("Can`t fetch movies by genre", error);
    return [];
  }
}
export async function getPopularMovies() {
  try {
    const response = await fetch(
      `${API_BASE_URL}/movie/popular?language=en-US&page=1`,
      fetchOptions
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.results || [];
  } catch (error) {
    console.error("Can`t fetch movies by genre", error);
    return [];
  }
}

export async function getMovieVideos(movieId: number) {
  try {
    const response = await fetch(
      `${API_BASE_URL}/movie/${movieId}/videos?language=en-US`,
      fetchOptions
    );
    console.log(response);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching movie:", error);
    return null;
  }
}

export async function getMovieTrailer(movieId: number) {
  try {
    const response = await fetch(
      `${API_BASE_URL}/movie/${movieId}/videos?language=en-US`,
      fetchOptions
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (data.results.length === 0) return null;

    return data?.results?.filter((item) => item.type === "Trailer")[0].key;
  } catch (error) {
    console.error("Error fetching movie:", error);
    return null;
  }
}

export async function getMovieLogo(movieId: number) {
  try {
    const response = await fetch(
      `${API_BASE_URL}/movie/${movieId}/images`,
      fetchOptions
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    return data.logos.find((img) => img.iso_639_1 === "en");
  } catch (error) {
    console.error("Error fetching movie:", error);
    return null;
  }
}
