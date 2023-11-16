import ErrorDialog from '@/components/ErrorDialog'
import srOnlyStyles from '@/components/srOnly.module.css'

export default function NotFound() {
  return (
    <>
      <h1 className={srOnlyStyles.srOnly}>Project Not Found</h1>
      <ErrorDialog errorMsg="Project not found! Please restart your Mikeintosh and try again." />
    </>
  )
}