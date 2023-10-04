'use client'

import styles from '@mikeintosh/utils.module.css'
import Nav from '@/components/Nav'

export default function Loading() {
  return (
    <article>
      <Nav />
      <h1>Projects</h1>
      <section>
        <div className={styles.loader}>&bull;</div>
      </section>
      <Nav />
    </article>
  )
}