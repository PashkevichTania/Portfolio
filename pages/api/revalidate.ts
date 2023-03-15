import { isValidSignature, SIGNATURE_HEADER_NAME } from "@sanity/webhook"
import type { NextApiRequest, NextApiResponse } from "next"

type Data = {
  success: boolean
  message: string
}

const secret = process.env.NEXT_SANITY_SECRET || ""

async function readBody(readable: NextApiRequest) {
  const chunks = []
  for await (const chunk of readable) {
    chunks.push(typeof chunk === "string" ? Buffer.from(chunk) : chunk)
  }
  return Buffer.concat(chunks).toString("utf8")
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method !== "POST") {
    console.error("Must be a POST request")
    return res.status(405).json({ success: false, message: "Must be a POST request" })
  }

  const signature = req.headers[SIGNATURE_HEADER_NAME] as string
  const body = await readBody(req) // Read the body into a string
  if (!isValidSignature(body, signature, secret)) {
    res.status(401).json({ success: false, message: "Invalid signature" })
    return
  }

  try {
    const {
      body: { type, slug },
    } = req

    switch (type) {
      case "post":
        const pathToRevalidate = req.body.slug.current
        console.log(`==== Revalidating: ${pathToRevalidate} =====`)
        await res.revalidate(pathToRevalidate)
        return res.json({ success: true, message: `Revalidated "${type}" with slug "${slug}"` })
    }

    return res.json({ success: false, message: "No managed type" })
  } catch (err) {
    return res.status(500).send({ success: false, message: "Error revalidating" })
  }
}
