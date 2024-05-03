import Link from 'next/link'
import cardGridStyles from '@/components/Grid/cardGrid.module.css'
import mikeintoshCardStyles from '@/components/Card/mikeintoshCard.module.css'
import postStartupStyles from '@/components/Monitor/postStartup.module.css'
import { Metadata } from 'next'
import { Person, WithContext } from 'schema-dts'

const jsonLd: WithContext<Person> = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  additionalName: 'Owen',
  alternateName: 'Michael DeVine',
  email: 'mike.o.devine@gmail.com',
  image: 'https://www.pixel-shredder.com/_next/image?url=%2Fimages%2Fmike-devine-headshot.jpg&w=256&q=75',
  jobTitle: 'Web Developer',
  name: 'Mike DeVine',
  alumniOf: [
    {
     '@type': 'CollegeOrUniversity',
     name: 'Rochester Institute of Technology',
     sameAs: 'https://en.wikipedia.org/wiki/Rochester_Institute_of_Technology'
    },
    {
     '@type': 'CollegeOrUniversity',
     name: 'Suffolk County Community College',
     sameAs: 'https://en.wikipedia.org/wiki/Suffolk_County_Community_College'
    }
  ],
  birthPlace: 'South Setauket, NY',
  gender: 'male',
  description: 'Developer, designer, creative professional, writer, and attempted funnyperson.',
  disambiguatingDescription: 'Web Developer',
  url: 'https://www.pixel-shredder.com',
  sameAs : [ 'https://github.com/pixelshredder',
  'https://www.linkedin.com/in/pixelshredder',
  'https://twitter.com/pixelSHREDDER',
  'https://www.facebook.com/Mike.O.DeVine/',
  'https://www.instagram.com/pixelshredder']
}

export const metadata: Metadata = {
  title: 'Mike DeVine | Developer/Designer/Creative',
  description: 'Website of Mike DeVine, aka pixelSHREDDER - Web/Game Developer, Web/Graphic/UI/UX Designer, Creative Professional, Writer, Attempted Funnyperson.',
}

export default function Index() {
  return (
    <article className={postStartupStyles.postStartup}>
      <h1>Welcome!</h1>
      <p>Please select an option below</p>
      <section className={cardGridStyles.cardGrid}>
        <Link href="/resumes" className={`${mikeintoshCardStyles.mikeintoshCard} clickableCard`}>
          <h2>Résumé</h2>
        </Link>
        <Link href="/projects" className={`${mikeintoshCardStyles.mikeintoshCard} clickableCard`}>
          <h2>Projects</h2>
        </Link>
        <Link href="/articles" className={`${mikeintoshCardStyles.mikeintoshCard} clickableCard`}>
          <h2>Writing</h2>
        </Link>
        <Link href="/about-me" className={`${mikeintoshCardStyles.mikeintoshCard} clickableCard`}>
          <h2>About Me</h2>
        </Link>
        <Link href="/projects/mikeintosh" className={`${mikeintoshCardStyles.mikeintoshCard} clickableCard`}>
          <h2>About This Site</h2>
        </Link>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </article>
  )
}