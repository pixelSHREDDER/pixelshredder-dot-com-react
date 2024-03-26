import connectDB from '@/lib/article-connect-db'
import { populateArticleData } from '@/lib/middleware'
import { getArticles } from '@/lib/article-db'
import { createErrorResponse } from '@/lib/utils'
import { NextRequest, NextResponse } from 'next/server'

export const fetchCache = 'force-no-store'

export async function GET(request: NextRequest) {
  try {
    await connectDB()

    const pageStr = request.nextUrl.searchParams.get('page')
    const limitStr = request.nextUrl.searchParams.get('limit')

    const page = pageStr ? parseInt(pageStr, 10) : 1
    const limit = limitStr ? parseInt(limitStr, 10) : 10

    const { articles, results, error } = await getArticles({ page, limit })

    if (error) {
      throw error
    }

    const res = populateArticleData(articles, (articles: any[], error: any) => {
      if (error) {
        throw error
      }

      return {
        status: 'success',
        results,
        articles
      }
    })

    return NextResponse.json(res)
  } catch (error: any) {
    return createErrorResponse(error.message, 500)
  }
}