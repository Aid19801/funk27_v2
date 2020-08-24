import React, { ReactElement, Component } from 'react';
import { Navbar, Footer } from '../components';
import gsap from 'gsap';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import '../scss/global.scss';

gsap.registerPlugin()

interface Props {
	Component: any;
	pageProps: any;
}
function App({ Component, pageProps }: Props): ReactElement {
	return (
		<React.Fragment>
			<Navbar />
			<Component {...pageProps} />
			<Footer />
		</React.Fragment>
	);
}

export default App;
