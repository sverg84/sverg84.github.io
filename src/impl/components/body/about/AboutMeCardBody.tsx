import * as React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import MyName from '../../../consts/MyName';
import AboutMeText from './AboutMeText';

const PHOTO_HEIGHT_WIDTH: number = 300;

const image: React.CSSProperties = {
	height: PHOTO_HEIGHT_WIDTH,
	width: PHOTO_HEIGHT_WIDTH,
} as const;

export default function AboutMeCardBody(): React.JSX.Element {
	return (
		<Card.Body>
			<Container fluid={true}>
				<Row>
					<Col>
						<Card.Img
							alt={`Picture of ${MyName}`}
							src="/sverg.jpeg"
							style={image}
						/>
					</Col>
					<Col xs={8}>
						<AboutMeText />
					</Col>
				</Row>
			</Container>
		</Card.Body>
	);
}
