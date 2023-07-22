import * as React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import GitHubButton from '../../buttons/GitHubButton';
import LinkedInButton from '../../buttons/LinkedInButton';
import ResumeButton from '../../buttons/ResumeButton';
import SteamButton from '../../buttons/SteamButton';

const sharedSectionStyle: React.CSSProperties = {
	display: 'inline-flex',
	justifyContent: 'center',
} as const;

const externalButtons: React.CSSProperties = {
	columnGap: 8,
	...sharedSectionStyle,
} as const;

const resume: React.CSSProperties = {
	alignSelf: 'center',
	...sharedSectionStyle,
} as const;

export default function AboutMeCardFooter(): React.JSX.Element {
	return (
		<Card.Footer>
			<Container fluid={true}>
				<Row>
					<Col style={resume}>
						<ResumeButton />
					</Col>
					<Col style={externalButtons}>
						<GitHubButton />
						<LinkedInButton />
						<SteamButton />
					</Col>
				</Row>
			</Container>
		</Card.Footer>
	);
}
