import ExperienceCard from "./ExperienceCard"
import { motion } from "framer-motion"
import { Experience } from "@/typings"

type Props = {
  experiences: Experience[]
  header: string
}

export default function WorkExperience({ experiences, header }: Props) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="h-screen flex relative overflow-hidden flex-col
    text-lft md:flex-row max-w-full px-10 justify-evenly mx-auto
    items-center"
      >
        <h3 className="header">{header}</h3>
        <div
          className="z-20 w-screen h-screen flex flex-shrink-0 space-x-5 items-center
        snap-center overflow-x-scroll px-16 py-20 md:py-44
        scrollbar-thin scrollbar-custom-charcoal-100/20 scrollbar-thumb-custom-aquamarine/80"
        >
          {experiences?.map((experience) => (
            <ExperienceCard key={experience._id} experience={experience} />
          ))}
        </div>

        <div
          className=" w-full absolute top-[30%]
        bg-gradient-to-br from-custom-aquamarine/40 to-custom-indigo/40
        left-0 h-[500px] -skew-y-12 z-10"
        />
      </motion.div>
    </>
  )
}
