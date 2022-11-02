import { GetServerSideProps, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { type } from "os";
import { useEffect } from "react";
import Filters from "../app/components/Filters";
import Footer from "../app/components/Footer";
import Layout from "../app/components/Layout";
import Places from "../app/components/Places";
import SearchSection from "../app/components/SearchSection";
import { API_URL } from "../app/constants";
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
          <Filters />
          <Places places={places} />
        </div>
      </Layout>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const result = await fetch(`${process.env.API_URL}/places`);
  const places = await result.json();
  // console.log("server console ctx:", ctx);
  console.log("places", places);
  return {
    props: {
      places,
    },
  };
};

export default Home;
