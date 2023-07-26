import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import { Button } from 'react-bootstrap';

import useHover from '../../hooks/useHover';
import styles from '../../styles/body/buttons/email.module.css';

export default function EmailButton(): React.JSX.Element {
	const {isHovering, ...mouseEvents} = useHover();

	return (
		<Button
			className={styles.button}
			href="mailto:sverg84@gmail.com"
			{...mouseEvents}>
			<FontAwesomeIcon
				fade={isHovering}
				icon={solid('envelope')}
				size="2xl"
			/>
		</Button>
	);
}
