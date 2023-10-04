'use client'

import Nav from '@/components/Nav';
import styles from '@mikeintosh/utils.module.css'
import ErrorDialog from "@/components/ErrorDialog"

export default function NotFound() {
  return (
    <article className={styles.darkmode}>
      <Nav />
      <h1 className={styles.srOnly}>Page Not Found</h1>
      <ErrorDialog errorMsg="Page not found! Please restart your Mikeintosh and try again." />
      <Nav />
    </article>
  )
}