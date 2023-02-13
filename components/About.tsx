import { urlFor } from "@/lib/sanity"
import { PageInfo } from "@/typings"
import { motion } from "framer-motion"

type Props = {
  pageInfo: PageInfo
}

export default function About({ pageInfo }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl
       px-30 justify-evenly mx-auto items-center"
    >
      <h3
        className="absolute top-24 uppercase
        tracking-[20px] text-custom-charcoal-100 text-2xl"
      >
        About
      </h3>

      <div>
        <motion.img
          initial={{
            x: -200,
            opacity: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          src={urlFor(pageInfo?.profilePic).url()}
          className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover
        md:rounded-lg md:w-64 md:h-64 md:h-95 xl:w-[300px] xl:h-[350px]"
        />
      </div>
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-2xl font-semibold">
          Here is a little{" "}
          <span className="underline decoration-custom-aquamarine/70">about me</span>
        </h4>
        <p className="text-base text-custom-snow">{pageInfo?.backgroundInformation}</p>
      </div>
    </motion.div>
  )
}
