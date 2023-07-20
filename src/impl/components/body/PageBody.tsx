import * as React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

import MyName from '../../consts/MyName';
import PageMarginStyle from '../../consts/PageMarginStyle';
import GitHubButton from '../buttons/GitHubButton';
import LinkedInButton from '../buttons/LinkedInButton';
import ResumeButton from '../buttons/ResumeButton';

const PHOTO_HEIGHT_WIDTH: number = 300;

const sharedSectionStyle: React.CSSProperties = {
	display: 'inline-flex',
	justifyContent: 'center',
} as const;

const externalButtons: React.CSSProperties = {
	columnGap: 8,
	...sharedSectionStyle,
} as const;

const image: React.CSSProperties = {
	height: PHOTO_HEIGHT_WIDTH,
	width: PHOTO_HEIGHT_WIDTH,
} as const;

const resume: React.CSSProperties = {
	alignSelf: 'center',
	...sharedSectionStyle,
} as const;

export default function PageBody(): React.JSX.Element {
	return (
		<div style={PageMarginStyle}>
			<Card>
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
								<Card.Text>Eek</Card.Text>
							</Col>
						</Row>
					</Container>
				</Card.Body>
				<Card.Footer>
					<Container fluid={true}>
						<Row>
							<Col style={resume}>
								<ResumeButton />
							</Col>
							<Col style={externalButtons}>
								<GitHubButton />
								<LinkedInButton />
							</Col>
						</Row>
					</Container>
				</Card.Footer>
			</Card>
		</div>
	);
}
