import React, { ReactElement, useRef, useEffect, useState } from 'react';
import Hero from '../hero';
import styles from './hero_section.module.scss';
import gsap, { TimelineMax, Power4, Elastic } from 'gsap';

interface Props {
	heroImage: any
	heroTitle: any
}

function HeroSection({ heroImage, heroTitle }: Props): ReactElement {

	const [ isMob, setIsMob ] = useState(true);

	let heroRef = useRef(null);

	useEffect(() => {
		if (window.innerWidth > 600) {
			setIsMob(false);
		}
		beginAnimations();
	})

	const beginAnimations = () => {
		let heroTl = new TimelineMax();
			heroTl
				.to(heroRef.current, .5, { opacity: 1 }, 'nav-slammed-in+=1')
				.fromTo(heroRef.current, 2, { y: 90 }, { y: isMob ? -40 : 20, ease: Elastic.easeInOut }, '+=0.3');
	}
	return (
		<section className="rocket-section">
			<div ref={heroRef} className={styles.homePageSVGContainer}>
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