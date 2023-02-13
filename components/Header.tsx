import { motion } from "framer-motion"
import Link from "next/link"
import { sections } from "@/pages"

function Header() {
  return (
    <header className="sticky top-0 p-5 max-w-3xl mx-auto z-20">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-wrap flex-row items-center justify-center"
      >
        {sections.map((item) => {
          if (item.header)
            return (
              <Link key={item.name} href={`#${item.name}`}>
                <button className="linkButton">{item.header.toUpperCase()}</button>
              </Link>
            )
        })}
      </motion.div>
    </header>
  )
}

export default Header
