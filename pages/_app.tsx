import "@/styles/globals.css"
import "@/styles/prism.css"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "@/styles/Swiper.css"
import type { AppProps } from "next/app"

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
