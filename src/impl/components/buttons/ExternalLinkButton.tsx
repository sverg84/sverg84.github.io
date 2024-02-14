import { IconLookup } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import Button from 'react-bootstrap/Button';

type Props = Readonly<{
	className?: string;
	href: string;
	icon: IconLookup;
	label: string;
}>;

export default function ExternalLinkButton({
	className,
	href,
	icon,
	label,
}: Props): React.JSX.Element {
	return (
		<Button
			aria-label={label}
			className={className}
			href={href}
			target="_blank"
			variant="link">
			<FontAwesomeIcon
				icon={icon}
				size="2xl"
			/>
		</Button>
	);
}
