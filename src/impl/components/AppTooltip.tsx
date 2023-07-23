import * as React from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const contentStyle: React.CSSProperties = {
	textDecoration: 'underline dotted',
} as const;

type Props = Readonly<{
	content: string;
	tooltip: string;
}>;

export default function AppTooltip({
	content,
	tooltip,
}: Props): React.JSX.Element {
	return (
		<OverlayTrigger
			placement="top"
			overlay={<Tooltip>{tooltip}</Tooltip>}>
			<span style={contentStyle}>{content}</span>
		</OverlayTrigger>
	);
}
