import Nav from '@/components/Nav'
import { Metadata } from 'next'
//import ProjectsGrid from '@/components/ProjectsGrid'
import { ArticleClass } from '@/models/Article'
import Link from 'next/link'
import { defaultKeywords } from '@mikeintosh/layout'

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
    <article>
      {/*<Nav />
      <h1>Articles</h1>
      <p>All of my various personal endeavors, side projects, and tinkering I've worked on over the years. You can find my professional work experience <Link href="/resumes">here</Link>.</p>
      <ProjectsGrid projects={projects} />
  <Nav />*/}
    </article>
  )
}