import React, { ReactElement, useRef } from 'react';
import Head from 'next/head';
import { useIntersection } from 'react-use';
import { useQuery } from 'react-query';
import { fetchPageByUID } from '../api/requests';
import { Hero } from '../components';
import gsap from 'gsap';
//@ts-ignore
import Geek from '../svgs/geek.svg';
import HeroSection from '../components/hero-section';
interface Props {
	ssrContent: object;
}

function Home({ ssrContent }: Props): ReactElement {
	// @ts-ignore
	const { data, isLoading } = useQuery('content', fetchPageByUID, { initialData: ssrContent, enabled: 'home-page' });
	 
	let svgRef = useRef(null);
	let secondSectionRef = useRef(null);
	let thirdSectionRef = useRef(null);

	const intersectionTwo = useIntersection(svgRef, {
		root: null,
		rootMargin: '0px',
		threshold: .3,
	});

	const fadeIn = (element) => {
		if (process.browser) {
			gsap.to(element, 1, {
				opacity: 1,
				y: -60,
				ease: 'Power4.out',
				stagger: {
					amount: 0.3,
				},
			});
		}
	};

	const fadeOut = (element) => {
		if (process.browser) {
			gsap.to(element, 1, {
				opacity: 0,
				y: -20,
				ease: 'Power4.out',
			});
		}
	};

	if (isLoading) {
		return <p>is loading is true...</p>;
	}

	if (ssrContent) {
		intersectionTwo && intersectionTwo.intersectionRatio < .3 ? fadeOut('.fadeIn') : fadeIn('.fadeIn');

		return (
			<div className="container">
				<Head>
					<title>Funk-27 | Home</title>
					<link rel="icon" href="/favicon.ico" />

					<meta name="twitter:card" content="summary_large_image" />

					<meta name="twitter:image" content={data.data['twitter_image'].url} />
					<meta name="twitter:creator" content="@aidThompsin" />
					<meta name="twitter:site" content="@funkTwentySeven" />

					<meta property="og:title" content={`Funk-27 | ${data.data.title[0].text}`} key="title" />
					<meta property="og:description" content={data.data.first_section[0].text} key="description" />
					<meta property="og:image" content={data.data.twitter_image.url} key="seo share image" />
				</Head>

				<main>
					<HeroSection
						// @ts-ignore
						heroImage={data.data.hero_image}
						// @ts-ignore
						heroTitle={data.data.title}
					/>
					<section className="orange_section" ref={secondSectionRef}>
						<div className="fadeIn svg_container" ref={svgRef}>
							<Geek />
						</div>
					</section>
					<section className="orange_section" ref={thirdSectionRef}>
						<p>3rd section</p>
					</section>

				</main>
			</div>
		);
	} else {
		return <p>LoadingSpinner</p>;
	}
}

export async function getStaticProps() {
	const ssrContent = await fetchPageByUID(null, 'home-page');
	return { props: { ssrContent } };
}

export default Home;
