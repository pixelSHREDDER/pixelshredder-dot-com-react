import Nav from '@/components/Nav/Nav'
import { Metadata } from 'next'
import ArticlesGrid from '@/components/Grid/ArticlesGrid'
import { ArticleClass } from '@/models/Article'
import { defaultKeywords } from '@mikeintosh/layout'
import Masthead from '@/components/Masthead/Masthead'
import { getArticlesBySearch } from '@/lib/articles'
import { notFound } from 'next/navigation'

const defaultMetadata = {
  description: 'Features, interviews, investigative reporting, reviews, and more.',
  title: 'Mike DeVine | Articles',
  url: `${process.env.NEXT_PUBLIC_CANONICAL_BASE_URL}/articles`
}

export const metadata: Metadata = {
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

export default async function Articles() {
  const articles: ArticleClass[] = await getArticlesBySearch()

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