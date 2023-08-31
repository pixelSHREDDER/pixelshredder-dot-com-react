import Image from 'next/image'
import styles from '@/app/utils.module.css'
import { ProjectClass } from '@/models/Project'

const TechIconMap: {[key: string]: string} = {
  'CSS': '/images/icons8-css-logo.svg',
  'HTML': '/images/icons8-html-logo.svg',
  'JavaScript': '/images/icons8-javascript.svg',
  'MongoDB': '/images/icons8-mongodb.svg',
  'Next.js': '/images/icons8-nextjs.svg',
  'React.js': '/images/icons8-react.svg',
  'TypeScript': '/images/icons8-typescript.svg',
  'Unity': '/images/icons8-unity.svg',
}

export default function TechIcons({ project }: { project: ProjectClass }) {
  return (
    <h5 className={styles.techIcons} aria-label="Tech">{
      project.tech?.map((tech: string, i: number) => {
        return (!!TechIconMap[tech]) ?
          <span key={`${project.slug}_tech_${i}`}>
            <Image
              height={16}
              width={16}
              alt={tech}
              title={tech}
              src={TechIconMap[tech]} />
          </span>
          : null
        })
      }</h5>
  )
}