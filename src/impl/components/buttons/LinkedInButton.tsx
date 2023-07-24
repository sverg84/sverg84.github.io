import { brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import * as React from 'react';

import styles from '../../styles/body/buttons/linkButton.module.css';
import ExternalLinkButton from './ExternalLinkButton';

export default function LinkedInButton(): React.JSX.Element {
	return (
		<ExternalLinkButton
			className={styles.linkedin}
			href="https://www.linkedin.com/in/stephen-vergara-2bab8614b/"
			icon={brands('linkedin')}
		/>
	);
}
