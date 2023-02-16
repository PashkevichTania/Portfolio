import { QUERIES } from "@/lib/queries"
import { CodeExample } from "@/typings"
import type { NextApiRequest, NextApiResponse } from "next"
import { sanityClient } from "@/lib/sanity"

type Data = {
  codeExamples: CodeExample[]
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const codeExamples: CodeExample[] = await sanityClient.fetch(QUERIES.codeExpl)

  res.status(200).json({ codeExamples })
}
