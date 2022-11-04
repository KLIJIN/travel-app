// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Place } from "pages/place/place.d";

export const places: Place[] = [
  {
    slug: "tokyo",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,",
    imagePath: "japan.jpg",
    location: {
      city: "Tokyo",
      country: "Japan",
    },
    rating: 5,
    duration: "10 days",
    distance: 10453,
  },
  {
    slug: "moscow",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,",
    imagePath: "russia.jpg",
    location: { country: "Russia", city: "Moscow" },
    rating: 10,
    duration: "12 days",
    distance: 9453,
  },
  {
    slug: "venezia",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,",
    imagePath: "italy.jpg",
    location: { country: "Italy", city: "Venezia" },
    rating: 5,
    duration: "7 days",
    distance: 9453,
  },
  {
    slug: "newyork",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,",
    imagePath: "usa.jpg",
    location: { country: "USA", city: "New York" },
    rating: 5,
    duration: "12 days",
    distance: 9453,
  },
  {
    slug: "brazil",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,",
    imagePath: "brazil.jpg",
    location: { country: "Brazil", city: "Brasilia" },
    rating: 5,
    duration: "12 days",
    distance: 9453,
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Place[]>
) {
  // console.log(req);
  return res.status(200).json(places);
}
