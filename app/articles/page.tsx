import Nav from '@/components/Nav/Nav'
import { Metadata } from 'next'
import ArticlesGrid from '@/components/Grid/ArticlesGrid'
import { ArticleClass } from '@/models/Article'
import Link from 'next/link'
import { defaultKeywords } from '@mikeintosh/layout'
import Masthead from '@/components/Masthead/Masthead'

const defaultMetadata = {
  description: '',
  title: 'Mike DeVine | Articles'
}

export const metadata: Metadata = {
  appleWebApp: {
		title: defaultMetadata.title,
	},
	description: defaultMetadata.description,
	keywords: ['articles', ...defaultKeywords],
	openGraph: {
		description: defaultMetadata.description,
		title: defaultMetadata.title,
		url: `${process.env.BASE_URL}/articles`,
	},
	title: defaultMetadata.title,
	twitter: {
		card: 'summary',
		creator: '@pixelSHREDDER',
		description: defaultMetadata.description,
		title: defaultMetadata.title,
	},
}

const getArticles = async () => {
  try {
    const articles = await fetch(`${process.env.BASE_URL}/articles/api`)
    .then((res) => res.json())
    return articles.articles
  } catch (error: any) {
    throw error
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