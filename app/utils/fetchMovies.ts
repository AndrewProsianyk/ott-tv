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

export async function getMovieById(movieId: number): Promise<Movie | null> {
  try {
    const response = await fetch(
      `${API_BASE_URL}/movie/${movieId}?language=en-US`,
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

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching videos:", error);
    return null;
  }
}

type VideoItemType = {
  type: "Trailer" | "Teaser" | "Featurette" | "Clip";
};

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

    return data?.results?.filter(
      (item: VideoItemType) => item.type === "Trailer"
    )[0].key;
  } catch (error) {
    console.error("Error fetching trailer:", error);
    return null;
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
    console.log(data, "data in getMovieLogo");

    return data.logos.find((img: MovieLogoType) => img.iso_639_1 === "en");
  } catch (error) {
    console.error("Error fetching logo:", error);
    return null;
  }
}

export async function getMovieReviews(
  movieId: number
): Promise<Review[] | null> {
  try {
    const response = await fetch(
      `${API_BASE_URL}/movie/${movieId}/reviews?language=en-US`,
      fetchOptions
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (data.results.length === 0) return null;

    return data.results;
  } catch (error) {
    console.error("Error fetching reviews:", error);
    return null;
  }
}
export async function getMovieReviewIDs(
  movieId: number
): Promise<number[] | null> {
  try {
    const response = await fetch(
      `${API_BASE_URL}/movie/${movieId}/reviews?language=en-US`,
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
    console.error("Error fetching review IDs:", error);
    return null;
  }
}

export async function getReviewDetailsById(
  reviewId: number
): Promise<Review | null> {
  try {
    const response = await fetch(
      `${API_BASE_URL}/review/${reviewId}`,
      fetchOptions
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (!data) return null;

    return data as Review;
  } catch (error) {
    console.error("Error fetching reviews:", error);
    return null;
  }
}

export async function fetchMovieByQuery(query: any) {
  try {
    const response = await fetch(
      `${API_BASE_URL}/search/movie?&query=${query}&language=en-US&page=1&include_adult=false`,
      fetchOptions
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (!data) return null;

    return data.results;
  } catch (error) {
    console.error("Error fetching reviews:", error);
    return null;
  }
}
