'use client'

import Nav from '@/components/Nav/Nav'

export default function Error() {
  return (
    <>
      <header>
        <span>Mike DeVine</span>
        <Nav articles />
      </header>
      <main>
        <h1>Whoops.</h1>
        <p>Sorry, an unexpected error has occurred. Please reload and try again.</p>
      </main>
      <footer>
        <span>Mike DeVine</span>
        <Nav articles />
      </footer>
    </>
  )
}