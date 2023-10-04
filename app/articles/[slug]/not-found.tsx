import ErrorDialog from '@/components/ErrorDialog'
import styles from '@/app/utils.module.css'

export default function NotFound() {
  return (
    <>
      <h1 className={styles.srOnly}>Article Not Found</h1>
      <ErrorDialog errorMsg="Article not found! Please check the URL and try again." />
    </>
  )
}