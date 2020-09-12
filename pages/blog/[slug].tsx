import React, { ReactElement, useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { fetchBlogPageByUID, useContent } from '../../api/requests';
import { RichText } from 'prismic-reactjs';

interface Props {
	ssrContent: object;
}

function BlogArticle({ ssrContent }: Props): ReactElement {
	const [content, setContent] = useState(ssrContent);
	const router = useRouter();

	useEffect(() => {
		console.log(router);
		if (!content) {
			const { data, isLoading } = useContent('content', router.query.slug);
			//@ts-ignore
			setContent(data);
		}
	}, [content]);

	if (content) {
		console.log('content is here: ', content);

		return (
			<div className="blog__article container">
				<Head>
					<title>
						{
							//@ts-ignore
							content.data['blog-title'][0].text
						}
					</title>

					<meta name="twitter:card" content="summary_large_image" />

					<meta
						name="twitter:image" //@ts-ignore
						content={content.data['blog-image-1'].twitter.url}
					/>
					<meta name="twitter:creator" content="@aidThompsin" />
					<meta name="twitter:site" content="@funkTwentySeven" />

					<meta
						property="og:title"
						//@ts-ignore
						content={`Funk-27 | ${content.data['blog-title'][0].text}`}
						key="title"
					/>

					<meta
						property="og:description"
						//@ts-ignore
						content={content.data['blog-body'][0].text}
						key="description"
					/>

					<meta
						property="og:image"
						//@ts-ignore
						content={content.data['blog-image-1'].twitter.url}
						key="seo share image"
					/>
				</Head>

				<main>
					<section>
						<div className="columns is-multiline">
							<RichText
								//@ts-ignore
								render={content.data['blog-title']}
							/>

							<hr className="blog-article__divider" />

							<RichText
								//@ts-ignore
								render={content.data['blog-body']}
							/>
						</div>
					</section>
				</main>
			</div>
		);
	}
}

export async function getServerSideProps(context: any) {
	const ssrContent = await fetchBlogPageByUID('content', context.params.slug);
	return { props: { ssrContent } };
}

export default BlogArticle;
