import React, { ReactElement } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Button } from 'react-bulma-components';

interface Props {}

function Home({}: Props): ReactElement {
	return (
		<div className="container">
			<Head>
				<title>Home</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<h1>Main bit here</h1>
				
			</main>
		</div>
	);
}

export default Home;
