import Head from 'next/head';
import { useRouter } from 'next/router';

type MetaProps = {
    title: string,
    description: string,
    image?: string,
    imageAlt?: string,
};

export default function GlobalHead(props: {meta: MetaProps}) {
    const { asPath } = useRouter();
    return (
        <Head>
            <title>{props.meta.title}</title>
            <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
            <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={props.meta.title} />
            <meta property="og:description" content={props.meta.description} />
            <meta property="og:url" content={`${process.env.NEXT_PUBLIC_CANONICAL_BASE_URL}${asPath}`} />
            <meta property="og:image" content={props.meta.image || 'images/welcome-to-mikeintosh.png'} />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="@pixelSHREDDER" />
            <meta name="twitter:title" content={props.meta.title} />
            <meta name="twitter:description" content={props.meta.description} />
            <meta name="twitter:image" content={props.meta.image || 'images/welcome-to-mikeintosh.png'} />
            <meta name="twitter:imagealt" content={props.meta.imageAlt ||"Welcome to Mikeintosh"} />
            <meta name="description" content={props.meta.description} />
            <meta name="keywords" content="pixelshredder, pixel-shredder, pixel shredder, pixel, shredder, mike devine, mike, devine" />
            <meta name="author" content="Mike DeVine" />
            <meta name="copyright" content={`Copyright Mike DeVine - ${new Date().getFullYear()}`} />
            <meta name="email" content="pixelSHREDDER@gmail.com" />
            <meta name="Rating" content="General" />
            <meta name="Distribution" content="Global" />
            <meta name="Revisit-after" content="31 Days" />
            <meta name="application-name" content="Mikeintosh" />
            <meta name="mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="default" />
            <meta name="apple-mobile-web-app-title" content="Mikeintosh" />
            <meta name="format-detection" content="telephone=no" />
            <meta name="msapplication-config" content="/icons/browserconfig.xml" />
            <meta name="msapplication-TileImage" content="apple-touch-icon.png" />
            <meta name="msapplication-TileColor" content="#787878" />
            <meta name="msapplication-tap-highlight" content="no" />
            <meta name="theme-color" content="#787878" />
            <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
            <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="canonical" href={`${process.env.NEXT_PUBLIC_CANONICAL_BASE_URL}${asPath}`} />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="manifest" href="/site.webmanifest" />
        </Head>
    );
}