import { PageInfo } from "@/typings"
import { motion } from "framer-motion"
import Img from "../Shared/Img"

type Props = {
  pageInfo: PageInfo
  header: string
}

export default function About({ pageInfo, header }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center
      md:text-left md:flex-row max-w-7xl
      pt-10 px-30 justify-center mx-auto items-center"
    >
      <h3 className="header">{header}</h3>
      <motion.div
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex-shrink-0"
      >
        <Img
          src={pageInfo.profilePic}
          alt="Avatar"
          className="w-40 h-40 rounded-full object-cover object-[50%_20%]
              mb-10 md:mb-0 md:ml-10 md:rounded-lg md:w-60 md:h-[300px] xl:w-[300px] xl:h-[350px]"
        />
      </motion.div>
      <div className="space-y-10 px-10 max-w-3xl md:max-w-4xl xl:max-w-5xl">
        <h4 className="text-2xl font-semibold">
          Here is a little{" "}
          <span className="underline decoration-custom-aquamarine/70">about me</span>
        </h4>
        <p className="text-base text-custom-snow">{pageInfo?.backgroundInformation}</p>
      </div>
    </motion.div>
  )
}
