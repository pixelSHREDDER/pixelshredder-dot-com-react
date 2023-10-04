'use client'

import ErrorDialog from "@/components/ErrorDialog"
import Nav from "@/components/Nav"

export default function Error() {
  return (
    <article>
      <Nav />
      <h1>Articles</h1>
        <ErrorDialog />
      <Nav />
    </article>
  )
}