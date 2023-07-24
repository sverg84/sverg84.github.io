import { brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import * as React from 'react';

import styles from '../../styles/body/buttons/linkButton.module.css';
import ExternalLinkButton from './ExternalLinkButton';

export default function SteamButton(): React.JSX.Element {
	return (
		<ExternalLinkButton
            className={styles.steam}
			href="https://steamcommunity.com/profiles/76561198060926980/"
			icon={brands('steam')}
		/>
	);
}
