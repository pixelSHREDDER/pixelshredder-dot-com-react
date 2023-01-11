import Link from 'next/link';
import utilStyles from '/styles/utils.module.css';
import Layout from '../components/layout';

export default function Home() {
  return (
    <Layout>
        <h1 className={utilStyles.title}>Welcome!</h1>

        <p className={utilStyles.description}>
          Please select an option below
        </p>

        <div className={utilStyles.grid}>
        <Link href="/resumes" className={utilStyles.card}>
            <h2>Portfolio</h2>
          </Link>
          <Link href="/resumes" className={utilStyles.card}>
            <h2>Resume</h2>
          </Link>
          <Link href="/resumes" className={utilStyles.card}>
            <h2>About Me</h2>
          </Link>
          <Link href="/resumes" className={utilStyles.card}>
            <h2>Blog (deprecated)</h2>
          </Link>
        </div>
        </Layout>
  )
}