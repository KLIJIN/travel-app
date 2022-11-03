import { useState } from "react";
import { Place } from "../../../pages/place/place";
import { TypeSetState } from "../Search/Search.d";
import styles from "./Filters.module.scss";

const cities = [
  {
    location: "Paris",
  },
  {
    location: "Japan",
  },
  {
    location: "Norway",
  },
  {
    location: "Italy",
  },
  {
    location: "Brazil",
  },
  {
    location: "usa",
  },
];

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
      {cities.map((city) => (
        <button
          onClick={() => clickHandler(city.location)}
          key={city.location}
          className={`${city.location === filter ? styles.active : ""}`}
        >
          {city.location}
        </button>
      ))}
    </div>
  );
};

export default Filters;
