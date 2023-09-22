import styles from '/styles/utils.module.css';
import Layout, { LayoutProps } from '../components/layout';
import GlobalHead from '../components/head';

export default function Offline(props: LayoutProps) {
  return (
    <Layout {...props}>
      <GlobalHead meta={{
        title: 'Mike DeVine | Developer/Designer/Creative',
        description: 'Website of Mike DeVine, aka pixelSHREDDER - Web/Game Developer, Web/Graphic/UI/UX/Game Designer, Creative Professional, Writer, Attempted Funnyperson.'
      }} />
      <article className={styles.homecontent}>
        <h1 className={styles.title}>Offline!</h1>
        <p className={styles.description}>Please reload and try again.</p>
      </article>
    </Layout>
  )
}