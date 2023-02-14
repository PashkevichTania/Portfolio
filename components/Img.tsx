import { ImageProps } from "next/dist/client/image"
import { memo } from "react"
import NextImg from "next/image"
import { useNextSanityImage } from "next-sanity-image"
import { Image } from "@/typings"
import { sanityClient } from "@/lib/sanity"

interface Props extends Omit<ImageProps, "src" | "alt" | "className"> {
  src: Image
  alt: string
  className?: string
}

function Img({ src, alt, className, ...rest }: Props) {
  const imageProps = useNextSanityImage(sanityClient, src)
  return src && <NextImg {...imageProps} {...rest} alt={alt} className={className} />
}

export default memo(Img)
