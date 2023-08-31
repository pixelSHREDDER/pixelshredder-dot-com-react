import styles from '@/app/utils.module.css';
import Nav from '@/components/Nav';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mike DeVine | Civic Engagement & Grassroots Politics Résumé',
  description: 'Nearly a decade of experience at various levels of government and organizing',
}

export default function CivicsPoliticsResume() {
  return (
    <article className={styles.darkmode}>
			<Nav parent={{
				label: 'Resumes',
				path: '/resumes',
			}} />
			<h1>Résumé</h1>
			<section>
				<h2>About</h2>
				<p>I worked for years with various government entities during my time in Arlington, VA, but was only driven to take political action after the 2016 presidential election. I believe that the problems our society faces are systemic, long-term, and will require a generational effort by individuals driven to secure a future for themselves, and for those who come after.</p>
      </section>
			<section>
				<h2>Experience</h2>
				<h3>Vice President of Technology</h3>
				<h4>Young Democrats of Washington</h4>
        <h5>Feb ’21 - Jun ’22</h5>
        <ul>
					<li>Spearheaded initiative to build a robust, scalable multisite WordPress installation with sites for each YDWA chapter (current stable version viewable <a href="https://ydwa.org/demo/" target="_blank">here</a>)</li>
					<li>Developed custom theme in PHP using a fork of established parent theme while editing and adding features, including simplified Customizer menus, integrated plugins, streamlined color customization options, role-based feature toggles, bindable shortcodes, and automatic importing / syncing of Facebook events</li>
					<li>Built hierarchical user and role functionality for end-users and clients, with contextual features for each access level</li>
					<li>Incorporated third-party services and plugins, including SEO optimization via Google Search Console and Yoast, mailing list management via MailChimp, analytics via Google Analytics, recurring payments and membership subscriptions, and POS functionality via PayPal and WooCommerce</li>
					<li>Managed G Suite installation for organization-wide use, prevented several attempted cyberattacks</li>
        </ul>
				<h3>At-Large Director East</h3>
        <h4>King County Young Democrats</h4>
        <h5>Feb ’19 - Jan ’21</h5>
        <ul>
					<li>Spearheaded initiative to build a robust, scalable multisite WordPress installation with sites for each YDWA chapter (current stable version viewable <a href="https://ydwa.org/demo/" target="_blank">here</a>)</li>
				</ul>
				<h3>Poll Observer</h3>
        <h4>Pennsylvania Democrats</h4>
        <h5>Sep - Nov ’20</h5>
        <ul>
					<li>Spearheaded initiative to build a robust, scalable multisite WordPress installation with sites for each YDWA chapter (current stable version viewable <a href="https://ydwa.org/demo/" target="_blank">here</a>)</li>
				</ul>
				<h3>Nerd Caucus Chair</h3>
        <h4>Young Democrats of Washington</h4>
        <h5>May ’19 - Aug ’21</h5>
        <ul>
					<li>Spearheaded initiative to build a robust, scalable multisite WordPress installation with sites for each YDWA chapter (current stable version viewable <a href="https://ydwa.org/demo/" target="_blank">here</a>)</li>
				</ul>
				<h3>Technology Co-Director</h3>
				<h4>Young Democrats of Washington</h4>
        <h5>Feb ’20 - Jun ’21</h5>
        <ul>
					<li>Spearheaded initiative to build a robust, scalable multisite WordPress installation with sites for each YDWA chapter (current stable version viewable <a href="https://ydwa.org/demo/" target="_blank">here</a>)</li>
					<li>Developed custom theme in PHP using a fork of established parent theme while editing and adding features, including simplified Customizer menus, integrated plugins, streamlined color customization options, role-based feature toggles, bindable shortcodes, and automatic importing / syncing of Facebook events</li>
					<li>Built hierarchical user and role functionality for end-users and clients, with contextual features for each access level</li>
					<li>Incorporated third-party services and plugins, including SEO optimization via Google Search Console and Yoast, mailing list management via MailChimp, analytics via Google Analytics, recurring payments and membership subscriptions, and POS functionality via PayPal and WooCommerce</li>
					<li>Managed G Suite installation for organization-wide use, prevented several attempted cyberattacks</li>
        </ul>
				<h3>Technology Committee Chair / Co-Chair</h3>
        <h4>45th District Democrats</h4>
        <h5>Jan ’20 - Oct ’21</h5>
        <ul>
					<li>Spearheaded initiative to build a robust, scalable multisite WordPress installation with sites for each YDWA chapter (current stable version viewable <a href="https://ydwa.org/demo/" target="_blank">here</a>)</li>
				</ul>
				<h3>Vice President of Operations</h3>
        <h4>Young Democrats of Washington</h4>
        <h5>May ’19 - Jun ’20</h5>
        <ul>
					<li>Spearheaded initiative to build a robust, scalable multisite WordPress installation with sites for each YDWA chapter (current stable version viewable <a href="https://ydwa.org/demo/" target="_blank">here</a>)</li>
					<li>Developed custom theme in PHP using a fork of established parent theme while editing and adding features, including simplified Customizer menus, integrated plugins, streamlined color customization options, role-based feature toggles, bindable shortcodes, and automatic importing / syncing of Facebook events</li>
					<li>Built hierarchical user and role functionality for end-users and clients, with contextual features for each access level</li>
					<li>Incorporated third-party services and plugins, including SEO optimization via Google Search Console and Yoast, mailing list management via MailChimp, analytics via Google Analytics, recurring payments and membership subscriptions, and POS functionality via PayPal and WooCommerce</li>
					<li>Managed G Suite installation for organization-wide use, prevented several attempted cyberattacks</li>
        </ul>
				<h3>King County Young Democrats Representative</h3>
        <h4>45th District Democrats</h4>
        <h5>Jan ’19 - Oct ’21</h5>
        <ul>
					<li>Spearheaded initiative to build a robust, scalable multisite WordPress installation with sites for each YDWA chapter (current stable version viewable <a href="https://ydwa.org/demo/" target="_blank">here</a>)</li>
				</ul>
				<h3>PCO</h3>
        <h4>45th District Democrats</h4>
        <h5>Jan ’19 - Oct ’21</h5>
        <ul>
					<li>Spearheaded initiative to build a robust, scalable multisite WordPress installation with sites for each YDWA chapter (current stable version viewable <a href="https://ydwa.org/demo/" target="_blank">here</a>)</li>
				</ul>
				<h3>Technology Director</h3>
				<h4>Young Democrats of Washington</h4>
        <h5>Feb ’18 - May ’19</h5>
        <ul>
					<li>Spearheaded initiative to build a robust, scalable multisite WordPress installation with sites for each YDWA chapter (current stable version viewable <a href="https://ydwa.org/demo/" target="_blank">here</a>)</li>
					<li>Developed custom theme in PHP using a fork of established parent theme while editing and adding features, including simplified Customizer menus, integrated plugins, streamlined color customization options, role-based feature toggles, bindable shortcodes, and automatic importing / syncing of Facebook events</li>
					<li>Built hierarchical user and role functionality for end-users and clients, with contextual features for each access level</li>
					<li>Incorporated third-party services and plugins, including SEO optimization via Google Search Console and Yoast, mailing list management via MailChimp, analytics via Google Analytics, recurring payments and membership subscriptions, and POS functionality via PayPal and WooCommerce</li>
					<li>Managed G Suite installation for organization-wide use, prevented several attempted cyberattacks</li>
        </ul>
				<h3>Front-End Developer</h3>
				<h4>Symplicity Corporation</h4>
        <h5>Jun ’12 - Dec ’17</h5>
        <ul>
					<li>Built responsive, mobile-first websites for high-level government clients</li>
					<li>Used myriad government data sources in projects, including THOMAS and congress.gov</li>
				</ul>
        <h3>Neighborhood Nerd</h3>
        <h4>Owner / Chief Technician</h4>
        <h5>Nov ’08 - Jun ’12</h5>
        <p>Founded and operated computer repair service based around an innovative new business model; devised branding strategy.</p>
        <h3>Boys & Girls Club of Suffolk County</h3>
        <h4>After School & Summer Camp Counselor / Computer Technician / Computers & Technology Instructor</h4>
				<h5>Oct ’07 - Aug ’09</h5>
				<p>In addition to roles listed above, also provided work as promotional advisor. Developed and implemented multimedia marketing campaign for teen after school program comprised of print, merchandising, and installation efforts.</p>
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
				<h2>Additional Skills</h2>
				<ul className={styles.skills}>
					<li>JavaScript</li>
					<li>HTML</li>
					<li>CSS/SASS/LESS</li>
					<li>PHP</li>
					<li>XML</li>
					<li>JSON</li>
					<li>SQL</li>
					<li>C#</li>
				</ul>
			</section>
			<Nav parent={{
				label: 'Resumes',
				path: '/resumes',
			}} />
    </article>
  );
}