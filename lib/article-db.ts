import connectDB from './connect-db'

const Article = connectDB.Article;

export interface ArticleFilter {
  page?: number
  limit?: number
}

export async function getArticles(filter: ArticleFilter = {}) {
  try {
    const page = filter.page ?? 1
    const limit = filter.limit ?? 10
    const skip = (page - 1) * limit

    const articles = await Article.find().skip(skip).limit(limit).lean().exec()

    const results = articles.length

    return {
      articles: articles,
      page,
      limit,
      results,
    }
  } catch (error) {
    return { error }
  }
}

export async function getArticle(slug: string) {
  try {
    if (!slug) {
      return { error: 'Article not found' }
    }

    const article = await Article.findOne({slug: slug}).lean().exec()
    if (article) {
      return { article }
    } else {
      return { error: 'Article not found' }
    }
  } catch (error) {
    return { error }
  }
}