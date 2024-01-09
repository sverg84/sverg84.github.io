import * as React from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { useInView } from 'react-intersection-observer';

import styles from '../styles/tooltip.module.scss';

type Props = Readonly<{
	content: string;
	tooltip: string;
}>;

export default function AppTooltip({
	content,
	tooltip,
}: Props): React.JSX.Element {
	const {ref, entry} = useInView({
		rootMargin: '-50% 0px 0px',
	});

	return (
		<OverlayTrigger
			placement={entry?.isIntersecting ? 'top' : 'bottom'}
			overlay={<Tooltip>{tooltip}</Tooltip>}>
			<span className={styles.tooltip} ref={ref}>{content}</span>
		</OverlayTrigger>
	);
}
