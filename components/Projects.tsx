import { motion } from "framer-motion"
import { Project as ProjectType } from "@/typings"
import Project from "./Project"
import { sanityClient, urlFor } from "@/lib/sanity"
import Link from "next/link"
import { useNextSanityImage } from "next-sanity-image"

type Props = {
  projects: ProjectType[]
}

export default function Projects({ projects }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-out
    text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3
        className="absolute top-24 uppercase tracking-[20px] text-custom-charcoal-100
       text-2xl"
      >
        Projects
      </h3>

      <div
        className="relative w-full flex overflow-x-scroll
       overflow-y-hidden snap-x snap-mandatory z-20"
      >
        {projects.map((project, i) => (
          <Project key={project._id} project={project} />
        ))}
      </div>

      <div
        className=" w-full absolute top-[30%]
        bg-gradient-to-br from-custom-aquamarine/40 to-custom-indigo/40
        left-0 h-[500px] -skew-y-12"
      />
    </motion.div>
  )
}
