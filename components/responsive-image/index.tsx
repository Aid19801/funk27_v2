import React, { ReactElement } from 'react';
import styles from './image.module.scss';

interface Props {
	img: {
		alt: string;
		copyright: null;
		dimensions: object;
		url: string;
	};
}

function ResponsiveImage({ img }: Props): ReactElement {
    
	return (
		<picture className={styles.resp__image}>
			<img
                // @ts-ignore
				srcSet={`${img.Mobile.url} ${img.Mobile.dimensions.width}w, ${img.Tablet.url} ${img.Tablet.dimensions.width}w`}
				sizes="(max-width: 600px) 300px,
            500px"
                src={img.url}
                alt={img.alt}
			/>
		</picture>
	);
}

export default ResponsiveImage;
