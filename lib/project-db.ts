import { Project } from '@/models/Project'
import connectDB from './connect-db'

export interface ProjectFilter {
  page?: number
  limit?: number
}

export async function getProjects(filter: ProjectFilter = {}) {
  try {
    await connectDB()

    const page = filter.page ?? 1
    const limit = filter.limit ?? 10
    const skip = (page - 1) * limit

    const projects = await Project.find().skip(skip).limit(limit).lean().exec()

    const results = projects.length

    return {
      projects: projects,
      page,
      limit,
      results,
    }
  } catch (error) {
    return { error }
  }
}

export async function getProject(slug: string) {
  try {
    await connectDB()

    if (!slug) {
      return { error: 'Project not found' }
    }

    const project = await Project.findOne({slug: slug}).lean().exec()
    if (project) {
      return { project }
    } else {
      return { error: 'Project not found' }
    }
  } catch (error) {
    return { error }
  }
}