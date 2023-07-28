import * as React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import MyName from '../../../consts/MyName';
import styles from '../../../styles/body/about/aboutMeCardBody.module.css';
import AboutMeText from './AboutMeText';

export default function AboutMeCardBody(): React.JSX.Element {
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
							alt={`Picture of ${MyName}`}
							className={styles.image}
							src="/sverg.jpeg"
						/>
					</Col>
					<Col xl={8}>
						<AboutMeText />
					</Col>
				</Row>
			</Container>
		</Card.Body>
	);
}
