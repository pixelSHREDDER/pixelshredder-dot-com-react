import { Metadata } from 'next'
import localFont from 'next/font/local'
import Script from 'next/script'
import '@/app/globals.css'
import { defaultKeywords } from '@/lib/utils'
import mikeintoshStyles from '@mikeintosh/mikeintosh.module.css'
import Environment from '@/components/Environment/Environment'

const geneva = localFont({
  src: './geneva_9.ttf',
  variable: '--font-geneva',
})
const sysfont = localFont({
  src: './sysfont.woff2',
  variable: '--font-sysfont',
})

const defaultMetadata = {
  applicationName: 'Mikeintosh',
  author: 'Mike DeVine',
  description: 'Website of Mike DeVine, aka pixelSHREDDER - Web/Game Developer, Web/Graphic/UI/UX Designer, Creative Professional, Writer, Attempted Funnyperson.',
  image: '/android-chrome-512x512.png',
  themeColor: '#787878',
  title: 'Mike DeVine | Developer/Designer/Creative',
}

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
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
    images: '/opengraph-image.png',
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
    images: '/twitter-image.png',
    title: defaultMetadata.title,
  },
}

export const viewport = {
  colorScheme: 'light',
  themeColor: defaultMetadata.themeColor,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${mikeintoshStyles.mikeintosh} ${geneva.variable} ${sysfont.variable}`}>
      <body className={'startup'}>
        <div>
          <Environment>
            {children}
          </Environment>
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