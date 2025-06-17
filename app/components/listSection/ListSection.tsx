import { Movie } from "@/app/utils/types";
import Container from "../container/Container";
import MovieCard from "../movieCard/MovieCard";
import Slider from "../slider/Slider";
import SliderItem from "../sliderItem/SliderItem";
import styles from "./ListSection.module.scss";
import SectionTitle from "../sectionTitle/SectionTitle";

type ListSectionProps = {
  title: string;
  data: Movie[];
  type: "movies" | "tv";
};

export default function ListSection({ title, data, type }: ListSectionProps) {
  const cardWidth: string = "236px";

  return (
    <section className={styles.listSection}>
      <Container>
        <SectionTitle title={title} />
      </Container>
      <Slider cardWidth={cardWidth} withButtons>
        {data?.map((item, idx) => (
          <SliderItem key={item.id || idx} cardWidth={cardWidth}>
            <MovieCard movie={item} type={type} />
          </SliderItem>
        ))}
      </Slider>
    </section>
  );
}
