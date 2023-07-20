import Link from "next/link";

export interface INavProps {
  parent?: {
    label: string,
    path: string,
  }
}

export default function Nav(props: INavProps) {
  return (
    <nav>
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