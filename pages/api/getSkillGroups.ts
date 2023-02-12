import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "@/lib/sanity";
import { SkillGroup } from "@/typings";


const query = groq`
    *[_type == "skillGroup"][0] {
        ...,
        frontEnd[]->,
        backEnd[]->,
        tools[]->,
        testing[]->,
    }
`;

type Data = {
    skillGroups : SkillGroup
}

export default async function handler(
    req : NextApiRequest,
    res: NextApiResponse<Data>

) {
    const skillGroups : SkillGroup = await sanityClient.fetch(query);

    res.status(200).json({skillGroups})
}