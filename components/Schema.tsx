import { BlogPosting, WithContext } from 'schema-dts'

export function ProjectSchema({project}: {project: BlogPosting}) {
  const jsonLd: WithContext<BlogPosting> = {
    '@context': 'https://schema.org',
    ...project,
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}