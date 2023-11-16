import Image from "next/image"
import dialogStyles from './dialog.module.css'

export default function ErrorDialog({errorMsg}: {errorMsg?: string}) {
  return (
    <section className={dialogStyles.dialog}>
      <Image
        src="/images/icons8-bomb-90.png"
        alt="Error icon"
        width="90"
        height="90" />
      <p>
      {!!errorMsg ?
        ` Error: ${errorMsg}` :
        'Sorry, an unexpected error has occurred. Please click OK to reload and try again.'
      }
      </p>
      <button>OK</button>
    </section>
  )
}