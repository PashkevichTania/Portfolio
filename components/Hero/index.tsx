import Spline from "@splinetool/react-spline"
import { Cursor, useTypewriter } from "react-simple-typewriter"
import { PageInfo } from "@/typings"
import Img from "@/components/Shared/Img"

type Props = {
  pageInfo: PageInfo
}

export default function Header({ pageInfo }: Props) {
  const [text] = useTypewriter({
    words: ["TypeScript enjoyer", "React / Svelte / Vue Developer", "<LovesToCode />"],
    loop: true,
    delaySpeed: 2000,
  })
  return (
    <div
      className="h-screen flex flex-row space-x-8 items-center justify-between
    text-center overflow-hidden "
    >
      <div className="z-20 w-full">
        <h1 className="text-base uppercase text-custom-charcoal-100 pb-2 tracking-[15px]">
          {pageInfo?.role}
        </h1>
        <Img
          src={pageInfo?.heroImage}
          alt="Avatar"
          className="relative rounded-full h-36 w-36 md:w-44 md:h-44 mx-auto object-cover"
        />
        <h2 className="text-3xl lg:text-4xl font-light px-10">{pageInfo.name}</h2>
        <h3 className="text-2xl lg:text-3xl font-light px-10">
          <span className="ar-3 text-custom-charcoal-100">{text}</span>
          <Cursor cursorColor="#5DFFBE" />
        </h3>
      </div>
      <div className="z-20 w-full h-[500px] hidden sm:block">
        <Spline scene={pageInfo.splineUrl} />
      </div>
    </div>
  )
}
