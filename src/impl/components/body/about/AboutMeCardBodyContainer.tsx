import * as React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import styles from '../../../styles/body/about/aboutMeCardBody.module.scss';

type Props = Readonly<{
    alt?: string;
    children: React.JSX.Element;
    src: string;
}>;

export default function AboutMeCardBodyContainer({alt, children, src}: Props): React.JSX.Element {
	return (
		<Card.Body>
			<Container>
				<Row
					className={styles.body}
					xs={1}>
					<Col
						className={styles.imageColumn}
						xl={4}>
						<Card.Img
							alt={alt}
							className={styles.image}
							loading="lazy"
							src={src}
						/>
					</Col>
					<Col xl={8}>
						{children}
					</Col>
				</Row>
			</Container>
		</Card.Body>
	);
}
