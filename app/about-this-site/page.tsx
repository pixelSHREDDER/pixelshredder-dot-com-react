import styles from '@/app/utils.module.css';
import Nav from '@/components/Nav';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mike DeVine | About This Site',
  description: 'Let\'s take a quick peek under the hood.',
}

export default function AboutThisSite() {
  return (
    <article className={styles.darkmode}>
      <Nav />
      <h1>About This Site</h1>
      <section>
        <p>This site was built on a React / Next / TypeScript stack, using the magic of server-side rendering! Fonts used include <a href="https://fontsarena.com/sysfont-by-alina-sava/" target='_blank'>Sysfont by Alina Sava</a>.</p>
        <p>The CRT effect is done in pure <abbr title="Cascading Style Sheets">CSS</abbr>, based on the awesome work seen <a href="http://aleclownes.com/2017/02/01/crt-display.html" target="_blank">here</a> and <a href="https://codepen.io/lbebber/pen/XJRdrV" target="_blank">here</a>.</p>
        <p>(If you couldn't tell, my first computer was a Mac LC III)</p>
        <p>Icons by <a href="https://icons8.com" target="_blank">Icons8</a>:</p>
        <ul className={styles.skills}>
          <li><a href="https://icons8.com/icon/80098/explosive" target="_blank">Bomb</a></li>
          <li><a href="https://icons8.com/icon/38272/css3" target="_blank">CSS3</a></li>
          <li><a href="https://icons8.com/icon/23028/html-5" target="_blank">HTML5</a></li>
          <li><a href="https://icons8.com/icon/39854/javascript" target="_blank">JavaScript</a></li>
          <li><a href="https://icons8.com/icon/74402/mongodb" target="_blank">MongoDB</a></li>
          <li><a href="https://icons8.com/icon/yUdJlcKanVbh/next.js" target="_blank">Next.js</a></li>
          <li><a href="https://icons8.com/icon/39856/php-logo" target="_blank">PHP</a></li>
          <li><a href="https://icons8.com/icon/122637/react" target="_blank">React.js</a></li>
          <li><a href="https://icons8.com/icon/cHBUT9SmrD2V/typescript" target="_blank">TypeScript</a></li>
          <li><a href="https://icons8.com/icon/39848/unity" target="_blank">Unity</a></li>
          <li><a href="https://icons8.com/icon/12510/wordpress" target="_blank">WordPress</a></li>
        </ul>
      </section>
      <Nav />
    </article>
  );
}
  