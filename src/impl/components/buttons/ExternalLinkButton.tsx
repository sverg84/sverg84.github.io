import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DataType } from 'csstype';
import * as React from 'react';
import Button from 'react-bootstrap/Button';

import useHoverStyle from '../../hooks/useHoverStyle';

type Props = Readonly<{
	color?: DataType.Color;
	href: string;
	icon: IconProp;
}>;

export default function GitHubButton({
	color,
	href,
	icon,
}: Props): React.JSX.Element {
	const {style: hoverStyle, ...mouseEvents} = useHoverStyle(color);

	const style: React.CSSProperties | undefined =
		color != null
			? ({borderColor: color, color, ...hoverStyle} as const)
			: undefined;

	return (
		<Button
			href={href}
			target="_blank"
			variant="outline-primary"
			style={style}
			{...mouseEvents}>
			<FontAwesomeIcon
				icon={icon}
				size="2xl"
			/>
		</Button>
	);
}
