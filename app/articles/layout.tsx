import { Gelasio, Lora } from 'next/font/google'
import { Metadata } from 'next'
import '@/app/globals.css'
import styles from '@articles/articles.module.css'
import Script from 'next/script'
import { defaultKeywords } from '@/lib/utils'

const gelasio = Gelasio({
  weight: ['500'],
  style: ['normal'],
  variable: '--font-gelasio',
  subsets: ['latin'],
  display: 'swap'
})

const lora = Lora({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-lora',
  subsets: ['latin'],
  display: 'swap'
})

const defaultMetadata = {
  applicationName: 'Mikeintosh',
  author: 'Mike DeVine',
  description: 'Website of Mike DeVine, aka pixelSHREDDER - Web/Game Developer, Web/Graphic/UI/UX Designer, Creative Professional, Writer, Attempted Funnyperson.',
  image: '/android-chrome-512x512.png',
  themeColor: '#787878',
  title: 'Mike DeVine | Developer/Designer/Creative',
  url: '/articles',
}

export const metadata: Metadata = {
	alternates: {
    canonical: `${defaultMetadata.url}/`,
  },
  appleWebApp: {
    statusBarStyle: 'default',
    title: defaultMetadata.applicationName,
  },
  applicationName: defaultMetadata.applicationName,
  archives: ['/old'],
  authors: [{name: defaultMetadata.author}],
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
    url: '/',
  },
  publisher: defaultMetadata.author,
  title: defaultMetadata.title,
  twitter: {
    card: 'summary',
    creator: '@pixelSHREDDER',
    description: defaultMetadata.description,
    title: defaultMetadata.title,
  },
}

export const viewport = {
  colorScheme: 'light',
  themeColor: defaultMetadata.themeColor,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${styles.articles} ${gelasio.variable} ${lora.variable}`}>
      <body>
        {children}
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