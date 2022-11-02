import { ChangeEvent, useState } from "react";
import styles from "./Search.module.scss";

const SearchField: React.FC = () => {
  const [searchValue, setSearchValue] = useState("");

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className={styles.search}>
      <span className="material-icons-outlined">search</span>
      <input
        type="text"
        onChange={changeHandler}
        value={searchValue}
        placeholder="Search place..."
      />
    </div>
  );
};

export default SearchField;
