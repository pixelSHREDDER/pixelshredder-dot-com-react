'use client'

import Nav from '@/components/Nav/Nav';
import srOnlyStyles from '@/components/srOnly.module.css'
import ErrorDialog from "@/components/ErrorDialog"

export default function NotFound() {
  return (
    <article className='darkMode'>
      <Nav />
      <h1 className={srOnlyStyles.srOnly}>Page Not Found</h1>
      <ErrorDialog errorMsg="Page not found! Please restart your Mikeintosh and try again." />
      <Nav />
    </article>
  )
}