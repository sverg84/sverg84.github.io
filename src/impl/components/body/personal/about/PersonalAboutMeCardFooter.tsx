import * as React from 'react';
import Card from 'react-bootstrap/esm/Card';
import Container from 'react-bootstrap/esm/Container';

import styles from '../../../../styles/body/about/footer.module.scss';
import DiscordButton from '../../../buttons/DiscordButton';
import SteamButton from '../../../buttons/SteamButton';

export default function PersonalAboutMeCardFooter(): React.JSX.Element {
	return (
		<Card.Footer>
			<Container className={styles.buttons}>
				<SteamButton />
				<DiscordButton />
			</Container>
		</Card.Footer>
	);
}
