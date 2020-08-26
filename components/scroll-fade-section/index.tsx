import React, { useRef, useEffect } from 'react';
import { useIntersection } from 'react-use';
//@ts-ignore
import Geek from '../../svgs/geek.svg';
import ImagesAndActionPoints from '../images-actions-points';
import { TimelineMax, Power3 } from 'gsap';
import styles from './scroll-fade.module.scss';

function ScrollFadeSection() {
	let secondSectionRef = useRef(null);
	let svgRef = useRef(null);
	let svgTitleRef = useRef(null);

	const intersectionTwo = useIntersection(secondSectionRef, {
		root: null,
		rootMargin: '0px',
		threshold: 0.65,
	});

	const fromFigure = '-100%';
	const toFigure = '0%';

	useEffect(() => {
		var clearTl = new TimelineMax();
		clearTl.set(svgTitleRef.current, { opacity: 0 });

	}, []);

	const slideInSVG = () => {
		let slideInTl = new TimelineMax();
		if (process.browser) {
			slideInTl
				.fromTo(
					svgRef.current,
					0.4,
					{
						x: fromFigure,
						opacity: 0,
					},
					{
						x: toFigure,
						opacity: 1,
					}
				)
				.fromTo(
					svgTitleRef.current,
					0.4,
					{
						y: 100,
						autoAlpha: 0,
					},
					{
						y: 0,
						// opacity: 1,
						autoAlpha: 1,
					},
					'svg-has-slide-in-=0.3'
				)
				.to(secondSectionRef.current, 0.7, {
					backgroundColor: 'orange',
					ease: Power3.easeOut,
				})
				.add('svg-has-slid-in');
		}
	};

	const slideOutSVG = () => {
		let slideOutTl = new TimelineMax();
		if (process.browser) {
			slideOutTl
				.fromTo(
					svgRef.current,
					0.4,
					{
						x: toFigure,
						opacity: 1,
					},
					{
						x: fromFigure,
						opacity: 0,
					}
				)
				.fromTo(
					svgTitleRef.current,
					0.4,
					{
						y: 0,
						autoAlpha: 1,
					},
					{
						y: 100,
						autoAlpha: 0,
					}
				)
				.to(secondSectionRef.current, 0.7, {
					backgroundColor: 'white',
					ease: Power3.easeOut,
				})
				.add('svg-has-slid-out');
		}
	};

	intersectionTwo && intersectionTwo.intersectionRatio < 0.65 ? slideOutSVG() : slideInSVG();

	return (
		<section className={styles.orange_section} ref={secondSectionRef}>
			<div className={styles.firstCol}>
				<div ref={svgRef} className={styles.svgWrapper}>
					<Geek />
				</div>
				<div ref={svgTitleRef} className={styles.svgTitleWrapper}>
					<h2 className={styles.svgTitle}>Modern Design</h2>
				</div>
			</div>
			<div className={styles.secondCol}>
				<ImagesAndActionPoints pic1={'/pic1.png'} pic2={'/pic2.png'} pic3={'/pic3.png'} />
			</div>
		</section>
	);
}

export default ScrollFadeSection;
