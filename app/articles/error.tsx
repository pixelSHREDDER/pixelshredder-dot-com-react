'use client'

import Masthead from '@/components/Masthead/Masthead'
import Nav from '@/components/Nav/Nav'

export default function Error() {
  return (
    <>
      <Masthead />
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