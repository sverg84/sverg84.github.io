import * as React from 'react';

import ColorContext from '../contexts/ColorContext';
import brightnessFromHexCode from '../utils/brightnessFromHexCode';

const BRIGHTNESS_THRESHOLD = 128;

export default function useTextColorForCustomBackground(): string {
	const [color] = React.useContext(ColorContext);

	return React.useMemo(() => {
		const brightness = brightnessFromHexCode(color);
		return brightness > BRIGHTNESS_THRESHOLD ? 'black' : 'white';
	}, [color]);
}
