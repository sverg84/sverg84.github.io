import type { Placement } from '@floating-ui/react';
import * as React from 'react';

import { Tooltip, TooltipContent, TooltipTrigger } from '../lib/Tooltip/Tooltip';
import styles from '../styles/tooltip.module.scss';

type Props = Readonly<{
	placement?: Placement;
	trigger: React.ReactNode;
	content: string;
}>;

export default function AppTooltip({
	placement = 'top',
	trigger,
	content,
}: Props): React.JSX.Element {
	return (
		<Tooltip placement={placement}>
			<TooltipTrigger asChild={true}>
				<span className={styles.tooltip}>{trigger}</span>
			</TooltipTrigger>
			<TooltipContent>{content}</TooltipContent>
		</Tooltip>
	);
}
