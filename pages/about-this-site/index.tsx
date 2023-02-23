import Link from 'next/link';
import styles from 'styles/utils.module.css';
import GlobalHead from '../../components/head';
import Layout from '../../components/layout';

export default function AboutThisSite() {
    return (
    <Layout>
		<GlobalHead meta={{
			title: 'Mike DeVine | About This Site',
			description: 'Let\'s take a quick peek under the hood.'
		}} />
        <article className={styles.darkmode}>
            <section>
				<h1>About This Site</h1>
				<p>This site was built on a React.js / Next.js stack, using the magic of server-side rendering!</p>
				<p>The CRT effect is done in pure CSS, based on the awesome work seen <a href="http://aleclownes.com/2017/02/01/crt-display.html" target="_blank">here</a> and <a href="https://codepen.io/lbebber/pen/XJRdrV" target="_blank">here</a>.</p>
			</section>
            <section>
				<Link href="/">
                    <p>← Back to home</p>
            	</Link>
            </section>
        </article>
        </Layout>
    );
  }
  