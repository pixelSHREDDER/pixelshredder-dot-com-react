import { Metadata } from 'next'
import mikeintoshInfoBarStyles from '@/components/InfoBar/mikeintoshInfoBar.module.css'
import Nav from '@/components/Nav/Nav'
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Mike DeVine | Web & Graphic Design Résumé',
  description: 'iT\'S mY PaSsIoN',
}

export default function WebAndGraphicDesignResume() {
  return (
    <article className='darkMode'>
			<Nav parent={{
				label: 'Resumes',
				path: '/resumes',
			}} />
			<h1>Résumé</h1>
      <section>
				<h2>Profile</h2>
				<p>Web/graphic designer with 10 years experience in customer-facing and internal software including web, government, CMS, ecommerce and other problem spaces across property management, gaming, and higher education. Nearly two decades of experience using Photoshop and Illustrator. Expertise in agile software development with React, Redux, Next, Vue, and AngularJS frameworks involving complex workflows. Knowledgeable in test-driven development, modernization projects, internationalization, and accessibility/508 compliance requirements.</p>
        <p>Portfolio/work samples viewable <Link href={`${process.env.NEXT_PUBLIC_CANONICAL_BASE_URL}/projects`} target="_blank">here</Link>, and on <a href="https://www.behance.net/user/?username=mikedevine" target="_blank">Behance</a>.</p>
      </section>
			{/*<section>
				<h2>Skills</h2>
				<h3>Tools<h3/>
				<ul className={tagsSkillsStyles.tagsSkills}>
					<li>WordPress</li>
					<li>Photoshop</li>
					<li>Illustrator</li>
					<li>InDesign/QuarkXPress</li>
					<li>WordPress</li>
					<li>WordPress</li>
					<li>WordPress</li>
					<li>WordPress</li>
					<li>WordPress</li>
					<li>WordPress</li>
				</ul>
				<h3>Code<h3/>
				<ul className={tagsSkillsStyles.tagsSkills}>
					<li>WordPress</li>
					<li>WordPress</li>
					<li>WordPress</li>
					<li>WordPress</li>
					<li>WordPress</li>
					<li>WordPress</li>
					<li>WordPress</li>
					<li>WordPress</li>
					<li>WordPress</li>
					<li>WordPress</li>
				</ul>
        <table>
					<tr>
						<td><h2>Tools</h2></td>
						<td><h2>Code</h2></td>
					</tr>
					<tr>
						<td><li>WordPress</li></td>
						<td><li>HTML</li></td>
					</tr>
					<tr>
						<td><li>Photoshop</li></td>
						<td><li>CSS</li></td>
					</tr>
					<tr>
						<td><li>Illustrator</li></td>
						<td><li>JavaScript ES6</li></td>
					</tr>
					<tr>
						<td><li>InDesign/QuarkXPress</li></td>
						<td><li>PHP</li></td>
					</tr>
					<tr>
						<td><li>Material/Bootstrap</li></td>
						<td><li>XML</li></td>
					</tr>
					<tr>
						<td><li>Unity Pro</li></td>
						<td><li>JSON</li></td>
					</tr>
					<tr>
						<td><li>Premiere</li></td>
						<td><li>SQL</li></td>
					</tr>
					<tr>
						<td><li>Blender 3D</li></td>
						<td><li>C#</li></td>
					</tr>
					<tr>
						<td><li>Git/SVN</li></td>
						<td><li>ColdFusion</li></td>
					</tr>
					<tr>
						<td><li>Flex Builder</li></td>
						<td><li>ActionScript</li></td>
					</tr>
				</table>
			</section>*/}
			<section>
				<h2>Skills & Qualifications</h2>
				<p>10+ years professional experience in the field of web design and development, specializing in higher education, government, CMS, and customer-facing web software. Broad knowledge of HTML, CSS, JS and modern web frameworks. Well-versed in atomic design, responsive web and email design, accessibility and 508 compliance. Skilled in agile development.</p>
				<p>Nearly two decades of experience using Photoshop and Illustrator.</p>
				<p>Second place winner of Newsday’s School Journalism Award for Typography & Layout, 2007.</p>
				<p>Served as Staff Writer, Layout Editor, Managing Editor, Editor-in-Chief & Student Advisor of Suffolk County Community College’s award-winning ‘Compass’ newspaper; oversaw complete rebranding process.</p>
				<p>Devised branding strategy for self-started computer repair service.</p>
				<p>First prize winner at the RIT Winter 2012 Research & Innovation Symposium, for ’Project Odyssey’.</p>
				<p>Winner of the Herbert M. Rothstein Award for Excellence in Journalism, 2005.</p>
			</section>
			<section>
				<h2>Project Experience</h2>
				<h3>Angular CMS App</h3>
				<div aria-hidden className={mikeintoshInfoBarStyles.mikeintoshInfoBar}>
					<h4>Front-End Design & Development, Symplicity Corporation</h4>
					<h5>Aug ’14 - Oct ’16</h5>
				</div>
				<p>Worked on a CMS app made in Angular, using Bootstrap with atomic design principles and in compliance with Section 508 accessibility standards.</p>
				<p>Built several unique features including dockable modals, and spearheaded atomic design strategy with integrated style guide, components library, and visual regression testing suite.</p>
				<h3>Responsive Design Work</h3>
				<div aria-hidden className={mikeintoshInfoBarStyles.mikeintoshInfoBar}>
					<h4>Front-End Design, Symplicity Corporation</h4>
					<h5>Jun ’12 - Dec ’17</h5>
				</div>
				<p>Designed various responsive emails with variable pixel-density image handling.</p>
				<p>Designed a site for use in conjunction with Chromecast devices, intended for large-format viewing on TV screens.</p>
				<p>Built a Flash app in Flex Builder that could dynamically scale its contents, using the same techniques applied by responsive websites.</p>
				<h3>VOICE Government CRM</h3>
				<div aria-hidden className={mikeintoshInfoBarStyles.mikeintoshInfoBar}>
					<h4>Front-End Design & Development, Symplicity Corporation</h4>
					<h5>Jun ’12 - Dec ’17</h5>
				</div>
				<p>VOICE is a web-based constituent relationship management (CRM) system specifically designed for government offices.</p>
				<h3>CSM (Career Services Manager)</h3>
				<div aria-hidden className={mikeintoshInfoBarStyles.mikeintoshInfoBar}>
					<h4>Front-End Design & Development, Symplicity Corporation</h4>
					<h5>Jun ’12 - Dec ’17</h5>
				</div>
				<p>Built from the ground up by career services professionals, CSM by Symplicity enhances how information is shared and processed both within the university and between their students and employers. This career services-focused approach has enabled us to become the market leader with 1000+ career office deployments worldwide.</p>
				<h3><a href="/projects/project-odyssey">Project Odyssey</a></h3>
				<div aria-hidden className={mikeintoshInfoBarStyles.mikeintoshInfoBar}>
					<h4>Concept / Design / Physical Installation, Rochester Institute of Technology</h4>
					<h5>Sep ’11 - Jun ’12</h5>
				</div>
				<p>Odyssey was a 360-degree audio-visual interactive experience, incorporating motion controls with Kinect to allow for free motion. We developed a solution which fully immerses the user’s senses, offering an experience that is engaging and comparable to real life.</p>
				<p>We created an installation which combined a physical cylindrical screen made of plastic piping and stretchable fabric, and four short-throw projectors with image stitching software applied to create the display solution. We also incorporated 5.1 surround sound speakers and Kinect-based motion controls to control movement. We developed software in Unity and designed it to be experienced exclusively on the Odyssey platform.</p>
				<p>We planned to further develop our software to take advantage of the innovative properties of the Odyssey platform, and refine the motion controls to deliver the most intuitive control scheme possible. We also intended to develop a permanent mounting system for our installation, and presented a near production-quality iteration of Odyssey at 2012's ImagineRIT Festival. After graduation, future development of Project Odyssey was put on hold.</p>
				<h3>Sugar Labs</h3>
				<div aria-hidden className={mikeintoshInfoBarStyles.mikeintoshInfoBar}>
					<h4>Web Design, Rochester Institute of Technology</h4>
					<h5>Feb - May ’11</h5>
				</div>
				<p>Worked with Sugar Labs to redesign their website through research, user testing, and interviews. Designed comprehensive new website structure catering to multiple groups of users, including children. Responsibilities included developing structure for new site, collecting demographic data from various groups of users, and brainstorming basic layout options, as well as gathering content from Sugar Labs locations around the globe, including translating content from Spanish to English. (Expected to launch in early 2012)</p>
				<h3>Fortune Hunter</h3>
				<div aria-hidden className={mikeintoshInfoBarStyles.mikeintoshInfoBar}>
					<h4>Character Design, Rochester Institute of Technology</h4>
					<h5>Dec ’09 - May ’10</h5>
				</div>
				<p>Served as artist on a team designing games for the One Laptop Per Child’s Python-based XO device. Responsibilities included character design and vector graphic design in Illustrator, as well as research into animation on low-power devices. Available for download at <a href = "wiki.sugarlabs.org/go/Fortune_Hunter"> wiki.sugarlabs.org/go/Fortune_Hunter</a>. (Prototype in progress)</p>
				<h3>Neighborhood Nerd</h3>
				<div aria-hidden className={mikeintoshInfoBarStyles.mikeintoshInfoBar}>
					<h4>Graphic Design</h4>
					<h5>Nov ’08 - Feb ’09</h5>
				</div>
				<p>Devised branding strategy for self-started company including logos, site signs, stickers, styled forms, and other merchandise.</p>
				<h3>’The Club’ Promotional Branding</h3>
				<div aria-hidden className={mikeintoshInfoBarStyles.mikeintoshInfoBar}>
					<h4>Graphic, Industrial, & Packaging Design, Boys & Girls Club of Suffolk County</h4>
					<h5>Oct - Dec ’07</h5>
				</div>
				<p>Developed and implemented multimedia marketing campaign for teen after school program comprised of print, merchandising, and installation efforts.</p>
				<h3>Compass Newspaper</h3>
				<div aria-hidden className={mikeintoshInfoBarStyles.mikeintoshInfoBar}>
					<h4>Graphic Design, Suffolk County Community College</h4>
					<h5>Sep ’06 - Dec ’08</h5>
				</div>
				<p>Oversaw complete rebranding process of Suffolk County Community College’s award-winning ‘Compass’ newspaper. Responsibilities included conception of new logo and style guide for print, complete redesign of newspaper layout, and replacement of legacy branding.</p>
      </section>
			<section>
				<h2>Work Experience</h2>
				<h3>343 Industries</h3>
				<div aria-hidden className={mikeintoshInfoBarStyles.mikeintoshInfoBar}>
					<h4>Software Engineer III</h4>
					<h5>Feb ’21 - Jan ’23</h5>
				</div>
				<ul>
					<li>Created and drove adoption of a modern React/Redux/Electron desktop app to replace a legacy .NET tool, coordinating API design with backend engineers and integrating with other internally-developed software.</li>
					<li>Solved technical debt problems by applying modern WPF design standards and best practices to refactoring a decade-old .NET code base and sustainably maintaining the new tooling.</li>
					<li>Updated and maintained a legacy .NET tool used studio-wide for managing local builds, refactoring to apply modern WPF design standards and best practices to a more than decade-old codebase, while resolving UI inconsistencies which were resulting in user confusion and repeated bug submissions.</li>
        </ul>
				<h3>CDK Global</h3>
				<div aria-hidden className={mikeintoshInfoBarStyles.mikeintoshInfoBar}>
					<h4>Front-End React Developer</h4>
					<h5>Feb ’20 - Sep ’20</h5>
				</div>
				<ul>
					<li>Implemented new features in a legacy React codebase and added extensive test coverage to the existing code, increasing reliability and solving new business needs.</li>
					<li>Replaced a legacy Angular tool with a modern React equivalent, incorporating modern techniques and tools using TDD methodology while building feature parity with the legacy app, including client-side PDF generation and internationalization support.</li>
					<li>Submitted multiple bug fixes and compatibility updates to an internally-developed UI component library used company-wide, coordinating with dedicated internal UI team.</li>
				</ul>
				<h3>Horizon Realty Advisors</h3>
				<div aria-hidden className={mikeintoshInfoBarStyles.mikeintoshInfoBar}>
					<h4>Full-Stack Developer</h4>
					<h5>Aug ’19 - Jan ’20</h5>
				</div>
				<ul>
					<li>Updated and maintained a legacy Laravel-based codebase, implemented new features using flexible, agile development practices</li>
					<li>Enhanced and maintained a newly-built internal CRM application built in Laravel and Vue.js + Vuetify, ensuring compliance with ADA accessibility standards and decoupling functional and interface code, in preparation for development of upcoming mobile app</li>
					<li>Spearheaded initiative to replace internal web-to-print portal, conducting research and analysis of various vendors and liasoning with Design and Development teams</li>
					<li>Designed and built data visualizations for Marketing team using Chart.js and Vuetify, with endpoints on the backend to Entrata and Google Analytics REST APIs</li>
        </ul>
				<h3>Holland America Line</h3>
				<div aria-hidden className={mikeintoshInfoBarStyles.mikeintoshInfoBar}>
					<h4>Web Developer</h4>
					<h5>Jan ’18 - Nov ’18</h5>
				</div>
				<ul>
					<li>Updated and refactored an outdated codebase, implemented new features using flexible, agile development practices</li>
					<li>Adapted strategies for changing business needs and expectations; created functional connections between legacy and modern web applications</li>
					<li>Enhanced and maintained client-facing e-commerce applications built in Angular, ensuring compliance with ADA accessibility standards</li>
					<li>Built and implemented third party payment service, GDPR compliance, and internationalization features</li>
					<li>Incorporated legacy work into modern infrastructure utilizing API endpoints and token-based authentication to securely transmit user data</li>
					<li>Tested and remedied bugs in new releases for React based web applications</li>
        </ul>
				<h3>Symplicity Corporation</h3>
				<div aria-hidden className={mikeintoshInfoBarStyles.mikeintoshInfoBar}>
					<h4>Front-End Developer II</h4>
					<h5>Jun ’12 - Dec ’17</h5>
				</div>
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
				<div aria-hidden className={mikeintoshInfoBarStyles.mikeintoshInfoBar}>
					<h4>Owner / Chief Technician</h4>
					<h5>Nov ’08 - Jun ’12</h5>
				</div>
				<p>Founded and operated computer repair service based around an innovative new business model; devised branding strategy.</p>
				<h3>Boys & Girls Club of Suffolk County</h3>
				<div aria-hidden className={mikeintoshInfoBarStyles.mikeintoshInfoBar}>
					<h4>After School & Summer Camp Counselor / Computer Technician / Computers & Technology Instructor</h4>
					<h5>Oct ’07 - Aug ’09</h5>
				</div>
				<p>In addition to roles listed above, also provided work as promotional advisor. Developed and implemented multimedia marketing campaign for teen after school program comprised of print, merchandising, and installation efforts.</p>
			</section>
			<section>
				<h2>Additional Experience</h2>
				<h3>Young Democrats of Washington</h3>
				<div aria-hidden className={mikeintoshInfoBarStyles.mikeintoshInfoBar}>
					<h4>Vice President of Technology / Vice President of Operations / Tech Director</h4>
					<h5>Feb ’18 - Jun ’22</h5>
				</div>
				<ul>
					<li>Spearheaded initiative to build a robust, scalable multisite WordPress installation with sites for each YDWA chapter (current stable version viewable <a href="https://ydwa.org/demo/" target="_blank">here</a>)</li>
					<li>Developed custom theme in PHP using a fork of established parent theme while editing and adding features, including simplified Customizer menus, integrated plugins, streamlined color customization options, role-based feature toggles, bindable shortcodes, and automatic importing / syncing of Facebook events</li>
					<li>Built hierarchical user and role functionality for end-users and clients, with contextual features for each access level</li>
					<li>Incorporated third-party services and plugins, including SEO optimization via Google Search Console and Yoast, mailing list management via MailChimp, analytics via Google Analytics, recurring payments and membership subscriptions, and POS functionality via PayPal and WooCommerce</li>
					<li>Managed G Suite installation for organization-wide use, prevented several attempted cyberattacks</li>
					<li>Created and managed robust membership database using Airtable, providing demographic data and visualizations for organizational use</li>
					<li>Implemented several successful statewide elections for members to participate in virtually, leveraging existing data structures and creating new pipelines for safe and secure transmission, storage, and counting of ballots</li>
        </ul>
				<h3>Project Odyssey</h3>
				<div aria-hidden className={mikeintoshInfoBarStyles.mikeintoshInfoBar}>
					<h4>Concept / Design / Physical Installation</h4>
					<h5>Sep ’11 - May ’12</h5>
				</div>
				<p>Conceived and co-developed Odyssey, an innovative interactive platform utilizing a custom-designed 360-degree display installation, surround sound, and Kinect motion controls. Original software was developed in Unity specifically built to run on the Odyssey platform. Responsible for inception of and research into overall concepts, and design and construction of physical installation. First prize winner at the RIT Winter 2012 Research & Innovation Symposium. More info available <a href="https://www.facebook.com/projectodyssey" target="_blank">here</a>. Concluded after ImagineRIT festival in May ’12.</p>
			</section>
			<section>
			<h2>Education</h2>
				<h3>Rochester Institute of Technology</h3>
				<div aria-hidden className={mikeintoshInfoBarStyles.mikeintoshInfoBar}>
					<h4>B.S. Degree, New Media Interactive Development / Concentration, Global Studies (Japanese)</h4>
					<h5>Class of 2012. Rochester, NY</h5>
				</div>
				<h3>Suffolk County Community College</h3>
				<div aria-hidden className={mikeintoshInfoBarStyles.mikeintoshInfoBar}>
					<h4>A.A.S. Degree, Computer Art</h4>
        	<h5>Class of 2008. Selden, NY</h5>
        </div>
				</section>
				<Nav parent={{
					label: 'Resumes',
					path: '/resumes',
				}} />
      </article>
  );
}