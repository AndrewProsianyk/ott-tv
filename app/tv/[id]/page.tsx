import PersonList from "@/app/components/personList/PersonList";
import peopleWithoutDuplicates from "@/app/utils/peopleWithoutDuplicates";
import TrailerSection from "@/app/components/trailerSection/TrailerSection";
import MainMovieBlock from "@/app/components/mainMovieBlock/MainMovieBlock";
import ReviewsList from "@/app/components/reviewsList/ReviewsList";

import {
  getMediaById,
  getMediaCredits,
  getMediaLogo,
  getMediaReviewIDs,
  getMediaTrailer,
} from "@/app/utils/fetchMedia";
import { notFound } from "next/navigation";

type TVSerialPageParams = {
  params: Promise<{ id: string }>;
};

export default async function TVSerialPage({ params }: TVSerialPageParams) {
  const { id } = await params;

  const tv = await getMediaById("tv", Number(id));

  if (!tv) notFound();
  const videoId = await getMediaTrailer("tv", Number(id));
  const logo = await getMediaLogo("tv", Number(id));
  const { crew, cast } = await getMediaCredits("tv", Number(id));
  const reviewIds = await getMediaReviewIDs("tv", Number(id));

  const uniqueCast = peopleWithoutDuplicates(cast).slice(0, 18);
  const uniqueCrew = peopleWithoutDuplicates(crew).slice(0, 8);
  return (
    <div>
      <MainMovieBlock movie={tv} logo={logo} />
      <TrailerSection videoId={videoId} />
      <PersonList title="Crew" data={uniqueCrew} />
      <PersonList title="Top cast" data={uniqueCast} />
      <ReviewsList title="Reviews" data={reviewIds} />
    </div>
  );
}
