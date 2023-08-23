import * as React from 'react';
import Card from 'react-bootstrap/esm/Card';
import Container from 'react-bootstrap/esm/Container';

import styles from '../../../../styles/body/about/footer.module.css';
import SteamButton from '../../../buttons/SteamButton';

export default function PersonalAboutMeCardFooter(): React.JSX.Element {
	return (
		<Card.Footer>
			<Container className={styles.resume}>
				<SteamButton />
			</Container>
		</Card.Footer>
	);
}
