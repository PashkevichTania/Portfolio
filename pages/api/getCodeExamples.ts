import {CodeExample} from "@/typings";
import type {NextApiRequest, NextApiResponse} from "next";
import {groq} from "next-sanity";
import {sanityClient} from "@/lib/sanity";


const query = groq`
    *[_type == "codeExample"]
`

type Data = {
    codeExamples: CodeExample[]
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const codeExamples: CodeExample[] = await sanityClient.fetch(query);

    res.status(200).json({codeExamples})
}