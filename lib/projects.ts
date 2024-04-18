import { ProjectClass } from '@/models/Project'

export async function getProjectBySlug(slug: string): Promise<ProjectClass | undefined> {
  try {
    const project = await fetch(`${process.env.BASE_URL}/projects/${slug}/api`)
    .then((res) => res.json())
    return project.data
  } catch (error: any) {
    return undefined
  }
}

export async function getProjectsMeta(): Promise<string[] | undefined> {
  try {
    const projects = await fetch(`${process.env.BASE_URL}/projects/api`).then(res => res.json())

    const projectsMeta: string[] = []

    for (const project of projects.projects) {
        const projectData = await getProjectBySlug(project.slug)
        if (projectData) {
            projectsMeta.push(projectData.slug)
        }
    }

    return projectsMeta
  } catch (error: any) {
      return undefined
  }
}

export async function getProjectsBySearch(): Promise<ProjectClass[]> {
  try {
    const projects = await fetch(`${process.env.BASE_URL}/projects/api`, { cache: 'no-store' })
    .then((res) => res.json())
    return projects.projects
  } catch (error: any) {
    return []
  }
}
