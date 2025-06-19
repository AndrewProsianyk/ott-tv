import ListSection from "../components/listSection/ListSection";
import { getMediaByGenre } from "../utils/fetchMedia";

const popularGenres = [
  { id: 10759, key: "actionAdventure", name: "Action & Adventure" },
  { id: 16, key: "animation", name: "Animation" },
  { id: 35, key: "comedy", name: "Comedy" },
  { id: 80, key: "crime", name: "Crime" },
  { id: 99, key: "documentary", name: "Documentary" },
  { id: 18, key: "drama", name: "Drama" },
  { id: 10762, key: "kids", name: "Kids" },
  { id: 10763, key: "news", name: "News" },
  { id: 10765, key: "sciFiFantasy", name: "Sci-Fi & Fantasy" },
];

export default async function TVSeriesPage() {
  const genreMoviePromises = popularGenres.map(async (genre) => {
    const data = await getMediaByGenre("tv", genre.id);
    return { ...genre, data };
  });

  const genreSections = await Promise.all(genreMoviePromises);

  return (
    <main className="pt-[200px] text-white">
      {genreSections.map((genre) => (
        <div key={genre.id}>
          <ListSection title={genre.name} data={genre.data} type="tv" />
        </div>
      ))}
    </main>
  );
}
