import Mac from '@/components/Mac/Mac'
import Monitor from '@/components/Monitor/Monitor'
import environmentStyles from './environment.module.css'

export default function Environment({ children }: { children: React.ReactNode }) {
  return (
    <div className={environmentStyles.environment}>
      <Monitor>
        {children}
      </Monitor>
      <Mac />
    </div>
  )
}