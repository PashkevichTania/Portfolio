import { CodeExample } from "@/typings"
import { motion } from "framer-motion"
import Prism from "prismjs"
import "prismjs/components/prism-typescript"
import { useEffect } from "react"

type Props = {
  examples: CodeExample[]
}

function CodeExamples({ examples }: Props) {
  useEffect(() => {
    Prism.highlightAll()
  }, [])
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col items-center justify-between relative h-screen
       text-center max-w-7xl px-30 justify-evenly mx-auto items-center"
    >
      <h3
        className="absolute top-24 uppercase
        tracking-[20px] text-custom-charcoal-100 text-2xl"
      >
        Code Examples
      </h3>
      <div className="p-2 flex flex-col md:flex-row space-x-8 justify-between text-left">
        {examples.map((item) => (
          <div key={item._id} className="m-2 max-h-[550px] overflow-auto">
            <pre>
              <code className={`language-${item.language} match-braces rainbow-braces`}>
                {item.code}
              </code>
            </pre>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default CodeExamples
