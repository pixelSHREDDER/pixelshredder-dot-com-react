import Image from 'next/image'
import techIconsStyles from './techIcons.module.css'
import techIconsCardStyles from './techIconsCard.module.css'
import { ProjectClass } from '@/models/Project'
import adobeIllustratorIcon from './icons8-adobe-illustrator.svg'
import adobePhotoshopIcon from './icons8-adobe-photoshop.svg'
import cssIcon from './icons8-css-logo.svg'
import expressIcon from './icons8-express-js.svg'
import htmlIcon from './icons8-html-logo.svg'
import javaScriptIcon from './icons8-javascript.svg'
import jQueryIcon from './icons8-jquery.svg'
import materialUIIcon from './icons8-material-ui.svg'
import mongoDbIcon from './icons8-mongodb.svg'
import nextJsIcon from './icons8-nextjs.svg'
import phpIcon from './icons8-php-logo.svg'
import reactJsIcon from './icons8-react.svg'
import reduxIcon from './icons8-redux.svg'
import typeScriptIcon from './icons8-typescript.svg'
import unityIcon from './icons8-unity.svg'
import wordPressIcon from './icons8-wordpress.svg'
import clsx from 'clsx'

const TechIconMap: {[key: string]: string} = {
  'Auth0': `/images/icons8-auth0.png`,
  'Adobe Illustrator': adobeIllustratorIcon,
  'Adobe Photoshop': adobePhotoshopIcon,
  'CSS': cssIcon,
  'Express': expressIcon,
  'HTML': htmlIcon,
  'JavaScript': javaScriptIcon,
  'jQuery': jQueryIcon,
  'Kinect': `/images/icons8-kinect-24.png`,
  'Material UI': materialUIIcon,
  'MongoDB': mongoDbIcon,
  'Next.js': nextJsIcon,
  'PHP': phpIcon,
  'QuarkXPress': `/images/quarkxpress-icon.png`,
  'React.js': reactJsIcon,
  'Redux': reduxIcon,
  'TypeScript': typeScriptIcon,
  'Unity': unityIcon,
  'WordPress': wordPressIcon,
}

export default function TechIcons({ project, card }: { project: ProjectClass, card?: boolean }) {
  return (
    <h5 className={clsx({
      [techIconsStyles.techIcons]: !card,
      [techIconsCardStyles.techIconsCard]: !!card,
    })} aria-label="Tech">{
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