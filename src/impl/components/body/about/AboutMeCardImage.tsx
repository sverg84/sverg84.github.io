import * as React from 'react';
import CardImg from 'react-bootstrap/esm/CardImg';

import styles from '../../../styles/body/about/aboutMeCardBody.module.scss';

export type Props = Readonly<{
	alt?: string;
	src: string;
}>;

export default function AboutMeCardImage({alt, src}: Props): React.JSX.Element {
	return (
		<CardImg
			alt={alt}
			className={styles.image}
			src={src}
			height={300}
			width={300}
		/>
	);
}
