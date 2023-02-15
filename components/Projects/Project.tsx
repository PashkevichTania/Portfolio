import Img from "@/components/Shared/Img"
import { motion } from "framer-motion"
import { Project } from "@/typings"
import Link from "next/link"

type Props = {
  project: Project
}

function Project({ project }: Props) {
  return (
    <div
      key={project._id}
      className="w-screen flex-shrink-0 snap-center flex flex-col
            space-y-5 items-center justify-center p-20 md:p-44 h-screen"
    >
      <motion.div
        initial={{ y: -300, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="h-[180px]"
      >
        <Img className="h-[180px] object-contain" alt={project?.title} src={project?.image} />
      </motion.div>
      <div className="space-y-10 px-0 md:px-10 max-w-6xl">
        <Link href={project?.linkToBuild || "#"}>
          <h4 className="text-4xl font-semibold text-center">
            <span className="underline decoration-custom-aquamarine">
              {project.isCommercial ? "Commercial" : "Learning"} project:
            </span>{" "}
            {project?.title}
          </h4>
        </Link>
        <p className="text-lg text-center md:text-left whitespace-pre-wrap">{project?.summary}</p>
        <div className="flex items-center space-x-2 justify-start">
          {project?.technologies?.map((technology) => (
            <Img
              key={technology._id}
              className="h-10 w-10 rounded-full"
              src={technology.image}
              alt={technology.title}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Project
