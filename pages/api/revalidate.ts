import type { NextApiRequest, NextApiResponse } from "next"

type Data = {
  success: boolean
  message: string
}

const secret = process.env.NEXT_SANITY_SECRET || ""

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method !== "POST") {
    console.error("Must be a POST request")
    return res.status(405).json({ success: false, message: "Must be a POST request" })
  }

  if (req.query.secret !== secret) {
    res.status(401).json({ success: false, message: "Invalid signature" })
    return
  }

  try {
    console.log(`Revalidating: ${new Date()}`)
    await res.revalidate("/")
    console.log(`Revalidated successfully: ${new Date()}`)
    return res.json({ success: true, message: "Revalidated successfully" })
  } catch (err) {
    console.error(err)
    return res.status(500).send({ success: false, message: "Error revalidating" })
  }
}
