import { useState } from "react";
import styles from "./Filters.module.scss";

const cities = [
  {
    location: "Paris",
  },
  {
    location: "Bora Bora",
  },
  {
    location: "Maui",
  },
  {
    location: "Tahiti",
  },
  {
    location: "Brazil",
  },
  {
    location: "Norway",
  },
];

const Filters: React.FC = () => {
  const [filter, setFilter] = useState("");

  return (
    <div className={styles.filterContainer}>
      {cities.map((city) => (
        <button
          onClick={() => setFilter(city.location)}
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
