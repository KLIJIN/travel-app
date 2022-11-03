import { BsBookmarkStar } from "react-icons/bs";
import styles from "./Header.module.scss";

const Favorites: React.FC = () => {
  return (
    <div className={styles.search}>
      <button>
        <BsBookmarkStar size={20} />
      </button>
    </div>
  );
};

export default Favorites;
