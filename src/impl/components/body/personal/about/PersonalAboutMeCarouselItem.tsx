import * as React from 'react';
import CardImg from 'react-bootstrap/esm/CardImg';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';

import styles from '../../../../styles/body/about/aboutMeCardBody.module.scss';

type Props = Readonly<{
	src: string;
}>;

export default function PersonalAboutMeCarouselItem({
	src,
}: Props): React.JSX.Element {
	return (
		<Container>
			<Row className={styles.imageColumn}>
				<CardImg
					className={styles.image}
					loading="lazy"
					src={src}
				/>
			</Row>
		</Container>
	);
}
