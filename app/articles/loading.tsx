'use client'

import Loader from '@/components/Loader/Loader'
import Masthead from '@/components/Masthead/Masthead'
import Nav from '@/components/Nav/Nav'

export default function Loading() {
  return (
    <>
      <Masthead />
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