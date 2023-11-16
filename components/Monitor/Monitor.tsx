import Image from 'next/image';
import monitorStyles from './monitor.module.css';
import frameStyles from './frame.module.css';
import bezelStyles from './bezel.module.css';
import MonitorInner from "./MonitorInner";

export default function Monitor({ children }: { children: React.ReactNode }) {
  return (
    <div className={monitorStyles.monitor}>
      <Image
        src="/images/tv-frame.svg"
        fill
        aria-hidden
        alt="Monitor frame"
        className={frameStyles.frame}
        priority />
      <Image
        src="/images/tv-bezel.svg"
        fill
        aria-hidden
        alt="Monitor bezel"
        className={bezelStyles.bezel} />
      <MonitorInner>
        {children}
      </MonitorInner>
    </div>
  )
}