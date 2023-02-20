import { QUERIES } from "@/lib/queries"
import { sanityClient } from "@/lib/sanity"
import Head from "next/head"
import { Experience, PageInfo, Project, CodeExample, SkillGroup } from "@/typings"
import { GetStaticProps } from "next"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import About from "@/components/About"
import WorkExperience from "@/components/Experience"
import Skills from "@/components/Skills"
import Projects from "@/components/Projects"
import ContactMe from "@/components/Contact"
import CodeExamples from "@/components/CodeExamples"
import Footer from "@/components/Footer"

type Props = {
  pageInfo: PageInfo
  experiences: Experience[]
  skillGroups: SkillGroup[]
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
    props: "skillGroups",
    component: (props: SkillGroup[]) => <Skills skillGroups={props} />,
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
    h-screen z-0
    snap-y snap-mandatory overflow-y-scroll overflow-x-hidden
     scrollbar scrollbar-track-custom-charcoal-100/20 scrollbar-thumb-custom-aquamarine/80"
    >
      <Head>
        <title>{props.pageInfo.name} Portfolio</title>
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
  const pageInfo: PageInfo = await sanityClient.fetch(QUERIES.pageInfo)
  const experiences: Experience[] = await sanityClient.fetch(QUERIES.experience)
  const skillGroups: SkillGroup[] = await sanityClient.fetch(QUERIES.skillGroups)
  const projects: Project[] = await sanityClient.fetch(QUERIES.projects)
  const codeExamples: CodeExample[] = await sanityClient.fetch(QUERIES.codeExpl)

  return {
    props: {
      pageInfo,
      experiences,
      skillGroups,
      projects,
      codeExamples,
    },
    revalidate: 10,
  }
}
