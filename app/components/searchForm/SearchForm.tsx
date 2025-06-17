import Container from "../container/Container";
import SearchButton from "../search-button/SearchButton";
import styles from "./SearchForm.module.scss";

export default function SearchForm({ action }) {
  return (
    <Container>
      <div className={styles.formWrap}>
        <form action={action} className={styles.searchForm}>
          <input
            className={styles.searchInput}
            type="text"
            name="searchQuery"
            placeholder="Search a movie"
            required
          />
          <SearchButton />
        </form>
      </div>
    </Container>
  );
}
