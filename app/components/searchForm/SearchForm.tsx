"use client";

import { useRouter } from "next/navigation";
import Container from "../container/Container";
import SearchButton from "../search-button/SearchButton";
import styles from "./SearchForm.module.scss";

export default function SearchForm() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const query = formData.get("searchQuery")?.toString().trim();

    if (query) {
      router.push(`/search?query=${encodeURIComponent(query)}`);
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit} className={styles.searchForm}>
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
