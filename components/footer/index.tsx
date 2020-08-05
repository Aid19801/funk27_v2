import React, { ReactElement } from 'react';
import { faFacebookF, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from './footer.module.scss';

interface Props {}

function Footer({}: Props): ReactElement {

	const handleClick = (location: string) => {
		
		let str = '';

		switch(location) {
			
			case 'facebook':
				str = "https://www.facebook.com/funkTwentySeven";
			break;

			case 'twitter':
				str = "https://www.twitter.com/funkTwentySeven/"
			break;

			case 'linkedin':
				str = "https://www.linkedin.com/company/funk-27"
			break;

			case 'email':
				window.location.href = "mailto:adrianThompson19801@gmail.com"+"&subject='email_website_query'";
			break;

			default:
				return;
		}
		return window.open(str);
	}
	return (
		<React.Fragment>
			<footer className={styles.footer}>
				
				<div className={styles.footerSocialsContainer}>
					<FontAwesomeIcon onClick={() => handleClick('facebook')} icon={faFacebookF} size="xs" />
					<FontAwesomeIcon onClick={() => handleClick('twitter')} icon={faTwitter} size="xs" />
					<FontAwesomeIcon onClick={() => handleClick('linkedin')} icon={faLinkedin} size="xs" />
					<FontAwesomeIcon onClick={() => handleClick('email')} icon={faMailBulk} size="xs" />
				</div>

				<div className="has-text-centered">
					<p className={styles.p}>
						<strong>Funk-27</strong> by <a href="https://github.com/Aid19801">Aid Thompson</a>. The source code is
						licensed
						<a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content is
						licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
					</p>
				</div>

			</footer>
		</React.Fragment>
	);
}

export default Footer;