import Favorites from "./Favorites";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <div className={styles.search}>
      <Favorites />
    </div>
  );
};

export default Header;
