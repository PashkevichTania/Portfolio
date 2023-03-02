import Img from "@/components/Shared/Img"
import { motion } from "framer-motion"
import { Experience } from "@/typings"

type Props = {
  experience: Experience
}

export default function ExperienceCard({ experience }: Props) {
  return (
    <article
      className="flex flex-col rounded-lg h-96
     items-start justify-between space-y-2 md: space-y-5 flex-shrink-0 w-[500px]
     md:w-[600px] xl:w-[800px] snap-center bg-custom-charcoal-300
     p-5 md:p-10 overflow-hidden z-20"
    >
      <motion.div
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Img
          src={experience?.companyImage}
          className="h-16
            object-contain object-center"
          alt={experience?.name}
        />
      </motion.div>

      <div className="px-1 md:px-10">
        <p className="font-bold font-xs mt-1">{experience?.name}</p>
        <h4 className="font-light">{experience?.jobTitle}</h4>
        <p className="mt-1">{experience?.companyDescription}</p>
        <p className="uppercase py-1 text-custom-snow text-sm">
          {new Date(experience.dateStarted).toDateString()} -{" "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience.dateEnded).toDateString()}
        </p>
        <div className="flex space-x-2 my-2">
          {experience?.technologies?.map((technology) => (
            <Img
              key={technology._id}
              className="h-10 w-10 rounded-full bg-custom-snow"
              src={technology.image}
              alt={technology.title}
            />
          ))}
        </div>
      </div>
    </article>
  )
}
