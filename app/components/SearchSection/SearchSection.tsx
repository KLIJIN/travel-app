import SearchField from "../Search/Search";
// import mapImg from '../../../assets/images/map.png';
import styles from "./SearchSection.module.scss";

const SearchSection: React.FC = () => (
  <section className={styles.section}>
    <h1>Best Plsces for trip</h1>
    <SearchField />
  </section>
);

export default SearchSection;
