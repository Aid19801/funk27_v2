import { useEffect, useState, useRef } from 'react';
import { useIntersection } from 'react-use';
import { TimelineMax, Power3, Power4, Back } from 'gsap';
import styles from './action-points.module.scss';

interface Props {
	pic1: any;
	pic2: any;
	pic3: any;
}

function ImagesAndActionPoints({ pic1, pic2, pic3 }: Props) {
	const [newSrc, setNewSrc] = useState(pic1);

	let containerRef = useRef(null);

	let imgOneRef = useRef(null);
	let imgTwoRef = useRef(null);
	let imgThreeRef = useRef(null);

	let textOneRef = useRef(null);
	let textTwoRef = useRef(null);
	let textThreeRef = useRef(null);

	const containerIsIntersection = useIntersection(containerRef, {
		root: null,
		rootMargin: '0px',
		threshold: 0.9,
	});

	useEffect(() => {
		clearStage();
	}, []);

	useEffect(() => {
		console.log(1);
		if (containerIsIntersection && containerIsIntersection.intersectionRatio) {
			console.log(2);
			if (containerIsIntersection.intersectionRatio < 0.9) {
				console.log(3);
				slideOutEach();
			} else {
				console.log(4);
				slideInEach();
			}
		}
	}, [containerIsIntersection]);

	const clearStage = () => {
		var clearTl = new TimelineMax();
		clearTl
			.set(textOneRef.current, { autoAlpha: 0, visibility: 'inherit' })
			.set(textTwoRef.current, { autoAlpha: 0, visibility: 'inherit' })
			.set(textThreeRef.current, { autoAlpha: 0, visibility: 'inherit' })
			.set(imgOneRef.current, { autoAlpha: 0, visibility: 'inherit' })
			.set(imgTwoRef.current, { autoAlpha: 0, visibility: 'inherit' })
			.set(imgThreeRef.current, { autoAlpha: 0, visibility: 'inherit' });

		return clearTl;
	};

	const slideInEach = () => {
		console.log('SLIDE IN!');
		if (imgThreeRef.current) {
			let slideInTl = new TimelineMax();
			slideInTl
				//@ts-ignore
				.staggerTo(
					[imgOneRef.current, imgTwoRef.current, imgThreeRef.current],
					1,
					{ autoAlpha: 1, ease: Back.easeInOut },
					0.3
				)
				// .staggerTo([textOneRef.current, textTwoRef.current, textThreeRef.current], 1, { autoAlpha: 1, ease: Back.easeInOut }, .3)
				.fromTo(textOneRef.current, 0.3, { autoAlpha: 0 }, { autoAlpha: 1, ease: Power4.easeIn }, '-=0.9')
				.fromTo(textTwoRef.current, 0.3, { autoAlpha: 0 }, { autoAlpha: 1, ease: Power4.easeIn }, '-=0.7')
				.fromTo(textThreeRef.current, 0.3, { autoAlpha: 0 }, { autoAlpha: 1, ease: Power4.easeIn }, '-=0.5')
				.add('imgs-in');

			return slideInTl;
		}
	};

	const slideOutEach = () => {
		console.log('SLIDE OUT!');
		if (imgThreeRef.current) {
			let slideOutTl = new TimelineMax();
			slideOutTl
				//@ts-ignore
				.staggerTo(
					[imgOneRef.current, imgTwoRef.current, imgThreeRef.current],
					1,
					{ autoAlpha: 0, ease: Back.easeInOut },
					0.3
				)
				.staggerTo(
					[textOneRef.current, textTwoRef.current, textThreeRef.current],
					1,
					{ autoAlpha: 0, ease: Back.easeInOut },
					'-=0.5'
				)
				.add('imgs-out');
			return slideOutTl;
		}
	};

	return (
		<div ref={containerRef} className={styles.container}>
			<div className={styles.row}>
				<div className={styles.clip_path_bg} />
				<img src={newSrc} ref={imgOneRef} />
				<div className={styles.innerColumn} ref={textOneRef}>
					<h4>Code</h4>
					<p>Self taught Web adventurist with a hunger for trying new things.</p>
				</div>
			</div>
			<div className={styles.row}>
				<div className={styles.clip_path_bg} />
				<img src={pic2} ref={imgTwoRef} />
				<div className={styles.innerColumn} ref={textTwoRef}>
					<h4>Build</h4>
					<p>
						Like a writer writes, a developer develops. I've enjoyed building a rich array of side projects
						from IOS/Android apps to Desktop applications and web players.
					</p>
				</div>
			</div>
			<div className={styles.row}>
				<div className={styles.clip_path_bg} />
				<img src={pic3} ref={imgThreeRef} />
				<div className={styles.innerColumn} ref={textThreeRef}>
					<h4>Laugh</h4>
					<p>Like is short. Let's try and have some fun with this.</p>
				</div>
			</div>
		</div>
	);
}

export default ImagesAndActionPoints;
