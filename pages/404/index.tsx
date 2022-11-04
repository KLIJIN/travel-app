import Link from "next/link";
import Layout from "app/components/Layout/Layout";
import styles from "./404.module.scss";

export default function Custom404() {
  return (
    <div className={styles.errorPage}>
      <Layout>
        <p>It seems you've lost in space</p>
        <Link href="/">
          <button>start to the beginning</button>
        </Link>
      </Layout>
    </div>
  );
}
