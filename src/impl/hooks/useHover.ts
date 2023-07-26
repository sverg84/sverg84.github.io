import * as React from 'react';

type ReturnType = Readonly<{
	isHovering: boolean;
	onMouseEnter: () => void;
	onMouseLeave: () => void;
}>;

export default function useHover(): ReturnType {
	const [isHovering, setIsHovering] = React.useState<boolean>(false);

	const onMouseEnter = () => {
		setIsHovering(true);
	};

	const onMouseLeave = () => {
		setIsHovering(false);
	};

	return {isHovering, onMouseEnter, onMouseLeave};
}
