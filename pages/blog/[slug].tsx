import React, { ReactElement, useEffect, useState } from 'react';
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
				<main>
					<section>
						<div className="columns is-multiline">
							{
								//@ts-ignore
								RichText.render(content.data['blog-title'])
							}

							<hr className="blog-article__divider" />

							<RichText
								//@ts-ignore
								render={content.data['blog-body']} />
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
