import Link from 'next/link';
import styles from '/styles/utils.module.css';
import Layout, { LayoutProps } from '../components/layout';
import GlobalHead from '../components/head';

export default function Home(props: LayoutProps) {
  return (
    <Layout {...props}>
      <GlobalHead meta={{
        title: 'Mike DeVine | Developer/Designer/Creative/Politico',
        description: 'Website of Mike DeVine, aka pixelSHREDDER - Web/Game Developer, Web/Graphic/UI/UX/Game Designer, Creative Professional, Politico, Writer, Funnyperson.'
      }} />
      <article className={styles.homecontent}>
        <h1 className={styles.title}>Welcome!</h1>
        <p className={styles.description}>Please select an option below</p>
        <section className={styles.grid}>
          <Link href="/resumes" className={styles.card}>
            <h2>Résumé</h2>
          </Link>
          <a
            href="https://pixel-shredder.com/port/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}>
            <h2>Portfolio</h2>
          </a>
          <Link href="/about-me" className={styles.card}>
            <h2>About Me</h2>
          </Link>
          <Link href="/about-this-site" className={styles.card}>
            <h2>About This Site</h2>
          </Link>
        </section>
      </article>
    </Layout>
  )
}