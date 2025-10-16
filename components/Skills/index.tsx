import { motion } from "framer-motion"
import Skill from "./Skill"
import { SkillGroup } from "@/typings"

type Props = {
  skillGroups: SkillGroup[]
  header: string
}

export default function Skills({ skillGroups, header }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen min-h-screen flex relative flex-col
    text-left xl:flex-row  max-w-full mx-auto
    justify-center xl:space-y-0
    items-center"
    >
      <h3 className="header">{header}</h3>
      <div
        className="w-screen h-screen flex flex-row items-center justify-between gap-8 flex-shrink-0
        px-4 xl:px-10 snap-center overflow-x-scroll space-y-5 pt-12 md:pt-28
        scrollbar-thin scrollbar-custom-charcoal-100/20 scrollbar-thumb-custom-aquamarine/80"
      >
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className={
              "bg-custom-charcoal-300 rounded-2xl p-3 min-w-[220px] max-h-[550px] flex-shrink-0 grid " +
              (group.skills.length > 6 ? "grid-cols-2" : "grid-cols-1")
            }
          >
            <h4 className="text-lg text-center uppercase tracking-widest text-custom-aquamarine">
              {group.title}
            </h4>
            {group.skills?.map((skill) => skill && <Skill key={skill._id} skill={skill} />)}
          </div>
        ))}
      </div>
    </motion.div>
  )
}
