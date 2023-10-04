import { BlogPosting, WithContext } from 'schema-dts'

export function ItemSchema({item}: {item: BlogPosting}) {
  const jsonLd: WithContext<BlogPosting> = {
    '@context': 'https://schema.org',
    ...item,
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}