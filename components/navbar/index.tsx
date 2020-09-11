import React, { ReactElement, useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap, { TimelineMax, Elastic, Power3 } from 'gsap';

interface Props {}

function Navbar({}: Props): ReactElement {
	const [showMobNav, toggleshowMobNav] = useState(false);

	let slamIn = useRef(null);

	// one ref for each of the nav items
	let homeRef = useRef(null);
	let aboutRef = useRef(null);
	let contactRef = useRef(null);
	let podsRef = useRef(null);
	let blogsRef = useRef(null);

	useEffect(() => {
		var clearTl = new TimelineMax();
		clearTl
			.set(homeRef.current, { autoAlpha: 0 })
			.set(aboutRef.current, { autoAlpha: 0 })
			.set(contactRef.current, { autoAlpha: 0 })
			.set(podsRef.current, { autoAlpha: 0 })
			.set(blogsRef.current, { autoAlpha: 0 })
			.set(slamIn.current, { autoAlpha: 0, onComplete: beginAnimations });
	}, []);

	const beginAnimations = () => {
		var navItemsTimeline = new TimelineMax();
		navItemsTimeline
			//@ts-ignore
			.staggerTo(
				[homeRef.current, aboutRef.current, contactRef.current, blogsRef.current, podsRef.current],
				0.5,
				{ autoAlpha: 1, ease: Power3.easeIn },
				0.1
			)
			.fromTo(
				slamIn.current,
				0.5,
				{ y: '-=15', scale: 0.2, autoAlpha: 0, transformOrigin: 'center center' }, // <-- scaling from the centre
				{ y: 0, scale: 1, autoAlpha: 1, transformOrigin: 'center center', ease: Elastic.easeOut },
				'+=0.3' // <--start it 0.3 earlier than it should do
			)
			.add('nav-slammed-in');
	};

	const toggleMenu = () => {
		toggleshowMobNav(!showMobNav);
	};

	return (
		<React.Fragment>
			<nav className="navbar" role="navigation" aria-label="main navigation">
				<div className={`navbar-brand`}>
					<Link href="/">
						<a ref={slamIn} className={`navbar-item`}>
							<h1 style={{ fontSize: '5vh', marginLeft: 20, color: 'grey' }}>Funk-</h1>
							<h1 style={{ fontSize: '5vh', color: 'orange' }}>27</h1>
						</a>
					</Link>

					<div
						onClick={toggleMenu}
						className={showMobNav ? 'navbar-burger burger is-active' : 'navbar-burger burger'}
						aria-label="menu"
						aria-expanded="false"
						data-target="navbarBasicExample"
					>
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
					</div>
				</div>

				<div id="navbarBasicExample" className={showMobNav ? 'navbar-menu is-active' : 'navbar-menu'}>
					<div className="navbar-start">
						<Link href="/">
							<a ref={homeRef} className={`navbar-item`}>
								Home
							</a>
						</Link>
						<Link href="/about">
							<a ref={aboutRef} className={`navbar-item`}>
								About
							</a>
						</Link>
						<Link href="/contact">
							<a ref={contactRef} className={`navbar-item`}>
								Contact
							</a>
						</Link>

						<div className="navbar-item has-dropdown is-hoverable">

							<Link href="/blog">
								<a ref={blogsRef} className={`navbar-link`}>
									Blogs/Tutorials
								</a>
							</Link>

							<div className="navbar-dropdown">
								<a
									href="https://medium.com/@AidThompsin/heres-how-you-unit-test-textinput-with-react-native-63e1f7692b17"
									className="navbar-item"
								>
									Unit Testing in React Native
								</a>
								<a
									href="https://medium.com/@AidThompsin/how-to-npm-link-to-a-local-version-of-your-dependency-84e82126667a"
									className="navbar-item"
								>
									NPM-Link a Local Dependency!
								</a>
								<a
									href="https://medium.com/@AidThompsin/heres-how-you-map-local-on-charles-proxy-14cac3d78705"
									className="navbar-item"
								>
									Charles-Proxy - How To Map Local
								</a>
								<a
									href="https://medium.com/@AidThompsin/heres-how-you-set-up-a-prismic-io-cms-with-react-4c930c4610f4"
									className="navbar-item"
								>
									Build a Prismic CMS setup for React
								</a>
								<hr className="navbar-divider" />
								<a href="https://twitter.com/funkTwentySeven" className="navbar-item">
									Request a blog
								</a>
							</div>
						</div>
						<div className="navbar-item has-dropdown is-hoverable">
							<a ref={podsRef} className={`navbar-link bounceIn `}>
								Podcast
							</a>

							<div className="navbar-dropdown">
								<a className="navbar-item">[coming soon]</a>
							</div>
						</div>
					</div>

					<div className="navbar-end">
						<div className="navbar-item">
							<div className="buttons">
								<a className="button is-warning">
									<strong>Sign up</strong>
								</a>
								<a className="button is-warning is-light">Log in</a>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</React.Fragment>
	);
}

export default Navbar;
