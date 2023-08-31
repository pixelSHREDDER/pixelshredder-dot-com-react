import Image from 'next/image'
import styles from '@/app/utils.module.css'
import { ProjectClass } from '@/models/Project'
import cssIcon from './icons8-css-logo.svg'
import htmlIcon from './icons8-html-logo.svg'
import javaScriptIcon from './icons8-javascript.svg'
import mongoDbIcon from './icons8-mongodb.svg'
import nextJsIcon from './icons8-nextjs.svg'
import reactJsIcon from './icons8-react.svg'
import typeScriptIcon from './icons8-typescript.svg'
import unityIcon from './icons8-unity.svg'

const TechIconMap: {[key: string]: string} = {
  'CSS': cssIcon,
  'HTML': htmlIcon,
  'JavaScript': javaScriptIcon,
  'MongoDB': mongoDbIcon,
  'Next.js': nextJsIcon,
  'React.js': reactJsIcon,
  'TypeScript': typeScriptIcon,
  'Unity': unityIcon,
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