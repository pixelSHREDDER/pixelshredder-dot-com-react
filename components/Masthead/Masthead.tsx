import Link from 'next/link'
import articlesNavStyles from '@/components/Nav/articlesNav.module.css'
import mastheadStyles from './masthead.module.css'
import { Weekdays, formatDate } from '@/lib/utils'

export default function Masthead() {
  const currentDate = new Date();
  return (
    <header className={mastheadStyles.masthead}>
      <h1>Mike DeVine</h1>
      <h2>Journalism & Creative Writing</h2>
      <nav className={articlesNavStyles.nav}>
        <h4>{Weekdays[currentDate.getDay()]} {formatDate(currentDate.toISOString())}</h4>
        <p>You can find my professional work experience <Link href="/resumes">here</Link>.</p>
        <ul>
          <li>
            <Link href="/">&uarr; Home</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}