import * as React from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

import styles from '../styles/tooltip.module.scss';

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
			<span className={styles.tooltip}>{content}</span>
		</OverlayTrigger>
	);
}
