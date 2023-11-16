import Link from 'next/link'
import articleCardStyles from './articleCard.module.css'
import buttonGroupCardStyles from '@/components/ButtonGroup/buttonGroupCard.module.css'
import tagsCardStyles from '@/components/Tags/articlesTagsCard.module.css'
import TechIcons from '@/components/TechIcons/TechIcons'
import { ArticleClass } from '@/models/Article'
import Image from 'next/image'

export default function ArticleCard({article}: {article: ArticleClass}) {
  return (
    <li key={`articles_${article._id}`} className={`${articleCardStyles.articleCard} clickableCard`}>
      <Link href={`/articles/${article.slug}`}>
        {/*<TechIcons project={project} card />*/}
        <h5 className={tagsCardStyles.articlesTagsCard} aria-label="Tags">
          {article.tags.map((tag: string, i: number) => <span key={`${article.slug}_tag_${i}`}>{tag}</span>)}
        </h5>
        <Image
          height={200}
          width={300}
          priority
          alt={article.description}
          src={article.schema.thumbnailUrl as string} />
        <h3>{article.title}</h3>
        {!!article.schema.alternativeHeadline ?
          <p>{article.schema.alternativeHeadline}</p>
        :
          <p>{article.description}</p>
        }
      </Link>
      <div className={buttonGroupCardStyles.buttonGroupCard}>
        <Link href={`/articles/${article.slug}`}>Read more</Link>&nbsp;&bull;&nbsp;
        <Link href={`/projects/${article.slug}`}>About</Link>&nbsp;&bull;&nbsp;
        <Link href={article.link} target="_blank">View original</Link>
      </div>
    </li>
  )
}