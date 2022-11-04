import { GetServerSideProps, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { type } from "os";
import { useEffect, useState } from "react";
import Filters from "app/components/Filters";
import Footer from "app/components/Footer";
import Layout from "app/components/Layout";
import Places from "app/components/Places";
import SearchField from "app/components/Search";
import SearchSection from "app/components/SearchSection";
import styles from "styles/Home.module.scss";
import { Place } from "./place/place";

type HomeProps = {
  initPlaces: Place[];
};

const Home: NextPage<HomeProps> = ({ initPlaces }) => {
  const [places, setPlaces] = useState(initPlaces);
  useEffect(() => {
    console.log("Home:", window);
  }, []);

  return (
    <div className={styles.container}>
      <Layout>
        <div className={styles.LayoutContainer}>
          <SearchSection>
            <SearchField setPlaces={setPlaces} initPlaces={initPlaces} />
          </SearchSection>
          <Filters setPlaces={setPlaces} initPlaces={initPlaces} />
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
  // console.log("places", places);

  return {
    props: {
      initPlaces: places,
    },
  };
};

export default Home;
