import ErrorDialog from '@/components/ErrorDialog'
import styles from '@mikeintosh/utils.module.css'

export default function NotFound() {
  return (
    <>
      <h1 className={styles.srOnly}>Project Not Found</h1>
      <ErrorDialog errorMsg="Project not found! Please restart your Mikeintosh and try again." />
    </>
  )
}