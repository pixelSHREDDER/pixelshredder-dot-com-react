import Link from 'next/link';
import styles from '@mikeintosh/utils.module.css'
import resumesStyles from '../resumes.module.css'
import Nav from '@/components/Nav';
import { Metadata } from 'next';
import { defaultKeywords } from '../layout';

export const metadata: Metadata = {
  appleWebApp: {
		title: 'Mike DeVine | Résumés',
	},
	description: 'Over 30 years of experience, at least a third of which was professional!',
	keywords: ['resumes', 'resume', ...defaultKeywords],
	openGraph: {
		description: 'Over 30 years of experience, at least a third of which was professional!',
		title: 'Mike DeVine | Résumés',
		url: `${process.env.BASE_URL}/resumes`,
	},
	title: 'Mike DeVine | Résumés',
	twitter: {
		card: 'summary',
		creator: '@pixelSHREDDER',
		description: 'Over 30 years of experience, at least a third of which was professional!',
		title: 'Mike DeVine | Résumés',
	},
}

export default function Resumes() {
  return (
    <article>
      <Nav />
      <h1>Choose Your Destiny</h1>
      <section className={styles.grid}>
        <Link href="/resumes/web-development" className={styles.card}>
          <h2>Web Development</h2>
          <p>Over 10 years of professional experience</p>
        </Link>
        <Link href="/resumes/game-development" className={styles.card}>
          <h2>Game Development</h2>
          <p>Go play Halo Infinite!</p>
        </Link>
      </section>
      <Nav />
    </article>
  );
}