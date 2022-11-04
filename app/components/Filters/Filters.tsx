import { useState } from "react";
import { Place } from "pages/place/place";
import { TypeSetState } from "app/components/Search/Search.d";
import styles from "./Filters.module.scss";

interface FiltersProps {
  setPlaces: TypeSetState<Place[]>;
  initPlaces: Place[];
}

const Filters: React.FC<FiltersProps> = ({ setPlaces, initPlaces }) => {
  const [filter, setFilter] = useState("");

  const clickHandler = async (location: string) => {
    if (filter === location) {
      await setFilter("");
      setPlaces(initPlaces);
    } else {
      await setFilter(location);
      setPlaces(
        initPlaces.filter(
          (place) =>
            place.location.country.toLowerCase() === location.toLowerCase()
        )
      );
    }
  };

  return (
    <div className={styles.filterContainer}>
      {initPlaces.map((city) => (
        <button
          onClick={() => clickHandler(city.location.country)}
          key={city.location.country}
          className={`${city.location.country === filter ? styles.active : ""}`}
        >
          {city.location.country}
        </button>
      ))}
    </div>
  );
};

export default Filters;
