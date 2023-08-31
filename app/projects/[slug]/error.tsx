'use client'
import styles from '@/app/utils.module.css'
import ErrorDialog from '@/components/ErrorDialog'

export default function Error() {
  return (
    <>
      <h1 className={styles.srOnly}>Error</h1>
      <ErrorDialog />
    </>
  )
}