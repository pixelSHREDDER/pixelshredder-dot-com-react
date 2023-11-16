import Link from 'next/link'
import projectCardStyles from './projectCard.module.css'
import tagsCardStyles from '@/components/Tags/mikeintoshTagsCard.module.css'
import TechIcons from '@/components/TechIcons/TechIcons'
import { ProjectClass } from '@/models/Project'

export default function ProjectCard({project}: {project: ProjectClass}) {
  return (
    <li key={`projects_${project._id}`} className={`${projectCardStyles.projectCard} clickableCard`}>
      <Link href={`/projects/${project.slug}`}>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <TechIcons project={project} card />
        <h5 className={tagsCardStyles.mikeintoshTagsCard} aria-label="Tags">{
          project.tags.map((tag: string, i: number) => <span key={`${project.slug}_tag_${i}`}>{tag}</span>)
        }</h5>
      </Link>
    </li>
  )
}