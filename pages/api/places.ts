// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Place } from "../place/place";
import japanImg from "../../assets/images/japan.jpg";
import italyImg from "../../assets/images/italy.jpg";

const places: Place[] = [
  {
    slug: "tokyo",
    description: "asia",
    // imagePath: japanImg.src,
    imagePath: 'http://localhost:3000/img/japan.jpg',
    location: {
      city: "Tokyo",
      country: "Japan",
    },
    rating: 5,
    duration: "10 days",
    distance: 10453,
    googleMapLink: "wefewf",
    mapImage: "egfw",
  },
  {
    slug: "venezia",
    description: "wefwewegewwefew",
    imagePath: 'http://localhost:3000/img/italy.jpg',
    // imagePath: italyImg.src,
    location: { country: "Italy", city: "Venezia" },
    rating: 5,
    duration: "7 days",
    distance: 9453,
    googleMapLink: "wefewf",
    mapImage: "egfw",
  },
  {
    slug: "newyork",
    description: "wefwewegewwefew",
    imagePath: 'http://localhost:3000/img/usa.jpg',
    // imagePath: italyImg.src,
    location: { country: "USA", city: "New York" },
    rating: 5,
    duration: "12 days",
    distance: 9453,
    googleMapLink: "wefewf",
    mapImage: "egfw",
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Place[]>
) {
  // console.log(req);
  return res.status(200).json(places);
}
