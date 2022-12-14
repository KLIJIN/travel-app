import Footer from "app/components/Footer";
import styles from "./Layout.module.scss";

type Props = {
  children: JSX.Element | JSX.Element[] | string | string[];
};

const Layout: React.FC<Props> = ({ children }) => (
  <>
    <div className={styles.layout}>
      {children}
      <Footer />
    </div>
  </>
);

export default Layout;
