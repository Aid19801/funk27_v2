import React, { ReactElement, useEffect, useState } from 'react';
import Head from 'next/head';
import NProgress from 'nprogress';
import { fetchPageByUID, useContent } from '../../api/requests';
import { BlogPreviewCard } from '../../components';

interface Props {
	ssrContent: object;
}

function BlogHome({ ssrContent }: Props): ReactElement {
	const [content, setContent] = useState(ssrContent);

	useEffect(() => {
		NProgress.done();
	}, [])

	useEffect(() => {
		if (!content) {
			const { data, isLoading } = useContent('content', 'blog-home-page');
			//@ts-ignore
			setContent(data);
		}
	}, [content]);

	if (content) {

		return (
			<div className="blog__home container">
				<Head>
					<title>Funk-27 | Blog</title>
					<link rel="icon" href="/favicon.ico" />

					<meta name="twitter:card" content="summary_large_image" />

					<meta
						name="twitter:image" //@ts-ignore
						content={content.data['twitter_image'].url}
					/>
					<meta name="twitter:creator" content="@aidThompsin" />
					<meta name="twitter:site" content="@funkTwentySeven" />

					<meta
						property="og:title"
						//@ts-ignore
						content={`Funk-27 | ${content.data.title[0].text}`}
						key="title"
					/>

					<meta
						property="og:description"
						//@ts-ignore
						content={content.data.first_section[0].text}
						key="description"
					/>

					<meta
						property="og:image"
						//@ts-ignore
						content={content.data.twitter_image.url}
						key="seo share image"
					/>
				</Head>

				<main>
					<section>
						<div className="container is-fluid blog__home__top__banner">
							<div className="notification">
								Welcome to my bloody blog. There's not a great deal here yet, but what there is, is yours. Plus it's free so just enjoy it and be nice, alright?
							</div>
						</div>
					</section>
					<section className="blogs__section">
						<div className="columns is-multiline">
							
							{ // @ts-ignore 
							 content.data.blogs.map((each, i) => <BlogPreviewCard key={i} {...each.blog} /> )
							 }
						</div>
					</section>
				</main>
			</div>
		);
	} else {
		return <p>Loading Spinner Will Go Here</p>;
	}
}

export async function getStaticProps() {
	const ssrContent = await fetchPageByUID('content', 'blog-home-page');
	return { props: { ssrContent } };
}

export default BlogHome;
