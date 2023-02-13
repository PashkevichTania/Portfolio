import { motion } from "framer-motion"
import Skill from "./Skill"
import { SkillGroup } from "@/typings"

type Props = {
  skillGroups: SkillGroup
}

export default function Skills({ skillGroups }: Props) {
  const groups = [
    { title: "Front-end", skills: skillGroups.frontEnd },
    { title: "Back-end", skills: skillGroups.backEnd },
    { title: "Tools", skills: skillGroups.tools },
    { title: "Testing", skills: skillGroups.testing },
  ]
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative flex-col
    text-center md:text-left xl:flex-row max-w-[2000px]
    xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto
    items-center"
    >
      <h3
        className="absolute top-24 uppercase tracking-[20px]
        text-custom-charcoal-100 text-2xl"
      >
        Skills
      </h3>
      <div className="grid grid-cols-4 gap-5 md:gap-8 overflow-x-auto">
        {groups.map((group) => (
          <div key={group.title} className="bg-custom-charcoal-300 rounded-2xl py-5 px-3 w-[220px]">
            <h4 className="text-lg text-center uppercase tracking-widest text-custom-aquamarine">
              {group.title}
            </h4>
            <div>
              {group.skills?.map((skill) => (
                <Skill key={skill._id} skill={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}
