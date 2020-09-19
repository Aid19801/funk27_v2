import React, { ReactElement } from 'react';
import { Navbar, Footer } from '../components';
import Head from 'next/head';
import gsap from 'gsap';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import '../scss/global.scss';

gsap.registerPlugin();

interface Props {
	Component: any;
	pageProps: any;
}

function App({ Component, pageProps }: Props): ReactElement {
	const mouseMove = (e) => {
		const cursor = document.querySelector('.cursor');
		//@ts-ignore;
		cursor.style.top = `${ e.pageY - 10 }px`;
		//@ts-ignore;
		cursor.style.left = `${ e.pageX - 0 }px`;
	}
	return (
		<React.Fragment>
			<div onMouseMove={e => mouseMove(e)}>

				<div className="cursor" />
				<Head>
					<link rel="shortcut icon" href="/vercel.ico" />
				</Head>
				<Navbar />
				<Component {...pageProps} />
				<Footer />
			</div>
		</React.Fragment>
	);
}

export default App;
