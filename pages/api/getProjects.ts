import { QUERIES } from "@/lib/queries"
import type { NextApiRequest, NextApiResponse } from "next"
import { sanityClient } from "@/lib/sanity"
import { Project } from "@/typings"

type Data = {
  projects: Project[]
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const projects: Project[] = await sanityClient.fetch(QUERIES.projects)

  res.status(200).json({ projects })
}
