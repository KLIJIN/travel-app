import styles from "./Wrapper.module.scss";

type WrapperProps = {
  imagePath?: string;
  children: JSX.Element | JSX.Element[] | string | string[];
};

const Wrapper: React.FC<WrapperProps> = ({ imagePath, children }) => {
  return (
    <div
      className={styles.wrapper}
      style={{ backgroundImage: `url(/img/${imagePath})` }}
    >
      {children}
    </div>
  );
};
export default Wrapper;
