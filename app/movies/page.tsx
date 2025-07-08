import { getMediaByGenre } from "../utils/fetchMedia";
import ListSection from "../components/listSection/ListSection";
import PageContentWrap from "../components/pageContentWrap/PageContentWrap";

const popularGenres = [
  { id: 12, key: "adventure", name: "Adventure" },
  { id: 80, key: "crime", name: "Crime" },
  { id: 18, key: "drama", name: "Drama" },
  { id: 27, key: "horror", name: "Horror" },
  { id: 878, key: "scienceFiction", name: "Science Fiction" },
  { id: 10751, key: "family", name: "Family" },
  { id: 14, key: "fantasy", name: "Fantasy" },
  { id: 10402, key: "music", name: "Music" },
];

export default async function MoviesPage() {
  const genreMoviePromises = popularGenres.map(async (genre) => {
    const data = await getMediaByGenre("movie", genre.id);
    return { ...genre, data };
  });

  const genreSections = await Promise.all(genreMoviePromises);
  return (
    <PageContentWrap>
      {genreSections.map((genre) => (
        <div key={genre.id}>
          <ListSection
            title={`${genre.name} Movies`}
            data={genre.data}
            type="movies"
          />
        </div>
      ))}
    </PageContentWrap>
  );
}
