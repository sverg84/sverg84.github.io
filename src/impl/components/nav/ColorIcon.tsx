import * as React from 'react';

import iconStyles from '../../styles/nav/colorIcon.module.css';
import { PageColorHex } from '../../types/PageColor';

type Props = Readonly<{
	color: PageColorHex;
}>;

export default function ColorIcon({color}: Props): React.JSX.Element {
	return (
		<div
			className={iconStyles.icon}
			style={{backgroundColor: color}}
		/>
	);
}
