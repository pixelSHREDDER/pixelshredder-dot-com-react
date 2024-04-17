import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import tagsStyles from '@/components/Tags/mikeintoshTags.module.css'
import mikeintoshInfoBarStyles from '@/components/InfoBar/mikeintoshInfoBar.module.css'
import TechIcons from '@/components/TechIcons/TechIcons'
import { ItemSchema } from '@/components/Schema'
import { ProjectClass } from '@/models/Project'
import projectStyles from './project.module.css'

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
      alternates: {
        canonical: `${process.env.NEXT_PUBLIC_CANONICAL_BASE_URL}/projects/${slug}`,
      },
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
    const projectsData = await fetch(`${process.env.BASE_URL}/projects/api`)
    const projects = await projectsData.json()
    return projects.projects ?
      projects.projects.map((project: ProjectClass) => project.slug) : []
  } catch (error: any) {
    throw error
  }
}

async function getProject(slug: string) {
  try {
    const projectData = await fetch(
      `${process.env.BASE_URL}/projects/${slug}/api`,
      { next: { revalidate: 60 } }
    )
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
      {project.tags.includes('writing') &&
        <h4><Link href={`${process.env.NEXT_PUBLIC_CANONICAL_BASE_URL}/articles/${project.slug}`}>Read full article</Link></h4>
      }
      <div aria-hidden className={mikeintoshInfoBarStyles.mikeintoshInfoBar}>
        <h5 className={tagsStyles.mikeintoshTags} aria-label="Tags">{
          project.tags.map((tag: string, i: number) => <span key={`${project.slug}_tag_${i}`}>{tag}</span>)
        }</h5>
        <TechIcons project={project} />
      </div>
      <div dangerouslySetInnerHTML={{__html: project.body}} aria-hidden></div>
      <ItemSchema item={project.schema} />
    </section>
  )
}