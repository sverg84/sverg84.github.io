import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import Button from 'react-bootstrap/Button';

import useHover from '../../hooks/useHover';
import usePageColorButtonStyle from '../../hooks/usePageColorButtonStyle';

export default function ResumeButton(): React.JSX.Element {
	const color = usePageColorButtonStyle();

	const {isHovering, ...mouseEvents} = useHover();

	return (
		<Button
			className={color}
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
