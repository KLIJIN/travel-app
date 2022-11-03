// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Place } from "../../place/place";

export const places: Place[] = [
  {
    slug: "tokyo",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,",
    imagePath: "img/japan.jpg",
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
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,",
    imagePath: "img/italy.jpg",
    location: { country: "Italy", city: "Venezia" },
    rating: 5,
    duration: "7 days",
    distance: 9453,
    googleMapLink: "wefewf",
    mapImage: "egfw",
  },
  {
    slug: "newyork",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,",
    imagePath: "img/usa.jpg",
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
