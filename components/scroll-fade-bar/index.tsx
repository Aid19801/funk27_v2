import React, { useRef } from 'react';
import { useIntersection } from 'react-use';
import { TimelineMax, Power3, Back } from 'gsap';
import styles from './scroll-fade.module.scss';

function ScrollFadeSmokeBar({ text }) {
	let thirdSectionRef = useRef(null);
	let imgRef = useRef(null);
	let textRef = useRef(null);
	let lineOne = useRef(null);
	let lineTwo = useRef(null);

	const intersectionThree = useIntersection(thirdSectionRef, {
		root: null,
		rootMargin: '0px',
		threshold: 0.7,
	});

	const fadeInBackground = () => {
		let fadeInTl = new TimelineMax();
		fadeInTl
			.fromTo(imgRef.current, .8,
				{ autoAlpha: 0, y: 300 },
				{ autoAlpha: 1, y: 0, ease: Back.easeInOut }
			)
			.add('polygon-faded-in')
			.fromTo(textRef.current, .8, { opacity: 0 }, { opacity: 1, ease: Power3.easeOut }, 'polygon-faded-in+=0.2')
			.add('text-in')
			.fromTo(lineOne.current, .7, { opacity: 0, width: 0 }, { opacity: 1, width: 150, ease: Back.easeInOut }, 'text-in-=0.2')
			.fromTo(lineTwo.current, .5, { opacity: 0, width: 0 }, { opacity: 1, width: 150, ease: Back.easeInOut }, 'text-in-=0.2');

	};

	const fadeOutBackground = () => {
		let fadeOutTl = new TimelineMax();
		fadeOutTl
			.fromTo(imgRef.current, .6,
				{ autoAlpha: 1, y: 0 },
				{ autoAlpha: 0, y: 300, ease: Back.easeIn }
			)
			.add('polygon-faded-out')
			.fromTo(lineOne.current, .5, { opacity: 1, width: 150 }, { opacity: 0, width: 0, ease: Back.easeInOut }, 'polygon-faded-out-=0.2')
			.fromTo(lineTwo.current, .5, { opacity: 1, width: 150 }, { opacity: 0, width: 0, ease: Back.easeInOut }, 'polygon-faded-out-=0.2');
	};

	intersectionThree && intersectionThree.intersectionRatio > 0.7 ? fadeInBackground() : fadeOutBackground();

	return (
		<section className={styles.lightGrey_section} ref={thirdSectionRef}>

			<div className={styles.flexCenter}>
				<div className={styles.lineOne} ref={lineOne} />
			</div>

			<div ref={imgRef} className={styles.containPicture}>
				
				<h4 ref={textRef} className={styles.smokeText}>{text}</h4>

				<picture>
					<source
						media="(max-width: 768px)"
						srcSet="/small_smoke.jpg"
					/>
					<source
						media="(max-width: 1200px)"
						srcSet="/med_smoke.jpg"
					/>
					<source
						media="(min-width: 1201px)"
						srcSet="/xl_smoke.jpg"
					/>
					<img src="/xl_smoke.jpg" />
				</picture>
			</div>

			<div className={styles.flexCenter}>
				<div className={styles.lineOne} ref={lineTwo} />
			</div>
			
		</section>
	);
}

export default ScrollFadeSmokeBar;
