"use server";

import { fetchMovieByQuery } from "../utils/fetchMovies";

export async function searchMovie(prevState: any, formData: FormData) {
  const query = formData.get("searchQuery");

  if (!query || typeof query !== "string" || query.trim().length === 0) {
    return {
      results: null,
      error: "Please enter a search query",
    };
  }

  try {
    const results = await fetchMovieByQuery(query.trim());

    if (results === null) {
      return {
        results: null,
        error: "Failed to fetch movies. Please try again.",
      };
    }

    return {
      results: results,
      error: null,
    };
  } catch (error) {
    console.error("Search error:", error);
    return {
      results: null,
      error: "An error occurred while searching. Please try again.",
    };
  }
}
