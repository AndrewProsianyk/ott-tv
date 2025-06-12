import styles from "./page.module.scss";
import {
  getMovieById,
  getMovieCredits,
  getMovieTrailer,
  getMovieLogo,
  getMovieReviewIDs,
} from "@/app/utils/fetchMovies";
import PersonList from "@/app/components/personList/PersonList";
import peopleWithoutDuplicates from "@/app/utils/peopleWithoutDuplicates";
import TrailerSection from "@/app/components/trailerSection/TrailerSection";
import MainMovieBlock from "@/app/components/mainMovieBlock/MainMovieBlock";
import ReviewsList from "@/app/components/reviewsList/ReviewsList";

type MoviePageParams = {
  params: Promise<{ id: string }>;
};

export default async function MoviePage({ params }: MoviePageParams) {
  const { id } = await params;

  const movie = await getMovieById(Number(id));
  const videoId = await getMovieTrailer(Number(id));
  const logo = await getMovieLogo(Number(id));
  const { crew, cast } = await getMovieCredits(Number(id));
  const reviewIds = await getMovieReviewIDs(Number(id));

  const uniqueCast = peopleWithoutDuplicates(cast).slice(0, 18);
  const uniqueCrew = peopleWithoutDuplicates(crew).slice(0, 8);
  return (
    <div className={styles.heroSection}>
      <MainMovieBlock movie={movie} logo={logo} />
      <TrailerSection videoId={videoId} />
      <PersonList title="Crew" data={uniqueCrew} />
      <PersonList title="Top cast" data={uniqueCast} />
      <ReviewsList title="Reviews" data={reviewIds} />
    </div>
  );
}
