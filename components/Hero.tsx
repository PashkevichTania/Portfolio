import Spline from "@splinetool/react-spline";
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import Link from 'next/link';
import Image from 'next/image';
import { PageInfo } from '@/typings';
import { urlFor } from '../lib/sanity';

type Props = {
    pageInfo : PageInfo
}

export default function Hero({pageInfo}: Props) {
    const [text] = useTypewriter({
        words:[
            "Web Developer",
            "React / Svelte / Vue Developer",
            "<LovesToCode />"
        ],
        loop: true,
        delaySpeed: 2000
    });
  return (
    <div className='h-screen flex flex-row space-x-8 items-center justify-between
    text-center overflow-hidden '>
        <div className='z-20 w-full'>
            <h1 className='text-base uppercase text-gray-500 pb-2 tracking-[15px]'>
                {pageInfo?.role}
            </h1>
            <img className='relative rounded-full h-32 w-32 mx-auto object-cover'
                 src={urlFor(pageInfo?.heroImage).url()}
                 alt='Avatar'
            />
            <h2 className='text-3xl lg:text-4xl font-light px-10'>
                <span className='ar-3'>{text}</span>
                <Cursor cursorColor='#5DFFBE' />
            </h2>
        </div>
        <div className='z-20 w-full h-[500px] hidden sm:block'>
            {/*TODO: sanity*/}
            <Spline scene="https://prod.spline.design/9LCo3wJP8kwireiE/scene.splinecode" />
        </div>

    </div>
  )
}