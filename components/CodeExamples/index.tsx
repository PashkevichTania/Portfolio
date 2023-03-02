import { CodeExample } from "@/typings"
import { motion } from "framer-motion"
import Prism from "prismjs"
import "prismjs/components/prism-typescript"
import { useEffect } from "react"

type Props = {
  examples: CodeExample[]
  header: string
}

function CodeExamples({ examples, header }: Props) {
  useEffect(() => {
    Prism.highlightAll()
  }, [])
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="w-screen h-screen flex relative overflow-hidden flex-col
    text-lft md:flex-row max-w-full justify-evenly mx-auto
    items-center"
    >
      <h3 className="header">{header}</h3>
      <div
        className="w-screen h-screen flex p-2 gap-4 flex flex-row justify-between items-center
         flex-shrink-0 text-left z-20 items-center overflow-x-scroll pt-36 md:px-10
        scrollbar-thin scrollbar-custom-charcoal-100/20 scrollbar-thumb-custom-aquamarine/80"
      >
        {examples.map((item) => (
          <div key={item._id}>
            <pre
              className="overflow-auto max-h-[500px] md:max-h-[550px]
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
