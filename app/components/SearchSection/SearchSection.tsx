import { Children } from "react";
import { Place } from "../../../pages/place/place";
import SearchField from "../Search/Search";
import { TypeSetState } from "../Search/Search.d";
// import mapImg from '../../../assets/images/map.png';
import styles from "./SearchSection.module.scss";

interface SearchSectionProps {
  children: JSX.Element | JSX.Element[] | string | string[];
}

const SearchSection: React.FC<SearchSectionProps> = ({ children }) => (
  <section className={styles.section}>
    <h1>Best Plsces for trip</h1>
    {children}
  </section>
);

export default SearchSection;
