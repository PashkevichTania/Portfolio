import { motion } from "framer-motion"
import Skill from "./Skill"
import { SkillGroup } from "@/typings"

type Props = {
  skillGroups: SkillGroup[]
}

export default function Skills({ skillGroups }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen min-h-screen flex relative flex-col
    text-center md:text-left xl:flex-row  max-w-full mx-auto
    xl:px-10 justify-center xl:space-y-0 mx-auto
    items-center"
    >
      <h3
        className="absolute top-24 uppercase tracking-[20px]
        text-custom-charcoal-100 text-2xl"
      >
        Skills
      </h3>
      <div
        className="w-screen h-screen flex flex-row items-center justify-between gap-8 flex-shrink-0
        snap-center overflow-x-scroll space-y-5 px-16 py-20 md:py-44
        scrollbar-thin scrollbar-custom-charcoal-100/20 scrollbar-thumb-custom-aquamarine/80"
      >
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="bg-custom-charcoal-300 rounded-2xl p-3 w-[220px]  flex-shrink-0"
          >
            <h4 className="text-lg text-center uppercase tracking-widest text-custom-aquamarine">
              {group.title}
            </h4>
            <div>
              {group.skills?.map((skill) => skill && <Skill key={skill._id} skill={skill} />)}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}
