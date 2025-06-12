import styles from "./ReviewsList.module.scss";
import Container from "../container/Container";
import SectionTitle from "../sectionTitle/SectionTitle";
import ReviewItem from "../review/ReviewItem";

type ReviewsListProps = {
  data: string[];
  title: string;
};

export default function ReviewsList({ data, title }: ReviewsListProps) {
  return (
    <section className={styles.section}>
      <Container>
        <SectionTitle title={title} />
        {data ? (
          <ul className={styles.list}>
            {data.map((item, idx) => (
              <li key={idx}>
                <ReviewItem reviewId={item} />
              </li>
            ))}
          </ul>
        ) : (
          <span className="text-white">No reviews yet</span>
        )}
      </Container>
    </section>
  );
}
