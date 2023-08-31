import Link from 'next/link';
import styles from '@/app/utils.module.css'
import resumesStyles from '../resumes.module.css'
import Nav from '@/components/Nav';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mike DeVine | Résumés',
  description: 'Over 30 years of experience, at least a third of which was professional!',
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