import Nav from '@/components/Nav/Nav'
import { Metadata } from 'next'
import ProjectsGrid from '@/components/Grid/ProjectsGrid'
import { ProjectClass } from '@/models/Project'
import Link from 'next/link'
import { defaultKeywords } from '../layout'
import { ProjectsResult, getProjectsBySearchParams } from '@/lib/projects'
import { revalidatePath } from 'next/cache'

const defaultMetadata = {
  description: 'Various personal endeavors, side projects, and tinkering I\'ve worked on over the years.',
  title: 'Mike DeVine | Projects',
  url: `${process.env.NEXT_PUBLIC_CANONICAL_BASE_URL}/projects`
}

export const metadata: Metadata = {
  alternates: {
    canonical: defaultMetadata.url,
  },
  appleWebApp: {
		title: defaultMetadata.title,
	},
	description: defaultMetadata.description,
	keywords: ['projects', ...defaultKeywords],
	openGraph: {
		description: defaultMetadata.description,
		title: defaultMetadata.title,
		url: defaultMetadata.url,
	},
	title: defaultMetadata.title,
	twitter: {
		card: 'summary',
		creator: '@pixelSHREDDER',
		description: defaultMetadata.description,
		title: defaultMetadata.title,
	}
}

async function getProjects(): Promise<ProjectClass[]> {
  try {
    const { projects }: ProjectsResult = await getProjectsBySearchParams()
    revalidatePath('/projects')
    return projects
  } catch (error: any) {
    return []
  }
}

export default async function Projects() {
  const projects: ProjectClass[] = await getProjects()

  return (
    <article>
      <Nav />
      <h1>Projects</h1>
      <p>All of my various personal endeavors, side projects, and tinkering I've worked on over the years. You can find my professional work experience <Link href="/resumes">here</Link>.</p>
      <ProjectsGrid projects={projects} />
      <Nav />
    </article>
  )
}