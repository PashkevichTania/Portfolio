import Link from "next/link"
import { ArrowUpCircleIcon } from "@heroicons/react/24/solid"

function Index() {
  return (
    <footer className="sticky bottom-5 w-full cursor-pointer z-50">
      <Link href="#hero">
        <div className="flex items-center justify-center">
          <ArrowUpCircleIcon
            className="text-custom-aquamarine h-7
                     w-7 animate-pulse"
          />
        </div>
      </Link>
    </footer>
  )
}

export default Index
