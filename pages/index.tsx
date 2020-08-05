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
				<p>Click to get to</p>
				<Link href="/about">
					<a>About Page</a>
				</Link>
				<Button color="danger" size="small" rounded outlined>
					Wowza!
				</Button>

				<div className="columns">
					<div className="column">First column</div>
					<div className="column">Second column</div>
					<div className="column">Third column</div>
					<div className="column">Fourth column</div>
				</div>
				
			</main>
		</div>
	);
}

export default Home;
