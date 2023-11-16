'use client'
import ErrorDialog from "@/components/ErrorDialog"
import Nav from "@/components/Nav/Nav"

export default function Error() {
  return (
    <article>
      <Nav />
      <h1>Projects</h1>
        <ErrorDialog />
      <Nav />
    </article>
  )
}