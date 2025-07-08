"use server";

import { API_BASE_URL } from "../constants/apiRoutes";
import {
  Media,
  MediaLogoType,
  MovieCredits,
  Review,
  VideoItemType,
} from "./types";

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

type MediaType = "movie" | "tv";

export async function getMediaById(
  type: MediaType,
  mediaId: number
): Promise<Media | null> {
  try {
    const response = await fetch(
      `${API_BASE_URL}/${type}/${mediaId}?language=en-US`,
      fetchOptions
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return (await response.json()) as Media;
  } catch (error) {
    console.error("Error fetching media:", error);
    return null;
  }
}

export async function getMediaCredits(
  type: MediaType,
  mediaId: number
): Promise<MovieCredits> {
  try {
    const response = await fetch(
      `${API_BASE_URL}/${type}/${mediaId}/credits?language=en-US`,
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

export async function getMediaByGenre(
  type: MediaType,
  genreId: number,
  page = 1
): Promise<Media[]> {
  try {
    const response = await fetch(
      `${API_BASE_URL}/discover/${type}?with_genres=${genreId}&language=en-US&sort_by=popularity.desc&page=${page}`,
      fetchOptions
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.results as Media[];
  } catch (error) {
    console.error("Can`t fetch media by genre", error);
    return [];
  }
}

export async function getPopularMedia(type: MediaType) {
  try {
    const response = await fetch(
      `${API_BASE_URL}/${type}/popular?language=en-US&page=1`,
      fetchOptions
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.results || [];
  } catch (error) {
    console.error("Can`t fetch popular media", error);
    return [];
  }
}

export async function getMediaVideos(type: MediaType, mediaId: number) {
  try {
    const response = await fetch(
      `${API_BASE_URL}/${type}/${mediaId}/videos?language=en-US`,
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

export async function getMediaTrailerId(
  type: MediaType,
  mediaId: number
): Promise<string | null> {
  try {
    const response = await fetch(
      `${API_BASE_URL}/${type}/${mediaId}/videos?language=en-US`,
      fetchOptions
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (data.results.length === 0) return null;

    return (
      data?.results?.filter((item: VideoItemType) => item.type === "Trailer")[0]
        ?.key || null
    );
  } catch (error) {
    console.error("Error fetching trailer:", error);
    return null;
  }
}

export async function getMediaLogo(type: MediaType, mediaId: number) {
  try {
    const response = await fetch(
      `${API_BASE_URL}/${type}/${mediaId}/images`,
      fetchOptions
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    return data.logos.find((img: MediaLogoType) => img.iso_639_1 === "en");
  } catch (error) {
    console.error("Error fetching logo:", error);
    return null;
  }
}

export async function getMediaReviews(
  type: MediaType,
  mediaId: number
): Promise<Review[] | null> {
  try {
    const response = await fetch(
      `${API_BASE_URL}/${type}/${mediaId}/reviews?language=en-US`,
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
export async function getMediaReviewIDs(
  type: MediaType,
  mediaId: number
): Promise<number[] | null> {
  try {
    const response = await fetch(
      `${API_BASE_URL}/${type}/${mediaId}/reviews?language=en-US`,
      fetchOptions
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (!data.results || data.results.length === 0) return null;

    const reviewIDs = data.results.map((review: Review) => review.id);
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
    console.error("Error fetching review details:", error);
    return null;
  }
}

export async function fetchMediaByQuery(
  type: MediaType,
  query: string | undefined
) {
  try {
    const response = await fetch(
      `${API_BASE_URL}/search/${type}?&query=${query}&language=en-US&page=1&include_adult=false`,
      fetchOptions
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (!data) return null;

    return data.results;
  } catch (error) {
    console.error("Error fetching media:", error);
    return null;
  }
}
