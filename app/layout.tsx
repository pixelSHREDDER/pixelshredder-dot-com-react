import localFont from "next/font/local";
import { Metadata } from 'next';
import Image from 'next/image';
import './globals.css';
import styles from './layout.module.css';
import MacGlow from "./MacGlow";
import MacWrapper from "./MacWrapper";
import Script from "next/script";

const sysfont = localFont({
  src: './sysfont.woff2',
  variable: '--font-sysfont',
});

export const defaultMetadata: {[key: string]: string} = {
  'applicationName': 'Mikeintosh',
  'author': 'Mike DeVine',
  'description': 'Website of Mike DeVine, aka pixelSHREDDER - Web/Game Developer, Web/Graphic/UI/UX/Game Designer, Creative Professional, Politico, Writer, Funnyperson.',
  'themeColor': '#787878',
  'title': 'Mike DeVine | Developer/Designer/Creative/Politico',
}

export const defaultKeywords: string[] = [
  'pixelshredder', 'pixel-shredder', 'pixel shredder', 'pixel', 'shredder', 'mike devine', 'mike', 'devine'
]

export const metadata: Metadata = {
  metadataBase: new URL('https://www.pixel-shredder.com'),
  appleWebApp: {
    statusBarStyle: 'default',
    title: defaultMetadata.applicationName,
  },
  applicationName: defaultMetadata.applicationName,
  archives: ['/old'],
  authors: [{name: defaultMetadata.author}],
  colorScheme: 'light',
  creator: defaultMetadata.author,
  description: defaultMetadata.description,
  generator: 'Next.js',
  keywords: defaultKeywords,
  manifest: '/site.webmanifest',
  openGraph: {
    description: defaultMetadata.description,
    locale: 'en_US',
    siteName: defaultMetadata.applicationName,
    title: defaultMetadata.title,
    type: 'website',
    url: `/`,
  },
  publisher: defaultMetadata.author,
  themeColor: defaultMetadata.themeColor,
  title: defaultMetadata.title,
  twitter: {
    card: 'summary',
    creator: '@pixelSHREDDER',
    description: defaultMetadata.description,
    title: defaultMetadata.title,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sysfont.variable}`}>
      <body>
        <div className={styles.next}>
          <div className={styles.root}>
            <div className={styles.container}>
              <Image
                src="/images/tv-frame.svg"
                fill
                aria-hidden
                alt="TV frame"
                className={styles.tvframe}
                priority />
              <Image
                src="/images/tv-bezel.svg"
                fill
                aria-hidden
                alt="TV bezel"
                className={styles.tvbezel} />
              <MacWrapper>
                {children}
              </MacWrapper>
            </div>
            <div className={styles.mac} aria-hidden>
              <MacGlow />
            </div>
          </div>
        </div>
        <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=G-${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`} />
        <Script
          id='google-analytics'
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', 'G-${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}');
            `,
          }}
        />
      </body>
    </html>
  )
}