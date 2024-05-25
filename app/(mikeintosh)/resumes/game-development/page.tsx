import { Metadata } from 'next'
import mikeintoshInfoBarStyles from '@/components/InfoBar/mikeintoshInfoBar.module.css'
import Nav from '@/components/Nav/Nav'
import tagsSkillsStyles from '@/components/Tags/tagsSkills.module.css'
import { defaultKeywords } from '@mikeintosh/layout'
import Link from 'next/link'

const defaultMetadata = {
  description: 'Go play Halo Infinite!',
  title: 'Mike DeVine | Game Development Résumé',
  url: `${process.env.NEXT_PUBLIC_CANONICAL_BASE_URL}/resumes/game-development`
}

export const metadata: Metadata = {
  alternates: {
    canonical: defaultMetadata.url,
  },
  appleWebApp: {
		title: defaultMetadata.title,
	},
	description: defaultMetadata.description,
	keywords: ['game development', 'game developer', 'aaa development', 'game', 'game tools', 'infrastructure', 'halo infinite', 'halo', 'web development', 'web developer', 'front-end developer', 'front end developer', 'software engineer', 'engineer', 'full-stack', 'full stack', 'web', 'responsive design', 'atomic design', 'scalable ui libraries', 'authentication', 'jwt', 'tokenization', 'auth0', 'accessibility', 'section 508', 'compliance', 'test-driven development', 'tdd', 'internationalization', 'i18', 'search engine optimization', 'seo', 'code', 'javascript', 'js', 'es6', 'es7', 'typescript', 'hypertext markup language', 'html', 'html5', 'cascading style sheets', 'preprocessors', 'css', 'css3', 'tailwind', 'sass', 'less', 'php', 'xml', 'json', 'sql', '.net', 'dotnet', 'c sharp', 'c#', 'ahk', 'autohotkey', 'react', 'reactjs', 'next', 'nextjs', 'redux', 'vercel', 'vue', 'vuejs', 'electron', 'express', 'jquery', 'node', 'nodejs', 'jest', 'cypress', 'rest apis', 'ajax', 'oauth', 'mongodb', 'mongoose', 'mongodb atlas', 'postgres', 'prisma', 'mysql', 'material ui', 'bootstrap', 'jsx', 'jekyl', 'liquid', 'continuous integration', 'ci', 'continuous deployment', 'cd', 'git', 'subversion', 'svn', 'node package manager', 'npm', 'node version manager', 'nvm', 'yarn', 'grunt', 'gulp', 'windows presentation framework', 'wpf', 'wordpress', 'theme developer', 'mailman', 'adobe creative cloud', 'adobe photoshop', 'adobe illustrator', 'resume', ...defaultKeywords],
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

export default function GameDevelopmentResume() {
  return (
    <article className='darkMode'>
      <Nav parent={{
        label: 'Resumes',
        path: '/resumes',
      }} />
      <h1>Résumé</h1>
      <section>
        <h2>Profile</h2>
        <p>Frontend developer with experience in customer-facing and internal software including web, government, <abbr title="Customer Management System">CMS</abbr>, ecommerce and other problem spaces across property management, gaming, and higher education.</p>
        <p>Expertise in agile software development with React, Redux, Next, and Vue frameworks involving complex workflows. Knowledgeable in test-driven development, modernization projects, internationalization, and accessibility / Section 508 compliance requirements. Seeking a new front-end position with an amazing team.</p>
        <p>Work samples viewable <Link href={`${process.env.NEXT_PUBLIC_CANONICAL_BASE_URL}/projects`} target="_blank">here</Link>, and on <a href="https://github.com/pixelSHREDDER/" target="_blank">GitHub</a>.</p>
      </section>
      <section>
        <h2>Experience</h2>
        <h3>Simply Made Apps</h3>
				<div aria-hidden className={mikeintoshInfoBarStyles.mikeintoshInfoBar}>
					<h4 className={tagsSkillsStyles.tagsSkills}><span>Web Developer</span></h4>
					<h5>Nov ’23 - Mar ’24</h5>
				</div>
				<ul>
					<li>Built new features for a React/Redux/Electron desktop time management app, interfacing with internally-developed <abbr title="Application Programmable Interfaces">APIs</abbr> to synchronize data with iOS, Android, and web apps.</li>
				</ul>
				<h3>343 Industries (Microsoft Games Studios) [DISYS]</h3>
				<div aria-hidden className={mikeintoshInfoBarStyles.mikeintoshInfoBar}>
					<h4 className={tagsSkillsStyles.tagsSkills}><span>Software Engineer III</span></h4>
					<h5>Feb ’21 - Jan ’23</h5>
				</div>
				<ul>
					<li>Created and drove adoption of a modern React/Redux/Electron desktop app to replace a legacy <abbr title="Dot Net">.NET</abbr> tool, coordinating <abbr title="Application Programmable Interface">API</abbr> design with backend engineers and integrating with other internally-developed software.</li>
					<li>Solved technical debt problems by applying modern <abbr title="Windows Presentation Framework">WPF</abbr> design standards and best practices to refactoring a decade-old <abbr title="Dot Net">.NET</abbr> code base and sustainably maintaining the new tooling.</li>
					<li>Updated and maintained a legacy <abbr title="Dot Net">.NET</abbr> tool used studio-wide for managing local builds, refactoring to apply modern <abbr title="Windows Presentation Framework">WPF</abbr> design standards and best practices to a more than decade-old codebase, while resolving <abbr title="User Interface">UI</abbr> inconsistencies which were resulting in user confusion and repeated bug submissions.</li>
				</ul>
				<h3>CDK Global</h3>
				<div aria-hidden className={mikeintoshInfoBarStyles.mikeintoshInfoBar}>
					<h4 className={tagsSkillsStyles.tagsSkills}><span>Front-End React Developer</span></h4>
					<h5>Feb ’20 - Sep ’20</h5>
				</div>
				<ul>
					<li>Implemented new features in a legacy React codebase and added extensive test coverage to the existing code, increasing reliability and solving new business needs.</li>
					<li>Replaced a legacy Angular tool with a modern React equivalent, incorporating modern techniques and tools using <abbr title="Test-Driven Development">TDD</abbr> methodology while building feature parity with the legacy app, including client-side <abbr title="Portable Document File">PDF</abbr> generation and internationalization support.</li>
					<li>Submitted multiple bug fixes and compatibility updates to an internally-developed <abbr title="User Interface">UI</abbr> component library used company-wide, coordinating with dedicated internal team.</li>
				</ul>
				<h3>Horizon Realty Advisors</h3>
				<div aria-hidden className={mikeintoshInfoBarStyles.mikeintoshInfoBar}>
					<h4 className={tagsSkillsStyles.tagsSkills}><span>Full-Stack Developer</span></h4>
					<h5>Aug ’19 - Jan ’20</h5>
				</div>
				<ul>
					<li>Updated and maintained a legacy Laravel-based codebase, implemented new features using flexible, agile development practices</li>
					<li>Enhanced and maintained a newly-built internal <abbr title="Customer Relations Management">CRM</abbr> application built in Laravel and Vue + Vuetify, ensuring compliance with <abbr title="Americans with Disabilities Act">ADA</abbr> accessibility standards and decoupling functional and interface code, in preparation for development of upcoming mobile app</li>
					<li>Spearheaded initiative to replace internal web-to-print portal, conducting research and analysis of various vendors and liasoning with Design and Development teams</li>
					<li>Designed and built data visualizations for Marketing team using Chart.js and Vuetify, with endpoints on the backend to Entrata and Google Analytics <abbr title="REpresentational State Transfer Application Programmable Interfaces">REST APIs</abbr></li>
				</ul>
				<h3>Holland America Line [Harvey Nash]</h3>
				<div aria-hidden className={mikeintoshInfoBarStyles.mikeintoshInfoBar}>
					<h4 className={tagsSkillsStyles.tagsSkills}><span>Web Developer</span></h4>
					<h5>Jan ’18 - Nov ’18</h5>
				</div>
				<ul>
					<li>Updated and refactored an outdated codebase, implemented new features using flexible, agile development practices</li>
					<li>Adapted strategies for changing business needs and expectations; created functional connections between legacy and modern web applications</li>
					<li>Enhanced and maintained client-facing e-commerce applications built in Angular, ensuring compliance with <abbr title="Web Content Accessibility Guidelines">WCAG</abbr> accessibility standards</li>
					<li>Built and implemented third party payment service, <abbr title="General Data Protection Regulation">GDPR</abbr> compliance, and internationalization features</li>
					<li>Incorporated legacy work into modern infrastructure utilizing <abbr title="Application Programmable Interface">API</abbr> endpoints and token-based authorization to securely transmit user data</li>
					<li>Tested and remedied bugs in new releases for React based web applications</li>
				</ul>
				<h3>Symplicity Corporation</h3>
				<div aria-hidden className={mikeintoshInfoBarStyles.mikeintoshInfoBar}>
					<h4 className={tagsSkillsStyles.tagsSkills}><span>Front-End Developer II</span></h4>
					<h5>Jun ’12 - Dec ’17</h5>
				</div>
				<ul>
					<li>Translated wireframes and mockups into fully functional web and mobile products using agile design and development practices and incorporating features from the latest industry trends</li>
					<li>Adapted development based on changing client needs and expectations, researched and implemented new web technologies into existing products built on established stacks including <abbr title="PHP: Hypertext Preprocessor">PHP</abbr>, JavaScript, etc.</li>
					<li>Used Bootstrap and atomic design principles to build a <abbr title="Customer Management System">CMS</abbr> application in Angular with unique features including dockable modals and compliance with Section 508 accessibility standards</li>
					<li>Spearheaded atomic design strategy with integrated style guide, components library, and visual regression testing suite</li>
					<li>Built responsive, mobile-first websites for public sector clients</li>
					<li>Designed responsive emails with variable pixel-density image handling</li>
					<li>Designed a website intended for large-format viewing on TV screens for use in conjunction with Chromecast devices</li>
					<li>Used myriad <abbr title="REpresentational State Transfer Application Programmable Interfaces">REST APIs</abbr> in projects, including Twitter, Facebook, Pinterest, LinkedIn, Google Maps, THOMAS / congress.gov, Flickr, and YouTube</li>
					<li>Built a Flash app in Flex Builder that could dynamically scale its contents using the same techniques applied by responsive websites</li>
				</ul>
				<h3>Neighborhood Nerd</h3>
				<div aria-hidden className={mikeintoshInfoBarStyles.mikeintoshInfoBar}>
					<h4 className={tagsSkillsStyles.tagsSkills}><span>Owner</span><span>Chief Technician</span></h4>
					<h5>Nov ’08 - Jun ’12</h5>
				</div>
				<ul>
					<li>Founded and operated computer repair service based around an innovative new business model</li>
					<li>Devised company-wide branding strategy</li>
				</ul>
        <h3><a href="/projects/project-odyssey">Project Odyssey</a></h3>
        <div aria-hidden className={mikeintoshInfoBarStyles.mikeintoshInfoBar}>
          <h4 className={tagsSkillsStyles.tagsSkills}><span>concept</span><span>design</span><span>physical installation</span></h4>
          <h5>Sep ’11 - May ’12</h5>
        </div>
        <ul>
          <li>Conceived and co-developed Odyssey, an innovative interactive platform</li>
          <li>Designed and built a 360-degree display installation with surround sound and Kinect motion controls</li>
          <li>Responsible for inception of and research into overall concepts, and design and construction of physical installation</li>
          <li>Leveraged software developed in Unity specifically built to run on the platform</li>
          <li>First prize winner at the <abbr title="Rochester Institute of Technology">RIT</abbr> Winter 2012 Research & Innovation Symposium</li>
          <li>Project concluded after <abbr title="Imagine R. I. T.">ImagineRIT</abbr> festival in May ’12</li>
        </ul>
        <h3><a href="https://www.microsoft.com/en-us/research/project/just-press-play/" target="_blank">Just Press Play, Rochester Institute of Technology</a></h3>
        <div aria-hidden className={mikeintoshInfoBarStyles.mikeintoshInfoBar}>
          <h4 className={tagsSkillsStyles.tagsSkills}><span>content development</span></h4>
          <h5>Sep - Nov ’11</h5>
        </div>
        <ul>
          <li>Involved with creation and documentation of various pieces of content for Microsoft-sponsored student achievement system</li>
          <li>Provided user experience feedback</li>
          <li>Developed new Achievements and the metadata associated with them</li>
          <li>Basic front-end website debugging and various promotional duties</li>
          <li>Produced copy for documentation given to new players, and produced rough draft of <abbr title="End-User License Agreement">EULA</abbr> for website</li>
        </ul>
        <h3><a href="https://web.archive.org/web/20110726185832/http://sugarlabs.org/index.php" target="_blank">Sugar Labs</a></h3>
        <div aria-hidden className={mikeintoshInfoBarStyles.mikeintoshInfoBar}>
          <h4 className={tagsSkillsStyles.tagsSkills}><span>website redesign (co-op)</span></h4>
          <h5>Feb - May ’11</h5>
        </div>
        <ul>
          <li>Worked with Sugar Labs stakeholders to redesign their website through research, user testing, and interviews. Designed comprehensive new website structure catering to multiple groups of users, including children</li>
          <li>Developed structure for new site, collected demographic data from various groups of users, and brainstormed basic layout options</li>
          <li>Gathered content from Sugar Labs locations around the globe, and translated content from Spanish to English where required</li>
        </ul>
        <h3><a href="http://wiki.sugarlabs.org/go/Fortune_Hunter" target="_blank">Fortune Hunter</a></h3>
        <div aria-hidden className={mikeintoshInfoBarStyles.mikeintoshInfoBar}>
          <h4 className={tagsSkillsStyles.tagsSkills}><span>character art</span><span>animation</span></h4>
          <h5>Dec ’09 - May ’10</h5>
        </div>
        <ul>
          <li>Served as artist on a team designing games for the One Laptop Per Child’s Python-based XO device</li>
          <li>Responsibile for character designs and vector graphic design using Illustrator</li>
          <li>Conducted research into animation on low-power devices</li>
        </ul>
        <h3>Boys & Girls Club of Suffolk County</h3>
        <div aria-hidden className={mikeintoshInfoBarStyles.mikeintoshInfoBar}>
          <h4 className={tagsSkillsStyles.tagsSkills}><span>After School & Summer Camp Counselor</span><span>Computer Technician</span><span>Computers & Technology Instructor</span></h4>
          <h5>Oct ’07 - Aug ’09</h5>
        </div>
        <ul>
          <li>In addition to roles listed above, also provided work as promotional advisor</li>
          <li>Developed and implemented multimedia marketing campaign for teen after school program comprised of print, merchandising, and installation efforts</li>
        </ul>
        <h3>Young Democrats of Washington</h3>
        <div aria-hidden className={mikeintoshInfoBarStyles.mikeintoshInfoBar}>
          <h4 className={tagsSkillsStyles.tagsSkills}><span>Vice President of Technology</span><span>Technology Co-Director</span><span>Technology Director</span></h4>
          <h5>Feb ’18 - Jun ’22</h5>
        </div>
        <ul>
          <li>Spearheaded initiative to build a robust, scalable multisite WordPress installation with sites for each <abbr title="Young Democrats of WAshington">YDWA</abbr> chapter (current stable version viewable <a href="https://ydwa.org/demo/" target="_blank">here</a>)</li>
          <li>Developed custom theme in <abbr title="PHP: Hypertext Preprocessor">PHP</abbr> using a fork of established parent theme while editing and adding features, including simplified Customizer menus, integrated plugins, streamlined color customization options, role-based feature toggles, bindable shortcodes, and automatic importing / syncing of Facebook events</li>
          <li>Built hierarchical user and role functionality for end-users and clients, with contextual features for each access level</li>
          <li>Incorporated third-party services and plugins, including <abbr title="Search Engine Optimization">SEO</abbr> via Google Search Console and Yoast, mailing list management via MailChimp, analytics via Google Analytics, recurring payments and membership subscriptions, and <abbr title="Point Of Sale">POS</abbr> functionality via PayPal and WooCommerce</li>
          <li>Managed G Suite installation for organization-wide use, prevented several attempted cyberattacks</li>
          <li>Created and managed robust membership database using Airtable, providing demographic data and visualizations for organizational use</li>
          <li>Implemented several successful statewide elections for members to participate in virtually, leveraging existing data structures and creating new pipelines for safe and secure transmission, storage, and counting of ballots</li>
        </ul>
      </section>
      <section>
        <h2>Skills</h2>
        <ul className={tagsSkillsStyles.tagsSkills}>
          <li>Responsive Design</li>
          <li>Atomic Design</li>
          <li>Scalable UI Libraries</li>
          <li>Accessibility / Section 508 Compliance</li>
          <li>Test-Driven Development</li>
          <li>Internationalization</li>
          <li><abbr title="Search Engine Optimization">SEO</abbr></li>
        </ul>
        <h3>Code</h3>
        <ul className={tagsSkillsStyles.tagsSkills}>
          <li>JavaScript <abbr title="ECMAScript 6+">ES6+</abbr></li>
					<li>TypeScript</li>
					<li><abbr title="HyperText Markup Language 5">HTML 5</abbr></li>
					<li><abbr title="Cascading Style Sheets 3">CSS 3</abbr></li>
					<li><abbr title="eXtensible Markup Language">XML</abbr></li>
					<li><abbr title="JavaScript Object Notation">JSON</abbr></li>
					<li><abbr title="Structured Query Language">SQL</abbr></li>
					<li><abbr title="PHP: Hypertext Preprocessor">PHP</abbr></li>
					<li><abbr title="Dot Net">.NET</abbr></li>
					<li><abbr title="C Sharp">C#</abbr></li>
					<li><abbr title="AutoHotkey">AHK</abbr></li>
        </ul>
        <h3>Web</h3>
        <ul className={tagsSkillsStyles.tagsSkills}>
          <li>React</li>
					<li>Redux</li>
					<li>Next</li>
					<li>Vue</li>
					<li>Electron</li>
					<li>Express</li>
					<li><abbr title="REpresentational State Transfer Application Programmable Interfaces">REST APIs</abbr></li>
					<li><abbr title="Asynchronous Javascript And XML">AJAX</abbr></li>
					<li>OAuth</li>
					<li><abbr title="JSON Web Token">JWT</abbr></li>
					<li>Tailwind</li>
					<li>Material UI</li>
					<li>Bootstrap</li>
					<li><abbr title="SASS CSS preprocessor">SASS</abbr></li>
					<li><abbr title="LESS CSS preprocessor">LESS</abbr></li>
					<li><abbr title="JavaScript eXtensible Markup Language">JSX</abbr></li>
					<li>Jekyl</li>
					<li>Liquid</li>
					<li>jQuery</li>
        </ul>
        <h3>Tools</h3>
        <ul className={tagsSkillsStyles.tagsSkills}>
          <li>Node</li>
					<li><abbr title="Node Package Manager">NPM</abbr></li>
					<li><abbr title="Node Version Manager">NVM</abbr></li>
					<li>Yarn</li>
					<li>Vercel</li>
					<li>Jest</li>
					<li>Cypress</li>
					<li>MongoDB</li>
					<li>Mongoose</li>
					<li>Atlas</li>
					<li>Postgres</li>
					<li>Zod</li>
					<li>Prisma</li>
					<li>MySQL</li>
					<li>Auth0</li>
					<li><abbr title="Continuous Integration">CI</abbr></li>
					<li><abbr title="Continuous Deployment">CD</abbr></li>
					<li>Git</li>
					<li><abbr title="SubVersioN">SVN</abbr></li>
					<li>Grunt</li>
					<li>Gulp</li>
					<li><abbr title="Windows Presentation Framework">WPF</abbr></li>
					<li>WordPress</li>
					<li>Mailman</li>
					<li>Adobe CC</li>
        </ul>
      </section>
      <section>
				<h2>Education</h2>
				<h3>Rochester Institute of Technology</h3>
				<div aria-hidden className={mikeintoshInfoBarStyles.mikeintoshInfoBar}>
					<h4>B.S. Degree, New Media Interactive Development / Concentration, Global Studies (Japanese)</h4>
					<h4>Class of 2012. Rochester, NY</h4>
				</div>
				<h4>
					Sugar Labs Website Redesign Co-op<br />
					<ul className={tagsSkillsStyles.tagsSkills}>
						<li>design</li>
						<li>translations</li>
					</ul>
				</h4>
				<h4 className={tagsSkillsStyles.tagsSkills}>
					One Laptop Per Child: Mathematical Adventure Fortune Hunter Co-op<br />
					<ul className={tagsSkillsStyles.tagsSkills}>
						<li>character art</li><li>animation</li>
					</ul>
				</h4>
				<hr/>
				<h3>Suffolk County Community College</h3>
				<div aria-hidden className={mikeintoshInfoBarStyles.mikeintoshInfoBar}>
					<h4>A.A.S. Degree, Computer Art</h4>
        	<h4>Class of 2008. Selden, NY</h4>
				</div>
				<h4>SCCC Compass Newspaper<br />
					<ul className={tagsSkillsStyles.tagsSkills}>
						<li>Editor-in-chief</li>
						<li>Managing Editor</li>
						<li>Layout Editor</li>
						<li>Staff Writer</li>
						<li>Student Advisor</li>
					</ul>
				</h4>
      </section>
      <Nav parent={{
        label: 'Resumes',
        path: '/resumes',
      }} />
    </article>
  );
}