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
      className="h-screen flex relative overflow-hidden flex-col
    text-lft md:flex-row max-w-full px-10 justify-evenly mx-auto
    items-center"
    >
      <h3 className="header">Code</h3>
      <div
        className="w-screen h-screen flex p-2 flex flex-row justify-between items-center
         flex-shrink-0 text-left z-20 space-x-5 items-center snap-center overflow-x-scroll pt-36
        scrollbar-thin scrollbar-custom-charcoal-100/20 scrollbar-thumb-custom-aquamarine/80"
      >
        {examples.map((item) => (
          <div key={item._id} className="m-2">
            <pre
              className="overflow-auto  max-h-[400px] md:max-h-[550px]
            scrollbar-thin scrollbar-track-custom-charcoal-100/20 scrollbar-thumb-custom-aquamarine/80"
            >
              <code className={`match-braces rainbow-braces language-${item.language} `}>
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
