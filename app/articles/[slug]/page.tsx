import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import infoBarStyles from '@/components/InfoBar/articlesInfoBarArticle.module.css'
import tagsStyles from '@/components/Tags/articlesTags.module.css'
import { ItemSchema } from '@/components/Schema'
import { formatDate } from '@/lib/utils'
import { ArticleClass } from '@/models/Article'

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
    <>
      <h1>{article.title}</h1>
      {!!article.schema.alternativeHeadline &&
        <h2>{article.schema.alternativeHeadline}</h2>
      }
      <div className={infoBarStyles.articlesInfoBarArticle}>
        <h5>
          {!!article.schema.datePublished &&
            <time dateTime={article.schema.datePublished}>
              {formatDate(article.schema.datePublished)}
            </time>
          }
          {!!article.schema.articleSection && `&nbsp;&bull;&nbsp;${article.schema.articleSection}`}
          {!!article.schema.publisher && `&nbsp;&bull;&nbsp;Originally published by ${article.schema.publisher}`}
          &nbsp;&bull;&nbsp;<Link href={article.link} target='_blank'>View original</Link>
        </h5>
        <div className={tagsStyles.articlesTags} aria-label="Tags">
          {article.tags.map((tag: string, i: number) => <span key={`${article.slug}_tag_${i}`}>{tag}</span>)}
        </div>
      </div>
      {!!article.schema.backstory &&
        <blockquote>
          {article.schema.backstory} To learn more about the making of this article, <Link href={`${process.env.BASE_URL}/projects/${article.slug}`}>click here</Link>.
        </blockquote>
      }
      <div dangerouslySetInnerHTML={{__html: article.body}} aria-hidden></div>
      <ItemSchema item={article.schema} />
    </>
  )
}