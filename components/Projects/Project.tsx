import Img from "@/components/Shared/Img"
import { Project } from "@/typings"
import Link from "next/link"

type Props = {
  project: Project
}

function Project({ project }: Props) {
  return (
    <div
      key={project._id}
      className="w-screen snap-center flex flex-col
        space-y-2 items-center justify-center h-screen p-20 md:p-40"
    >
      <Img className="h-[180px] object-contain" alt={project?.title} src={project?.image} />
      <div className="space-y-5 px-0 md:px-10 max-w-6xl">
        <h4 className="text-2xl md:text-4xl font-semibold text-center">
          <Link href={project?.linkToBuild || "#"} className="cursor-pointer">
            <span className="underline decoration-custom-aquamarine">
              {project.isCommercial ? "Commercial" : "Learning"} project:
            </span>
          </Link>
          {" " + project?.title}
        </h4>
        <div>
          <p className="text-base md:text-lg text-center md:text-left whitespace-pre-wrap">
            {project?.summary}
          </p>
          {project.responsibilities?.length && (
            <ul className="hidden md:block">
              Responsibilities:
              {project.responsibilities?.map((item) => (
                <li key={item}>-{item}</li>
              ))}
            </ul>
          )}
          {project?.linkToRepo && (
            <Link
              href={project.linkToRepo}
              className="relative mt-2 inline-flex items-center justify-center p-0.5 overflow-hidden
             text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500
              group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white
              focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Source Code
              </span>
            </Link>
          )}
        </div>
        <div className="flex flex-wrap items-center space-x-2 justify-start">
          {project?.technologies?.map((technology) => (
            <Img
              key={technology._id}
              className="h-10 w-10 rounded-full bg-custom-snow"
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
