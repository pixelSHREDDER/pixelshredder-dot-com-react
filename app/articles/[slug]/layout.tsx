import Nav from '@/components/Nav/Nav'
import articleStyles from './article.module.css'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header>
        <span>Mike DeVine</span>
        <Nav
          parent={{
            label: 'Articles',
            path: '/articles',
          }}
        articles />
      </header>
      <main>
        <article className={articleStyles.article}>
          {children}
        </article>
      </main>
      <footer>
        <span>Mike DeVine</span>
        <Nav
          parent={{
            label: 'Articles',
            path: '/articles',
          }}
        articles />
      </footer>
    </>
  )
}