import styles from '../../utils.module.css';
import Nav from "@/components/Nav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <article className={styles.darkmode}>
      <Nav parent={{
				label: 'Projects',
				path: '/projects',
			}}  />
      {children}
      <Nav parent={{
				label: 'Projects',
				path: '/projects',
			}}  />
    </article>
  )
}