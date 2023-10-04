import Link from 'next/link'
import styles from '@mikeintosh/utils.module.css'
import homeStyles from './home.module.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mike DeVine | Developer/Designer/Creative',
  description: 'Website of Mike DeVine, aka pixelSHREDDER - Web/Game Developer, Web/Graphic/UI/UX Designer, Creative Professional, Writer, Attempted Funnyperson.',
}

export default function Index() {
  return (
    <article className={homeStyles.postStartup}>
      <h1 className={styles.title}>Welcome!</h1>
      <p className={styles.description}>Please select an option below</p>
      <section className={styles.grid}>
        <Link href="/resumes" className={styles.card}>
          <h2>Résumé</h2>
        </Link>
        <Link href="/projects" className={styles.card}>
          <h2>Projects</h2>
        </Link>
        <Link href="/about-me" className={styles.card}>
          <h2>About Me</h2>
        </Link>
        <Link href="/projects/mikeintosh" className={styles.card}>
          <h2>About This Site</h2>
        </Link>
      </section>
    </article>
  )
}