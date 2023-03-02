import { motion } from "framer-motion"
import { Project as ProjectType } from "@/typings"
import Project from "./Project"

import { Navigation, Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

type Props = {
  projects: ProjectType[]
}

export default function Projects({ projects }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-out flex-col
    text-left max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="header">Projects</h3>
      <div
        className="relative w-full flex overflow-x-scroll
       overflow-y-hidden snap-x snap-mandatory z-20 px-2 md:px-10 pb-10
        scrollbar-thin scrollbar-custom-charcoal-100/20 scrollbar-thumb-custom-aquamarine/80"
      >
        <Swiper
          // install Swiper modules
          modules={[Pagination, Navigation]}
          pagination={{
            type: "fraction",
          }}
          navigation
          slidesPerView={1}
          scrollbar={{ draggable: true }}
        >
          {projects.map((project) => (
            <SwiperSlide key={project._id}>
              <Project project={project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.div>
  )
}
