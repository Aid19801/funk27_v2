import React, { ReactElement, useState } from 'react';
import Link from 'next/link';
interface Props {}

interface IshowMobNav {
	showMobNav: Boolean,
}

function Navbar({}: Props): ReactElement {

	const [ showMobNav, toggleshowMobNav ] = useState(false);
  
	const toggleMenu = () => {
	  toggleshowMobNav(!showMobNav);
	}

	return (
		<React.Fragment>
			<nav className="navbar" role="navigation" aria-label="main navigation">
				<div className="navbar-brand">
					<a className="navbar-item" href="#">
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
						<a className="navbar-item">Home</a>
					</Link>
					<Link href="/about">
						<a className="navbar-item">About</a>
					</Link>

						<a className="navbar-item">Contact</a>

						<div className="navbar-item has-dropdown is-hoverable">
							<a className="navbar-link">Blogs/Tutorials</a>

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
							<a className="navbar-link">Podcast</a>

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
								<a className="button is-primary">
									<strong>Sign up</strong>
								</a>
								<a className="button is-light">Log in</a>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</React.Fragment>
	);
}

export default Navbar;