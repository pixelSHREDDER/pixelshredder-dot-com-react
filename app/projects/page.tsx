import Nav from '@/components/Nav';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mike DeVine | Projects',
  description: 'Let\'s take a quick peek under the hood.',
}

export default function Projects() {
  return (
    <article>
      <Nav />
      <h1>About This Site</h1>
      <section>
        <p>This site was built on a React / Next / TypeScript stack, using the magic of server-side rendering! Fonts used include <a href="https://fontsarena.com/sysfont-by-alina-sava/" target='_blank'>Sysfont by Alina Sava</a>.</p>
        <p>The CRT effect is done in pure <abbr title="Cascading Style Sheets">CSS</abbr>, based on the awesome work seen <a href="http://aleclownes.com/2017/02/01/crt-display.html" target="_blank">here</a> and <a href="https://codepen.io/lbebber/pen/XJRdrV" target="_blank">here</a>.</p>
        <p>(If you couldn't tell, my first computer was a Mac LC III)</p>
      </section>
      <Nav />
    </article>
  );
}
  