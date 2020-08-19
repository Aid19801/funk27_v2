import React, { ReactElement, useState, useEffect } from 'react';
import Link from 'next/link';
import { TimelineMax, Elastic } from 'gsap';
import styles from './navbar.module.scss';

interface Props {}

function Navbar({}: Props): ReactElement {

	const [ showMobNav, toggleshowMobNav ] = useState(false);

	useEffect(() => {

		const navItems = document.querySelectorAll('.bounceIn');
		const brand = document.querySelector('.slamIn');
		
		// clear the timeline / ensure nav items are not there at the beginning, avoid flicker.
		var clearTl = new TimelineMax();

		clearTl
			.set(brand, { autoAlpha: 0 })
			.set(navItems, { y: '+=20', autoAlpha: 0, onComplete: beginAnimations })

	}, []);

	const beginAnimations = () => {

		//@ts-ignore
		const allNavItems = document.querySelectorAll('.bounceIn');
		const arr = Array.from(allNavItems);

		//@ts-ignore
		arr.map(each => {
			//@ts-ignore
			each.style.display = 'flex';
		});


		const brand = document.querySelector('.slamIn');
		//@ts-ignore
		brand.style.display = "flex";

		var navItemsTimeline = new TimelineMax();

		navItemsTimeline
		//@ts-ignore
			.staggerTo(allNavItems, 0.4, { y: 0, autoAlpha: 1 }, 0.04)
			// .to(brand, 0.3, { autoAlpha: 1 }, '+=0.2')
			.fromTo(brand, 0.5,
				{ y: '-=15', scale: 0.2, autoAlpha: 0, transformOrigin: 'center center' }, // <-- scaling from the centre
				{ y: 0, scale: 1, autoAlpha: 1, transformOrigin: 'center center', ease: Elastic.easeOut }, '+=0.4' // <--start it 0.1 earlier than it should do
			)
	}

	const toggleMenu = () => {
	  toggleshowMobNav(!showMobNav);
	}

	return (
		<React.Fragment>
			<nav className="navbar" role="navigation" aria-label="main navigation">
				<div className={`navbar-brand`}>
					<a className={`navbar-item slamIn ${styles.displayNone}`} href="#">
						<h1 style={{ fontSize: '5vh', marginLeft: 20, color: 'grey' }}>Funk-</h1>
						<h1 style={{ fontSize: '5vh', color: 'orange' }}>27</h1>
					</a>

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
						<a className={`navbar-item bounceIn ${styles.displayNone}`}>Home</a>
					</Link>
					<Link href="/about">
						<a className={`navbar-item bounceIn ${styles.displayNone}`}>About</a>
					</Link>

						<a className={`navbar-item bounceIn ${styles.displayNone}`}>Contact</a>

						<div className="navbar-item has-dropdown is-hoverable">
							<a className={`navbar-link bounceIn ${styles.displayNone}`}>Blogs/Tutorials</a>

							<div className="navbar-dropdown">
								<a className="navbar-item">How To Unit Test [React]</a>
								<a className="navbar-item">Write Your Own Hooks</a>
								<a className="navbar-item">Vue To A Kill</a>
								<a className="navbar-item">Redux 2020</a>
								<hr className="navbar-divider" />
								<a className="navbar-item">Request a blog</a>
							</div>
						</div>
						<div className="navbar-item has-dropdown is-hoverable">
							<a className={`navbar-link bounceIn ${styles.displayNone}`}>Podcast</a>

							<div className="navbar-dropdown">
								<a className="navbar-item">w/ John Smith</a>
								<a className="navbar-item">w/ Amy OHanlen</a>
								<a className="navbar-item">w/ Ash Grantham</a>
								<a className="navbar-item">w/ Oscar Michaels</a>
								<a className="navbar-item">w/ John Smith</a>
								<a className="navbar-item">w/ Amy OHanlen</a>
								<a className="navbar-item">w/ Ash Grantham</a>
								<a className="navbar-item">w/ Oscar Michaels</a>
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