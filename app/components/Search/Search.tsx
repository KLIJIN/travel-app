import { ChangeEvent, useState, KeyboardEvent } from "react";
import { Place } from "../../../pages/place/place";
import { TypeSetState } from "./Search.d";
import styles from "./Search.module.scss";

interface SearchFieldProps {
  setPlaces: TypeSetState<Place[]>;
  initPlaces: Place[];
}

const SearchField: React.FC<SearchFieldProps> = ({ setPlaces, initPlaces }) => {
  const [searchValue, setSearchValue] = useState("");

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const currValue = e.target.value;

    setSearchValue(currValue);

    setPlaces(
      initPlaces.filter(
        (place) =>
          place.location.city.toLowerCase().includes(currValue) ||
          place.location.country.toLowerCase().includes(currValue)
      )
    );
  };

  return (
    <div className={styles.search}>
      <span className="material-icons-outlined">search</span>
      <input
        type="text"
        onChange={changeHandler}
        value={searchValue}
        placeholder="Search place..."
      />
    </div>
  );
};

export default SearchField;
