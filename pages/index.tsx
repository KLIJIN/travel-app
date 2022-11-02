import { GetServerSideProps, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { type } from "os";
import { useEffect } from "react";
import Footer from "../app/components/Footer";
import Layout from "../app/components/Layout";
import SearchSection from "../app/components/SearchSection";
import styles from "../styles/Home.module.scss";
import { Place } from "./place/place";

type HomeProps = {
  places: Place[];
};

const Home: NextPage<HomeProps> = ({ places }) => {
  useEffect(() => {
    console.log("Home:", window);
  }, []);
  return (
    <div className={styles.container}>
      <Layout>
        <div className={styles.LayoutContainer}>
          <SearchSection />
          <div>{places?.map((item) => item.location)}</div>
        </div>
      </Layout>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const result = await fetch("http://localhost:3000/api/places");
  const places = await result.json();
  // console.log("server console ctx:", ctx);
  return {
    props: {
      places,
    },
  };
};

export default Home;
