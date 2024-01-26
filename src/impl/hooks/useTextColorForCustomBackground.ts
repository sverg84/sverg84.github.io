import * as React from 'react';

import ColorContext from '../contexts/ColorContext';

export default function useTextColorForCustomBackground(): string {
	const {color} = React.useContext(ColorContext);

	return React.useMemo(() => {
		const getChunksFromString = (st: string, chunkSize: number) =>
			st.match(new RegExp(`.{${chunkSize}}`, 'g'));

		const convertHexUnitTo256 = (hexStr: string) =>
			parseInt(hexStr.repeat(2 / hexStr.length), 16);

		const chunkSize = Math.floor((color.length - 1) / 3);
		const hexArr = getChunksFromString(color.slice(1), chunkSize);

		const rgb = hexArr?.map(convertHexUnitTo256);

		const brightness = Math.round(
			((rgb?.at(0) ?? 0) * 299 +
				(rgb?.at(1) ?? 0) * 587 +
				(rgb?.at(2) ?? 0) * 114) /
				1000,
		);

		return brightness > 125 ? 'black' : 'white';
	}, [color]);
}
