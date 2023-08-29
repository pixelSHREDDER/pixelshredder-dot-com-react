import connectDB from '@/lib/connect-db'
import { getProject } from '@/lib/project-db'
import { createErrorResponse } from '@/lib/utils'
import { NextResponse } from 'next/server'

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

    let res = {
      status: 'success',
      data: { project },
    }

    return NextResponse.json(res)
  } catch (error: any) {
    if (typeof error === 'string' && error.includes('Project not found')) {
      return createErrorResponse('Project not found', 404)
    }

    return createErrorResponse(error.message, 500)
  }
}
