import Image from 'next/image';
import styles from '@/app/utils.module.css';
import Nav from '@/components/Nav';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mike DeVine | About Me',
  description: 'Great in small doses!',
}

export default function AboutMe() {
  return (
		<article className={styles.darkmode}>
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
				<p>My goal in life is to use my skills in technology to make as much of a positive impact as I can. I've spent over a decade honing my skills in web development, and along the way have embraced core tenets of computer science. Code reusability, optimization, and documentation are some of my specialties.</p>
				<p>Over my career I've gained experience in the artistic sides of digital development, as well. I've tried to balance my work with a little bit of everything, from drawing and Photoshop to JavaScript frameworks and <abbr title="PHP: Hypertext Preprocessor">PHP</abbr>. I figure the broader my knowledge and skills, the better I'll be able to work with others in specialized roles.</p>
				<p>Gaming, ecommerce, government, education, journalism, electronics, landscaping, telemarketing- I've had experience working in so many fields it can be hard to keep track of it all sometimes. But it all inspires me in one way or another. An entrepreneurial spirit and an insatiable appetite for learning new things doesn't hurt either.</p>
				<p>Aside from playing and collecting video games, I try to keep my interests as broad as possible. There's no substitute for experience when it comes to good ideas, and so I try to soak up any new experience I can get- I never know when it may inspire me in my work.</p>
			</section>
			<Nav />
		</article>
  );
}