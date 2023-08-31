import Nav from '@/components/Nav'
import { ProjectClass } from '@/models/Project'
import { Metadata } from 'next'
import Link from 'next/link'
import styles from '@/app/utils.module.css'
import clsx from 'clsx'
import TechIcons from '@/components/TechIcons/TechIcons'

export const metadata: Metadata = {
  title: 'Mike DeVine | Projects',
  description: 'Everything I\'ve worked on over the years.',
}

const getProjects = async () => {
  try {
    const projects = await fetch(`${process.env.BASE_URL}/projects/api`)
    .then((res) => res.json())
    return projects.projects
  } catch (error: any) {
    throw error
  }
}

export default async function Projects() {
  const projects = await getProjects()

  return (
    <article>
      <Nav />
      <h1>Projects</h1>
      <section>
        <ul className={clsx(styles.grid, styles.projectsGrid)}>
        {projects.map((project: ProjectClass) => (
          <li key={`projects_${project._id}`} className={styles.card}>
            <Link href={`${process.env.BASE_URL}/projects/${project.slug}`}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <TechIcons project={project} />
              <h5 className={styles.tags} aria-label="Tags">{
                project.tags.map((tag: string, i: number) => <span key={`${project.slug}_tag_${i}`}>{tag}</span>)
              }</h5>
            </Link>
          </li>
        ))}
        </ul>
      </section>
      <Nav />
    </article>
  )
}