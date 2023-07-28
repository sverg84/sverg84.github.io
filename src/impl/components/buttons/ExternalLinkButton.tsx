import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import * as React from 'react';
import Button from 'react-bootstrap/Button';

import useHover from '../../hooks/useHover';
import styles from '../../styles/body/buttons/linkButton.module.css';

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
			className={classNames(styles.button, className)}
			href={href}
			target="_blank"
			variant="link"
			{...mouseEvents}>
			<FontAwesomeIcon
				icon={icon}
				size="2xl"
			/>
		</Button>
	);
}
