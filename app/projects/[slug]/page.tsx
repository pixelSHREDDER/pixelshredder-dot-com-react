import { ProjectClass } from '@/models/Project'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import styles from '@/app/utils.module.css'
import projectStyles from './project.module.css'
import TechIcons from '@/components/TechIcons/TechIcons'
import { ProjectSchema } from '@/components/Schema'

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
    const project: ProjectClass = projectData.data

    return {
      appleWebApp: {
        title: `${project.title} | Mike DeVine`,
      },
      description: project.description,
      keywords: project.schema.keywords,
      openGraph: {
        description: project.description,
        title: `${project.title} | Mike DeVine`,
        url: project.schema.url,
      },
      title: `${project.title} | Mike DeVine`,
      twitter: {
        card: 'summary',
        creator: '@pixelSHREDDER',
        description: project.description,
        title: `${project.title} | Mike DeVine`,
      },
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
    return projectData.data
  } catch (error: any) {
    throw error
  }
}

export default async function Project({ params }: IProject) {
  const project: ProjectClass = await getProject(params.slug)

  return (
    <section className={projectStyles.project}>
      <h1>{project.title}</h1>
      <h3>{project.description}</h3>
      <div aria-hidden className={styles.infobar}>
        <h5 className={styles.tags} aria-label="Tags">{
          project.tags.map((tag: string, i: number) => <span key={`${project.slug}_tag_${i}`}>{tag}</span>)
        }</h5>
        <TechIcons project={project} />
      </div>
      <div dangerouslySetInnerHTML={{__html: project.body}} aria-hidden></div>
      <ProjectSchema project={project.schema} />
    </section>
  )
}