import Link from 'next/link'
import cardGridStyles from '@/components/Grid/cardGrid.module.css'
import mikeintoshCardStyles from '@/components/Card/mikeintoshCard.module.css'
import Nav from '@/components/Nav/Nav'
import { Metadata } from 'next'
import { defaultKeywords } from '@/lib/utils'

const defaultMetadata = {
  description: 'Over 30 years of experience, at least a third of which was professional!',
  title: 'Mike DeVine | Résumés',
  url: `${process.env.NEXT_PUBLIC_CANONICAL_BASE_URL}/resumes`
}

export const metadata: Metadata = {
  alternates: {
    canonical: defaultMetadata.url,
  },
  appleWebApp: {
		title: defaultMetadata.title,
	},
	description: defaultMetadata.description,
	keywords: ['resumes', 'resume', ...defaultKeywords],
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

export default function Resumes() {
  return (
    <article>
      <Nav />
      <h1>Choose Your Destiny</h1>
      <section className={cardGridStyles.cardGrid}>
        <Link href="/resumes/web-development" className={mikeintoshCardStyles.mikeintoshCard}>
          <h2>Web Development</h2>
          <p>Experienced in both public-facing and internal web software</p>
        </Link>
        <Link href="/resumes/game-development" className={mikeintoshCardStyles.mikeintoshCard}>
          <h2>Game Development</h2>
          <p>Go play Halo Infinite!</p>
        </Link>
        <Link href="/resumes/civic-engagement-and-grassroots-politics" className={mikeintoshCardStyles.mikeintoshCard}>
          <h2>Civic Engagement</h2>
          <p>Non-profit technology management, operations, and web development</p>
        </Link>
      </section>
      <Nav />
    </article>
  );
}