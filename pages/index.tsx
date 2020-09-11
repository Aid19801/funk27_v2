import React, { ReactElement, useEffect, useState } from 'react';
import Head from 'next/head';
import { fetchPageByUID, useContent } from '../api/requests';
import { ScrollFadeSection, ScrollFadeSmokeBar, HeroSection } from '../components';

interface Props {
	ssrContent: object
}

function Home({ ssrContent }: Props): ReactElement {

	const [ content, setContent ] = useState(ssrContent)

	useEffect(() => {
		console.log('ssrContent: ', ssrContent);
		console.log('content: ', content);
		if (!content) {
			const { data, isLoading } = useContent('content', 'home-page');
			//@ts-ignore
			setContent(data);
		}
	}, [content]);

	if (content) {

		return (
			<div className="container">
				<Head>
					<title>Funk-27 | Home</title>
					<link rel="icon" href="/favicon.ico" />

					<meta name="twitter:card" content="summary_large_image" />


					<meta name="twitter:image" //@ts-ignore
					content={content.data['twitter_image'].url} />
					<meta name="twitter:creator" content="@aidThompsin" />
					<meta name="twitter:site" content="@funkTwentySeven" />

					<meta property="og:title"
					//@ts-ignore
					content={`Funk-27 | ${content.data.title[0].text}`} key="title" />

					<meta property="og:description"
					//@ts-ignore
					content={content.data.first_section[0].text} key="description" />

					<meta property="og:image"
					//@ts-ignore
					content={content.data.twitter_image.url} key="seo share image" />
				</Head>

				<main>
					
					<HeroSection
						//@ts-ignore
						heroImage={content.data.hero_image}
						//@ts-ignore
						heroTitle={content.data.title}
					/>
					
					<ScrollFadeSection />

					<ScrollFadeSmokeBar text="Code | Build | Create" />

				</main>
			</div>
		);
	} else {
		return <p>Loading Spinner Will Go Here</p>;
	}
}

export async function getStaticProps() {
	const ssrContent = await fetchPageByUID('content', 'home-page');
	return { props: { ssrContent } };
}

export default Home;
