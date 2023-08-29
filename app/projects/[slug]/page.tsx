import { ProjectClass } from "@/models/Project"
import { Metadata } from "next"

interface IProject {
  params: { slug: string }
}

/*export async function generateMetadata({ params }: IProject): Promise<Metadata> {
  try {
    const slug = params.slug
    const projectData = await fetch(`${process.env.BASE_URL}/projects/${slug}/api`)
    .then((res) => res.json())
    const project: ProjectClass = projectData.data.project

    return {
      title: `${project.title} | Mike DeVine`,
      description: project.description,
      *//*openGraph: {
        images: [],
      },*//*
    }
  } catch (error: any) {
    throw error
  }
}

export async function generateStaticParams() {
  try {
    const projects = await fetch(`${process.env.BASE_URL}/projects/api`)
    .then((res) => res.json())
    return projects.projects.map((project: ProjectClass) => project.slug)
  } catch (error: any) {
    throw error
  }
}

async function getProject(slug: string) {
  try {
    const project = await fetch(`${process.env.BASE_URL}/projects/${slug}/api`)
    .then((res) => res.json())
    return project.data.project
  } catch (error: any) {
    throw error
  }
}*/

export default async function Project({ params }: IProject) {
  /*const project: ProjectClass = await getProject(params.slug)
  
  return (
    <section>
      <h1>{project.title}</h1>
      {project.body}
    </section>
  )*/
  return (
    <section><h1>WHAT IS LOVE</h1></section>
  )
}