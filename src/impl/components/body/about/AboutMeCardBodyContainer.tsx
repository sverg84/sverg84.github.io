import * as React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Placeholder from 'react-bootstrap/esm/Placeholder';
import Row from 'react-bootstrap/Row';

import styles from '../../../styles/body/about/aboutMeCardBody.module.scss';
import type { Props as ImageProps } from './AboutMeCardImage';
import AboutMeCardLazyImage from './AboutMeCardLazyImage';
import pStyles from './placeholder.module.scss';

type Props = Readonly<{
	children: React.JSX.Element;
}> &
	ImageProps;

export default function AboutMeCardBodyContainer({
	children,
	...imageProps
}: Props): React.JSX.Element {
	const [isLoading, setIsLoading] = React.useState(true);

	const onLoad = (e: React.SyntheticEvent<HTMLIFrameElement, Event>) => {
		e.preventDefault();
		setIsLoading(false);
	};

	return (
		<Card.Body as="section">
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
						{isLoading && (
							<Placeholder
								as="div"
								animation="wave"
								bg="secondary"
								className={pStyles.placeholder}
							/>
						)}
						<iframe
							className={isLoading ? pStyles.iframeLoading : undefined}
							src="https://open.spotify.com/embed/playlist/37i9dQZF1EVJHK7Q1TBABQ?utm_source=generator&theme=0"
							width="100%"
							height="152"
							allow="encrypted-media;"
							loading="lazy"
							onLoad={onLoad}
						/>
					</Col>
				</Row>
			</Container>
		</Card.Body>
	);
}
