import connectDB from '@/lib/project-connect-db'
import { createErrorResponse } from '@/lib/utils'
import { getProject } from '@/lib/project-db'
import { NextResponse } from 'next/server'
import { populateProjectData } from '@/lib/middleware'

export async function GET(
  _request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    await connectDB()

    const slug = params.slug
    const { project, error } = await getProject(slug)

    if (error) {
      throw error
    }

    const res = populateProjectData(project, (project: any, error: any) => {
      if (error) {
        throw error
      }

      return {
        status: 'success',
        data: project
      }
    })

    return NextResponse.json(res)
  } catch (error: any) {
    if (typeof error === 'string' && error.includes('Project not found')) {
      return createErrorResponse('Project not found', 404)
    }

    return createErrorResponse(error.message, 500)
  }
}
