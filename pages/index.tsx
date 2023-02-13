import Head from "next/head"
import { Experience, PageInfo, Project, Skill, CodeExample, SkillGroup } from "@/typings"
import { GetStaticProps } from "next"
import { fetchPageInfo } from "@/utils/fetchpageInfo"
import { fetchExperiences } from "@/utils/fetchExperiences"
import { fetchSkills } from "@/utils/fetchSkills"
import { fetchSkillGroups } from "@/utils/fetchSkillGroups"
import { fetchProjects } from "@/utils/fetchProjects"
import { fetchCodeExamples } from "@/utils/fetchCodeExamples"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import About from "@/components/About"
import WorkExperience from "@/components/WorkExperience"
import Skills from "@/components/Skills"
import Projects from "@/components/Projects"
import ContactMe from "@/components/ContactMe"
import CodeExamples from "@/components/CodeExamples"
import Footer from "@/components/Footer"

type Props = {
  pageInfo: PageInfo
  experiences: Experience[]
  skills: Skill[]
  skillGroups: SkillGroup
  projects: Project[]
  codeExamples: CodeExample[]
}
export const sections = [
  {
    name: "hero",
    props: "pageInfo",
    component: (props: PageInfo) => <Hero pageInfo={props} />,
    header: "",
  },
  {
    name: "about",
    props: "pageInfo",
    component: (props: PageInfo) => <About pageInfo={props} />,
    header: "about",
  },
  {
    name: "skills",
    props: "skills",
    component: (props: Skill[]) => <Skills skills={props} />,
    header: "skills",
  },
  {
    name: "codeExamples",
    props: "codeExamples",
    component: (props: CodeExample[]) => <CodeExamples examples={props} />,
    header: "code",
  },
  {
    name: "experience",
    props: "experiences",
    component: (props: Experience[]) => <WorkExperience experiences={props} />,
    header: "experience",
  },
  {
    name: "projects",
    props: "projects",
    component: (props: Project[]) => <Projects projects={props} />,
    header: "projects",
  },
  {
    name: "contact",
    props: "pageInfo",
    component: (props: PageInfo) => <ContactMe pageInfo={props} />,
    header: "contact",
  },
]

const Home = (props: Props) => {
  return (
    <div
      className="bg-custom-raisin-black text-custom-snow
    h-screen
    snap-y snap-mandatory overflow-y-scroll overflow-x-hidden
     z-0"
    >
      <Head>
        <title>Tania-Pashkevich-Portfolio</title>
      </Head>

      <Header />
      {sections.map((item, idx) => {
        return (
          <section
            key={item.name}
            id={item.name}
            className={idx % 2 === 0 ? "snap-center" : "snap-start"}
          >
            {/*@ts-ignore*/}
            {item.component(props[item.props])}
          </section>
        )
      })}
      <Footer />
    </div>
  )
}

export default Home

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo()
  const experiences: Experience[] = await fetchExperiences()
  const skills: Skill[] = await fetchSkills()
  const skillGroups: SkillGroup = await fetchSkillGroups()
  const projects: Project[] = await fetchProjects()
  const codeExamples: CodeExample[] = await fetchCodeExamples()

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      skillGroups,
      projects,
      codeExamples,
    },
    revalidate: 10,
  }
}
