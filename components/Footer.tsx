import Link from "next/link"
import { ArrowUpCircleIcon } from "@heroicons/react/24/solid"

function Footer() {
  return (
    <footer className="sticky bottom-5 w-full cursor-pointer\">
      <Link href="#hero">
        <div className="flex items-center justify-center">
          <ArrowUpCircleIcon
            className="text-custom-indigo h-7
                     w-7 animate-pulse"
          />
        </div>
      </Link>
    </footer>
  )
}

export default Footer
