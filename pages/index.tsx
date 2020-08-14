import React, { ReactElement, useEffect, useState } from 'react';
import Head from 'next/head';
import { RichText } from 'prismic-reactjs';
import { useQuery } from 'react-query';
import { fetchPageByUID } from '../api/requests';
import { Hero } from '../components';
import ResponsiveImage from '../components/responsive-image';

interface Props {
	ssrContent: object;
}

function Home({ ssrContent }: Props): ReactElement {
	
	// @ts-ignore
	const { data, isLoading } = useQuery('content', fetchPageByUID, { initialData: ssrContent, enabled: 'home-page' });

	if (isLoading) {
		return <p>is loading is true...</p>
	}
	if (ssrContent) {
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
					<section>
						<Hero
							// @ts-ignore
							img={data.data.hero_image}
							// @ts-ignore
							heroText={data.data.title}
						/>
					</section>

					<section>
						<RichText
							// @ts-ignore
							render={data.data.first_section}
						/>
					</section>
				</main>
			</div>
		);
	} else {
		return <p>LoadingSpinner</p>
	}
}

export async function getStaticProps() {
	const ssrContent = await fetchPageByUID(null, 'home-page');
	return { props: { ssrContent } };
}

export default Home;
