import PersonList from "@/app/components/personList/PersonList";
import peopleWithoutDuplicates from "@/app/utils/peopleWithoutDuplicates";
import TrailerSection from "@/app/components/trailerSection/TrailerSection";
import MainMovieBlock from "@/app/components/mainMovieBlock/MainMovieBlock";
import ReviewsList from "@/app/components/reviewsList/ReviewsList";
import {
  getTVSerialById,
  getTVSerialCredits,
  getTVSerialLogo,
  getTVserialReviewIds,
} from "@/app/utils/fetchTVSeries";

type TVSerialPageParams = {
  params: Promise<{ id: string }>;
};

export default async function TVSerialPage({ params }: TVSerialPageParams) {
  const { id } = await params;

  const tv = await getTVSerialById(Number(id));
  //   const videoId = await getMovieTrailer(Number(id));
  const logo = await getTVSerialLogo(Number(id));
  const { crew, cast } = await getTVSerialCredits(Number(id));
  const reviewIds = await getTVserialReviewIds(Number(id));
  console.log(reviewIds, "reviewIds");

  const uniqueCast = peopleWithoutDuplicates(cast).slice(0, 18);
  const uniqueCrew = peopleWithoutDuplicates(crew).slice(0, 8);
  return (
    <div>
      <MainMovieBlock movie={tv} logo={logo} />
      {/* <TrailerSection videoId={videoId} /> */}
      <PersonList title="Crew" data={uniqueCrew} />
      <PersonList title="Top cast" data={uniqueCast} />
      <ReviewsList title="Reviews" data={reviewIds} />
    </div>
  );
}
