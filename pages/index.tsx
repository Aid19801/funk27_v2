import React, { FunctionComponent } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Button } from "react-bulma-components";

interface Props {
    src: string
}

function Home() {
	return (
		<div className="container">
			<Head>
				<title>Home</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<h1>Main bit here</h1>
				<p>Click to get to</p>
				<Link href="/about"><a>About Page</a></Link>
				<Button color="danger" size="small" rounded outlined>Wowza!</Button>
			</main>

			<footer>footer here</footer>
		</div>
	);
}

export default Home;