import Head from "next/head";
import Image from "next/image";
import Footer from "../app/components/Footer/Footer";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Footer />
    </div>
  );
}
