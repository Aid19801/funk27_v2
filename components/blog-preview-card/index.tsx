import React, { ReactElement, useEffect, useState } from 'react';
import Link from 'next/link';
import { Card, Media, Image, Heading, Content } from 'react-bulma-components';
import styles from './preview-card.module.scss';

interface Props {
	data: object;
	uid: string;
}

function BlogPreviewCard({ data, uid }: Props): ReactElement {
	console.log('data ', data);
	console.log('uid ', uid);
	return (
		<React.Fragment>
			<Link href="/blog/[slug]" as={`/blog/${uid}`}>
				<a>
					<Card className={styles.cardContainer}>
						<Card.Image size="4by3" src={data['blog-image-1'].url} />
						<Card.Content>
							<Media>
								<Media.Item renderAs="figure" position="left">
									<Image size={64} alt="64x64" src={data['blog-image-2'].url} />
								</Media.Item>
								<Media.Item>
									<Content className={styles.card__title}>{data['blog-title'][0].text}</Content>
								</Media.Item>
							</Media>
							<Content>{data['blog-body'][0].text}</Content>
						</Card.Content>
					</Card>
				</a>
			</Link>
		</React.Fragment>
	);
}

export default BlogPreviewCard;
