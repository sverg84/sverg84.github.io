import * as React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import styles from '../../../styles/body/about/footer.module.css';
import EmailButton from '../../buttons/EmailButton';
import GitHubButton from '../../buttons/GitHubButton';
import LinkedInButton from '../../buttons/LinkedInButton';
import ResumeButton from '../../buttons/ResumeButton';

export default function AboutMeCardFooter(): React.JSX.Element {
	return (
		<Card.Footer>
			<Row
				className="gy-3"
				xs={1}
				sm={2}
				md={2}
				lg={3}>
				<Col className={styles.resume}>
					<ResumeButton />
				</Col>
				<Col className={styles.resume}>
					<EmailButton />
				</Col>
				<Col
					className={styles.buttons}
					sm={12}
					md={12}>
					<GitHubButton />
					<LinkedInButton />
				</Col>
			</Row>
		</Card.Footer>
	);
}
