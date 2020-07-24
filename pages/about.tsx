import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import dynamic from "next/dynamic";
import { Button } from "react-bulma-components";

const AsyncImage = dynamic(import("../components/image"));

function About() {

    const [ pic, setPic ] = useState(null);

    const loadPuppy = async () => {
        try {
            const res = await fetch('https://dogtime.com/assets/uploads/2018/10/puppies-cover-1280x720.jpg');
            setPic(res)
        } catch (error) {
            console.log('error is ', error);
        }
    }

    useEffect(() => {
        console.log(pic);
    }, [pic]);

	return (
		<div className="container">
			<Head>
				<title>About</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<h1>About Page here</h1>
                <p>Click to get to</p>
				<Link href="/">
                    <a>HOME</a>
                </Link>

                <Button
                    onClick={loadPuppy}
                    color="danger"
                    size="small"
                    rounded
                    outline
                    >Click to render a puppy</Button>

                { pic && <AsyncImage src={pic.url} /> }
			</main>

			<footer>footer here</footer>
		</div>
	);
}

export default About;