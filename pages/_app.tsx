import React, { ReactElement, Component } from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import '../scss/global.scss';
import { Navbar, Footer } from '../components';

interface Props {
	Component: any;
	pageProps: any;
}
function App({ Component, pageProps }: Props): ReactElement {
	return (
		<React.Fragment>
			<Navbar />
			<div id="bg" />
			<Component {...pageProps} />
			<Footer />
		</React.Fragment>
	);
}

export default App;
