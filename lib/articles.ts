import { ArticleClass } from '@/models/Article'

export async function getArticleBySlug(slug: string): Promise<ArticleClass | undefined> {
  try {
    const article = await fetch(`${process.env.BASE_URL}/articles/${slug}/api`)
    .then((res) => res.json())
    return article.data
  } catch (error: any) {
    return undefined
  }
}

export async function getArticlesMeta(): Promise<string[] | undefined> {
  try {
    const articles = await fetch(`${process.env.BASE_URL}/articles/api`).then(res => res.json())

    const articlesMeta: string[] = []

    for (const article of articles.articles) {
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