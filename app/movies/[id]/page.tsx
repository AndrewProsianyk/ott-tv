import {
  getMediaById,
  getMediaCredits,
  getMediaTrailerId,
  getMediaLogo,
  getMediaReviewIDs,
} from "@/app/utils/fetchMedia";
import PersonList from "@/app/components/personList/PersonList";
import peopleWithoutDuplicates from "@/app/utils/peopleWithoutDuplicates";
import TrailerSection from "@/app/components/trailerSection/TrailerSection";
import MainMovieBlock from "@/app/components/mainMovieBlock/MainMovieBlock";
import ReviewsList from "@/app/components/reviewsList/ReviewsList";
import { notFound } from "next/navigation";

type MoviePageParams = {
  params: Promise<{ id: string }>;
};

export default async function MoviePage({ params }: MoviePageParams) {
  const { id } = await params;

  const movie = await getMediaById("movie", Number(id));

  if (!movie) notFound();

  const videoId = await getMediaTrailerId("movie", Number(id));
  const logo = await getMediaLogo("movie", Number(id));
  const { crew, cast } = await getMediaCredits("movie", Number(id));
  const reviewIds = await getMediaReviewIDs("movie", Number(id));

  const uniqueCast = peopleWithoutDuplicates(cast).slice(0, 18);
  const uniqueCrew = peopleWithoutDuplicates(crew).slice(0, 8);
  return (
    <div>
      <MainMovieBlock movie={movie} logo={logo} hasTrailer={!!videoId} />
      <TrailerSection videoId={videoId} />
      <PersonList title="Crew" data={uniqueCrew} />
      <PersonList title="Top cast" data={uniqueCast} />
      <ReviewsList title="Reviews" data={reviewIds} />
    </div>
  );
}
