import { QUERIES } from "@/lib/queries"
import type { NextApiRequest, NextApiResponse } from "next"
import { sanityClient } from "@/lib/sanity"
import { SkillGroup } from "@/typings"

type Data = {
  skillGroups: SkillGroup[]
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const skillGroups: SkillGroup[] = await sanityClient.fetch(QUERIES.skillGroups)

  res.status(200).json({ skillGroups })
}
