import { Place } from "../../../pages/place/place";
import { FiMapPin } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { FcCalendar } from "react-icons/fc";
import styles from "./Description.module.scss";

type DescriptionProps = {
  place: Place;
};

const Description: React.FC<DescriptionProps> = ({ place }) => {
  return (
    <div className={styles.descriptionContainer}>
      <div className={styles.title}>
        <FiMapPin size={20} />
        <h1>{`${place.location.city}, ${place.location.country}`}</h1>
      </div>
      <p className={styles.descriptionContent}>{place.description}</p>

      <div className={styles.dashboard}>
        <div className={styles.rating}>
          <FaStar color="#FDAE32" size={18} className={styles.star} />
          <span>{place.rating}/10</span>
        </div>

        <div className={styles.period}>
          <FcCalendar color="#565658" size={18} className={styles.calendar} />
          <span>{place.duration}</span>
        </div>
      </div>
    </div>
  );
};

export default Description;
