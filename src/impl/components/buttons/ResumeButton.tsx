import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import Button from 'react-bootstrap/Button';

import useHover from '../../hooks/useHover';
import usePageColorButtonStyle from '../../hooks/usePageColorButtonStyle';
import styles from '../../styles/body/buttons/resume.module.scss';

export default function ResumeButton(): React.JSX.Element {
	const {isActive, ...mouseEvents} = useHover();
	const style = usePageColorButtonStyle(isActive);

	return (
		<Button
			className={styles.resume}
			href="/sverg_resume.pdf"
			style={style}
			target="_blank"
			variant="outline-light"
			{...mouseEvents}>
			<label>Download resume</label>
			<FontAwesomeIcon
				beat={isActive}
				icon={solid('download')}
			/>
		</Button>
	);
}
