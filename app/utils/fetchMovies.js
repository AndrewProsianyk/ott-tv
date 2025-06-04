"use server";

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

export async function getMovieById(movieId) {
  try {
    const response = await fetch(
      `${API_BASE_URL}/movie/${movieId}?language=en-US`,
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

export async function getMovieCredits(movieId) {
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

export async function getMoviesByGenre(genreId, page = 1) {
  try {
    const response = await fetch(
      `${API_BASE_URL}/discover/movie?with_genres=${genreId}&language=en-US&sort_by=popularity.desc&page=${page}`,
      fetchOptions
    );
    if (!response) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.results || [];
  } catch (error) {
    console.error("Can`t fetch movies by genre", error);
    return [];
  }
}
