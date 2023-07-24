import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import Button from 'react-bootstrap/Button';

import useHover from '../../hooks/useHover';

type Props = Readonly<{
	className?: string;
	href: string;
	icon: IconProp;
}>;

export default function ExternalLinkButton({
	className,
	href,
	icon,
}: Props): React.JSX.Element {
	const {isHovering: _isHovering, ...mouseEvents} = useHover();

	return (
		<Button
			className={className}
			href={href}
			target="_blank"
			variant="outline-primary"
			{...mouseEvents}>
			<FontAwesomeIcon
				icon={icon}
				size="2xl"
			/>
		</Button>
	);
}
