// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Place } from "../place/place";
import japanImg from "../../assets/images/japan.jpg";

const places: Place[] = [
  {
    slug: "tokyo",
    description: "asia",
    imagePath: japanImg.src,
    location: "Japan",
    rating: 5,
    duration: "10 days",
    distance: 10453,
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
