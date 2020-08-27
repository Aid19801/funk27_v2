import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

function About() {
	return (
		<div className="about__page container">
			<Head>
				<title>About</title>
				<link rel="icon" href="/favicon.ico" />
                <link href="https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap" rel="stylesheet" />
			</Head>

			<main>
				<section>
					<div className="about__content columns">
						<div className="about__title_and_picture column">
							<h1>About</h1>
                            <picture>
                                <source media="(min-width:700px)" srcSet="/me_large.jpg" />
                                <source media="(min-width:465px)" srcSet="/me_mob.png" />
                                <source media="(min-width:0px)" srcSet="/me_mob.png" />
                                <img src="/me_large.jpg" alt="Adrian Thompson Developer" />
                            </picture>
						</div>
						<div className="column is-two-thirds">
							    <p><strong>Funk-27</strong> was the brainchild of London-based Software Engineer, Adrian
								Thompson.</p>
                                <br />
                                <p>In fact, <strong>that's me</strong>. I don't know why I'm talking about myself in the third person.</p>
                                <br />
                                <p>Yep. In August of 2020, finally after <strong>years</strong> in the game, and in the grip of a global pandemic, I've decided to launch a web-app not just showcasing my work in Front End Development, but tutorials, blogs, interviews and more. And yes realistically a little bit of comedy here and there if it feels relevant.</p>
                                <br />
                                <p>If that sounds like your cup of tea (kidding, *obviously* it's coffee) keep a look out for me on Twitter, Github, Linkedin and Facebook.</p>
                                <br />
						</div>
					</div>
				</section>
			</main>
		</div>
	);
}

export default About;
