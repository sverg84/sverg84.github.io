import * as React from 'react';
import CardImg from 'react-bootstrap/esm/CardImg';

import styles from '../../../../styles/body/about/aboutMeCardBody.module.scss';

type Props = Readonly<{
	src: string;
}>;

export default function PersonalAboutMeCarouselItem({
	src,
}: Props): React.JSX.Element {
	return (
		<CardImg
			className={styles.image}
			loading="lazy"
			src={src}
		/>
	);
}
