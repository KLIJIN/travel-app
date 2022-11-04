import Favorites from "./Favorites";
import { BsCaretLeft } from "react-icons/bs";
import styles from "./Header.module.scss";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.btnContainer}>
        <div  className={styles.buttonContainer}>
          <Link href={`/`}>
            <BsCaretLeft size={22} color="#e8e8e8" />
          </Link>
        </div>
        <Favorites />
      </div>
    </div>
  );
};

export default Header;
