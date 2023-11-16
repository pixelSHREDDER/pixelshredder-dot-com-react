'use client'

import Loader from '@/components/Loader/Loader'
import Nav from '@/components/Nav/Nav'

export default function Loading() {
  return (
    <>
      <header>
        <span>Mike DeVine</span>
        <Nav articles />
      </header>
      <main>
        <article>
          <h1>Articles</h1>
          <section>
          <Loader />
          </section>
        </article>
      </main>
      <footer>
        <span>Mike DeVine</span>
        <Nav articles />
      </footer>
    </>
  )
}