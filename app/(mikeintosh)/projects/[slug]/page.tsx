import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import tagsStyles from '@/components/Tags/mikeintoshTags.module.css'
import mikeintoshInfoBarStyles from '@/components/InfoBar/mikeintoshInfoBar.module.css'
import TechIcons from '@/components/TechIcons/TechIcons'
import { ItemSchema } from '@/components/Schema'
import { ProjectClass } from '@/models/Project'
import projectStyles from './project.module.css'
import { getProjectBySlug, getProjectsMeta } from '@/lib/projects'

interface IProject {
  params: { slug: string }
}

export const revalidate = 60

export async function generateMetadata({ params }: IProject): Promise<Metadata> {
  try {
    const project: ProjectClass | undefined = await getProjectBySlug(params.slug)

    if (!project) {
      notFound()
    }

    const projectUrl = project.schema.url || `/projects/${params.slug}`;

    return {
      alternates: {
        canonical: `${projectUrl}/`,
      },
      appleWebApp: {
        title: `${project.title} | Mike DeVine`,
      },
      description: project.description,
      keywords: project.schema.keywords,
      openGraph: {
        description: project.description,
        title: `${project.title} | Mike DeVine`,
        url: projectUrl,
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
    const projectsMeta: string[] | undefined = await getProjectsMeta()
    if (!projectsMeta) return []
    return projectsMeta.map(projectMeta => ({ slug: projectMeta }))
  } catch (error: any) {
    return []
  }
}

export default async function Project({ params }: IProject) {
  const project: ProjectClass | undefined = await getProjectBySlug(params.slug)
  if (!project) notFound()

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