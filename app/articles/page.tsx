import Nav from '@/components/Nav/Nav'
import { Metadata } from 'next'
import ArticlesGrid from '@/components/Grid/ArticlesGrid'
import { ArticleClass } from '@/models/Article'
import { defaultKeywords } from '@/lib/utils'
import Masthead from '@/components/Masthead/Masthead'
import { ArticlesResult, getArticlesBySearchParams } from '@/lib/articles'
import { revalidatePath } from 'next/cache'

const defaultMetadata = {
  description: 'Features, interviews, investigative reporting, reviews, and more.',
  title: 'Mike DeVine | Articles',
  url: '/articles',
}

export const revalidate = 0

export const metadata: Metadata = {
  alternates: {
    canonical: `${defaultMetadata.url}/`,
  },
  appleWebApp: {
		title: defaultMetadata.title,
	},
	description: defaultMetadata.description,
	keywords: ['articles', 'journalism', 'features', 'interviews', 'investigative reporting', 'reviews', ...defaultKeywords],
	openGraph: {
		description: defaultMetadata.description,
		title: defaultMetadata.title,
		url: defaultMetadata.url,
	},
	title: defaultMetadata.title,
	twitter: {
		card: 'summary',
		creator: '@pixelSHREDDER',
		description: defaultMetadata.description,
		title: defaultMetadata.title,
	},
}

async function getArticles(): Promise<ArticleClass[]> {
  try {
    const { articles }: ArticlesResult = await getArticlesBySearchParams()
    revalidatePath('/articles')
    return articles
  } catch (error: any) {
    return []
  }
}


export default async function Articles() {
  const articles: ArticleClass[] = await getArticles()

  return (
    <>
      <Masthead />
      <main>
        <article>
          <ArticlesGrid articles={articles} />
        </article>
      </main>
      <footer>
        <span>Mike DeVine</span>
        <Nav articles />
      </footer>
    </>
  )
}