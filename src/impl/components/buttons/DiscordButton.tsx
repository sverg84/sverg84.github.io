import { brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import * as React from 'react';

import styles from '../../styles/body/buttons/linkButton.module.scss';
import ExternalLinkButton from './ExternalLinkButton';

export default function DiscordButton(): React.JSX.Element {
	return (
		<ExternalLinkButton
			className={styles.discord}
			href="https://discord.com/users/652354605497188370"
			icon={brands('discord')}
			label="Discord"
		/>
	);
}
