import { useRouter } from "next/router";
import Link from "next/link";
import { PlacesProps } from "./Places.d";
import styles from "./Places.module.scss";
import { url } from "inspector";

const Places: React.FC<PlacesProps> = ({ places }) => {
  // debugger;
  return (
    <div className={styles.places}>
      <h2>Popular places</h2>
      {places.map((item) => {
        return (
          <Link href={`/place/${item.slug}`} key={item.slug}>
            <div
              className={styles.item}
              style={{ backgroundImage: `url(/img/${item.imagePath})` }}
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
