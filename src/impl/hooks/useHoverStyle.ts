import { DataType } from 'csstype';
import * as React from 'react';

type ReturnType = Readonly<{
	isHovering: boolean;
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

	const [isHovering, setIsHovering] = React.useState<boolean>(false);

	const onMouseEnter = () => {
		setIsHovering(true);
		const newStyle: React.CSSProperties = {
			backgroundColor: color,
			color: 'white',
		} as const;
		setStyle(newStyle);
	};

	const onMouseLeave = () => {
		setIsHovering(false);
		setStyle(undefined);
	};

	return {isHovering, style, onMouseEnter, onMouseLeave};
}
