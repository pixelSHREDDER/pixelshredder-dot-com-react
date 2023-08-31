import { defaultKeywords } from '@/app/layout'
import { ProjectClass } from '@/models/Project'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import styles from '@/app/utils.module.css'
import projectStyles from './project.module.css'
import TechIcons from '@/components/TechIcons'

interface IProject {
  params: { slug: string }
}

export async function generateMetadata({ params }: IProject): Promise<Metadata> {
  try {
    const slug = params.slug
    const projectData = await fetch(`${process.env.BASE_URL}/projects/${slug}/api`)
    .then((res) => res.json())

    if (!projectData.data) {
      notFound()
    }
    const project: ProjectClass = projectData.data.project

    return {
      title: `${project.title} | Mike DeVine`,
      description: project.description,
      keywords: [...project.tags, ...project.tech, ...defaultKeywords],
      /*openGraph: {
        images: [],
      },*/
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
    const projectData = await fetch(`${process.env.BASE_URL}/projects/${slug}/api`)
    .then((res) => res.json())
    if (!projectData.data) {
      notFound()
    }
    return projectData.data.project
  } catch (error: any) {
    throw error
  }
}

export default async function Project({ params }: IProject) {
  const project: ProjectClass = await getProject(params.slug)

  return (
    <section>
      <h1>{project.title}</h1>
      <div aria-hidden className={styles.infobar}>
        <h5 className={styles.tags} aria-label="Tags">{
          project.tags.map((tag: string, i: number) => <span key={`${project.slug}_tag_${i}`}>{tag}</span>)
        }</h5>
        <TechIcons project={project} />
      </div>
      <div dangerouslySetInnerHTML={{__html: project.body}} aria-hidden className={projectStyles.project}></div>
    </section>
  )
}