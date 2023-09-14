import Nav from '@/components/Nav'
import { Metadata } from 'next'
import ProjectsGrid from '@/components/ProjectsGrid'
import { ProjectClass, ProjectResponse } from '@/models/Project'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Mike DeVine | Projects',
  description: 'Everything I\'ve worked on over the years.',
}

const getProjects = async () => {
  try {
    const projects = await fetch(`${process.env.BASE_URL}/projects/api`)
    .then((res) => res.json())
    const projectsResponse: ProjectResponse[] = []
    projects.projects.map((project: ProjectClass) => {
      projectsResponse.push({...project, dateString: project.date.toLocaleString()})
    })
    return projectsResponse
  } catch (error: any) {
    throw error
  }
}

export default async function Projects() {
  const projects: ProjectResponse[] = await getProjects()

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