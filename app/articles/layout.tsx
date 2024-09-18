import { Gelasio, Lora } from 'next/font/google'
import { Metadata } from 'next'
import '@/app/globals.css'
import styles from '@articles/articles.module.css'
import Script from 'next/script'

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

export const defaultMetadata: {[key: string]: string} = {
  'applicationName': 'Mikeintosh',
  'author': 'Mike DeVine',
  'description': 'Website of Mike DeVine, aka pixelSHREDDER - Web/Game Developer, Web/Graphic/UI/UX Designer, Creative Professional, Writer, Attempted Funnyperson.',
  'image': '/android-chrome-512x512.png',
  'themeColor': '#787878',
  'title': 'Mike DeVine | Developer/Designer/Creative',
}

export const defaultKeywords: string[] = [
  'pixelshredder', 'pixel-shredder', 'pixel shredder', 'pixel', 'shredder', 'mike devine', 'mike', 'devine'
]

export const metadata: Metadata = {
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_CANONICAL_BASE_URL}/articles`),
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_CANONICAL_BASE_URL}/articles`,
  },
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