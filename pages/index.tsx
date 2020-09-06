import React, { ReactElement } from 'react';
import Head from 'next/head';
import { useQuery } from 'react-query';
import { fetchPageByUID } from '../api/requests';
import { ScrollFadeSection, ScrollFadeSmokeBar, HeroSection } from '../components';

interface Props {
	ssrContent: object;
}

function Home({ ssrContent }: Props): ReactElement {
	// @ts-ignore
	const { data, isLoading } = useQuery('content', fetchPageByUID, { initialData: ssrContent, enabled: 'home-page' });

	if (isLoading) {
		return <p>react query isLoading value is true...</p>
	}

	if (ssrContent) {

		return (
			<div className="container">
				<Head>
					<title>Funk-27 | Home</title>
					<link rel="icon" href="/favicon.ico" />

					<meta name="twitter:card" content="summary_large_image" />


					<meta name="twitter:image" //@ts-ignore
					content={data.data['twitter_image'].url} />
					<meta name="twitter:creator" content="@aidThompsin" />
					<meta name="twitter:site" content="@funkTwentySeven" />

					<meta property="og:title"
					//@ts-ignore
					content={`Funk-27 | ${data.data.title[0].text}`} key="title" />

					<meta property="og:description"
					//@ts-ignore
					content={data.data.first_section[0].text} key="description" />

					<meta property="og:image"
					//@ts-ignore
					content={data.data.twitter_image.url} key="seo share image" />
				</Head>

				<main>
					
					<HeroSection
						//@ts-ignore
						heroImage={data.data.hero_image}
						//@ts-ignore
						heroTitle={data.data.title}
					/>
					
					<ScrollFadeSection />

					<ScrollFadeSmokeBar />
				</main>
			</div>
		);
	} else {
		return <p>Loading Spinner Will Go Here</p>;
	}
}

export async function getStaticProps() {
	const ssrContent = await fetchPageByUID(null, 'home-page');
	return { props: { ssrContent } };
}

export default Home;
