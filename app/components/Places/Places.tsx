import { useRouter } from "next/router";
import Link from "next/link";
import { PlacesProps } from "./Places.d";
import styles from "./Places.module.scss";
import { url } from "inspector";

const Places: React.FC<PlacesProps> = ({ places }) => {
  return (
    <div className={styles.places}>
      <h2>Popular places</h2>
      {places.map((item) => {
        return (
          <Link href={`/place/${item.slug}`}>
            <div
              key={item.slug}
              className={styles.item}
              style={{ backgroundImage: `url(${item.imagePath})` }}
            >
              <div
                className={styles.title}
              >{`${item.location.city}, ${item.location.country}`}</div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
export default Places;
