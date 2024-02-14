import * as React from 'react';

type ReturnType = Readonly<{
	isActive: boolean;
	onBlur: () => void;
	onFocus: () => void;
	onMouseEnter: () => void;
	onMouseLeave: () => void;
}>;

export default function useHover(): ReturnType {
	const [isHovering, setIsHovering] = React.useState<boolean>(false);
	const [isFocused, setIsFocused] = React.useState<boolean>(false);

	const onMouseEnter = () => {
		setIsHovering(true);
	};

	const onMouseLeave = () => {
		setIsHovering(false);
	};

	const onFocus = () => {
		setIsFocused(true);
	};

	const onBlur = () => {
		setIsFocused(false);
	};

	return {
		isActive: isHovering || isFocused,
		onBlur,
		onFocus,
		onMouseEnter,
		onMouseLeave,
	};
}
