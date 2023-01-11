import Link from 'next/link';
import utilStyles from 'styles/utils.module.css';
import Layout from '../../components/layout';

export default function Resumes() {
    return (
    <Layout>
        <article>
<section>
                <h1>Choose Your Destiny</h1>
            </section>
            <section className={utilStyles.grid}>
				<Link href="/resumes/web-developer" className={utilStyles.card}>
                    <h2>Web Development</h2>
                    <p>Over 10 years of professional experience.</p>
                </Link>
                <Link href="/resumes/game-developer" className={utilStyles.card}>
                    <h2>Game Development</h2>
                    <p>Over 10 years of professional experience.</p>
                </Link>
                <Link href="/resumes/web-designer" className={utilStyles.card}>
                    <h2>Web Designer</h2>
                    <p>Over 10 years of professional experience.</p>
                </Link>
                <Link href="/resumes/business" className={utilStyles.card}>
                    <h2>Business</h2>
                    <p>Over 10 years of professional experience.</p>
                </Link>
            </section>
            <Link href="/">
                    <p>Back to home</p>
                </Link>
                    </article>
                    </Layout>
                );
              }
              