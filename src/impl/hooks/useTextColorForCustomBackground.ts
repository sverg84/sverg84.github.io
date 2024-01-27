import * as React from 'react';

import ColorContext from '../contexts/ColorContext';

const BRIGHTNESS_THRESHOLD = 128;

// NTSC luminance formula (linear approximation): Y = .299r' + .587g' + .114b'
const RED_LUMINANCE_COEFFICIENT = 0.299;
const GREEN_LUMINANCE_COEFFICIENT = 0.587;
const BLUE_LUMINANCE_COEFFICIENT = 0.114;

export default function useTextColorForCustomBackground(): string {
	const {color} = React.useContext(ColorContext);

	return React.useMemo(() => {
		const getChunksFromString = (st: string, chunkSize: number) =>
			st.match(new RegExp(`.{${chunkSize}}`, 'g'));

		const convertHexUnitTo256 = (hexStr: string) =>
			parseInt(hexStr.repeat(2 / hexStr.length), 16);

		const chunkSize = Math.floor((color.length - 1) / 3);
		const hexArr = getChunksFromString(color.slice(1), chunkSize);

		const [red, green, blue] = (hexArr ?? []).map(convertHexUnitTo256);

		const brightness = Math.round(
			(red ?? 0) * RED_LUMINANCE_COEFFICIENT +
				(green ?? 0) * GREEN_LUMINANCE_COEFFICIENT +
				(blue ?? 0) * BLUE_LUMINANCE_COEFFICIENT,
		);

		return brightness > BRIGHTNESS_THRESHOLD ? 'black' : 'white';
	}, [color]);
}
