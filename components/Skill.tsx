import { Skill } from "@/typings"
import { sanityClient } from "@/lib/sanity"
import Image from "next/image"
import { useNextSanityImage } from "next-sanity-image"

type Props = {
  skill: Skill
}

function Skill({ skill }: Props) {
  const imageProps = useNextSanityImage(sanityClient, skill.image)
  return (
    <div className="relative flex flex-row p-1.5">
      <Image
        {...imageProps}
        alt={skill.title}
        className="bg-custom-snow w-10 h-10 rounded-full m-2"
      />
      <div className="flex flex-col">
        <p className="font-bold">{skill.title}</p>
        <p className="font-light text-custom-snow/70">{skill.level}</p>
      </div>
    </div>
  )
}

export default Skill
