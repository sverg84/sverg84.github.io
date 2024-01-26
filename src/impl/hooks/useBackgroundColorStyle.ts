import * as React from 'react';

import ColorContext from '../contexts/ColorContext';
import useTextColorForCustomBackground from './useTextColorForCustomBackground';

export default function useBackgroundColorStyle(
	alpha: string = '',
): React.CSSProperties {
	const {color} = React.useContext(ColorContext);
	const textColor = useTextColorForCustomBackground();

	return {backgroundColor: `${color}${alpha}`, color: textColor};
}
