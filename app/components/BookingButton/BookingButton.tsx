import styles from "./BookingButton.module.scss";
import { FaRegPaperPlane } from "react-icons/fa";

const BookingButton: React.FC = () => {
  return (
    <div className={styles.buttonContainer}>
      <button className={styles.button}>
        <div>Book a trip</div>
        <div className={styles.icon}>
          <FaRegPaperPlane />
        </div>
      </button>
    </div>
  );
};

export default BookingButton;
