import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import Button from 'react-bootstrap/Button';

type Props = Readonly<{
    href: string,
    icon: IconProp,
}>;

export default function GitHubButton({href, icon}: Props): React.JSX.Element {
	return (
		<Button href={href} target="_blank">
			<FontAwesomeIcon icon={icon} size="2xl" />
		</Button>
	);
}
