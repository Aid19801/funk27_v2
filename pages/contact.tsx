import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import gsap, { TimelineMax, Power4, Back } from 'gsap';
import { ContactForm, FunkSpinner } from '../components';

function Contact() {
	let spinnerRef = useRef(null);
	const [sending, setSending] = useState(false);
	const [sendError, setSendError] = useState('');
	const [sendSuccess, setSendSuccess] = useState('');

	const toggleSending = (bool) => {
		// console.log('toggleSending fired, setting: ', bool);
		setSending(bool);
	};

	useEffect(() => {
		if (sending) {
			// console.log('sending is true so fading in...')
			let spinnerTlIn = new TimelineMax();
			spinnerTlIn.fromTo(spinnerRef.current, 0.3, { opacity: 0 }, { opacity: 1, ease: Power4.easeInOut });
		}
		if (!sending) {
			// console.log('sending is false so fading out...')
			let spinnerTlOut = new TimelineMax();
			spinnerTlOut.fromTo(spinnerRef.current, 0.3, { opacity: 1 }, { opacity: 0, ease: Power4.easeInOut });
		}
	}, [sending]);

	return (
		<div className="contact__page container">
			<Head>
				<title>Funk-27 | Contact</title>
				<link rel="icon" href="/favicon.ico" />
				<link href="https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap" rel="stylesheet" />
			</Head>

			<main>
				<section>
					<div className="contact__content columns">
						

						{!sending && sendSuccess === '' && sendError === '' && (
							<React.Fragment>
								<div className="column is-half">
									<h1>Get in touch...</h1>
								</div>
								<div className="column is-half">
									<ContactForm
										toggleSending={toggleSending}
										setSendError={setSendError}
										setSendSuccess={setSendSuccess}
									/>
								</div>
							</React.Fragment>
						)}
						{sending && (
							<div className="fadeInSpinner" style={{ width: '100%' }} ref={spinnerRef}>
								<FunkSpinner />
							</div>
						)}
						{!sending && sendSuccess !== '' && (
							<React.Fragment>
								<div className="column is-half">
									<h1>Get in touch...</h1>
								</div>

								<p style={{ color: 'orange', fontSize: '2vh', textAlign: 'center' }}>{sendSuccess}</p>
							</React.Fragment>
						)}
						{!sending && sendSuccess === '' && sendError !== '' && (
							<React.Fragment>
								<div className="column is-half">
									<h1>Get in touch...</h1>
								</div>

								{sendError && <p style={{ color: 'red', fontSize: '2vh', textAlign: 'center' }}>{sendError}</p>}
							</React.Fragment>
						)}
					</div>
				</section>
			</main>
		</div>
	);
}

export default Contact;
