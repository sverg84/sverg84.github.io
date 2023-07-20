import { DataType } from 'csstype';
import * as React from 'react';

type ReturnType = Readonly<{
	style: React.CSSProperties | undefined;
	onMouseEnter: () => void;
	onMouseLeave: () => void;
}>;

export default function useHoverStyle(
	color: DataType.Color | undefined,
): ReturnType {
	const [style, setStyle] = React.useState<React.CSSProperties | undefined>(
		undefined,
	);

	const onMouseEnter = () => {
		const newStyle: React.CSSProperties = {
			backgroundColor: color,
			color: 'white',
		} as const;
		setStyle(newStyle);
	};

	const onMouseLeave = () => {
		setStyle(undefined);
	};

	return {style, onMouseEnter, onMouseLeave};
}
