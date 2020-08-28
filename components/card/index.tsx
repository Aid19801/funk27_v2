import React, { useRef, useEffect, useState } from 'react';
import { useIntersection } from 'react-use';
//@ts-ignore
import NextJSLogo from '../../svgs/nextjs.svg';
//@ts-ignore
import ReactLogo from '../../svgs/react_logo.svg';
//@ts-ignore
import ReduxLogo from '../../svgs/redux.svg';
//@ts-ignore
import SassLogo from '../../svgs/sass.svg';
//@ts-ignore
import NodeLogo from '../../svgs/node.svg';
//@ts-ignore
import GraphQLlogo from '../../svgs/GQL.svg';
//@ts-ignore
import CSSLogo from '../../svgs/css.svg';
//@ts-ignore
import FirebaseLogo from '../../svgs/firebase.svg';

import { TimelineMax, Power3 } from 'gsap';

import styles from './card.module.scss';

const SVGs = {
	node: NodeLogo,
	react: ReactLogo,
	redux: ReduxLogo,
	gql: GraphQLlogo,
	css: CSSLogo,
	scss: SassLogo,
	firebase: FirebaseLogo,
	next: NextJSLogo,
};
interface Props {
	title: string;
	text: string;
	techs: string[];
	img: string;
    someRef: any;
    link: string;
}

function Card({ title, text, techs, img, someRef }: Props) {
	let clientBoxRef = useRef(null);

	const cardIntersection = useIntersection(someRef, {
		root: null,
		rootMargin: '0px',
		threshold: 0.3,
	});

	const slideIn = () => {
		console.log('slide in again');
		let slideInTl = new TimelineMax();
		slideInTl.fromTo(
			clientBoxRef.current,
			1,
			{
				opacity: 0,
				y: 100,
			},
			{
				opacity: 1,
				y: 0,
				ease: Power3.easeIn,
			},
			`-=${Math.random()}`
		);
	};

	const slideOut = () => {
		console.log('slide out again');
		let slideOutTl = new TimelineMax();
		slideOutTl.fromTo(
			clientBoxRef.current,
			1,
			{
				opacity: 1,
				y: 0,
			},
			{
				opacity: 0,
				y: 100,
				ease: Power3.easeIn,
			}
		);
	};

	// cardIntersection && cardIntersection.intersectionRatio < .3 ? slideOut() : slideIn();

	return (
		<div className={styles.clientBox} ref={clientBoxRef}>
			<img id="img" src={img} alt="client profile" />
			
            <div className={styles.clientBoxInfo}>

            <h4>{title}</h4>
			<div className={styles.builtWith}>
				<p>Built with: </p>

				<div className={styles.flexRow}>
					{techs.map((each: any, i: number) => {
						const SVGComponent = SVGs[each];
						return <SVGComponent key={i} />;
					})}
				</div>
			</div>
            </div>
		</div>
	);
}

export default Card;
