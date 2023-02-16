import { QUERIES } from "@/lib/queries"
import type { NextApiRequest, NextApiResponse } from "next"
import { sanityClient } from "@/lib/sanity"
import { Skill } from "@/typings"

type Data = {
  skills: Skill[]
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const skills: Skill[] = await sanityClient.fetch(QUERIES.skills)

  res.status(200).json({ skills })
}
