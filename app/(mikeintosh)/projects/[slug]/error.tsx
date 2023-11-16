'use client'

import srOnlyStyles from '@/components/srOnly.module.css'
import ErrorDialog from '@/components/ErrorDialog'

export default function Error() {
  return (
    <>
      <h1 className={srOnlyStyles.srOnly}>Error</h1>
      <ErrorDialog />
    </>
  )
}