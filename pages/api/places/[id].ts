// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Place } from "../../place/place";
import { places } from "./places";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Place | undefined>
) {
  const id = req.query.id;
  const currentPlace = places.find((item) => {
    return item.slug.toLowerCase() === id;
  });
  // console.log(currentPlace);
  res.status(200).json(currentPlace);
}
