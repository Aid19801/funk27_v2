import React, { ReactElement, useEffect } from 'react';
import Head from 'next/head';
import { RichText } from 'prismic-reactjs';
import { useContent } from '../api/requests';
import { Hero } from '../components';
import ResponsiveImage from '../components/responsive-image';

interface Props {}

function Home({}: Props): ReactElement {
	const { isLoading, data, error } = useContent('home-page');

	useEffect(() => {
		console.log('data is back: ', data);
	}, [data]);

	if (isLoading) return <p>Loading...</p>;

	if (error) return <p>An error has occurred</p>;

	return (
		<div className="container">
			<Head>
				<title>Home</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<Hero
					// @ts-ignore
					img={data.data.hero_image}
					// @ts-ignore
					heroText={data.data.title}
				/>
			</main>
		</div>
	);
}

export default Home;
