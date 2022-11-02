import Footer from "../Footer";
import styles from "./Layout.module.scss";

type Props = {
  children: JSX.Element | JSX.Element[] | string | string[];
};

const Layout: React.FC<Props> = ({ children }) => (
  <>
    {children}
    <Footer />
  </>
);

export default Layout;
