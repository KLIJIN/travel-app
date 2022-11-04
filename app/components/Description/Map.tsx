import styles from "./Description.module.scss";

export default function Map() {
  return (
    <div
      className={styles.map}
      style={{ backgroundImage: `url(/img/map.png)` }}
    ></div>
  );
}
