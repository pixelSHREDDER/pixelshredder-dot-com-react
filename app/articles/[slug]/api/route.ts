import connectDB from '@/lib/article-connect-db'
import { getArticle } from '@/lib/article-db'
import { createErrorResponse } from '@/lib/utils'
import { NextResponse } from 'next/server'
import { populateArticleData } from '@/lib/middleware'

export async function GET(
  _request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    await connectDB()

    const slug = params.slug
    const { article, error } = await getArticle(slug)

    if (error) {
      throw error
    }

    const res = populateArticleData(article, (article: any, error: any) => {
      if (error) {
        throw error
      }

      return {
        status: 'success',
        data: article
      }
    })

    return NextResponse.json(res)
  } catch (error: any) {
    if (typeof error === 'string' && error.includes('Article not found')) {
      return createErrorResponse('Article not found', 404)
    }

    return createErrorResponse(error.message, 500)
  }
}
