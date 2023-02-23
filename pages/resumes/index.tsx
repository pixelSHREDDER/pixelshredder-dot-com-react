import Link from 'next/link';
import utilStyles from 'styles/utils.module.css';
import GlobalHead from '../../components/head';
import Layout from '../../components/layout';

export default function Resumes() {
    return (
        <Layout>
            <GlobalHead meta={{
                title: 'Mike DeVine | Résumés',
                description: 'Over 30 years of experience, at least a third of which was professional!'
            }} />
            <article>
                <section>
                    <h1>Choose Your Destiny</h1>
                </section>
                <section className={utilStyles.grid}>
                    <Link href="/resumes/web-development" className={utilStyles.card}>
                        <h2>Web Development</h2>
                        <p>Over 10 years of professional experience</p>
                    </Link>
                    <Link href="/resumes/game-development" className={utilStyles.card}>
                        <h2>Game Development</h2>
                        <p>Go play Halo Infinite!</p>
                    </Link>
                </section>
                <Link href="/">
                    <p>← Back to home</p>
                </Link>
            </article>
        </Layout>
    );
}
              