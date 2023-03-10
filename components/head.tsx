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
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
            <meta charSet="utf-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={props.meta.title} />
            <meta property="og:description" content={props.meta.description} />
            <meta property="og:url" content={`https://www.pixel-shredder.com${asPath}`} />
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
            <meta name="mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="black" />
            <meta name="apple-mobile-web-app-title" content="Mike DeVine" />
            <meta name="msapplication-TileImage" content="apple-touch-icon.png" />
            <meta name="msapplication-TileColor" content="#3366CC" />
            <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="manifest" href="/site.webmanifest" />
        </Head>
    );
}