import Container from "../container/Container";
import MovieCard from "../movieCard/MovieCard";
import Slider from "../slider/Slider";
import SliderItem from "../sliderItem/SliderItem";
import styles from "./ListSection.module.scss";

export default function ListSection({ title, data }) {
  return (
    <section className={styles.listSection}>
      <Container>
        <h3 className={styles.sectionTitle}>{title}</h3>
      </Container>
      <Slider data={data} cardWidth="236px" withButtons>
        {data?.map((item, idx) => (
          <SliderItem key={item.id || idx} cardWidth="236px">
            <MovieCard movie={item} />
          </SliderItem>
        ))}
      </Slider>
    </section>
  );
}
