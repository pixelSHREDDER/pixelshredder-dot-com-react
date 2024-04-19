import { ProjectClass } from "@/models/Project"
import { NextResponse } from "next/server"
import { ProjectFilter, getProject, getProjects } from "./project-db"
import connectDB from "./connect-db"
import { populateProjectData, populateProjectsData } from "./middleware"

export interface ProjectsResult {
  status: 'success' | 'error',
  projects: ProjectClass[],
  results: number,
  error?: any
}

export async function getProjectBySlug(slug: string): Promise<ProjectClass | undefined> {
  try {
    await connectDB()

    const { project, error } = await getProject(slug)

    if (error) {
      throw error
    }

    const res = populateProjectData(project, (project: any, error: any) => {
      if (error) {
        throw error
      }

      return project
    })

    NextResponse.json(res)
    return res
  } catch (error: any) {
    return undefined
  }
}

export async function getProjectsBySearchParams(
  {page, limit}: ProjectFilter = {page: 1, limit: 10}
): Promise<ProjectsResult> {
  try {
    await connectDB()

    const { projects, results, error } = await getProjects({ page, limit })

    if (error) {
      throw error
    }

    const res = populateProjectsData(projects, (projects: any[], error: any) => {
      if (error) {
        throw error
      }

      return {
        status: 'success',
        results,
        projects
      }
    })

    NextResponse.json(res)
    return res
  } catch (error: any) {
    return {
      status: 'error',
      results: 0,
      projects: [],
      error
    }
  }
}

export async function getProjectsMeta(): Promise<string[] | undefined> {
  try {
    const { projects } = await getProjectsBySearchParams()
    const projectsMeta: string[] = []

    for (const project of projects) {
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