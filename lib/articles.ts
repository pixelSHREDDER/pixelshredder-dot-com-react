import { ArticleClass } from "@/models/Article"
import { NextResponse } from "next/server"
import { ArticleFilter, getArticle, getArticles } from "./article-db"
import { populateArticleData, populateArticlesData } from "./middleware"

export interface ArticlesResult {
  status: 'success' | 'error',
  articles: ArticleClass[],
  results: number,
  error?: any
}

export async function getArticleBySlug(slug: string): Promise<ArticleClass | undefined> {
  try {
    const { article, error } = await getArticle(slug)

    if (error) {
      throw error
    }

    const res = populateArticleData(article, (article: any, error: any) => {
      if (error) {
        throw error
      }

      return article
    })

    NextResponse.json(res)
    return res
  } catch (error: any) {
    return undefined
  }
}

export async function getArticlesBySearchParams(
  {page, limit}: ArticleFilter = {page: 1, limit: 10}
): Promise<ArticlesResult> {
  try {
    const { articles, results, error } = await getArticles({ page, limit })

    if (error) {
      throw error
    }

    const res = populateArticlesData(articles, (articles: any[], error: any) => {
      if (error) {
        throw error
      }

      return {
        status: 'success',
        results,
        articles
      }
    })

    NextResponse.json(res)
    return res
  } catch (error: any) {
    return {
      status: 'error',
      results: 0,
      articles: [],
      error
    }
  }
}

export async function getArticlesMeta(): Promise<string[] | undefined> {
  try {
    const { articles } = await getArticlesBySearchParams()
    const articlesMeta: string[] = []

    for (const article of articles) {
        const articleData = await getArticleBySlug(article.slug)
        if (articleData) {
            articlesMeta.push(articleData.slug)
        }
    }

    return articlesMeta
  } catch (error: any) {
      return undefined
  }
}