import React from 'react';
import Hero from '../hero';
import styles from './hero_section.module.scss';

function HeroSection({ heroImage, heroTitle }) {
	return (
		<section>
			<div className={styles.homePageSVGContainer}>
				<Hero
					// @ts-ignore
					img={heroImage}
					// @ts-ignore
					heroText={heroTitle}
				/>
			</div>
		</section>
	);
}

export default HeroSection;
