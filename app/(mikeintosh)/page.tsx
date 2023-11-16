import Link from 'next/link'
import cardGridStyles from '@/components/Grid/cardGrid.module.css'
import mikeintoshCardStyles from '@/components/Card/mikeintoshCard.module.css'
import postStartupStyles from '@/components/Monitor/postStartup.module.css'
import { Metadata } from 'next'

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
    </article>
  )
}