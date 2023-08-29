import { ProjectClass } from "@/models/Project"
import { Metadata } from "next"

interface IProject {
  params: { slug: string }
}
 
export async function generateMetadata({ params }: IProject): Promise<Metadata> {
  const slug = params.slug
  const projectData = await fetch(`${process.env.BASE_URL}/api/projects/${slug}`)
  .then((res) => res.json())
  const project: ProjectClass = projectData.data.project
 
  return {
    title: `${project.title} | Mike DeVine`,
    description: project.description,
    /*openGraph: {
      images: [],
    },*/
  }
}

export async function generateStaticParams() {
  const projects = await fetch(`${process.env.BASE_URL}/api/projects`)
  .then((res) => res.json())
  return projects.projects.map((project: ProjectClass) => project.slug)
}

async function getProject(slug: string) {
  const project = await fetch(`${process.env.BASE_URL}/api/projects/${slug}`)
  .then((res) => res.json())
  return project.data.project
}

export default async function Project({ params }: IProject) {
  const project: ProjectClass = await getProject(params.slug)
  
  return (
    <section>
      <h1>{project.title}</h1>
      {project.body}
    </section>
  )
}