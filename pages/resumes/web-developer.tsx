import utilStyles from 'styles/utils.module.css';
import Layout from '../../components/layout';

export default function WebDeveloperResume() {
    return (
    <Layout>
        <article>
            <section>
				<h1>About</h1>
				<p>Full-stack/frontend web developer with 7 years of experience in customer-facing and internal web software, government, CMS, ecommerce, property management, and higher education. Expertise in agile software development within React, Redux, Vue.js, AngularJS, and Laravel frameworks involving complex workflows. Knowledgeable in modernization projects, internationalization, and accessibility/508 compliance requirements.</p>
                <p>Work samples viewable <a href="https://www.pixel-shredder.com/port/" target="_blank">here</a>, and on <a href="https://github.com/pixelSHREDDER/" target="_blank">GitHub</a>.</p>
                <ul className="table">
					<table>
						<tr>
							<td colSpan={2}><h2>Skills</h2></td>
						</tr>
						<tr>
							<td><li>Responsove Design</li></td>
							<td><li>Atomic Design</li></td>
						</tr>
						<tr>
							<td><li>Scalable UI Libraries</li></td>
							<td><li>Accessibility/508 Compliance</li></td>
						</tr>
						<tr>
							<td><li>Internationalization</li></td>
							<td><li>SEO</li></td>
						</tr>
					</table>
					<table>
						<tr>
							<td><h2>Code</h2></td>
							<td><h2>Web</h2></td>
						</tr>
						<tr>
							<td><li>JavaScript ES6</li></td>
							<td><li>React</li></td>
						</tr>
						<tr>
							<td><li>HTML</li></td>
							<td><li>Redux</li></td>
						</tr>
						<tr>
							<td><li>CSS/Sass/Less</li></td>
							<td><li>Vue.js</li></td>
						</tr>
						<tr>
							<td><li>PHP</li></td>
							<td><li>AngularJS</li></td>
						</tr>
						<tr>
							<td><li>XML</li></td>
							<td><li>Laravel</li></td>
						</tr>
						<tr>
							<td><li>JSON</li></td>
							<td><li>Node</li></td>
						</tr>
						<tr>
							<td><li>SQL</li></td>
							<td><li>REST APIs/oAuth</li></td>
						</tr>
						<tr>
							<td><li>C#</li></td>
							<td><li>MongoDB/Mongoose</li></td>
						</tr>
						<tr>
							<td><li>ColdFusion</li></td>
							<td><li>Material/Bootstrap</li></td>
						</tr>
						<tr>
							<td><li>ActionScript</li></td>
							<td><li>JSX/Jekyll/Liquid/Smarty</li></td>
						</tr>
					</table>
					<table>
						<tr>
							<td colSpan={2}><h2>Tools</h2></td>
						</tr>
						<tr>
							<td><li>WordPress</li></td>
							<td><li>Git/SVN</li></td>
						</tr>
						<tr>
							<td><li>NPM</li></td>
							<td><li>Bower</li></td>
						</tr>
						<tr>
							<td><li>Composer</li></td>
							<td><li>Grunt/Gulp</li></td>
						</tr>
						<tr>
							<td><li>MongoDB Atlas</li></td>
							<td><li>Auth0</li></td>
						</tr>
						<tr>
							<td><li>Adobe CC</li></td>
							<td><li>Flex Builder</li></td>
						</tr>
					</table>
				</ul>
			</section>
			<section>
				<h1>Professional Experience</h1>
				<br/>
                <h2>Horizon Realty Advisors</h2>
                <h3>Full-Stack Developer</h3>
                <h3>Aug ’19 - Jan ’20</h3>
                <ul>
                    <li>Updated and maintained a legacy Laravel-based codebase, implemented new features using flexible, agile development practices</li>
					<li>Enhanced and maintained a newly-built internal CRM application built in Laravel and Vue.js + Vuetify, ensuring compliance with ADA accessibility standards and decoupling functional and interface code, in preparation for development of upcoming mobile app</li>
					<li>Spearheaded initiative to replace internal web-to-print portal, conducting research and analysis of various vendors and liasoning with Design and Development teams</li>
					<li>Designed and built data visualizations for Marketing team using Chart.js and Vuetify, with endpoints on the backend to Entrata and Google Analytics REST APIs</li>
                </ul>
				<br/>
				<h2>Holland America Line</h2>
                <h3>Web Developer</h3>
                <h3>Jan ’18 - Nov ’18</h3>
                <ul>
					<li>Updated and refactored an outdated codebase, implemented new features using flexible, agile development practices</li>
					<li>Adapted strategies for changing business needs and expectations; created functional connections between legacy and modern web applications</li>
					<li>Enhanced and maintained client-facing e-commerce applications built in Angular, ensuring compliance with ADA accessibility standards</li>
					<li>Built and implemented third party payment service, GDPR compliance, and internationalization features</li>
					<li>Incorporated legacy work into modern infrastructure utilizing API endpoints and token-based authentication to securely transmit user data</li>
					<li>Tested and remedied bugs in new releases for React based web applications</li>
                </ul>
				<br/>
                <h2>Symplicity Corporation</h2>
                <h3>Front-End Developer II</h3>
                <h3>Jun ’12 - Dec ’17</h3>
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
				<br/>
                <h2>Neighborhood Nerd</h2>
                <h3>Owner / Chief Technician</h3>
                <h3>Nov ’08 - Jun ’12</h3>
                <p>Founded and operated computer repair service based around an innovative new business model; devised branding strategy.</p>
				<br/>
                <h2>Boys & Girls Club of Suffolk County</h2>
                <h3>After School & Summer Camp Counselor /</h3>
                <h3>Computer Technician /</h3>
                <h3>Computers & Technology Instructor</h3>
				<h3>Oct ’07 - Aug ’09</h3>
				<p>In addition to roles listed above, also provided work as promotional advisor. Developed and implemented multimedia marketing campaign for teen after school program comprised of print, merchandising, and installation efforts.</p>
            </section>
			<section>
				<h1>Education</h1>
				<br/>
				<h2>Rochester Institute of Technology</h2>
				<h3>B.S. Degree, New Media Interactive Development</h3>
				<h3>Concentration, Global Studies (Japanese)</h3>
				<p>Class of 2012. Rochester, NY</p>
				<br/>
				<h2>Suffolk County Community College</h2>
				<h3>A.A.S. Degree, Computer Art</h3>
                <p>Class of 2008. Selden, NY</p>
            </section>
			<section>
				<h1>Additional Experience</h1>
				<br/>
                <h2>Young Democrats of Washington</h2>
                <h3>Vice President of Operations /</h3>
                <h3>Tech Director</h3>
                <h3>Feb ’18 - Present</h3>
                <ul>
					<li>Spearheaded initiative to build a robust, scalable multisite WordPress installation with sites for each YDWA chapter (current stable version viewable <a href="https://ydwa.org/demo/" target="_blank">here</a>)</li>
					<li>Developed custom theme in PHP using a fork of established parent theme while editing and adding features, including simplified Customizer menus, integrated plugins, streamlined color customization options, role-based feature toggles, bindable shortcodes, and automatic importing / syncing of Facebook events</li>
					<li>Built hierarchical user and role functionality for end-users and clients, with contextual features for each access level</li>
					<li>Incorporated third-party services and plugins, including SEO optimization via Google Search Console and Yoast, mailing list management via MailChimp, analytics via Google Analytics, recurring payments and membership subscriptions, and POS functionality via PayPal and WooCommerce</li>
					<li>Managed G Suite installation for organization-wide use, prevented several attempted cyberattacks</li>
                </ul>
				<br/>
				<h2>Project Odyssey</h2>
				<h3>Concept / Design /</h3>
                <h3>Physical Installation</h3>
				<h3>Sep ’11 - May ’12</h3>
                <p>Conceived and co-developed Odyssey, an innovative interactive platform utilizing a custom-designed 360-degree display installation, surround sound, and Kinect motion controls. Original software was developed in Unity specifically built to run on the Odyssey platform. Responsible for inception of and research into overall concepts, and design and construction of physical installation. First prize winner at the RIT Winter 2012 Research & Innovation Symposium. More info available <a href="https://www.facebook.com/projectodyssey" target="_blank">here</a>. Concluded after ImagineRIT festival in May ’12.</p>
                <br/>
				<h2>Just Press Play, Rochester Institute of Technology</h2>
				<h3>Content Development</h3>
				<h3>Sep - Nov ’11</h3>
                <p>Involved with creation of various pieces of content for Microsoft-sponsored student achievement system prior to launch, including documentation. Responsibilities included providing user experience feedback, developing new Achievements and the metadata associated with them, basic front-end website debugging, and various promotional duties. Also produced copy for documentation given to new players, and provided rough draft of EULA for website. Available to view <a href="http://play.rit.edu/" target="_blank">here</a>. (Launched Nov. 2011)</p>
				<br/>
				<h2>Sugar Labs</h2>
				<h3>Website Redesign (Co-op)</h3>
				<h3>Feb - May ’11</h3>
                <p>Worked with Sugar Labs to redesign their website through research, user testing, and interviews. Designed comprehensive new website structure catering to multiple groups of users, including children. Responsibilities included developing structure for new site, collecting demographic data from various groups of users, and brainstorming basic layout options, as well as gathering content from Sugar Labs locations around the globe, including translating content from Spanish to English. (Expected to launch in early 2012)</p>
				<br/>
				<h2>Fortune Hunter</h2>
				<h3>Character Artist</h3>
				<h3>Dec ’09 - May ’10</h3>
                <p>Served as artist on a team designing games for the One Laptop Per Child’s Python-based XO device. Responsibilities included character design and vector graphic design in Illustrator, as well as research into animation on low-power devices. Available for download <a href="http://wiki.sugarlabs.org/go/Fortune_Hunter" target="_blank">here</a>. (Prototype in progress)</p>
			</section>
            <section>
                <h2><a href="choose-your-destiny.html">⇦ Back</a></h2>
            </section>
        </article>
        </Layout>
    );
  }
  