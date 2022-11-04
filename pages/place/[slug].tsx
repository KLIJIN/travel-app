import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import BookingButton from "app/components/BookingButton";
import Description from "app/components/Description";
import Header from "app/components/Header";
import Layout from "app/components/Layout/Layout";
import Wrapper from "app/components/Wrapper";

import { Place } from "./place.d";

type SinglePlaceProps = {
  place: Place;
};

const SinglePlace: NextPage<SinglePlaceProps> = ({ place }) => {
  const router = useRouter();
  return (
    <>
      <Layout>
        <Wrapper imagePath={place.imagePath}>
          <Header />
          <Description place={place} />
          <BookingButton />
        </Wrapper>
      </Layout>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(`${process.env.API_URL}/places`);
  const places = await response.json();
  // console.log("server console ctx:", ctx);

  const paths = places.map((place: Place) => {
    return {
      params: {
        slug: place.slug,
      },
    };
  });

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const response = await fetch(`${process.env.API_URL}/places/${params?.slug}`);
  const place = await response.json();

  // console.log("getStaticProps", place);
  return { props: { place } };
};

export default SinglePlace;
