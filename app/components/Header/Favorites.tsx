import Link from "next/link";
import { useState } from "react";
import { BsBookmarkStar } from "react-icons/bs";
import styles from "./Header.module.scss";

const data = [
  {
    name: "Japan",
    slug: "tokyo",
  },
  {
    name: "usa",
    slug: "newyork",
  },
  {
    name: "Italy",
    slug: "venezia",
  },
];

const Favorites: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className={styles.favorites}>
      <button onClick={() => setIsOpen(!isOpen)}>
        <div className={styles.buttonContainer}>
          <BsBookmarkStar size={22} color="#e8e8e8" />
        </div>
      </button>
      {isOpen && (
        <ul>
          {data.map((item) => (
            <li key={item.slug}>
              <Link
                href={`/place/${item.slug}`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Favorites;
