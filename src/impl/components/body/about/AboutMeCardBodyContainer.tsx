import * as React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import styles from '../../../styles/body/about/aboutMeCardBody.module.scss';
import type { Props as ImageProps } from './AboutMeCardImage';
import AboutMeCardLazyImage from './AboutMeCardLazyImage';

type Props = Readonly<{
	children: React.JSX.Element;
}> &
	ImageProps;

export default function AboutMeCardBodyContainer({
	children,
	...imageProps
}: Props): React.JSX.Element {
	return (
		<Card.Body>
			<Container>
				<Row
					className={styles.body}
					xs={1}>
					<Col
						className={styles.imageColumn}
						xl={4}>
						<AboutMeCardLazyImage {...imageProps} />
					</Col>
					<Col xl={8}>
						{children}
						<iframe
							src="https://open.spotify.com/embed/playlist/37i9dQZF1EVJHK7Q1TBABQ?utm_source=generator&theme=0"
							width="100%"
							height="152"
							allow="encrypted-media;"
							loading="lazy"
						/>
					</Col>
				</Row>
			</Container>
		</Card.Body>
	);
}
