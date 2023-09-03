import { ProjectResponse } from '@/models/Project'
import Link from 'next/link'
import styles from '@/app/utils.module.css'
import TechIcons from '@/components/TechIcons/TechIcons'

export default function ProjectCard({project}: {project: ProjectResponse}) {
  return (
    <li key={`projects_${project._id}`} className={styles.card}>
      <Link href={`/projects/${project.slug}`}>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <TechIcons project={project} />
        <h5 className={styles.tags} aria-label="Tags">{
          project.tags.map((tag: string, i: number) => <span key={`${project.slug}_tag_${i}`}>{tag}</span>)
        }</h5>
      </Link>
    </li>
  )
}