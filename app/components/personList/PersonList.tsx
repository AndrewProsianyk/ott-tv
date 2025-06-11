import { Person } from "@/app/utils/types";
import Container from "../container/Container";
import styles from "./PersonList.module.scss";
import PeopleCard from "../peopleCard/PeopleCard";
import SectionTitle from "../sectionTitle/SectionTitle";

type PersonListProps = {
  title: string;
  data: Person[];
};

export default function PersonList({ data, title }: PersonListProps) {
  return (
    <section className={styles.section}>
      <Container>
        <SectionTitle title={title} />
        <ul className={styles.list}>
          {data.map((item) => (
            <li key={item.id}>
              <PeopleCard person={item} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
