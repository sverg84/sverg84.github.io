import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import Button from 'react-bootstrap/Button';

import PageColorContext from '../../contexts/PageColorContext';
import useHoverStyle from '../../hooks/useHoverStyle';

const button: React.CSSProperties = {
	alignItems: 'center',
	columnGap: 8,
	cursor: 'pointer',
	display: 'inline-flex',
	fontWeight: 'bold',
	textDecoration: 'none',
} as const;

export default function ResumeButton(): React.JSX.Element {
	const color = React.useContext(PageColorContext);

	const {isHovering, style, ...mouseEvents} = useHoverStyle(color);

	const buttonStyle: React.CSSProperties = {
		borderColor: color,
		boxShadow: `4px 4px ${color}`,
		color,
		...button,
		...style,
	} as const;

	return (
		<Button
			href="/sverg_resume.pdf"
			style={buttonStyle}
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
