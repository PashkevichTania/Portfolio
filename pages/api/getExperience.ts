import { QUERIES } from "@/lib/queries"
import type { NextApiRequest, NextApiResponse } from "next"
import { sanityClient } from "@/lib/sanity"
import { Experience } from "@/typings"

type Data = {
  experiences: Experience[]
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const experiences: Experience[] = await sanityClient.fetch(QUERIES.experience)

  res.status(200).json({ experiences })
}
