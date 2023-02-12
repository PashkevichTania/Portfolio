import Head from 'next/head'
import Header from '@/components/Header'
import Link from 'next/link'
import React from 'react'
import { Experience, PageInfo, Project, Skill, CodeExample } from '@/typings'
import { GetServerSideProps, GetStaticProps } from 'next'
import { fetchPageInfo } from '@/utils/fetchpageInfo'
import { fetchExperiences } from '@/utils/fetchExperiences'
import { fetchSkills } from '@/utils/fetchSkills'
import { fetchProjects } from '@/utils/fetchProjects'
import Hero from '@/components/Hero'
import About from '@/components/About'
import WorkExperience from '@/components/WorkExperience'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import ContactMe from '@/components/ContactMe'
import  { ArrowUpCircleIcon } from "@heroicons/react/24/solid"


type Props ={
  pageInfo:PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  codeExample: [];
}


const Home = ({pageInfo, experiences, projects, skills}: Props) => {
   return (

    
    <div className='bg-custom-raisin-black text-custom-snow
    h-screen
    snap-y snap-mandatory overflow-y-scroll overflow-x-hidden
     z-0'>
      <Head>
        <title>Tania-Pashkevich-Portfolio</title>
      </Head>

      <Header />

      <section id="hero" className='snap-start'>
        <Hero pageInfo={pageInfo} />
      </section>
      
      <section id="about" className='snap-center'>
        <About pageInfo={pageInfo} />
      </section>

      <section id='experience' className='snap-center'>
        <WorkExperience experiences={experiences} />
      </section>
      
      <section id='skills' className='snap-start'>
        <Skills skills={skills}/>
      </section>

      <section id='projects' className='snap-start' >
        <Projects projects={projects} />
      </section>

      <section id='contact' className='snap-start'>
        <ContactMe />
      </section>

      <Link href="#hero">
        <footer className='sticky bottom-5 w-full cursor-pointer'>
          <div className='flex items-center justify-center'>
              <ArrowUpCircleIcon className='text-custom-indigo h-7
                     w-7 animate-pulse' />
          </div>
        </footer>
      </Link>
    </div>
  )
}

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills : Skill[] = await fetchSkills();
  const projects : Project[] = await fetchProjects();
  const codeExample : [] = [];

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      codeExample
    }, 
    revalidate: 10,
  }
}
