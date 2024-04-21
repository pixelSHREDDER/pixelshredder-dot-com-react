import { createErrorResponse } from '@/lib/utils'
import { getProjects } from '@/lib/project-db'
import { populateProjectsData } from '@/lib/middleware'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    const pageStr = request.nextUrl.searchParams.get('page')
    const limitStr = request.nextUrl.searchParams.get('limit')

    const page = pageStr ? parseInt(pageStr, 10) : 1
    const limit = limitStr ? parseInt(limitStr, 10) : 10

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

    return NextResponse.json(res)
  } catch (error: any) {
    return createErrorResponse(error.message, 500)
  }
}