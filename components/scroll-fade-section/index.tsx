import React, { useRef, useEffect } from 'react';
import { useIntersection } from 'react-use';
//@ts-ignore
import Geek from '../../svgs/geek.svg';
import Card from '../card';

import { TimelineMax, Power3, Elastic } from 'gsap';
import styles from './scroll-fade.module.scss';

const projects = [
	{
		title: 'Tradenation',
		text:
			'Server-Side Rendered web-app for the TN platform. Bringing simplicity and a web 3.0 presence to Retail FX Trading.',
		techs: ['react', 'redux', 'node', 'scss'],
		imageOne: '/tn.jpg',
		imageTwo: '/tn2.jpg',
		link: 'https://tradenation.com',
	},
	{
		title: 'Sky Go',
		text: "Desktop application offering live stream and downloaded content from Europe's biggest broadcaster.",
		techs: ['react', 'redux', 'node', 'css'],
		imageOne: '/sky.jpg',
		imageTwo: '/sky2.jpg',
		link: 'https://www.sky.com/watch/sky-go/windows',
	},
	{
		title: 'Infabode',
		text:
			'NextJS app providing news feeds and Social Media elements to professionals specifically in the Prop-Tech industry.',
		techs: ['next', 'redux', 'css', 'gql'],
		imageOne: '/infabode.jpg',
		imageTwo: '/infabode2.jpg',
		link: 'https://infabode.com',
	},
	{
		title: 'The Panda Riot',
		text: 'NextJS desktop app for comedians in London. Includes news, video, voting and a useful map of gigs.',
		techs: ['next', 'redux', 'firebase', 'css'],
		imageOne: '/tpr.jpg',
		imageTwo: '/tpr2.png',
		link: 'https://www.thepandariot.com/downloads',
	},
];
function ScrollFadeSection() {

	let secondSectionRef = useRef(null);
	let svgRef = useRef(null);
	let svgTitleRef = useRef(null);
	let strikeOneRef = useRef(null);

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
				.add('svg-has-slid-in')
				.fromTo(strikeOneRef.current, 0.5, {
					y: 0, scale: 0.2, opacity: 0, transformOrigin: 'center center'
				},{
					y: '-=15', scale: 1, opacity: 1, transformOrigin: 'center center', ease: Elastic.easeOut,
				}, 'svg-has-slid-in+=0.1');
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
				.add('svg-has-slid-out')
				.fromTo(strikeOneRef.current, 0.5, {
					y: '-=15', scale: 1, opacity: 1, transformOrigin: 'center center'
				},{
					y: 0, scale: 0.2, opacity: 0, transformOrigin: 'center center', ease: Elastic.easeOut,
				}, 'svg-has-slid-out+=0.1');
		}
	};

	intersectionTwo && intersectionTwo.intersectionRatio < 0.3 ? slideOutSVG() : slideInSVG();

	return (
		<section className={`portfolio-section ${styles.orange_section}`} ref={secondSectionRef}>
			<div className={styles.firstCol}>
				<div ref={strikeOneRef} className={styles.strikeOne} />
				<div className={styles.svgAndTitleContainer}>

					<div ref={svgRef} className={styles.svgWrapper}>
						<Geek />
					</div>
					<div ref={svgTitleRef} className={styles.svgTitleWrapper}>
						<h2 className={styles.svgTitle}>My Work</h2>
					</div>

				</div>
			</div>

			<div className={styles.secondCol}>
				{projects.map(({ title, text, techs, imageOne, imageTwo, link }, i) => {
					return (
						<Card
							key={i}
							title={title}
							text={text}
							techs={techs}
							imageOne={imageOne}
							imageTwo={imageTwo}
							link={link}
						/>
					);
				})}
			</div>
		</section>
	);
}

export default ScrollFadeSection;
