import { defaultKeywords } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import Nav from '@/components/Nav/Nav'

const defaultMetadata = {
  description: 'Great in small doses!',
  title: 'Mike DeVine | About Me',
  url: `/about-me`
}

export const metadata: Metadata = {
  alternates: {
    canonical: `${defaultMetadata.url}/`,
  },
	appleWebApp: {
		title: defaultMetadata.title,
	},
	description: defaultMetadata.description,
	keywords: ['about me', ...defaultKeywords],
	openGraph: {
		description: defaultMetadata.description,
		title: defaultMetadata.title,
		url: defaultMetadata.url,
	},
	title: defaultMetadata.title,
	twitter: {
		card: 'summary',
		creator: '@pixelSHREDDER',
		description: defaultMetadata.description,
		title: defaultMetadata.title,
	},
}

export default function AboutMe() {
  return (
		<article className='darkMode'>
			<Nav />
			<h1>About Me</h1>
			<section>
				<Image
					src="/images/mike-devine-headshot.jpg"
					width={100}
					height={100}
					alt="Here's what I look like!"
				/>
				<h2>Hey There</h2>
				<p>My name is Mike DeVine, and my goal in life is to make as much of a positive impact as I can, however I can. I've spent years honing my skills in web development, and along the way have embraced core tenets of computer science; Code reusability, optimization, and documentation are some of my specialties.</p>
				<p>Throughout my career I've gained experience in the artistic sides of digital development, as well. I've tried to balance my work with a little bit of everything, from <Link href="projects/compass-rebrand">graphic design</Link>, to <Link href="/articles">journalism</Link>, to <Link href="/projects/mikeintosh">JavaScript frameworks</Link> and <abbr title="PHP: Hypertext Preprocessor">PHP</abbr>. I figure the broader my knowledge and skills, the better I'll be able to work with others in specialized roles.</p>
				<p>Gaming, ecommerce, government, education, journalism, electronics, landscaping, telemarketing- I've had experience working in so many fields it can be hard to keep track of it all sometimes. But it all inspires me in one way or another. An entrepreneurial spirit and an insatiable appetite for learning new things doesn't hurt, either.</p>
				<p>In my downtime I like to play and collect video games, hike the beautiful Pacific Northwest, watch baseball (let's go Yankees), and play badminton. I generally try to keep my interests as broad as possible, since there's no substitute for experience when it comes to good ideas. I try to soak up any new experience I can get, because I never know what'll inspire me next!</p>
			</section>
			<Nav />
		</article>
  )
}