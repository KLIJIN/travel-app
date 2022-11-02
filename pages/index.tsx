import { GetServerSideProps, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import { type } from "os";
import { useEffect } from "react";
import Footer from "../app/components/Footer/Footer";
import Layout from "../app/components/Layout/Layout";
import styles from "../styles/Home.module.css";
import { Place } from "./place/place";

type HomeProps = {
  places: Place[];
};

export default function Home({ places }: HomeProps) {
  useEffect(() => {
    console.log("Home:", window);
  }, []);
  return (
    <div className={styles.container}>
      <Layout>
        <div>{places?.map((item) => item.location)}</div>
      </Layout>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  // console.log("Home:", URL);
  const result = await fetch("http://localhost:3000/api/places");
  const places = await result.json();

  return {
    props: {
      places,
    },
  };
};
