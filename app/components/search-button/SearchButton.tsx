import SearchIcon from "../icons/SearchIcon";
import styles from "./SearchButton.module.scss";

export default function SearchButton() {
  return (
    <button className={styles.searchButton}>
      <SearchIcon />
    </button>
  );
}
