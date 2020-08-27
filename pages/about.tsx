import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import gsap, { TimelineMax, Power4, Back } from 'gsap';

function About() {

    let photoRef = useRef(null);
    let polygonRef = useRef(null);

    useEffect(() => {
        beginAnimation()
    }, []);

    const beginAnimation = () => {
        let photoTl = new TimelineMax();
        photoTl
            .fromTo(photoRef.current, .5, { autoAlpha: 0, y: 100 }, { autoAlpha: 1, y: 0, ease: Back.easeIn }, '+=2')
            .fromTo(polygonRef.current, .5, { opacity: 0, x: -100 }, { opacity: 1, x: 0, ease: Back.easeIn }, '-=.4')


    }
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

                            <div className="img__poly_container">
                                <picture >
                                    <source media="(min-width:700px)" srcSet="/me_large.jpg" />
                                    <source media="(min-width:465px)" srcSet="/me_mob.png" />
                                    <source media="(min-width:0px)" srcSet="/me_mob.png" />
                                    <img ref={photoRef} src="/me_large.jpg" alt="Adrian Thompson Developer" />
                                </picture>
                                <div ref={polygonRef} className="about__polygon_mob" />
                            </div>
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
