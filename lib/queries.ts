import { groq } from "next-sanity"

const pageInfo = groq`
    *[_type == "pageInfo"][0]
`

const experience = groq`
    *[_type == "experience"]{
        ...,
        technologies[]->
    }
`

const codeExpl = groq`
    *[_type == "codeExample"]
`

const projects = groq`
    *[_type == "project"] | order(isCommercial asc) {
        ...,
        technologies[]->
    }
`

const skillGroups = groq`
    *[_type == "skillGroup"] | order(index asc) {
        ...,
        skills[]->,
    }
`

const skills = groq`
    *[_type == "skill"]
`

export const QUERIES = {
  pageInfo,
  experience,
  projects,
  codeExpl,
  skillGroups,
  skills,
}
