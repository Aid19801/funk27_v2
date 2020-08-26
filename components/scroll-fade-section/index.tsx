import React, { useRef, useEffect, useState } from 'react';
import { useIntersection } from 'react-use';
//@ts-ignore
import Geek from '../../svgs/geek.svg';
import ReactLogo from '../../svgs/react_logo.svg';
import ReduxLogo from '../../svgs/redux.svg';
import SassLogo from '../../svgs/sass.svg';
import NodeLogo from '../../svgs/node.svg';
import GraphQLlogo from '../../svgs/GQL.svg';
import CSSLogo from '../../svgs/css.svg';
// import ImagesAndActionPoints from '../images-actions-points';
import { TimelineMax, Power3 } from 'gsap';
import styles from './scroll-fade.module.scss';

function ScrollFadeSection() {
	let secondSectionRef = useRef(null);
	let svgRef = useRef(null);
	let svgTitleRef = useRef(null);

	const intersectionTwo = useIntersection(secondSectionRef, {
		root: null,
		rootMargin: '0px',
		threshold: 0.3,
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

	intersectionTwo && intersectionTwo.intersectionRatio < 0.3 ? slideOutSVG() : slideInSVG();

	return (
		<section className={styles.orange_section} ref={secondSectionRef}>
			<div className={styles.firstCol}>
				<div ref={svgRef} className={styles.svgWrapper}>
					<Geek />
				</div>
				<div ref={svgTitleRef} className={styles.svgTitleWrapper}>
					<h2 className={styles.svgTitle}>My Work</h2>
				</div>
			</div>
			<div className={styles.secondCol}>
				<div className={styles.clientBox}>
					<img id="img" src="/tn.png" alt="client profile" />
					<h4>Tradenation.com</h4>
					<p>
						Server-Side Rendered Forex Community web-app for the TN trade platform. Bringing simplicity and
						a web 3.0 presence to Retail FX Trading.
					</p>
					<div className={styles.builtWith}>
						<p>Built with: </p>
						<ReactLogo />
						<ReduxLogo />
						<SassLogo />
						<NodeLogo />
					</div>

				</div>
				<div className={styles.clientBox}>
					<img id="img" src="/sky.png" alt="client profile" className={styles.smaller_logo} />
					<h4>Sky Go</h4>
					<p>
						Server Side Rendered Forex Community web-app for the TN trade platform. Bringing simplicity and
						a web 3.0 presence to Retail FX Trading.
					</p>
					<div className={styles.builtWith}>
						<p>Built with: </p>
						<ReactLogo />
						<ReduxLogo />
						<CSSLogo />
						<NodeLogo />
					</div>
				</div>
				<div className={styles.clientBox}>
					<img id="img" src="/infa.png" alt="client profile" />
					<h4>Infabode.com</h4>
					<p>
						Server Side Rendered Forex Community web-app for the TN trade platform. Bringing simplicity and
						a web 3.0 presence to Retail FX Trading.
					</p>
					<div className={styles.builtWith}>
						<p>Built with: </p>
						<ReactLogo />
						<ReduxLogo />
						<NodeLogo />
						<GraphQLlogo />
						<CSSLogo />
					</div>
				</div>
			</div>
		</section>
	);
}

export default ScrollFadeSection;
