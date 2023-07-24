import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import * as React from 'react';
import Button from 'react-bootstrap/Button';

import useHover from '../../hooks/useHover';
import usePageColorButtonStyle from '../../hooks/usePageColorButtonStyle';
import styles from '../../styles/body/buttons/resume.module.css';

export default function ResumeButton(): React.JSX.Element {
	const color = usePageColorButtonStyle();

	const {isHovering, ...mouseEvents} = useHover();

	return (
		<Button
			className={classNames(styles.button, color)}
			href="/sverg_resume.pdf"
			target="_blank"
			variant="outline-light"
			{...mouseEvents}>
			<span>Download resume</span>
			<FontAwesomeIcon
				beat={isHovering}
				icon={solid('download')}
			/>
		</Button>
	);
}
