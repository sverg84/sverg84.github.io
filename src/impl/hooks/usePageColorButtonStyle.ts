import * as React from 'react';

import ColorContext from '../contexts/ColorContext';
import useTextColorForCustomBackground from './useTextColorForCustomBackground';

export default function usePageColorButtonStyle(
	isHovering: boolean,
): React.CSSProperties {
	const {color} = React.useContext(ColorContext);
	const hoverTextColor = useTextColorForCustomBackground();

	const borderAndTextColor = isHovering ? hoverTextColor : color;

	return {
		backgroundColor: isHovering ? color : undefined,
		borderColor: borderAndTextColor,
		boxShadow: `4px 4px ${color}`,
		color: borderAndTextColor,
	};
}
