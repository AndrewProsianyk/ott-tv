import Container from "../container/Container";
import SearchButton from "../search-button/SearchButton";
import styles from "./SearchForm.module.scss";

type SearchFormProps = {
  action: (formData: FormData) => void | Promise<void>;
};

export default function SearchForm({ action }: SearchFormProps) {
  return (
    <Container>
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
    </Container>
  );
}
