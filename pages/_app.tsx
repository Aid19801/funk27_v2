import React, { ReactElement } from 'react';
import { Navbar, Footer } from '../components';
import Head from 'next/head';
import gsap from 'gsap';
import 'nprogress/nprogress.js';
import 'nprogress/nprogress.css';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import '../scss/global.scss';

gsap.registerPlugin();

interface Props {
	Component: any;
	pageProps: any;
}

function App({ Component, pageProps }: Props): ReactElement {
	const mouseMove = (e) => {
		const cursor: any = document.querySelector('.cursor');
		cursor.style.top = `${ e.pageY - 10 }px`;
		cursor.style.left = `${ e.pageX - 0 }px`;
	}
	return (
		<React.Fragment>
			<div onMouseMove={e => mouseMove(e)}>

				<div className="cursor" />
				<Head>
					<link rel="shortcut icon" href="/vercel.ico" />

					<script src="../"></script>
					<link rel='stylesheet' href='nprogress.css' />

				</Head>
				<Navbar />
				<Component {...pageProps} />
				<Footer />
			</div>
		</React.Fragment>
	);
}

export default App;
