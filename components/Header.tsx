import { motion } from 'framer-motion'
import Link from 'next/link'

function Header() {
  return (
    <header className='sticky top-0 p-5 max-w-3xl mx-auto z-20'>
        <motion.div
         initial={{
            x : -500,
            opacity : 0,
            scale : 0.5
         }}
         animate={{
            x : 0,
            opacity: 1,
            scale: 1
         }}
         transition={{
            duration: 1.5
         }}
         className='flex flex-wrap flex-row items-center justify-center' >
                <Link href="#about">
                    <button className='linkButton'>About</button>
                </Link>
                <Link href="#experience">
                    <button className='linkButton'>Experience</button>
                </Link>
                <Link href="#skills">
                    <button className='linkButton'>Skills</button>
                </Link>
                <Link href="#projects">
                    <button className='linkButton'>Projects</button>
                </Link>
            <Link href="#contact">
                <button className='linkButton'>Contact</button>
            </Link>
        </motion.div>
    </header>
  )
}

export default Header