import { motion } from "framer-motion"
import Link from "next/link"
import { sections } from "@/pages"
import { Bars3Icon } from "@heroicons/react/24/solid"
import { useState } from "react"

function Index() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 p-5 max-w-3xl mx-auto z-50">
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
        <nav className="relative w-full flex flex-wrap items-center justify-between px-2 py-3 mb-3">
          <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
            <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
              <Bars3Icon
                onClick={() => setOpen(!open)}
                className="text-custom-snow hover:text-custom-aquamarine h-7 w-7 mr-auto cursor-pointer
                 bg-transparent block lg:hidden outline-none"
              />
            </div>
            <div
              className={"lg:flex flex-grow items-center " + (open ? "flex" : "hidden")}
              id="example-navbar-danger"
            >
              <ul className="flex flex-col rounded bg-custom-charcoal-100/20 lg:flex-row list-none lg:ml-auto lg:bg-transparent">
                {open &&
                  sections.map((item) => {
                    if (item.header)
                      return (
                        <li className="nav-item">
                          <Link key={item.name} href={`#${item.name}`}>
                            <button className="linkButton">{item.header.toUpperCase()}</button>
                          </Link>
                        </li>
                      )
                  })}
              </ul>
            </div>
          </div>
        </nav>
      </motion.div>
    </header>
  )
}

export default Index
