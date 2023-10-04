import { ArticleClass } from '@/models/Article'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import styles from '@mikeintosh/utils.module.css'
import articleStyles from './article.module.css'
import { ItemSchema } from '@/components/Schema'

interface IArticle {
  params: { slug: string }
}

export async function generateMetadata({ params }: IArticle): Promise<Metadata> {
  try {
    const slug = params.slug
    const articleData = await fetch(`${process.env.BASE_URL}/articles/${slug}/api`)
    .then((res) => res.json())

    if (!articleData.data) {
      notFound()
    }
    const article: ArticleClass = articleData.data

    return {
      appleWebApp: {
        title: article.title,
      },
      description: article.description,
      keywords: article.schema.keywords,
      openGraph: {
        description: article.description,
        title: article.title,
        url: article.schema.url,
      },
      title: article.title,
      twitter: {
        card: 'summary',
        creator: '@pixelSHREDDER',
        description: article.description,
        title: article.title,
      },
    }
  } catch (error: any) {
    throw error
  }
}

export async function generateStaticParams() {
  try {
    const articles = await fetch(`${process.env.BASE_URL}/articles/api`)
    .then((res) => res.json())
    return articles.articles.map((article: ArticleClass) => article.slug)
  } catch (error: any) {
    throw error
  }
}

async function getArticle(slug: string) {
  try {
    const articleData = await fetch(`${process.env.BASE_URL}/articles/${slug}/api`)
    .then((res) => res.json())
    if (!articleData.data) {
      notFound()
    }
    return articleData.data
  } catch (error: any) {
    throw error
  }
}

export default async function Article({ params }: IArticle) {
  const article: ArticleClass = await getArticle(params.slug)

  return (
    <section className={articleStyles.article}>
      <h1>{article.title}</h1>
      <h2>{article.description}</h2>
      <div aria-hidden className={styles.infobar}>
        <h5 className={styles.keywords} aria-label="Keywords">{
          article.keywords.map((kw: string, i: number) => <span key={`${article.slug}_kw_${i}`}>{kw}</span>)
        }</h5>
      </div>
      <div dangerouslySetInnerHTML={{__html: article.body}} aria-hidden></div>
      <ItemSchema item={article.schema} />
    </section>
  )
}