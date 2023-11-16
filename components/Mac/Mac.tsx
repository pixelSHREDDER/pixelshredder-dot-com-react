import macStyles from './mac.module.css'
import glowStyles from './glow.module.css'

export default function Mac() {
  return (
    <div className={macStyles.mac} aria-hidden>
      <div className={glowStyles.glow} aria-hidden></div>
    </div>
  )
}