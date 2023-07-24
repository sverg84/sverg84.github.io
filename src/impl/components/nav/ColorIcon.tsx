import classNames from 'classnames';
import * as React from 'react';

import useBackgroundColorStyle from '../../hooks/useBackgroundColorStyle';
import iconStyles from '../../styles/nav/colorIcon.module.css';
import { PageColorHex } from '../../types/PageColor';

type Props = Readonly<{
	color: PageColorHex;
}>;

export default function ColorIcon({color}: Props): React.JSX.Element {
	const backgroundColor = useBackgroundColorStyle(color);
	return <div className={classNames(iconStyles.icon, backgroundColor)} />;
}
