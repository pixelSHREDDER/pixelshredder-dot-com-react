import Link from 'next/link'
import clsx from 'clsx'
import articlesNavStyles from './articlesNav.module.css'
import mikeintoshNavStyles from './mikeintoshNav.module.css'

export interface INavProps {
  articles?: boolean,
  parent?: {
    label: string,
    path: string,
  },
}

export default function Nav(props: INavProps) {
  return (
    <nav className={clsx(!!props.articles ? [articlesNavStyles.nav] : [mikeintoshNavStyles.nav])}>
      <ul>
        {!!props.parent &&
          <li>
            <Link href={props.parent.path}>&larr; {props.parent.label}</Link>
          </li>
        }
        <li>
          <Link href="/">&uarr; Home</Link>
        </li>
      </ul>
    </nav>
  );
}