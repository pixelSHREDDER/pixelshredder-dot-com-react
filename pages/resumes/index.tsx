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
				<Link href="/resumes/web-development" className={utilStyles.card}>
                    <h2>Web Development</h2>
                    <p>Over 10 years of professional experience</p>
                </Link>
                <Link href="/resumes/game-development" className={utilStyles.card}>
                    <h2>Game Development</h2>
                    <p>Go play Halo Infinite!</p>
                </Link>
                <Link href="/resumes/web-and-graphic-design" className={utilStyles.card}>
                    <h2>Web & Graphic Design</h2>
                    <p>iT'S mY PaSsIoN</p>
                </Link>
                <Link href="/resumes/civic-engagement-and-grassroots-politics" className={utilStyles.card}>
                    <h2>Civic Engagement & Grassroots Politics</h2>
                    <p>-</p>
                </Link>
                <Link href="/resumes/business" className={utilStyles.card}>
                    <h2>Business</h2>
                    <p>Two credited startups (so far)</p>
                </Link>
            </section>
            <Link href="/">
                    <p>← Back to home</p>
                </Link>
                    </article>
                    </Layout>
                );
              }
              