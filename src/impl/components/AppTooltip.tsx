import * as React from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

import contentStyle from '../styles/tooltip.module.css';

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
			<span className={contentStyle.tooltip}>{content}</span>
		</OverlayTrigger>
	);
}
