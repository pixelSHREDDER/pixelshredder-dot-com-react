import Link from 'next/link';
import styles from 'styles/utils.module.css';
import GlobalHead from '../../components/head';
import Layout from '../../components/layout';

export default function WebDevelopmentResume() {
    return (
		<Layout>
			<GlobalHead meta={{
				title: 'Mike DeVine | Web Development Résumé',
				description: 'Over 10 years of professional experience',
				image: '/images/mike-devine-headshot.jpg',
				imageAlt: 'Here\'s what I look like I guess'
			}} />
			<article className={styles.darkmode}>
				<Link href="/resumes">
					<p>← Back</p>
				</Link>
				<h1>Résumé</h1>
				<section>
					<h2>Profile</h2>
					<p>Frontend developer with 10 years experience in customer-facing and internal software including web, government, CMS, ecommerce and other problem spaces across property management, gaming, and higher education. Expertise in agile software development with React, Redux, Next, Vue, and AngularJS frameworks involving complex workflows. Knowledgeable in test-driven development, modernization projects, internationalization, and accessibility/508 compliance requirements. Seeking a new front-end position with an amazing team.</p>
					<p>Work samples viewable <a href="https://www.pixel-shredder.com/port/" target="_blank">here</a>, and on <a href="https://github.com/pixelSHREDDER/" target="_blank">GitHub</a>.</p>
				</section>
				<section>
					<h2>Skills</h2>
					<ul className={styles.skills}>
						<li>Responsive Design</li>
						<li>Atomic Design</li>
						<li>Scalable UI Libraries</li>
						<li>Accessibility/508 Compliance</li>
						<li>Internationalization</li>
						<li>SEO</li>
					</ul>
					<h3>Code</h3>
					<ul className={styles.skills}>
						<li>JavaScript</li>
						<li>HTML</li>
						<li>CSS/SASS/LESS</li>
						<li>PHP</li>
						<li>XML</li>
						<li>JSON</li>
						<li>SQL</li>
						<li>C#</li>
						<li>ColdFusion</li>
						<li>ActionScript</li>
					</ul>
					<h3>Web</h3>
					<ul className={styles.skills}>
						<li>React</li>
						<li>Redux</li>
						<li>Vue.js</li>
						<li>AngularJS</li>
						<li>Laravel</li>
						<li>Node</li>
						<li>REST APIs/oAuth</li>
						<li>MongoDB/Mongoose</li>
						<li>Material/Bootstrap</li>
						<li>JSX/Jekyll/Liquid/Smarty</li>
					</ul>
					<h3>Tools</h3>
					<ul className={styles.skills}>
						<li>WordPress</li>
						<li>Git/SVN</li>
						<li>NPM</li>
						<li>Bower</li>
						<li>Composer</li>
						<li>Grunt/Gulp</li>
						<li>MongoDB Atlas</li>
						<li>Auth0</li>
						<li>Adobe CC</li>
						<li>Flex Builder</li>
					</ul>
				</section>
				<section>
					<h2>Professional Experience</h2>
					<h3>343 Industries</h3>
					<h4>Software Engineer III</h4>
					<h5>Feb ’21 - Jan ’23</h5>
					<ul>
						<li>Created and drove adoption of a modern React/Redux/Electron desktop app to replace a legacy .NET tool, coordinating API design with backend engineers and integrating with other internally-developed software.</li>
						<li>Solved technical debt problems by applying modern WPF design standards and best practices to refactoring a decade-old .NET code base and sustainably maintaining the new tooling.</li>
						<li>Updated and maintained a legacy .NET tool used studio-wide for managing local builds, refactoring to apply modern WPF design standards and best practices to a more than decade-old codebase, while resolving UI inconsistencies which were resulting in user confusion and repeated bug submissions.</li>
					</ul>
					<h3>CDK Global</h3>
					<h4>Front-End React Developer</h4>
					<h5>Feb ’20 - Sep ’20</h5>
					<ul>
						<li>Implemented new features in a legacy React codebase and added extensive test coverage to the existing code, increasing reliability and solving new business needs.</li>
						<li>Replaced a legacy Angular tool with a modern React equivalent, incorporating modern techniques and tools using TDD methodology while building feature parity with the legacy app, including client-side PDF generation and internationalization support.</li>
						<li>Submitted multiple bug fixes and compatibility updates to an internally-developed UI component library used company-wide, coordinating with dedicated internal UI team.</li>
					</ul>
					<h3>Horizon Realty Advisors</h3>
					<h4>Full-Stack Developer</h4>
					<h5>Aug ’19 - Jan ’20</h5>
					<ul>
						<li>Updated and maintained a legacy Laravel-based codebase, implemented new features using flexible, agile development practices</li>
						<li>Enhanced and maintained a newly-built internal CRM application built in Laravel and Vue.js + Vuetify, ensuring compliance with ADA accessibility standards and decoupling functional and interface code, in preparation for development of upcoming mobile app</li>
						<li>Spearheaded initiative to replace internal web-to-print portal, conducting research and analysis of various vendors and liasoning with Design and Development teams</li>
						<li>Designed and built data visualizations for Marketing team using Chart.js and Vuetify, with endpoints on the backend to Entrata and Google Analytics REST APIs</li>
					</ul>
					<h3>Holland America Line</h3>
					<h4>Web Developer</h4>
					<h5>Jan ’18 - Nov ’18</h5>
					<ul>
						<li>Updated and refactored an outdated codebase, implemented new features using flexible, agile development practices</li>
						<li>Adapted strategies for changing business needs and expectations; created functional connections between legacy and modern web applications</li>
						<li>Enhanced and maintained client-facing e-commerce applications built in Angular, ensuring compliance with ADA accessibility standards</li>
						<li>Built and implemented third party payment service, GDPR compliance, and internationalization features</li>
						<li>Incorporated legacy work into modern infrastructure utilizing API endpoints and token-based authentication to securely transmit user data</li>
						<li>Tested and remedied bugs in new releases for React based web applications</li>
					</ul>
					<h3>Symplicity Corporation</h3>
					<h4>Front-End Developer II</h4>
					<h5>Jun ’12 - Dec ’17</h5>
					<ul>
						<li>Translated wireframes and mockups into fully functional web and mobile products using agile design and development practices and incorporating features from the latest industry trends</li>
						<li>Adapted development based on changing client needs and expectations, researched and implemented new web technologies into existing products built on established stacks including PHP, JavaScript, etc.</li>
						<li>Used Bootstrap and atomic design principles to build a CMS application in Angular with unique features including dockable modals and compliance with Section 508 accessibility standards</li>
						<li>Spearheaded atomic design strategy with integrated style guide, components library, and visual regression testing suite</li>
						<li>Built responsive, mobile-first websites for public sector clients</li>
						<li>Designed responsive emails with variable pixel-density image handling</li>
						<li>Designed a website intended for large-format viewing on TV screens for use in conjunction with Chromecast devices</li>
						<li>Used myriad REST APIs in projects, including Twitter, Facebook, Pinterest, LinkedIn, Google Maps, THOMAS / congress.gov, Flickr, and YouTube</li>
						<li>Built a Flash app in Flex Builder that could dynamically scale its contents using the same techniques applied by responsive websites</li>
					</ul>
					<h3>Neighborhood Nerd</h3>
					<h4>Owner / Chief Technician</h4>
					<h5>Nov ’08 - Jun ’12</h5>
					<ul>
						<li>Founded and operated computer repair service based around an innovative new business model</li>
						<li>Devised company-wide branding strategy</li>
					</ul>
					<h3>Boys & Girls Club of Suffolk County</h3>
					<h4>After School & Summer Camp Counselor / Computer Technician / Computers & Technology Instructor</h4>
					<h5>Oct ’07 - Aug ’09</h5>
					<ul>
						<li>In addition to roles listed above, also provided work as promotional advisor</li>
						<li>Developed and implemented multimedia marketing campaign for teen after school program comprised of print, merchandising, and installation efforts</li>
					</ul>
				</section>
				<section>
					<h2>Education</h2>
					<h3>Rochester Institute of Technology</h3>
					<h4>B.S. Degree, New Media Interactive Development / Concentration, Global Studies (Japanese)</h4>
					<p>Class of 2012. Rochester, NY</p>
					<h3>Suffolk County Community College</h3>
					<h4>A.A.S. Degree, Computer Art</h4>
					<p>Class of 2008. Selden, NY</p>
				</section>
				<section>
					<h2>Additional Experience</h2>
					<h3>Young Democrats of Washington</h3>
					<h4>Vice President of Technology / Vice President of Operations / Tech Director</h4>
					<h5>Feb ’18 - Jun ’22</h5>
					<ul>
						<li>Spearheaded initiative to build a robust, scalable multisite WordPress installation with sites for each YDWA chapter (current stable version viewable <a href="https://ydwa.org/demo/" target="_blank">here</a>)</li>
						<li>Developed custom theme in PHP using a fork of established parent theme while editing and adding features, including simplified Customizer menus, integrated plugins, streamlined color customization options, role-based feature toggles, bindable shortcodes, and automatic importing / syncing of Facebook events</li>
						<li>Built hierarchical user and role functionality for end-users and clients, with contextual features for each access level</li>
						<li>Incorporated third-party services and plugins, including SEO optimization via Google Search Console and Yoast, mailing list management via MailChimp, analytics via Google Analytics, recurring payments and membership subscriptions, and POS functionality via PayPal and WooCommerce</li>
						<li>Managed G Suite installation for organization-wide use, prevented several attempted cyberattacks</li>
						<li>Created and managed robust membership database using Airtable, providing demographic data and visualizations for organizational use</li>
						<li>Implemented several successful statewide elections for members to participate in virtually, leveraging existing data structures and creating new pipelines for safe and secure transmission, storage, and counting of ballots</li>
					</ul>
					<h3><a href="https://www.facebook.com/projectodyssey" target="_blank">Project Odyssey</a></h3>
					<h4>Concept / Design / Physical Installation</h4>
					<h5>Sep ’11 - May ’12</h5>
					<ul>
						<li>Conceived and co-developed Odyssey, an innovative interactive platform</li>
						<li>Designed and built a 360-degree display installation with surround sound and Kinect motion controls</li>
						<li>Responsible for inception of and research into overall concepts, and design and construction of physical installation</li>
						<li>Leveraged software developed in Unity specifically built to run on the platform</li>
						<li>First prize winner at the RIT Winter 2012 Research & Innovation Symposium</li>
						<li>Project concluded after ImagineRIT festival in May ’12</li>
					</ul>
					<h3><a href="https://www.microsoft.com/en-us/research/project/just-press-play/" target="_blank">Just Press Play, Rochester Institute of Technology</a></h3>
					<h4>Content Development</h4>
					<h5>Sep - Nov ’11</h5>
					<ul>
						<li>Involved with creation and documentation of various pieces of content for Microsoft-sponsored student achievement system</li>
						<li>Provided user experience feedback</li>
						<li>Developed new Achievements and the metadata associated with them</li>
						<li>Basic front-end website debugging and various promotional duties</li>
						<li>Produced copy for documentation given to new players, and produced rough draft of EULA for website</li>
					</ul>
					<h3><a href="https://web.archive.org/web/20110726185832/http://sugarlabs.org/index.php" target="_blank">Sugar Labs</a></h3>
					<h4>Website Redesign (Co-op)</h4>
					<h5>Feb - May ’11</h5>
					<ul>
						<li>Worked with Sugar Labs stakeholders to redesign their website through research, user testing, and interviews. Designed comprehensive new website structure catering to multiple groups of users, including children</li>
						<li>Developed structure for new site, collected demographic data from various groups of users, and brainstormed basic layout options</li>
						<li>Gathered content from Sugar Labs locations around the globe, and translated content from Spanish to English where required</li>
					</ul>
					<h3><a href="http://wiki.sugarlabs.org/go/Fortune_Hunter" target="_blank">Fortune Hunter</a></h3>
					<h4>Character Artist</h4>
					<h5>Dec ’09 - May ’10</h5>
					<ul>
						<li>Served as artist on a team designing games for the One Laptop Per Child’s Python-based XO device</li>
						<li>Responsibile for character designs and vector graphic design using Illustrator</li>
						<li>Conducted research into animation on low-power devices</li>
					</ul>
				</section>
				<Link href="/resumes">
					<p>← Back</p>
				</Link>
			</article>
		</Layout>
    );
  }
  