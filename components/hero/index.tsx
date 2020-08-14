import React, { ReactElement } from 'react';
import { RichText } from 'prismic-reactjs';
import styles from './hero.module.scss';

interface Props {
	img: {
		Mobile: {
			url: string;
			alt: string;
		};
		Tablet: {
			url: string;
			alt: string;
		};
		alt: string;
		copyright: any;
		dimensions: object;
		url: string;
	};
	heroText: object;
}

function Hero({ img, heroText }: Props): ReactElement {
	return (
		<React.Fragment>
			<picture className={styles.hero__image}>
				<source
					srcSet={img.Mobile.url}
					// @ts-ignore
					alt={img.Mobile.alt}
					media="(max-width: 500px)"
				/>

				<source
					srcSet={img.Tablet.url}
					// @ts-ignore
					alt={img.Tablet.alt}
					media="(max-width: 900px)"
				/>

				<img
					// @ts-ignore
					src={img.url}
					alt={img.alt}
				/>

				<div>
					<RichText
						// @ts-ignore
						render={heroText}
					/>
				</div>
			</picture>
		</React.Fragment>
	);
}

export default Hero;