'use client'

import Loader from '@/components/Loader/Loader'
import Nav from '@/components/Nav/Nav'

export default function Loading() {
  return (
    <article>
      <Nav />
      <h1>Projects</h1>
      <section>
        <Loader />
      </section>
      <Nav />
    </article>
  )
}