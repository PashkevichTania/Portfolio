import { QUERIES } from "@/lib/queries"
import type { NextApiRequest, NextApiResponse } from "next"
import { sanityClient } from "@/lib/sanity"
import { PageInfo } from "@/typings"

type Data = {
  pageInfo: PageInfo
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const pageInfo: PageInfo = await sanityClient.fetch(QUERIES.pageInfo)

  res.status(200).json({ pageInfo })
}
