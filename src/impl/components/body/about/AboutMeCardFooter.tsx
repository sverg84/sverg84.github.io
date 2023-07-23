import * as React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import styles from '../../../styles/body/about/footer.module.css';
import GitHubButton from '../../buttons/GitHubButton';
import LinkedInButton from '../../buttons/LinkedInButton';
import ResumeButton from '../../buttons/ResumeButton';
import SteamButton from '../../buttons/SteamButton';

export default function AboutMeCardFooter(): React.JSX.Element {
	return (
		<Card.Footer>
			<Container fluid={true}>
				<Row>
					<Col className={styles.resume}>
						<ResumeButton />
					</Col>
					<Col className={styles.buttons}>
						<GitHubButton />
						<LinkedInButton />
						<SteamButton />
					</Col>
				</Row>
			</Container>
		</Card.Footer>
	);
}
